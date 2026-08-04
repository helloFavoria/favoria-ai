# Affiliate Links Specification

## Purpose

Menetapkan aturan bisnis dan data untuk manajemen affiliate link produk di Favoria.

---

## Goals

- Mendukung banyak affiliate link per produk.
- Mengelola hubungan antara produk dan marketplace affiliate.
- Menyediakan data click tracking dan komisi.
- Memastikan link valid dan dapat diukur.

---

## User Stories

- Sebagai pengguna, saya ingin menambahkan affiliate link ke produk agar bisa dipromosikan.
- Sebagai pengguna, saya ingin menautkan satu produk ke beberapa marketplace affiliate.
- Sebagai pengguna, saya ingin melihat status dan jenis komisi setiap affiliate link.
- Sebagai pengguna, saya ingin menggunakan tracking ID opsional untuk kampanye.
- Sebagai pengguna, saya ingin melihat click analytics untuk setiap affiliate link.

---

## User Flow

1. Pengguna membuka detail produk.
2. Sistem menampilkan daftar affiliate link yang terhubung.
3. Pengguna menambahkan affiliate link baru dengan marketplace dan URL.
4. Pengguna menentukan tracking ID atau commission type jika diperlukan.
5. Sistem menyimpan link dan menampilkan status validitas.
6. Pengguna dapat melihat metrik klik dan performa link.

---

## Functional Requirements

FR-001: Sistem mendukung banyak affiliate link per produk.
FR-002: Sistem mendukung banyak affiliate link per marketplace.
FR-003: Sistem memvalidasi format URL affiliate.
FR-004: Sistem menyimpan `tracking_id` secara opsional.
FR-005: Sistem menyimpan `commission_type` untuk setiap link.
FR-006: Sistem menyimpan status `active` atau `inactive`.
FR-007: Sistem mendukung click analytics untuk setiap link.
FR-008: Sistem menolak link duplikat dengan marketplace yang sama dan product_id yang sama.

---

## Dependencies

- Authentication / session pengguna.
- `products` table.
- `marketplaces` table.
- `analytics` table untuk click tracking.
- Protected route middleware.

---

## Business Rules

- Satu produk dapat memiliki banyak affiliate link.
- Satu marketplace dapat memiliki banyak affiliate link.
- Link harus valid dan dapat diakses.
- `tracking_id` bersifat opsional.
- Click analytics dikumpulkan untuk setiap link.
- `commission_type` harus ditentukan untuk mengkategorikan model komisi.
- Link `inactive` tidak ditampilkan di tampilan publik.
- Duplikat link untuk produk dan marketplace yang sama ditolak.

---

## Validation Rules

- `product_id` harus valid dan terkait dengan produk yang ada.
- `marketplace_id` harus valid dan terkait dengan marketplace yang ada.
- `url` harus berupa URL valid.
- `tracking_id` boleh kosong tetapi jika ada harus berupa string alfanumerik.
- `commission_type` harus diisi dengan nilai yang valid.
- `status` hanya boleh `active` atau `inactive`.

---

## Permissions

Guest:
- Tidak dapat mengakses affiliate link management.

User:
- Dapat melihat dan mengelola affiliate link untuk produk miliknya.

Admin:
- Dapat melihat semua affiliate link.
- Dapat mengelola link jika diperlukan untuk support.

---

## API Endpoints

Referensi dari `docs/api.md`:

- `GET /api/affiliate-links` — ambil daftar affiliate link.
- `GET /api/affiliate-links/:id` — ambil detail affiliate link.
- `POST /api/affiliate-links` — buat affiliate link.
- `PUT /api/affiliate-links/:id` — perbarui affiliate link.
- `DELETE /api/affiliate-links/:id` — hapus affiliate link.
- `GET /api/affiliate-links/:id/analytics` — ambil click analytics link.

---

## Database Tables

Referensi dari `docs/database.md`:

- `affiliate_links`
  - `id`
  - `product_id`
  - `marketplace_id`
  - `url`
  - `tracking_id`
  - `commission_type`
  - `status`
  - `created_at`
  - `updated_at`

---

## UI Components

Referensi `docs/design-system.md`:

- `AffiliateLinkList` — daftar affiliate link.
- `AffiliateLinkCard` — ringkasan link.
- `AffiliateLinkForm` — form tambah/edit link.
- `LinkStatusBadge` — status `active`/`inactive`.
- `AnalyticsMiniChart` — ringkasan click performance.
- `TrackingInput` — input tracking ID.

---

## Edge Cases

- Link tidak valid atau tidak bisa diakses.
- Marketplace tidak mendukung affiliate.
- Produk tanpa affiliate link.
- Duplikasi link untuk marketplace yang sama.
- Klik tidak tercatat karena tracking tidak diinisialisasi.

---

## Error Handling

- `Invalid affiliate URL` — ketika URL tidak valid.
- `Duplicate affiliate link` — ketika link sudah ada untuk produk dan marketplace sama.
- `Unauthorized` — ketika user mencoba mengelola link milik orang lain.
- `Product not found` — ketika produk tidak ada.
- `Marketplace not found` — ketika marketplace tidak ada.

---

## Non-Functional Requirements

- Pengelolaan affiliate link harus cepat dan responsif.
- Validasi URL dilakukan sebelum submit.
- Analytics click harus dikumpulkan tanpa memperlambat UI.
- Akses data link harus secure dan terkontrol.

---

## Security

- Endpoint affiliate link dilindungi oleh otentikasi.
- Hanya pemilik produk atau admin yang dapat mengelola link.
- URL tidak boleh berisi payload berbahaya.
- Tracking data harus disimpan dengan aman.

---

## Out of Scope

- Affiliate automation rules.
- Dynamic commission calculation engine.
- Affiliate link redirect pooling.
- Multi-store affiliate workflows dalam MVP.

---

## Acceptance Criteria

- Produk dapat memiliki banyak affiliate link.
- Link dapat dibuat, diedit, dan dihapus.
- Link duplikat ditolak.
- Status `active`/`inactive` berfungsi.
- Click analytics tersedia untuk setiap link.
- Hanya pemilik produk atau admin yang dapat mengelola link.

---

## Future Improvements

- Tambahkan affiliate link template dan generator.
- Tambahkan smart tracking ID recommendation.
- Tambahkan automatic link validation dan health check.
- Tambahkan komisi dinamis dan split commission.

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
