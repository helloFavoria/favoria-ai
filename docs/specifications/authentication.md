# Authentication Specification

## Purpose

Menetapkan dasar otentikasi dan otorisasi Favoria yang aman, konsisten, dan mudah dikembangkan.

---

## Goals

- Memungkinkan pengguna mendaftar dan masuk dengan aman.
- Mengelola sesi pengguna dan akses ke fitur yang dilindungi.
- Menegakkan peran `User` dan `Admin`.
- Mendukung alur reset password dan pemulihan akun.

---

## User Stories

- Sebagai pengguna baru, saya ingin mendaftar agar dapat menggunakan aplikasi.
- Sebagai pengguna terdaftar, saya ingin masuk agar dapat mengakses dashboard dan fitur saya.
- Sebagai pengguna, saya ingin logout agar sesi saya berhenti.
- Sebagai pengguna yang lupa password, saya ingin menerima email reset untuk mendapatkan kembali akses.
- Sebagai pengguna, saya ingin menggunakan session yang berlaku selama saya aktif tanpa harus login ulang setiap saat.
- Sebagai pengguna, saya ingin mengakses halaman yang dilindungi hanya jika saya sudah login.
- Sebagai admin, saya ingin memiliki akses ke fitur manajemen yang tidak tersedia untuk user biasa.

---

## User Flow

1. Pengguna membuka halaman registrasi.
2. Pengguna mengisi email, password, dan data profil dasar.
3. Sistem membuat akun melalui Supabase Auth dan menyimpan profil.
4. Pengguna terdaftar dan diarahkan ke dashboard.
5. Untuk login, pengguna membuka halaman login dan memasukkan email/password.
6. Sistem memverifikasi kredensial melalui Supabase Auth dan membuat sesi.
7. Pengguna yang ingin logout menekan tombol logout untuk mengakhiri sesi.
8. Jika pengguna lupa password, mereka mengakses halaman forgot password.
9. Pengguna memasukkan email, sistem mengirim email reset password via Supabase.
10. Pengguna membuka tautan reset, memasukkan password baru, dan sistem memperbarui kata sandi.
11. Halaman atau rute terproteksi hanya dapat diakses jika session valid.
12. Peran `Admin` memberikan akses tambahan ke area manajemen tertentu.

---

## Functional Requirements

FR-001: Sistem mendukung registrasi pengguna baru menggunakan email dan password.
FR-002: Sistem mendukung login pengguna dengan email dan password.
FR-003: Sistem mendukung logout dan pengakhiran sesi.
FR-004: Sistem menyediakan alur forgot password dan reset password.
FR-005: Sistem menggunakan Supabase Auth sebagai penyedia otentikasi utama.
FR-006: Sistem memeriksa session pada setiap halaman protected.
FR-007: Sistem membedakan peran `User` dan `Admin` dan menegakkan aturan akses.
FR-008: Sistem menyimpan profil pengguna dasar setelah registrasi.
FR-009: Sistem menangani error otentikasi dengan pesan yang jelas.

---

## Dependencies

- Supabase Auth
- `profiles` table
- `sessions` table / Supabase session management
- RLS policy pada semua user-specific resources
- Middleware untuk protected route

---

## Business Rules

- Email harus unik untuk setiap akun.
- Password minimal 8 karakter.
- Hanya pengguna yang sudah terverifikasi atau valid yang dapat login.
- Semua halaman protected hanya dapat diakses oleh sesi yang valid.
- `Admin` dapat mengakses fitur manajemen khusus, sementara `User` hanya mengakses fitur inti.
- Sesi harus diakhiri saat logout.
- Reset password memerlukan verifikasi melalui email.

---

## Validation Rules

- Email harus dalam format email yang valid.
- Password minimal 8 karakter.
- Password baru pada reset harus berbeda dari password sebelumnya bila memungkinkan.
- Semua field wajib diisi pada form registrasi dan login.
- Tidak menerima input kosong untuk nama atau email saat registrasi.
- Email reset password harus eksis di sistem.

---

## Permissions

Guest:
- Dapat mengakses halaman registrasi, login, forgot password, dan landing.
- Tidak dapat mengakses halaman protected.

User:
- Dapat mengakses dashboard, produk, koleksi, search, analytics dasar yang terkait akun sendiri.
- Dapat mengelola profil dan pengaturan sendiri.

Admin:
- Dapat mengakses semua akses User.
- Dapat mengakses halaman manajemen admin.
- Dapat melihat dan mengelola data yang tidak tersedia untuk user biasa sesuai kebijakan.

---

## API Endpoints

Referensi dari `docs/api.md`:

- `POST /api/auth/register` — buat akun baru (jika diperlukan di luar Supabase Auth).
- `POST /api/auth/login` — login user dengan email/password.
- `POST /api/auth/logout` — akhiri sesi.
- `POST /api/auth/forgot-password` — kirim email reset password.
- `POST /api/auth/reset-password` — perbarui password dari token reset.
- `GET /api/auth/session` — ambil status session saat ini.

---

## Database Tables

Referensi dari `docs/database.md`:

- `profiles` — informasi profil pengguna, peran, dan metadata.
- `users` (Supabase internal) — otentikasi email/password.
- `sessions` (Supabase internal) — sesi yang dikelola Supabase.
- `roles` atau `profiles.role` — nilai `user` / `admin`.

---

## UI Components

Referensi `docs/design-system.md`:

- `AuthForm` — form registrasi dan login.
- `InputField` — input email, password, nama.
- `Button` — tombol primary/secondary.
- `Alert` — pesan error dan konfirmasi.
- `ProtectedRoute` / `AuthGuard` — wrapper untuk halaman terproteksi.
- `SessionStatus` — indikator status otentikasi.

---

## Edge Cases

- Pengguna memasukkan email yang sudah terdaftar saat registrasi.
- Pengguna memasukkan password salah saat login.
- Token reset password kadaluarsa.
- Pengguna mencoba mengakses halaman protected tanpa session.
- Pengguna admin mencoba mengakses halaman yang hanya untuk admin tetapi peran tidak valid.
- Email reset tidak ditemukan.

---

## Error Handling

- `Invalid credentials` — ketika email/password salah.
- `Email already registered` — ketika email dipakai saat registrasi.
- `Password too weak` — ketika password kurang dari 8 karakter.
- `Reset token expired` — ketika token reset kadaluarsa.
- `Unauthorized` — ketika mengakses resource protected tanpa sesi.
- `Forbidden` — saat user mencoba akses admin-only area.
- `Unexpected server error` — fallback untuk error internal.

---

## Non-Functional Requirements

- Login harus selesai dalam < 2 detik pada koneksi normal.
- Password tidak disimpan dalam plaintext.
- HTTPS wajib untuk semua komunikasi.
- Session aman dan terproteksi dari manipulasi.
- Data sensitif tidak ditampilkan di client tanpa otorisasi.
- Audit log untuk login gagal dikumpulkan di pengembangan selanjutnya.

---

## Security

- Rate limiting login untuk mencegah brute-force.
- Proteksi brute-force pada endpoint login.
- CSRF awareness untuk semua form dan endpoint otentikasi.
- Secure cookies untuk session jika digunakan.
- Validasi token Supabase dan session di server.

---

## Out of Scope

- OAuth Google atau provider pihak ketiga lainnya.
- Multi-factor authentication (MFA).
- Magic Link.
- Single Sign-On (SSO).

---

## Acceptance Criteria

- User dapat mendaftar dengan email dan password.
- User dapat login dengan kredensial valid.
- User dapat logout dan sesi berakhir.
- User dapat meminta reset password dan menyelesaikan reset melalui email.
- Halaman protected hanya bisa diakses oleh user yang login.
- Peran `Admin` dan `User` dapat dibedakan dan diberi akses berbeda.
- Semua pesan error otentikasi ditampilkan dengan jelas.

---

## Future Improvements

- Tambahkan dukungan OAuth (Google, GitHub, dsb.).
- Tambahkan multi-factor authentication (MFA).
- Tambahkan email verification saat registrasi.
- Tambahkan self-service account recovery dengan security questions atau backup codes.
- Tambahkan admin dashboard role management.
## Review Checklist

- [ ] Purpose jelas
- [ ] User Flow lengkap
- [ ] Business Rules lengkap
- [ ] Validation Rules lengkap
- [ ] Database sesuai
- [ ] API sesuai
- [ ] UI sesuai Design System
- [ ] Edge Cases ada
- [ ] Acceptance Criteria lengkap
- [ ] Tidak bertentangan dengan PRD
