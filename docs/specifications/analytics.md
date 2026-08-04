# Analytics Specification

## Purpose

Mendefinisikan metrik dasar Favoria untuk memantau views, clicks, CTR, dan performa affiliate produk serta mempersiapkan extensibility ke metrik revenue dan conversion.

---

## Goals

- Menyediakan metrik dasar untuk product dan affiliate performance.
- Menyajikan analytics yang mudah dipahami oleh pengguna.
- Mendukung data click dan view tracking.
- Menyiapkan pondasi untuk conversion, revenue, dan top lists di masa depan.

---

## User Stories

- Sebagai pengguna, saya ingin melihat jumlah views produk saya.
- Sebagai pengguna, saya ingin melihat jumlah clicks dan CTR untuk affiliate link.
- Sebagai pengguna, saya ingin melihat produk terbaik berdasarkan performa.
- Sebagai pengguna, saya ingin melihat marketplace terbaik.
- Sebagai pengguna, saya ingin melihat performa koleksi saya.

---

## User Flow

1. Pengguna membuka halaman analytics.
2. Sistem menampilkan metrik views, clicks, dan CTR.
3. Pengguna memilih rentang tanggal atau filter.
4. Sistem memperbarui grafik dan ringkasan metrik.
5. Pengguna mengecek top products, top marketplaces, dan top collections.

---

## Functional Requirements

FR-001: Sistem melacak views untuk produk.
FR-002: Sistem melacak clicks untuk affiliate link.
FR-003: Sistem menghitung CTR berdasarkan clicks dan views.
FR-004: Sistem menampilkan top products berdasarkan performa.
FR-005: Sistem menampilkan top marketplaces.
FR-006: Sistem menampilkan top collections.
FR-007: Sistem mendukung filter rentang tanggal dasar.

---

## Dependencies

- Authentication / session pengguna.
- `analytics`, `products`, `marketplaces`, `collections`, dan `affiliate_links` tables.
- Event tracking pada frontend.
- Protected route middleware.

---

## Business Rules

- Analytics hanya menampilkan data untuk akun yang sesuai.
- Views dan clicks dihitung per produk dan affiliate link.
- CTR dihitung sebagai clicks / views.
- Top metrics ditentukan berdasarkan rentang waktu yang dipilih.
- Data analytics dapat di-refresh secara berkala.

---

## Validation Rules

- Filter rentang tanggal harus valid dan mulai sebelum akhir.
- Rentang tanggal harus berada dalam batas wajar (misalnya maksimum 365 hari).
- Parameter query analytics harus disanitasi.

---

## Permissions

Guest:
- Tidak dapat mengakses analytics.

User:
- Dapat melihat analytics untuk produk dan koleksi miliknya.

Admin:
- Dapat melihat analytics platform-level jika tersedia.

---

## API Endpoints

Referensi dari `docs/api.md`:

- `GET /api/analytics/summary` — ringkasan views, clicks, CTR.
- `GET /api/analytics/top-products` — top products.
- `GET /api/analytics/top-marketplaces` — top marketplaces.
- `GET /api/analytics/top-collections` — top collections.

---

## Database Tables

Referensi dari `docs/database.md`:

- `analytics`
  - `id`
  - `entity_type`
  - `entity_id`
  - `event`
  - `value`
  - `created_at`

- `products`
- `marketplaces`
- `collections`
- `affiliate_links`

---

## UI Components

Referensi `docs/design-system.md`:

- `AnalyticsSummary` — ringkasan metrik.
- `AnalyticsChart` — grafik views dan clicks.
- `TopList` — daftar top products/marketplaces/collections.
- `DateRangePicker` — filter rentang tanggal.
- `AnalyticsTable` — tabel metrik rinci.

---

## Edge Cases

- Tidak ada data analytics untuk rentang tanggal.
- Data incomplete karena tracking tidak aktif.
- Filter tanggal menghasilkan dataset kosong.
- Data analytics sementara tidak tersedia.

---

## Error Handling

- `No analytics data available` — ketika tidak ada data.
- `Invalid date range` — ketika filter tidak valid.
- `Analytics service unavailable` — ketika backend gagal.
- `Unauthorized` — ketika akses analytics dibatasi.

---

## Non-Functional Requirements

- Analytics dashboard harus dimuat dalam < 2 detik untuk rentang standar.
- Grafik harus responsif dan interaktif.
- Data harus terjaga konsistensinya.
- Pengambilan data analytics harus scalable.

---

## Security

- Endpoint analytics dilindungi oleh otentikasi.
- Data hanya ditampilkan untuk pengguna yang berhak.
- Parameter analytics disanitasi.

---

## Out of Scope

- Revenue forecasting.
- Conversion path tracking di MVP.
- Real-time analytics streaming.
- Attribution modeling.

---

## Acceptance Criteria

- Analytics menampilkan views, clicks, dan CTR.
- Top products, marketplaces, dan collections tersedia.
- Filter tanggal berfungsi.
- Hanya user terautentikasi yang dapat mengakses analytics.

---

## Future Improvements

- Tambahkan conversion dan revenue metrics.
- Tambahkan funnel conversion tracking.
- Tambahkan custom dashboards.
- Tambahkan alert performa.

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
