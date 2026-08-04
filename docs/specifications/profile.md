# Profile Specification

## Purpose

Mendefinisikan pengelolaan profil pengguna Favoria, termasuk data akun, preferensi, dan informasi dasar.

---

## Goals

- Menyediakan area personalisasi profil pengguna.
- Memungkinkan update data kontak dan informasi dasar.
- Mendukung preferensi akun dan notifikasi.
- Menyimpan data profil yang konsisten.

---

## User Stories

- Sebagai pengguna, saya ingin melihat detail profil saya.
- Sebagai pengguna, saya ingin memperbarui nama, email, dan informasi kontak.
- Sebagai pengguna, saya ingin mengelola preferensi akun dasar.
- Sebagai pengguna, saya ingin melihat status peran saya.

---

## User Flow

1. Pengguna membuka halaman profil.
2. Sistem menampilkan informasi profil saat ini.
3. Pengguna mengedit data profil.
4. Sistem memvalidasi perubahan dan menyimpan data.
5. Pengguna melihat konfirmasi bahwa profil telah diperbarui.

---

## Functional Requirements

FR-001: Sistem menampilkan informasi profil pengguna.
FR-002: Sistem memungkinkan update nama, email, dan kontak.
FR-003: Sistem menyimpan preferensi akun dasar.
FR-004: Sistem menampilkan peran pengguna.
FR-005: Sistem memvalidasi perubahan profil.

---

## Dependencies

- Authentication / session pengguna.
- `profiles` table.
- Protected route middleware.

---

## Business Rules

- Hanya pengguna yang login dapat mengakses profil.
- Email harus unik jika diizinkan untuk diperbarui.
- Preferensi akun disimpan per pengguna.
- Perubahan email mungkin memerlukan verifikasi tambahan di masa depan.

---

## Validation Rules

- Nama wajib diisi.
- Email harus valid dan unik.
- Nomor telepon harus berupa format yang valid bila disediakan.
- Preferensi harus sesuai enumerasi yang tersedia.

---

## Permissions

Guest:
- Tidak dapat mengakses profil.

User:
- Dapat melihat dan mengedit profil sendiri.

Admin:
- Dapat melihat data profil untuk dukungan jika diperlukan.

---

## API Endpoints

Referensi dari `docs/api.md`:

- `GET /api/profile` — ambil profil pengguna.
- `PUT /api/profile` — perbarui profil pengguna.

---

## Database Tables

Referensi dari `docs/database.md`:

- `profiles`
  - `id`
  - `user_id`
  - `full_name`
  - `email`
  - `phone`
  - `role`
  - `preferences`
  - `created_at`
  - `updated_at`

---

## UI Components

Referensi `docs/design-system.md`:

- `ProfileCard` — tampilan ringkasan profil.
- `ProfileForm` — formulir edit profil.
- `PreferenceToggle` — pengaturan preferensi.
- `RoleBadge` — tampilan peran.
- `SaveButton` — simpan perubahan.

---

## Edge Cases

- Data profil tidak lengkap.
- Email baru sudah terdaftar.
- Preferensi tidak valid.
- Pembaruan profil gagal karena server.

---

## Error Handling

- `Profile not found` — ketika profil tidak tersedia.
- `Invalid email format` — ketika email tidak valid.
- `Email already in use` — ketika email sudah terdaftar.
- `Unauthorized` — ketika user tidak login.
- `Unable to save profile` — fallback error.

---

## Non-Functional Requirements

- Halaman profil harus dimuat dalam < 2 detik.
- Form edit harus responsif dan accessible.
- Validasi field dilakukan secara real-time.

---

## Security

- Endpoint profil dilindungi oleh session.
- User hanya dapat mengedit profil sendiri.
- Input profil disanitasi.

---

## Out of Scope

- Verifikasi email otomatis dalam MVP.
- Pengelolaan kata sandi dan otentikasi dua faktor.
- Multi-user profile sharing.

---

## Acceptance Criteria

- Profil pengguna dapat dilihat.
- Profil pengguna dapat diedit.
- Email diperiksa validitasnya.
- Hanya pengguna terautentikasi dapat mengakses profil.

---

## Future Improvements

- Tambahkan verifikasi email saat update.
- Tambahkan preferensi notifikasi.
- Tambahkan pengaturan bahasa dan locale.
- Tambahkan riwayat perubahan profil.

---

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
