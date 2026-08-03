# Favoria - Product Requirements Document (PRD)

Version: 1.0
Status: Draft
Last Updated: 2026-08-03

---

# 1. Product Overview

Favoria adalah platform AI-powered Affiliate Marketplace yang membantu creator, affiliate marketer, serta digital entrepreneur menemukan, mengelola, dan membagikan produk affiliate dari berbagai marketplace dalam satu dashboard.

Favoria berfokus pada produktivitas, kemudahan pengelolaan katalog produk, dan rekomendasi produk berbasis AI.

---

# 2. Vision

Menjadi platform affiliate modern yang menghubungkan AI, content creation, dan affiliate marketing dalam satu ekosistem.

---

# 3. Mission

- Mempermudah pengelolaan produk affiliate.
- Membantu creator menemukan produk terbaik.
- Mengurangi pekerjaan manual dengan automasi.
- Menjadi fondasi ekosistem Favoria AI.

---

# 4. Problem Statement

Affiliate marketer saat ini harus:

- Mengelola banyak link affiliate.
- Menyimpan katalog produk secara manual.
- Berpindah antar marketplace.
- Sulit mencari kembali produk yang pernah digunakan.

Favoria menyatukan semuanya dalam satu platform.

---

# 5. Target Users

Primary Users

- Affiliate Marketer
- Content Creator
- AI Creator
- Blogger
- Solopreneur
- Digital Entrepreneur

Secondary Users

- Agency
- Small Business
- Startup
- Freelancer

---

# 6. Goals

## MVP Goals

- User Authentication
- Dashboard
- Product Management
- Marketplace Management
- Affiliate Link Management
- Collections
- Product Search
- Basic Analytics

---

# 7. Non Goals (Out of MVP)

Fitur berikut tidak termasuk dalam MVP:

- Prompt Finder
- Workflow Marketplace
- AI Content Studio
- AI Shopping Assistant
- Mobile Apps
- Marketplace Digital Products
- AI Assets Marketplace

---

# 8. Core Features

## Authentication

- Register
- Login
- Logout
- Session Management

---

## Dashboard

- Statistik singkat
- Jumlah produk
- Jumlah koleksi
- Total klik

---

## Products

- Tambah produk
- Edit produk
- Hapus produk
- Upload gambar
- Kategori
- Harga
- Marketplace
- Affiliate URL

---

## Collections

- Membuat koleksi
- Menambahkan produk
- Menghapus produk dari koleksi

---

## Search

- Cari berdasarkan nama
- Marketplace
- Tag
- Kategori

---

## Analytics

- Jumlah klik
- Jumlah view
- CTR sederhana

---

# 9. User Flow

Visitor

↓

Landing Page

↓

Register

↓

Login

↓

Dashboard

↓

Tambah Produk

↓

Generate Affiliate Collection

↓

Bagikan

↓

Lihat Analytics

---

# 10. Functional Requirements

Authentication harus menggunakan Supabase Auth.

Semua data harus dimiliki oleh user yang login.

Produk dapat dimasukkan ke beberapa collection.

Marketplace dapat digunakan oleh banyak produk.

---

# 11. Non Functional Requirements

- Responsive
- Fast Loading
- Mobile Friendly
- Secure Authentication
- Type-safe
- Scalable
- Clean UI

---

# 12. Success Metrics

MVP dianggap berhasil apabila:

- User dapat login.
- User dapat membuat produk.
- User dapat membuat collection.
- User dapat menyimpan affiliate link.
- User dapat mencari produk.
- User dapat melihat analytics dasar.

---

# 13. Future Roadmap

## Phase 1

Favoria MVP

## Phase 2

Favoria Content OS

## Phase 3

Favoria Prompt Finder

## Phase 4

Favoria Workflow Hub

## Phase 5

Favoria AI Assets Marketplace

---

# 14. Constraints

- Menggunakan Next.js
- Menggunakan Supabase
- Menggunakan TypeScript
- Menggunakan Vercel
- Fokus pada MVP terlebih dahulu
- Tidak menambahkan fitur di luar scope MVP

---

# 15. Definition of Done

Sebuah fitur dianggap selesai apabila:

- Build berhasil
- Tidak ada TypeScript Error
- Tidak ada ESLint Error
- Responsive
- Menggunakan komponen reusable
- Sudah diuji
- Dokumentasi diperbarui

