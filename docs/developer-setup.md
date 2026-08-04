# Developer Setup

## VS Code Extensions

### 1. Prettier

Extension:

> **Prettier - Code formatter**
>
>
> Publisher: **Prettier**

Fungsi:

- Auto format saat save
- Konsisten di seluruh project
- Mengurangi konflik Git

---

### 2. Live Server

Extension:

> **Live Server**
>
>
> Publisher: **Ritwick Dey**

Catatan:

- Untuk project **Next.js**, Anda lebih sering menggunakan:

```
pnpm dev
```

lalu membuka:

```
http://localhost:3000
```

Jadi **Live Server lebih berguna untuk file HTML statis**, sedangkan untuk Favoria (Next.js) tidak akan menjadi alat utama.

---

### 3. Path Intellisense

Extension:

> **Path Intellisense**
>
>
> Publisher: **Christian Kohler**

Fungsi:

- Auto-complete path import
- Mengurangi typo
- Mempercepat penulisan import

---

## Recommended Extensions

### 4. ESLint ⭐⭐⭐⭐⭐

Publisher:

> Microsoft

Fungsi:

- Menampilkan error secara langsung
- Integrasi dengan Next.js
- Membantu AI menghasilkan kode yang sesuai standar

---

### 5. Tailwind CSS IntelliSense ⭐⭐⭐⭐⭐

Kalau memakai Tailwind.

Fungsi:

- Auto-complete class
- Preview warna
- Validasi class

---

### 6. Error Lens ⭐⭐⭐⭐⭐

Semua error muncul langsung di baris kode.

Tidak perlu hover.

Sangat membantu.

---

### 7. GitLens ⭐⭐⭐⭐☆

Melihat:

- siapa mengubah kode
- history
- blame
- commit

---

### 8. Markdown All in One ⭐⭐⭐⭐☆

Karena kita sekarang punya banyak dokumentasi.

Membantu:

- Table of Contents
- Shortcut Markdown
- Preview

---

## VS Code Configuration

Buat folder:

```
.vscode/
```

Lalu buat file:

```
.vscode/extensions.json
.vscode/settings.json
```

### `extensions.json`

```
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "ritwickdey.liveserver",
    "christian-kohler.path-intellisense",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "usernamehw.errorlens",
    "eamodio.gitlens",
    "yzhang.markdown-all-in-one"
  ]
}
```

### `settings.json`

```
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "editor.wordWrap": "on"
}
```
