# temetro — landing page

The marketing site for [temetro](https://github.com/temetro/temetro), the
open-source AI middleman between clinicians and patient data. A Next.js (App
Router) app with the marketing components under `components/landing/`.

This is its **own repository**, separate from the product monorepo and the docs
site. The primary call-to-action ("Get started") points at the documentation at
<https://docs.temetro.com/docs>.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

`npm run build` produces a production build; `npm run start` serves it.

## Structure

- **`app/`** — App Router pages, including the home page and `app/story/`.
- **`components/landing/`** — the marketing sections (hero, features, CTA,
  site header/footer, nav).
- **`components/ui/`** — shared UI primitives.

## Related repositories

- **Product (monorepo):** <https://github.com/temetro/temetro>
- **Documentation:** the Fumadocs site published at <https://docs.temetro.com>

## License

[MIT](./LICENSE).
