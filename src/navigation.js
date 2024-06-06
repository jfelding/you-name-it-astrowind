import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Forside',
      href: '/'
    },
    // {
    //   text: 'Aktiviteter',
    //   href: getBlogPermalink(),
    // },
    // {
    //   text: 'Repertoire',
    //   href: '/repertoire',
    // },
    // {
    //   text: 'Kontakt',
    //   href: '/kontakt',
    // },
    {
      text: 'Nyheder',
      href: getPermalink('nyheder', 'category'),
    },
    {
      text: 'Events',
      href: getPermalink('events', 'category'),
    },
    {
      text: 'Aktiviteter',
      href: getPermalink('aktiviteter', 'category'),
    },
      {text: 'Lakridspiber', 
      href: '/forklaedt-som-pibe'
    },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
    
  ],
};

export const footerData = {
  // links: [
  //   {
  //     title: 'Aktiviteter',
  // links: [
  //   { text: 'Korweekender', href: '/korweekender' },
  //     ],
  //   },
    // {
    //   title: 'Repertoire',
    //   links: [
    //   ],
    // },
  //   {
  //     title: 'Kontakt',
  //     links: [
  //       { text: 'Medlemskab: Syng med!', href: '/medlemskab-syng-med' },
  //       // { text: 'Korleder Mads Kronborg', href: '/korleder-mads-kronborg' },
  //       // { text: 'Gæsteundervisere', href: '/gaesteundervisere' },
  //     ],
  //   },
  // ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/younameitkoret' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/younameitkoret' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/jfelding/you-name-it-astrowind' },
  ],
  // footNote: `
  //   <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
  //   Lavet med <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a>.
  // `,
};
