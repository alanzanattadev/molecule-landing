/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/molecule/img/molecule.png',
    infoLink: 'https://www.molecule.sh',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Molecule' /* title for your website */,
  tagline: 'Centralize your tooling and focus on what matters',
  url: 'https://www.molecule.sh' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'Molecule Project',
  headerLinks: [
    {doc: 'getting-started-introduction', label: 'Getting Started'},
    {blog: true, label: "Blog"},
    {label: "Github", href: "https://github.com/alanzanattadev/atom-molecule-dev-environment"},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/molecule.png',
  footerIcon: 'img/molecule.png',
  eipIcon: 'img/logo-eip.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#592b71',
    secondaryColor: '#7d1f99',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    'molecule-ide',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/alanzanattadev/atom-molecule-dev-environment',
};

module.exports = siteConfig;
