const path = require('path');

module.exports = {
  title: 'Eki.Lab',
  tagline: 'EkiLab - the Ekimetrics technology & innovation website. Behind the scenes of the Data Science Company',
  url: 'https://ekimetrics.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ekimetrics', // Usually your GitHub org/user name.
  projectName: 'ekimetrics.github.io', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['python'],
    },
    colorMode:{
      defaultMode:"dark",
      disableSwitch:true,
    },
    googleAnalytics: {
      trackingID: 'UA-124520099-9',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'Eki.Lab',
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'docs/', label: 'Best practices & convictions', position: 'left'},
        {
          to: 'hacks/',
          label: 'Hackathons',
          position: 'left',
        },
        {
          to: 'opensource/',
          label: 'Open Source',
          position: 'left',
        },
        {to: 'https://ekimetrics.com/fr/', label: 'Ekimetrics website', position: 'right'},
        {to: 'https://ekimetrics.us13.list-manage.com/subscribe?u=85b8ce42caa0a733e98233bc4&id=6355d0a6f9', label: 'Newsletter', position: 'right'},
        
        {
          href: 'https://github.com/ekimetrics',
          label: 'Github',
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
              label: 'Subscribe to our newsletter',
              to: 'https://ekimetrics.us13.list-manage.com/subscribe?u=85b8ce42caa0a733e98233bc4&id=6355d0a6f9',
            },
          ],
        },
        {
          title: 'Find us',
          items: [
            {
              label: 'Github',
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
