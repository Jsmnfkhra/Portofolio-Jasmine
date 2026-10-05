# Portofolio Jasmine

Website portofolio pribadi — static site (HTML, CSS, JavaScript) tanpa build step.

## Live

https://jasmine-fakhira-portfolio.vercel.app

## Tech Stack

- **HTML5** — struktur semantik
- **CSS3** — styling kustom + dark mode
- **JavaScript** — interaksi, animasi ketik (Typed.js)
- **Bootstrap 5** — grid & komponen
- **Bootstrap Icons**
- **Google Fonts** — Poppins

## Struktur

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/
```

## Menjalankan secara lokal

Butuh Live Server (bisa pakai ekstensi VS Code) atau server statis apa pun:

```bash
npx serve .
```

## Deploy

### Vercel

```bash
npm i -g vercel
vercel login
vercel --prod
```

### GitHub

```bash
git remote add origin https://github.com/Jsmnfkhra/Portofolio-Jasmine-.git
git push -u origin main
```
