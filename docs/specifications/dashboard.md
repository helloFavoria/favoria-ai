# Dashboard Specification

## Purpose

Menghadirkan halaman ringkasan pusat untuk membantu pengguna memahami performa, aktivitas, dan kesehatan akun mereka secara cepat.

---

## Goals

- Menyajikan metrik kunci dalam satu tampilan.
- Memberikan akses cepat ke fitur utama dan item yang perlu tindakan.
- Menampilkan data yang relevan berdasarkan peran dan akun pengguna.
- Menyediakan insight awal untuk pengambilan keputusan.

---

## User Stories

- Sebagai pengguna, saya ingin melihat ringkasan performa produk dan koleksi saya.
- Sebagai pengguna, saya ingin melihat aktivitas terbaru sehingga saya bisa cepat menindaklanjutinya.
- Sebagai pengguna, saya ingin melihat metrik affiliate dan penjualan dalam satu panel.
- Sebagai admin, saya ingin melihat metrik platform tingkat tinggi dan health overview.
- Sebagai pengguna, saya ingin menavigasi ke area produk, koleksi, atau analytics dari dashboard.

---

## User Flow

1. Pengguna login dan diarahkan ke dashboard.
2. Sistem menampilkan ringkasan metrik utama.
3. Pengguna membaca performa terbaru dan melihat notifikasi atau peringatan.
4. Pengguna mengklik widget untuk melihat detail produk atau koleksi.
5. Pengguna menyesuaikan rentang tanggal atau filter untuk data yang ditampilkan.
6. Pengguna memutuskan tindakan selanjutnya berdasarkan ringkasan.

---

## Functional Requirements

FR-001: Dashboard menampilkan metrik utama seperti jumlah produk, koleksi, impressions, dan klik.
FR-002: Dashboard menampilkan aktivitas atau event terbaru.
FR-003: Dashboard mengizinkan filter tanggal dan rentang waktu.
FR-004: Data yang ditampilkan harus sesuai dengan akun user.
FR-005: Admin dapat melihat metrik platform tambahan.
FR-006: Widget dashboard dapat diklik untuk navigasi ke modul terkait.
FR-007: Dashboard menampilkan status sinkronisasi marketplace jika relevan.

---

## Dependencies

- Authentication / session pengguna.
- `products` data.
- `collections` data.
- `analytics` data.
- `marketplaces` metadata.
- Protected route middleware.

---

## Business Rules

- Sebagai default, dashboard menampilkan data untuk akun pengguna saat ini.
- Admin melihat metrik tambahan dan ringkasan platform.
- Data dashboard tidak boleh menampilkan informasi pengguna lain.
- Widget dashboard harus memberikan aksi atau tautan relevant.
- Data harus segar dan diperbarui secara berkala.

---

## Validation Rules

- Filter tanggal harus valid dan mulai sebelum berakhir.
- Rentang waktu tidak boleh lebih dari 365 hari untuk tampilan default.
- Input filter harus berada dalam pilihan yang tersedia.
- Parameter query untuk dashboard harus di-sanitasi.

---

## Permissions

Guest:
- Tidak dapat mengakses dashboard.

User:
- Dapat mengakses dashboard pribadi dengan metrik dan aktivitas akun sendiri.

Admin:
- Dapat mengakses dashboard admin dengan metrik platform dan ringkasan agregat.

---

## API Endpoints

Referensi dari `docs/api.md`:

- `GET /api/dashboard/summary` — ringkasan metrik utama.
- `GET /api/dashboard/activity` — aktivitas atau event terbaru.
- `GET /api/dashboard/marketplaces` — status sinkronisasi marketplace.

---

## Database Tables

Referensi dari `docs/database.md`:

- `analytics` — data event dan metrik.
- `products` — produk yang digunakan untuk ringkasan.
- `collections` — koleksi pengguna.
- `marketplaces` — informasi marketplace dan status.
- `profiles` — detail pengguna untuk personalisasi.

---

## UI Components

Referensi `docs/design-system.md`:

- `DashboardLayout` — tata letak halaman utama.
- `MetricCard` — kartu metrik kunci.
- `ActivityFeed` — daftar aktivitas terbaru.
- `ChartCard` — grafik ringkasan.
- `FilterPanel` — panel filter tanggal dan kategori.
- `StatusBadge` — status sinkronisasi atau health.

---

## Edge Cases

- Tidak ada data untuk ditampilkan.
- Data sebagian tersedia karena sinkronisasi tertunda.
- Akses dashboard gagal karena otorisasi.
- Filter tanggal menghasilkan rentang kosong.
- Endpoint analytics mengembalikan error.

---

## Error Handling

- Tampilkan pesan `No data available` jika metrik kosong.
- Tampilkan pesan `Unable to load dashboard` jika ada error server.
- Tawarkan tombol `Retry` ketika fetch data gagal.
- Jangan mengekspos detail error internal ke pengguna.

---

## Non-Functional Requirements

- Dashboard harus dimuat dalam < 2 detik pada koneksi normal.
- Tampilan harus responsif dan usable di desktop & tablet.
- Komponen harus accessible, dengan label dan keyboard support.
- Data dashboard harus konsisten antara refresh dan navigasi.

---

## Security

- Dashboard route dilindungi oleh middleware session.
- Semua query dashboard divalidasi dan disanitasi.
- Data tidak boleh bocor antara akun pengguna.
- Admin hanya melihat data agregat yang diizinkan.

---

## Out of Scope

- Laporan BI lengkap dan export CSV.
- Dashboard kustomisasi widget oleh pengguna.
- Analitik real-time streaming.
- AI-generated insight dalam MVP.

---

## Acceptance Criteria

- Dashboard dapat diakses oleh user terautentikasi.
- Ringkasan metrik utama ditampilkan.
- Widget dashboard dapat diklik ke modul terkait.
- Aktivitas terbaru ditampilkan.
- Filter tanggal bekerja dan memperbarui tampilan.
- Halaman protected tidak dapat diakses oleh guest.

---

## Future Improvements

- Tambahkan dashboard kustomisasi widget.
- Tambahkan export dan laporan PDF.
- Tambahkan alert dan notifikasi performa.
- Tambahkan chart interaktif dan drill-down.
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
