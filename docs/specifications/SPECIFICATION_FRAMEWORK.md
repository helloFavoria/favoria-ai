# Specification Framework

Favoria specifications are generated using a consistent framework that ensures all modules follow the same standard.

## Workflow

1. Baca seluruh folder `docs/` terlebih dahulu.
2. Fokus pada `docs/PRD.md`, `docs/architecture.md`, `docs/database.md`, `docs/design-system.md`, dan `docs/api.md`.
3. Gunakan `docs/specifications/_TEMPLATE.md` sebagai kerangka.
4. Lengkapi setiap file spesifikasi modul dengan konten bisnis dan referensi yang jelas.
5. Tambahkan `Review Checklist` di akhir setiap spesifikasi.
6. Review dan setujui sebelum melanjutkan ke modul berikutnya.

## Quality Gate

Sebelum spesifikasi dianggap selesai:

- Pastikan tidak ada kontradiksi dengan PRD.
- Pastikan semua entitas database sesuai dengan `docs/database.md`.
- Pastikan semua endpoint mengacu ke `docs/api.md`.
- Pastikan semua komponen UI sesuai dengan `docs/design-system.md`.
- Pastikan semua user flow masuk akal dan lengkap.

## Review Phase (M2)

Setelah semua spesifikasi selesai, jalankan tahap Review Documentation:

- Periksa konflik antar dokumen.
- Pastikan referensi database, API, dan design system konsisten.
- Verifikasi alignment dengan PRD.
- Pastikan scope setiap task jelas.
