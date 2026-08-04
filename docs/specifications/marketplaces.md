# Marketplaces Specification

## Purpose

Mengelola seluruh marketplace yang didukung Favoria sebagai sumber katalog dan referensi affiliate.

---

## Goals

- Menyimpan metadata marketplace secara terstruktur.
- Mendukung status aktif/nonaktif untuk marketplace.
- Memungkinkan pengurutan tampilan marketplace.
- Mendukung informasi affiliate jika marketplace mendukung affiliate.
- Memastikan marketplace unik dan konsisten.

---

## User Stories

- Sebagai admin, saya ingin menambahkan marketplace baru agar Favoria dapat mengelola produk dari marketplace tersebut.
- Sebagai pengguna, saya ingin melihat daftar marketplace yang didukung agar saya tahu sumber produk yang tersedia.
- Sebagai admin, saya ingin menonaktifkan marketplace agar produk dari marketplace tersebut tidak lagi ditampilkan.
- Sebagai pengguna, saya ingin melihat logo dan nama marketplace agar saya dapat mengenali sumber dengan cepat.
- Sebagai admin, saya ingin menentukan urutan tampilan marketplace agar deretannya sesuai prioritas.

---

## User Flow

1. Admin membuka halaman Marketplace Management.
2. Sistem menampilkan daftar marketplace yang didukung.
3. Admin menambahkan atau mengedit marketplace dengan nama, slug, logo, website, status, dan affiliate support.
4. Admin menyimpan perubahan.
5. Marketplace baru muncul dalam daftar dan dapat dipilih di modul produk.
6. Marketplace yang dinonaktifkan tidak lagi muncul sebagai pilihan untuk produk baru.

---

## Functional Requirements

FR-001: Sistem menyimpan marketplace dengan atribut `name`, `slug`, `logo`, `website`, `affiliate_supported`, `status`, `sort_order`, dan `created_at`.
FR-002: Sistem memastikan setiap marketplace memiliki nilai `slug` unik.
FR-003: Sistem memvalidasi logo wajib ada untuk setiap marketplace.
FR-004: Sistem mendukung status `active` dan `inactive`.
FR-005: Sistem memungkinkan pengurutan marketplace melalui `sort_order`.
FR-006: Sistem menandai apakah marketplace mendukung affiliate.
FR-007: Sistem menolak duplikasi marketplace berdasarkan `slug` atau `name`.

---

## Dependencies

- Authentication / session admin.
- `products` dan `affiliate_links` untuk relasi marketplace.
- Protected route middleware.
- `marketplaces` table.

---

## Business Rules

- Marketplace harus unik berdasarkan `slug`.
- Tidak boleh ada duplikasi marketplace dengan nama atau `slug` yang sama.
- Logo marketplace wajib ada.
- Marketplace dapat diaktifkan atau dinonaktifkan.
- Affiliate network bersifat opsional.
- `sort_order` menentukan urutan tampilan marketplace.
- Marketplace `inactive` tidak digunakan untuk produk baru.
- Marketplace `active` tersedia di semua modul yang membutuhkan pemilihan marketplace.

---

## Validation Rules

- `name` wajib diisi dan tidak boleh kosong.
- `slug` wajib diisi, lowercase, dan hanya berisi huruf, angka, dan dash.
- `logo` wajib berupa URL valid atau path asset.
- `website` harus berupa URL valid.
- `affiliate_supported` harus berupa boolean.
- `status` hanya boleh `active` atau `inactive`.
- `sort_order` harus bernilai numerik.

---

## Permissions

Guest:
- Dapat melihat daftar marketplace publik jika diperlukan.
- Tidak dapat mengelola marketplace.

User:
- Dapat melihat marketplace yang didukung jika fitur marketplace publik ditampilkan.
- Tidak dapat membuat atau mengedit marketplace.

Admin:
- Dapat membuat, mengedit, dan menonaktifkan marketplace.
- Dapat mengatur urutan tampilan marketplace.

---

## API Endpoints

Referensi dari `docs/api.md`:

- `GET /api/marketplaces` — ambil daftar marketplace.
- `GET /api/marketplaces/:id` — ambil detail marketplace.
- `POST /api/marketplaces` — buat marketplace baru.
- `PUT /api/marketplaces/:id` — perbarui marketplace.
- `DELETE /api/marketplaces/:id` — hapus marketplace.

---

## Database Tables

Referensi dari `docs/database.md`:

- `marketplaces`
  - `id`
  - `name`
  - `slug`
  - `logo`
  - `website`
  - `affiliate_supported`
  - `status`
  - `sort_order`
  - `created_at`

---

## UI Components

Referensi `docs/design-system.md`:

- `MarketplaceTable` — daftar marketplace.
- `MarketplaceForm` — form penambahan/penyuntingan marketplace.
- `LogoThumbnail` — preview logo marketplace.
- `StatusBadge` — menunjukkan `active` atau `inactive`.
- `SortOrderInput` — input atau drag handle untuk urutan.

---

## Edge Cases

- Marketplace dengan `slug` duplikat.
- Logo tidak dapat dimuat.
- Website tidak valid.
- Marketplace dihapus sementara masih memiliki produk terkait.
- Marketplace ditandai inactive tetapi masih digunakan pada produk lama.

---

## Error Handling

- `Duplicate marketplace` — ketika `slug` atau `name` sudah ada.
- `Invalid logo URL` — ketika `logo` tidak valid.
- `Invalid website URL` — ketika `website` tidak valid.
- `Unauthorized` — ketika user bukan admin mencoba mengubah marketplace.
- `Marketplace not found` — ketika marketplace tidak ditemukan.

---

## Non-Functional Requirements

- Marketplace list harus dimuat dalam < 2 detik.
- Form editing harus responsif dan accessible.
- Validasi input dilakukan secara real-time pada form.
- API marketplace harus scalable untuk jumlah marketplace besar.

---

## Security

- Endpoint marketplace dilindungi oleh otentikasi admin.
- Semua input marketplace disanitasi.
- Tidak ada data internal yang bocor di response publik.

---

## Out of Scope

- Mengelola marketplace melalui import CSV di MVP.
- Integrasi otomatis dengan marketplace feed.
- Marketplace yang tidak menggunakan affiliate.
- Marketplace yang hanya mendukung konten non-produk.

---

## Acceptance Criteria

- Marketplace dapat dibuat dengan data lengkap.
- Marketplace dapat diedit dan dinonaktifkan.
- Duplikasi marketplace ditolak.
- `affiliate_supported` dan `status` tersimpan dengan benar.
- Marketplace `inactive` tidak muncul untuk produk baru.

---

## Future Improvements

- Menambahkan integrasi marketplace otomatis.
- Menambahkan dukungan metadata marketplace tambahan.
- Menambahkan kategori marketplace dan filter.
- Menambahkan import/export marketplace.
- Menambahkan marketplace AI-specific untuk content commerce.

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
