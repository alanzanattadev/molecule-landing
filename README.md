molecule-landing
================

This is the repository that stores the data used for Molecule-IDE's [website, blog and documentation](https://molecule.sh), which are generated using [Docusaurus](https://docusaurus.io/).

The website is composed of:

- Widgets that appear on every page, generated from `website/siteConfig.js`, `website/core/Footer.js`, and `website/sidebars.json`.

- The landing page, which is the first page you see at `https://molecule.sh`, generated from `website/[language]/index.js`.

- The documentation, generated from `docs/`.

- The blog, generated from `website/blog`.

## Installation

To change something and preview what the result will look like, run these commands:

```bash
git clone https://github.com/alanzanattadev/molecule-landing
cd molecule-landing/website
npm install
npm start
```

## Contribution

If you want to correct a typo, translate the website or document some feature, you're welcome to make a pull request!
