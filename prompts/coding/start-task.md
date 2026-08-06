# FAVORIA ENGINEERING WORKFLOW

Sebelum mengubah kode apa pun, lakukan langkah berikut secara berurutan.

## 1. Baca dokumentasi

Baca terlebih dahulu:

- START.md
- docs/FREEZE_v1.0.md
- seluruh folder docs/
- PROJECT_LOG.md

Jangan mulai implementasi sebelum seluruh dokumentasi dipahami.

---

## 2. Baca task

Baca:

tasks/002-authentication.md

Kerjakan HANYA task tersebut.

Jangan mengerjakan task lain.

---

## 3. Aturan implementasi

Ikuti seluruh standar pada:

- PRD.md
- architecture.md
- database.md
- api.md
- design-system.md
- coding-guidelines.md
- workflow.md

Jangan membuat arsitektur baru.

Jangan mengubah requirement.

Jangan membuat fitur di luar spesifikasi.

---

## 4. Scope

Boleh diubah:

- file yang disebut pada task
- dependency jika memang diperlukan

Tidak boleh diubah:

- docs/
- specification
- architecture
- database design
- roadmap
- task lain

Jika diperlukan perubahan dokumentasi, catat pada:

docs/executive/DECISION_LOG.md

Jangan mengubah dokumen tersebut secara otomatis.

---

## 5. Setelah implementasi

Jalankan:

pnpm lint

pnpm build

Pastikan tidak ada error.

---

## 6. Setelah selesai

Update:

PROJECT_LOG.md

reports/daily/YYYY-MM-DD.md

Berikan ringkasan:

- file yang berubah
- alasan perubahan
- hasil lint
- hasil build
- bug yang ditemukan
- bug yang diperbaiki

Jangan lanjut ke task berikutnya sampai saya menyetujuinya.
