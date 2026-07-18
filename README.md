# Ghota Tech Solutions

Static Next.js website for `https://ghotatechsolutions.com`, exported to `out/`
and hosted by GitHub Pages. The custom domain is preserved by `public/CNAME`.

## Local development

```bash
bun install --frozen-lockfile
bun run dev
```

Production verification:

```bash
bun run lint
bun run build
bun run validate:export
```

The build must contain directory-indexed Rift Dice landing, support, privacy and
account deletion routes plus `robots.txt`, `sitemap.xml` and `CNAME`. The export
validator deliberately rejects `.html`-only routes that GitHub Pages would answer
with its 404 fallback.

## Deployment

Deployment is handled only by `.github/workflows/deploy.yml`. A pull request runs
the build check without publishing. A version tag or an explicit workflow dispatch
publishes the exact `out/` artifact to GitHub Pages.

From a clean branch whose reviewed commit is already pushed:

```bash
./deploy.sh
gh run watch --exit-status
```

Do not use the historical Cloud Run source deployment: this project uses
`output: "export"` and GitHub Pages is the production host.
