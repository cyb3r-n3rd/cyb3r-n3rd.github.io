// gitprofile.config.js

const config = {
  github: {
    username: 'cyb3r-n3rd', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['laravel-ecommerce'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'shivam413',
    twitter: 'cyb3r_n3rd',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: 'cyb3r-n3rd',
    dev: '',
    website: 'https://cyb3r-n3rd.github.io',
    phone: '',
    email: 'v.shivam1996@gmail.com',
  },
  skills: [
     'Pentesting',
    'Hardware',
    'Forensics',
    'Mobile',
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
   
  ],
  experiences: [
    {
      company: 'C3i Hub - IIT Kanpur',
      position: 'Security Assessment Engineer',
      from: 'March 2021',
      to: 'Present',
    },
    {
      company: 'Bulwark CyberX LLP',
      position: 'Cyber Security Intern',
      from: 'Feb 2020',
      to: 'August 2020',
    },
    {
      company: 'Cyber Cell - U.P.Police',
      position: 'Cyber Forensics Intern',
      from: 'January 2019',
      to: ' Feburary 2019',
    },
  ],
  education: [
    {
      institution: 'Pranveer Singh Institute Of Technology',
      degree: 'Bachelor of Technology',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Bishop West Cott School',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2013',
      to: '2015',
    },
      ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'cyb3r-n3rd',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-WLLB5E14M6', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '2617601', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
