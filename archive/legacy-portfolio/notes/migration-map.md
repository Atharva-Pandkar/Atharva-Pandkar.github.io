# Legacy to Fresh Mapping

- Legacy personal content is snapshot in `archive/legacy-portfolio/content/`.
- Selected source references are snapshot in `archive/legacy-portfolio/source/`.
- Legacy runtime and deployment behavior to preserve:
  - `public/404.html` redirect strategy for client routes.
  - `src/main.tsx` PostHog initialization via Vite env variables.
  - `vite.config.ts` base path set for root deployment.

## Next-Gen Intended Structure

- `src/content/*` for profile, projects, skills, and experience.
- `src/assets/images` and `src/assets/documents` for media.
- `src/lib/analytics.ts` and `src/analytics/events.ts` for PostHog-first tracking.
