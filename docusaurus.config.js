const path = require('path');

module.exports = {
  title: 'Ekimetrics Tech',
  tagline: 'Ekimetrics Lab Website',
  url: 'https://ekimetrics.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ekimetrics', // Usually your GitHub org/user name.
  projectName: 'ekimetrics.github.io', // Usually your repo name.
  themeConfig: {
    colorMode:{
      defaultMode:"dark",
      disableSwitch:true,
    },
    navbar: {
      title: 'Ekimetrics Lab.',
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          to: 'homehack/',
          label: 'Try our AI Challenge',
          position: 'left',
        },
        {
          to: 'opensource/',
          label: 'Open Source Contribution',
          position: 'left',
        },
        {to: 'conviction/', label: 'Eki Tech Conviction', position: 'left'},
        {to: 'https://ekimetrics.us13.list-manage.com/subscribe?u=85b8ce42caa0a733e98233bc4&id=6355d0a6f9', label: 'NewsLetter', position: 'left'},
        {to: 'https://ekimetrics.com/fr/', label: 'Website', position: 'left'},
        
        {
          href: 'https://github.com/ekimetrics',
          label: 'Eki.GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About us',
          items: [
            {
              label: 'Who we are ?',
              to: 'https://ekimetrics.com/who-we-are/',
            },
            {
              label: 'Our team',
              to: 'https://ekimetrics.com/our-team/',
            },
            {
              label: 'Subscribe to our news letter',
              to: 'https://ekimetrics.us13.list-manage.com/subscribe?u=85b8ce42caa0a733e98233bc4&id=6355d0a6f9',
            },
          ],
        },
        {
          title: 'Find us',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ekimetrics',
            },
            {
              label: 'Careers',
              href: 'https://ekimetrics.com/careers/',
            },
            {
              label: 'Eki on Welcome to the jungle',
              href: 'https://www.welcometothejungle.com/fr/companies/ekimetrics',
            },
          ],
        },
        
      ],
      
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
