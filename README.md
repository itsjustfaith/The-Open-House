# The OpenHouse

The OpenHouse is a Kuwait-based real estate website that helps renters explore homes and request showings. It also offers property management for owners, with English and Arabic support.

A bilingual (English / Arabic) Kuwait real estate marketing demo for property showings and property management.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The production `npm run start` command serves the standalone build created by `npm run build`.

## Docker

```bash
docker compose up --build
```

The site is available at `http://localhost:3000`.

## Demo content and forms

Property listings and their details are illustrative examples only. They do not represent verified availability, pricing, or real property inventory. The inquiry forms validate required fields and show a local confirmation state; they do not send or save submissions.

The language switch changes the site between English and Arabic, including right-to-left layout. Replace the sample listing data in `lib/content.ts` and the remote demo photography in the page and card components before using the site with live business information.

The site currently uses free online Unsplash photos as temporary visual placeholders. See [IMAGE_PLAN.md](IMAGE_PLAN.md) for the current image approach, Unsplash licensing link, and the coordinated AI-generated photography plan for replacing these photos later.
