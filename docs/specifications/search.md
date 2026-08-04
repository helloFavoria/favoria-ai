# Search Specification

## Purpose

Mendefinisikan mesin pencarian Favoria yang fleksibel untuk mencari produk, marketplace, dan koleksi, sekaligus dirancang agar mudah diperluas ke prompt, workflow, dan aset AI.

---

## Goals

- Menyediakan pencarian cepat untuk produk, marketplace, dan koleksi.
- Mendukung filter dan sorting dasar.
- Menjaga desain extensible untuk penambahan entitas search di masa depan.
- Menjaga hasil relevan dan user-friendly.

---

## User Stories

- Sebagai pengguna, saya ingin mencari produk berdasarkan nama dan tag.
- Sebagai pengguna, saya ingin mencari marketplace dan tahu marketplace mana yang tersedia.
- Sebagai pengguna, saya ingin mencari koleksi favorit dan wishlist saya.
- Sebagai pengguna, saya ingin hasil pencarian tampil cepat dan relevan.
- Sebagai pengguna, saya ingin sistem search dapat diperluas ke prompt dan workflow di masa depan.

---

## User Flow

1. Pengguna membuka halaman search.
2. Pengguna memasukkan kata kunci.
3. Sistem menampilkan hasil pencarian mulai dari produk, marketplace, dan koleksi.
4. Pengguna memfilter hasil berdasarkan entitas atau kategori.
5. Pengguna mengklik hasil untuk membuka detail item.
6. Di masa depan, pengguna dapat mencari prompt, workflow, dan tools.

---

## Functional Requirements

FR-001: Sistem mencari produk berdasarkan nama, tag, dan marketplace.
FR-002: Sistem mencari marketplace berdasarkan nama.
FR-003: Sistem mencari koleksi berdasarkan nama dan tipe.
FR-004: Sistem mendukung paginasi hasil.
FR-005: Sistem mendukung filter entitas dasar (produk, marketplace, koleksi).
FR-006: Sistem menyajikan hasil relevan yang sesuai query.
FR-007: Search dapat diperluas untuk prompt, workflow, dan tools di masa depan.

---

## Dependencies

- Authentication / session pengguna.
- `products`, `marketplaces`, dan `collections` tables.
- Search index atau query engine.
- Protected route middleware untuk hasil yang terbatas.

---

## Business Rules

- Search menampilkan hanya entitas yang user berhak lihat.
- Produk inactive tidak muncul di hasil pencarian publik.
- Marketplace inactive tidak muncul di hasil pencarian marketplace.
- Koleksi private hanya muncul bagi pemiliknya.
- Pencarian kosong menampilkan informasi “no results”.
- Search harus menjaga konsistensi antara entitas sekarang dan masa depan.

---

## Validation Rules

- Query tidak boleh kosong saat submit search.
- Panjang query minimal 1 karakter dan maksimal 120 karakter.
- Input search disanitasi untuk mencegah injection.
- Filter entitas harus valid.

---

## Permissions

Guest:
- Dapat mencari marketplace publik jika diizinkan.
- Tidak dapat melihat koleksi private.

User:
- Dapat mencari produk dan koleksi miliknya.
- Dapat melihat marketplace yang didukung.

Admin:
- Dapat mencari semua entitas jika diperlukan.

---

## API Endpoints

Referensi dari `docs/api.md`:

- `GET /api/search?q=...` — ambil hasil search dari produk, marketplace, dan koleksi.

---

## Database Tables

Referensi dari `docs/database.md`:

- `products`
- `marketplaces`
- `collections`
- `collection_items`

---

## UI Components

Referensi `docs/design-system.md`:

- `SearchBar` — input pencarian.
- `SearchFilters` — filter berdasarkan entitas.
- `SearchResultsList` — daftar hasil.
- `SearchResultItem` — representasi item hasil.
- `NoResults` — tampilan ketika tidak ada hasil.

---

## Edge Cases

- Query menghasilkan banyak hasil.
- Query tidak menghasilkan hasil.
- Query mengandung karakter khusus.
- User mencoba mengakses koleksi private melalui search.
- Hasil search memerlukan paginasi.

---

## Error Handling

- `Invalid search query` — ketika query tidak valid.
- `Search service unavailable` — ketika service search gagal.
- `Unauthorized` — ketika user mencoba mengakses entitas terbatas.

---

## Non-Functional Requirements

- Search harus merespon dalam < 1.5 detik untuk query standar.
- Search UI harus responsif pada desktop dan mobile.
- Search input harus mendukung aksesibilitas.
- Sistem harus scalable untuk menambah entitas search di masa depan.

---

## Security

- Sanitize semua query search.
- Batasi hasil sesuai hak akses user.
- Hindari exposing data sensitif melalui search.

---

## Out of Scope

- Pencarian prompt, workflow, dan tools di MVP.
- Mesin search full-text lanjutan di MVP.
- Search synonim dan fuzzy matching berat.

---

## Acceptance Criteria

- Search dapat mencari produk dengan kata kunci.
- Search dapat mencari marketplace.
- Search dapat mencari koleksi sesuai hak akses.
- Filter entitas dasar tersedia.
- Hasil search ditampilkan dengan cepat.

---

## Future Improvements

- Tambahkan search prompt, workflow, dan tools.
- Tambahkan fuzzy matching dan ranking.
- Tambahkan autosuggest dan query recommendation.
- Tambahkan integrated search across AI assets.

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
