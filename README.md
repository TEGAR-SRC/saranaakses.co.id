PT Sarana Akses Pratama – ISP Website built with Next.js 15 and Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the homepage by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses next/font (Geist) and Tailwind CSS v4 for styling.

## Scripts

```bash
# Start dev server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm run start

# Lint
npm run lint
```

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript, ESLint

## Project Structure

```
src/
  app/
    layout.tsx      # Global layout, metadata, fonts
    page.tsx        # Homepage with all required sections
    globals.css     # Global styles and theme tokens
public/
  favicon.ico
```

## Content Sections

- Header with company name: "PT Sarana Akses Pratama"
- Address: "MB2 Blok B28 No. 01, Berkedudukan di Botania 2 Blok B28 Nomor 1-2 Jalan Raja Alikelana, Rukun Tetangga 003, Rukun Warga 041, Kelurahan Belian, Kecamatan Batam Kota, Kota Batam, Provinsi Kepulauan Riau, kode pos 29431."
- Contact: Telepon "+62 778 5522601" dan Email "cse@sanak.co.id"
- Operational Hours: Senin–Jumat 08:00–17:00, Sabtu 08:00–15:00, Minggu Libur
- Support: "Support 24/7 tersedia"

## Design Notes

- Dark theme with subtle gradients and card-like sections
- Responsive layout using Tailwind utilities across mobile and desktop
- Typography via Geist font for a modern, clean look

## Updating Content

- Edit copy and labels in `src/app/page.tsx`
- Update metadata (title/description) in `src/app/layout.tsx`

## Deployment

Build with `npm run build` and serve with `npm run start`. Vercel is recommended but optional.

## License

This project is provided as-is for PT Sarana Akses Pratama.
