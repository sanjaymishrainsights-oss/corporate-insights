# Corporate Insights website

Static, dependency-free website for local preview or deployment to static hosting.

## Preview

Open `index.html` in a browser, or serve this folder with any static web server. No package installation or build step is required.

## Pages

- `index.html` — homepage, filters/search, about and editorial overview
- `insights/` — four standalone, linked essays
- `privacy.html` — privacy description for the current build

## Before public launch

- Confirm how this site relates to the existing **Ancient Wisdom Corporate Insights** name.
- Review the public biography, sample essays, design assets and external links.
- Confirm the domain, hosting account and final canonical URLs. Add canonical tags, `robots.txt`, and an XML sitemap when the domain is known.
- The contact/newsletter flows are intentionally not present. The separate professional site currently contains consulting and contact information.
- The Medium path uses the requested `sanjaymishra.insights` handle. Reddit and Pinterest use the inferred `sanjaymishra_insights` handles; confirm those two paths resolve to the owner's accounts before publishing. Substack and Facebook use URLs supplied by the owner.
- The supplied profile screenshot informed the navy-and-gold palette and the “Real insights for a better work life” tagline. Time-sensitive follower and post counts were not copied into the site.
- Review privacy language against the selected hosting provider and current requirements.

The design uses local system fonts and custom SVG artwork; the pages do not load third-party fonts or tracking scripts.


## GitHub Pages publishing

Create a separate repository named corporate-insights, then upload the contents of this folder to the repository root. Keep index.html at the top level. In repository Settings → Pages, choose Deploy from a branch, select main and /(root), then save. The expected project-site URL is https://sanjaymishrainsights-oss.github.io/corporate-insights/. Do not use the root of the existing sanjaymishraofficial repository for this site; that could replace the current published site. The .nojekyll file tells Pages to serve the prebuilt static files without Jekyll processing.
