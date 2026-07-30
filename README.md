# OCDRA Systems Portal

A static React portal for the Office of Commissioner Desiderio R. Apag III. It links staff to CommTrack and CorresFlow.

## Local development

```sh
npm ci
npm run dev
```

Run the full production check before deployment:

```sh
npm run check
```

## Deployment

The project is configured for Vercel through `vercel.json`. Deploy from the repository root over HTTPS. The configuration includes a restrictive Content Security Policy, clickjacking protection, HSTS, privacy-focused referrer behavior, browser permissions restrictions, and immutable caching for fingerprinted assets.

If another host is used, reproduce the headers from `vercel.json` at its CDN or reverse proxy. HTML meta tags alone cannot enforce all of these controls.

## Security notes

- Never put credentials or secrets in this client-only repository.
- External system links open in an isolated browser context and do not send a referrer.
- Third-party runtime assets are intentionally avoided so the CSP can remain restrictive.
- Report security concerns using `/.well-known/security.txt`.
