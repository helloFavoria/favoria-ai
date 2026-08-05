# Git Commit Convention

Gunakan format commit berikut untuk menjaga histori pengembangan Favoria tetap konsisten dan mudah ditelusuri.

Format:

- `feat(scope): description`
- `fix(scope): description`
- `refactor(scope): description`
- `docs(scope): description`
- `test(scope): description`
- `chore(scope): description`

Contoh:

- `feat(auth): implement register page`
- `fix(auth): resolve Supabase session issue`
- `refactor(products): simplify repository layer`
- `docs(prd): update authentication flow`
- `test(auth): add login integration test`
- `chore(vscode): update workspace settings`

Tips:

- Gunakan `scope` yang spesifik, misalnya `auth`, `dashboard`, `products`, `search`, `api`, `ui`.
- Gunakan kata kerja present tense dan deskriptif.
- Hindari commit yang mencakup banyak fitur besar sekaligus.
