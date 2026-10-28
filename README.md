# Mirror, Mirror on the Wall

Project page for **Mirror, Mirror on the Wall: Can VLM Agents Tell Who They Are at All?**, NeurIPS 2026.

[Paper](https://arxiv.org/abs/2605.08816) · [Code](https://github.com/tommyz94/self-awareness)

## Preview

Run `python3 -m http.server 8080` from this directory and open http://localhost:8080.

## GitHub Pages

Copy the contents of this directory into the root of a dedicated GitHub repository. In **Settings → Pages → Build and deployment**, select **GitHub Actions**. Push to `main` to deploy using the included workflow.

All asset paths are relative, supporting both `username.github.io` and project URLs such as `username.github.io/repository/`. For a custom domain, configure it in **Settings → Pages** and set the domain's DNS records as required by GitHub.

No build step is required. The page uses HTML, CSS, and JavaScript. Fonts are loaded from Google Fonts, with local system fallbacks.

## Content

- `index.html`: paper text, authors, resources, citation.
- `content.js`: experimental condition descriptions and results from the supplementary table.
- `style.css`: responsive layout and glass appearance.
- `app.js`: experiment tabs, result selection, citation copying.
- `assets/`: original paper figures, chart PDFs, manuscript, and 8K environment images. Optimized WebP images are used for the experiment tabs; clicking them opens the original PNG.
- Complementary analyses: radar profiles, normalized metric heatmap, action–attribution scatter, completion gap, and E5 final outcomes.
- `citation.bib`: downloadable BibTeX.

The results table reproduces eight primary models, with mean and standard error. Additional Cosmos-Reason2 results are in the paper. Text and figures are from the accompanying manuscript.

Published project page: https://dkm-fbk.github.io/mirror-mirror/
