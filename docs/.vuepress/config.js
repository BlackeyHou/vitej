const path = require('path');

const basePath = process.env.VUEPRESS_BASE || '/';

module.exports = {
    theme: "cosmos",
    title: "Vite JAVA SDK",
    base: basePath,

    locales: {
      "/": {
        lang: "en-US"
      },
    },

    plugins: [
      [
        "sitemap",
        {
          hostname: "https://docs.vite.org"
        }
      ]
    ],

    themeConfig: {
      repo: "vitelabs/vitej",
      docsRepo: "vitelabs/vitej",
      docsDir: 'docs',
      editLinks: true,
      custom: true,
      logo: {
        src: path.join(basePath, '/logo.svg'),
      },
      algolia: {
        id: "BH4D9OD16A",
        key: "d3bce2a3d5eff7e76467823aae0c647e",
        index: "vitelabs"
      },
      topbar: {
        banner: false
      },
      sidebar: {
        auto: true,
        nav: [
          {
            title: "Resources",
            children: [
              {
                title: "Vite Documentation",
                path: "https://docs.vite.org"
              },
              {
                title: "Vite.js",
                path: "https://docs.vite.org/vite.js/"
              }
            ]
          }
        ]
      },
      footer: {
        logo: path.join(basePath, "/logo.svg"),
        textLink: {
          text: "vite.org",
          url: "https://vite.org"
        },
        services: [
          {
            service: "twitter",
            url: "https://twitter.com/vitelabs"
          },
          {
            service: "medium",
            url: "https://medium.com/vitelabs"
          },
          {
            service: "telegram",
            url: "https://t.me/vite_ann"
          },
          {
            service: "discord",
            url: "https://discord.com/invite/CsVY76q"
          },
          {
            service: "github",
            url: "https://github.com/vitelabs"
          }
        ],
        smallprint: `© ${new Date().getFullYear()} Vite Labs.`,
      }
    },
};