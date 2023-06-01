const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Modern Wiki',
  tagline: 'PolitCubes Modern - официальная документация',
  url: 'https://babkacubes.ga',
  baseUrl: '/wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'PolitCubes',
  projectName: 'modern-wiki',
  themeConfig: {
    navbar: {
      title: 'Modern Wiki',
      logo: {
        alt: 'PolitCubes Logo',
        src: 'logo.svg',
        srcDark: 'logo_dark.svg'
      },
      items: [
        {
          href: 'https://github.com/PolitCubes/modern-wiki',
          label: 'GitHub',
          position: 'right',
        },
		{to: '/', label: 'Документация', position: 'left'},
		{to: '/blog', label: 'Блог', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'PolitCubes Logo',
        src: 'logo_dark.svg',
      },

      links: [
        {
          title: 'Сообщество',
          items: [
            {
              label: 'VK',
              href: 'https://vk.com/politcubes',
            },
            {
              label: 'Сайт',
              href: 'https://politcubes.com',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/upFFUFMrWC',
            },
            {
              label: 'Служба поддержки',
              href: 'mailto:support@politcubes.com',
            },
          ],
        },
        {
          title: 'Аккаунт',
          items: [
            {
              label: 'Личный кабинет',
              href: 'https://politcubes.com/auth',
            },
            {
              label: 'Забыли пароль?',
              href: 'https://politcubes.com/restore',
            },
            {
              label: 'Регистрация',
              href: 'https://politcubes.com/actions',
            },
          ],
        },
        {
          title: 'Другое',
          items: [
            {
              label: 'HotMC',
              href: 'https://hotmc.ru/minecraft-server-210638',
            },
            {
              label: 'Онлайн-карта',
              href: 'https://modern.politcubes.com',
            },
          ],
        },
      ],
      copyright: `© 2019-${new Date().getFullYear()} Команда PolitCubes`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  i18n: {
    defaultLocale: "ru",
    locales: ["ru"]
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/PolitCubes/modern-wiki/blob/main/',
        },
		blog: {
          showReadingTime: false,
          editUrl:
            'https://github.com/PolitCubes/modern-wiki/blob/main/',
        },
      },
    ],
  ],
};
