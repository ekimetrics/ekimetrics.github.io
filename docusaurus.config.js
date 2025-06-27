const path = require('path');
const math = require('remark-math');
const katex = require('rehype-katex');
const {themes} = require('prism-react-renderer');


module.exports = {
  title: 'Eki.Lab',
  tagline: 'EkiLab - the Ekimetrics technology & innovation website. Behind the scenes of the Data Science Company',
  plugins: [

    require.resolve('docusaurus-lunr-search'),
    require.resolve("docusaurus-plugin-image-zoom"),


    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: ['UA-124520099-9','G-MQNYE0E8GE'],
        anonymizeIP: true,
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'resources',
        path: 'resources',
        routeBasePath: 'resources',
        sidebarPath: require.resolve('./sidebars_resources.js'),
        // ... other options
      },
    ],

    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'careers',
    //     path: 'careers',
    //     routeBasePath: 'careers',
    //     // sidebarPath: require.resolve('./sidebars_careers.js'),
    //     // ... other options
    //   },
    // ],


  ],


  url: 'https://ekimetrics.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ekimetrics', // Usually your GitHub org/user name.
  projectName: 'ekimetrics.github.io', // Usually your repo name.
  deploymentBranch: "master",


  themeConfig: {



    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgba(22,41,60,1)',
          dark: 'rgba(22,41,60,1)'
        }
      }
    },



    image:"http://ekimetrics.github.io/img/10-cubecube03.jpg",
    prism: {
      theme: themes.dracula,
      additionalLanguages: ['python'],
    },
    colorMode:{
      defaultMode:"dark",
      disableSwitch:true,
    },
    navbar: {
      hideOnScroll : true,
      title: '.',

      items: [

        {to: 'blog', label: 'Blog', position: 'left'},

        {
          type: 'dropdown',
          label: 'About us',
          position: 'left',
          items:[
            {
              label: "Ekilab",
              href:'/about'
            },

            {
              label: "Ekimetrics",
              href:'/about/ekimetrics'
            },

            {
              label: "Technology stack",
              href:'/about/stack'
            },

          ],
        },

        {
          type: 'dropdown',
          label: 'Resources',
          position: 'left',
          items:[
            {
              label: "Hackathons",
              href:'/resources/'
            },

            {
              label: "Trainings",
              href:'/resources/trainings'
            },

          ],
        },




        //{to: 'tech_newsletter', label: 'Tech Newsletter', position: 'left'},
        // {to: 'trainings/', label: 'Trainings', position: 'left'},
        // {to: 'docs/', label: 'About us', position: 'left'},
        // {to: 'resources/', label: 'Resources', position: 'left'},
        {to: 'https://ekimetrics.com/fr/carrieres/', label: 'Careers', position: 'left'},
        // {to: 'careers/', label: 'Careers', position: 'left'},

        // {
        //   to: 'hacks/',
        //   label: 'Hackathons',
        //   position: 'left',
        // },
        // {
        //   to: 'opensource/',
        //   label: 'Open Source',
        //   position: 'left',
        // },
        {to: 'https://ekimetrics.com/fr/', label: 'Ekimetrics website', position: 'right'},

      //  {to: 'https://ekimetrics.us13.list-manage.com/subscribe?u=85b8ce42caa0a733e98233bc4&id=6355d0a6f9', label: 'Newsletter', position: 'right'},

      //  {
      //    href: 'https://github.com/ekimetrics',
      //    label: 'Github',
      //    position: 'right',
      //  },
        {href: 'mailto:inno@ekimetrics.com', label: 'Contact us!', position: 'right'},
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
        {
          title: 'Contact',
          items: [
            {
              label: 'Get in touch with our teams',
              href: 'mailto:inno@ekimetrics.com',
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
          id : 'about',
          path: 'about',
          routeBasePath : 'about',
          sidebarPath: require.resolve('./sidebars.js'),
          // remarkPlugins: [math],
          // rehypePlugins: [katex],
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/ekimetrics/ekimetrics.github.io/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/ekimetrics/ekimetrics.github.io/edit/master/website/blog/',
          postsPerPage: 9,
          blogSidebarCount: 0,
          // remarkPlugins: [math],
          // rehypePlugins: [katex],
        },
        // blog_test: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/ekimetrics/ekimetrics.github.io/edit/master/website/blog_test/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-124520099-9',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },

      },
    ],
  ],
};
