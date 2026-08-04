# Collections Specification

## Purpose

Mengelola berbagai koleksi produk Favoria, termasuk favorite, wishlist, curated lists, dan AI generated lists.

---

## Goals

- Memberikan cara fleksibel untuk mengelompokkan produk.
- Mendukung berbagai tipe koleksi.
- Menyediakan koleksi yang dapat disimpan, dibagikan, dan diurutkan.
- Menjaga koleksi tetap terpisah dari struktur folder.

---

## User Stories

- Sebagai pengguna, saya ingin membuat favorite list agar produk pilihan saya mudah ditemukan.
- Sebagai pengguna, saya ingin menyimpan wishlist untuk produk yang akan saya promosikan nanti.
- Sebagai pengguna, saya ingin membuat curated list untuk tema tertentu.
- Sebagai pengguna, saya ingin melihat AI generated list bila tersedia.
- Sebagai pengguna, saya ingin menambahkan dan menghapus produk dari koleksi.

---

## User Flow

1. Pengguna membuka modul koleksi.
2. Sistem menampilkan daftar koleksi dan tipe mereka.
3. Pengguna membuat koleksi baru dengan tipe `favorite`, `wishlist`, `curated`, atau `ai-generated`.
4. Pengguna menambahkan produk ke koleksi.
5. Pengguna mengatur urutan produk dalam koleksi.
6. Pengguna menyimpan koleksi.
7. Pengguna membuka koleksi untuk melihat dan mengedit isi.

---

## Functional Requirements

FR-001: Sistem mendukung pembuatan koleksi dengan tipe `favorite`, `wishlist`, `curated`, dan `ai-generated`.
FR-002: Sistem mendukung penambahan dan penghapusan produk dalam koleksi.
FR-003: Sistem mendukung pengurutan produk di dalam koleksi.
FR-004: Sistem menyimpan koleksi per pengguna.
FR-005: Sistem menampilkan tipe koleksi di daftar koleksi.
FR-006: Sistem menangani koleksi `ai-generated` sebagai tipe khusus.
FR-007: Sistem mendukung pencarian koleksi berdasarkan nama dan tipe.

---

## Dependencies

- Authentication / session pengguna.
- `products` table.
- `collections` dan `collection_items` tables.
- Protected route middleware.

---

## Business Rules

- Koleksi bukan folder; koleksi hanya berisi daftar produk.
- Koleksi harus unik berdasarkan nama dan pemilik.
- Tipe koleksi harus salah satu dari `favorite`, `wishlist`, `curated`, atau `ai-generated`.
- Produk dapat muncul di banyak koleksi.
- Koleksi `ai-generated` hanya dapat dibuat oleh sistem atau AI workflow, bukan langsung oleh user dalam MVP.
- Koleksi dapat diatur sebagai `public` atau `private` jika fitur sharing tersedia.
- Urutan produk dalam koleksi dapat ditentukan oleh pengguna.

---

## Validation Rules

- Nama koleksi wajib diisi.
- Tipe koleksi harus valid.
- Produk yang ditambahkan harus ada di sistem.
- Koleksi tidak boleh dibuat dengan nama kosong.
- Item koleksi tidak boleh duplikat.

---

## Permissions

Guest:
- Tidak dapat mengakses koleksi.

User:
- Dapat membuat, melihat, dan mengelola koleksi miliknya.
- Dapat menambahkan produk ke koleksi.

Admin:
- Dapat melihat koleksi pengguna jika diperlukan untuk support.

---

## API Endpoints

Referensi dari `docs/api.md`:

- `GET /api/collections` — ambil daftar koleksi pengguna.
- `GET /api/collections/:id` — ambil detail koleksi.
- `POST /api/collections` — buat koleksi baru.
- `PUT /api/collections/:id` — perbarui koleksi.
- `DELETE /api/collections/:id` — hapus koleksi.
- `POST /api/collections/:id/items` — tambahkan item ke koleksi.
- `DELETE /api/collections/:id/items/:itemId` — hapus item koleksi.

---

## Database Tables

Referensi dari `docs/database.md`:

- `collections`
  - `id`
  - `user_id`
  - `name`
  - `type`
  - `status`
  - `visibility`
  - `sort_order`
  - `created_at`
  - `updated_at`

- `collection_items`
  - `id`
  - `collection_id`
  - `product_id`
  - `position`
  - `created_at`

---

## UI Components

Referensi `docs/design-system.md`:

- `CollectionList` — daftar koleksi.
- `CollectionCard` — ringkasan koleksi.
- `CollectionForm` — form pembuatan/penyuntingan koleksi.
- `CollectionItemList` — daftar produk dalam koleksi.
- `CollectionTypeBadge` — tipe koleksi.
- `SortHandle` — drag handle untuk mengurutkan item.

---

## Edge Cases

- Koleksi kosong.
- Item produk dihapus dari sistem setelah ditambahkan ke koleksi.
- Koleksi `ai-generated` tidak dapat diubah langsung oleh pengguna dalam MVP.
- Produk ditambahkan dua kali ke koleksi yang sama.
- Koleksi dengan nama yang sama pada pengguna yang sama.

---

## Error Handling

- `Collection not found` — ketika koleksi tidak ada.
- `Invalid collection type` — ketika tipe tidak didukung.
- `Unauthorized` — ketika user mengakses koleksi orang lain.
- `Duplicate item` — ketika produk ditambahkan sebanyak dua kali.
- `Invalid product` — ketika produk tidak ditemukan.

---

## Non-Functional Requirements

- Halaman koleksi harus dimuat dalam < 2 detik.
- Koleksi harus tetap responsif saat daftar item panjang.
- UX pengurutan item harus intuitif dan cepat.
- Pengelolaan koleksi harus accessible.

---

## Security

- Endpoint koleksi dilindungi oleh session.
- User hanya dapat mengelola koleksi miliknya sendiri.
- Data koleksi tidak boleh bocor ke pengguna lain.
- Input koleksi disanitasi.

---

## Out of Scope

- Folder-based collection management.
- Public sharing dan social sharing dalam MVP.
- AI-generated collection editor yang sepenuhnya otomatis.
- Koleksi multi-user collaboration.

---

## Acceptance Criteria

- Koleksi dapat dibuat dengan tipe yang valid.
- Produk dapat ditambahkan dan dihapus dari koleksi.
- Koleksi dapat diurutkan.
- Koleksi `ai-generated` diidentifikasi sebagai tipe khusus.
- Duplicate item di dalam koleksi tidak diperbolehkan.
- Hanya pemilik koleksi yang dapat mengelola koleksinya.

---

## Future Improvements

- Tambahkan sharing koleksi dan publikasi.
- Tambahkan collaborative list dengan tim.
- Tambahkan koleksi rekomendasi AI.
- Tambahkan import/export koleksi.

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
