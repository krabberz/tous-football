const COUNTRIES = [
  // A countries
  { id: 'afghanistan', name: 'Afghanistan' },
  { id: 'albania', name: 'Albania' },
  { id: 'algeria', name: 'Algeria' },
  { id: 'amsamoa', name: 'American Samoa' },
  { id: 'andorra', name: 'Andorra' },
  { id: 'angola', name: 'Angola' },
  { id: 'anguilla', name: 'Anguilla' },
  { id: 'antigua', name: 'Antigua & Barbuda' },
  { id: 'argentina', name: 'Argentina' },
  { id: 'armenia', name: 'Armenia' },
  { id: 'aruba', name: 'Aruba' },
  { id: 'australia', name: 'Australia' },
  { id: 'austria', name: 'Austria' },
  { id: 'azerbaijan', name: 'Azerbaijan' },

  // B countries
  { id: 'bahamas', name: 'Bahamas' },
  { id: 'bahrain', name: 'Bahrain' },
  { id: 'bangladesh', name: 'Bangladesh' },
  { id: 'barbados', name: 'Barbados' },
  { id: 'belarus', name: 'Belarus' },
  { id: 'belgium', name: 'Belgium' },
  { id: 'belize', name: 'Belize' },
  { id: 'benin', name: 'Benin' },
  { id: 'bermuda', name: 'Bermuda' },
  { id: 'bhutan', name: 'Bhutan' },
  { id: 'bolivia', name: 'Bolivia' },
  { id: 'bosnia', name: 'Bosnia and Herzegovina' },
  { id: 'botswana', name: 'Botswana' },
  // { id: 'bougainville', name: 'Bougainville' },
  { id: 'brazil', name: 'Brazil' },
  { id: 'bvi', name: 'British Virgin Islands' },
  { id: 'brunei', name: 'Brunei' },
  { id: 'bulgaria', name: 'Bulgaria' },
  { id: 'burkinafaso', name: 'Burkina Faso' },
  { id: 'burundi', name: 'Burundi' },

  // C countries
  { id: 'caboverde', name: 'Cabo Verde' },
  { id: 'cambodia', name: 'Cambodia' },
  { id: 'cameroon', name: 'Cameroon' },
  { id: 'canada', name: 'Canada' },
  { id: 'cayman', name: 'Cayman Islands' },
  { id: 'car', name: 'Central African Republic' },
  { id: 'tchad', name: 'Chad' },
  { id: 'chile', name: 'Chile' },
  { id: 'prc', name: 'China PR' },
  { id: 'taipei', name: 'Chinese Taipei' },
  { id: 'colombia', name: 'Colombia' },
  { id: 'comoros', name: 'Comoros' },
  { id: 'congo', name: 'Congo' },
  { id: 'drc', name: 'Congo DR' },
  { id: 'cook', name: 'Cook Islands' },
  { id: 'costarica', name: 'Costa Rica' },
  { id: 'ivorycoast', name: "Côte d'Ivoire" },
  { id: 'croatia', name: 'Croatia' },
  { id: 'cuba', name: 'Cuba' },
  { id: 'curacao', name: 'Curaçao' },
  { id: 'cyprus', name: 'Cyprus' },
  { id: 'czechia', name: 'Czechia' },

  // D countries
  { id: 'denmark', name: 'Denmark' },
  { id: 'djibouti', name: 'Djibouti' },
  { id: 'dominica', name: 'Dominica' },
  { id: 'dr', name: 'Dominican Republic' },
  { id: 'dprk', name: 'DPR Korea' },

  // E Countries
  { id: 'ecuador', name: 'Ecuador' },
  { id: 'egypt', name: 'Egypt' },
  { id: 'elsalvador', name: 'El Salvador' },
  { id: 'england', name: 'England' },
  { id: 'eguinea', name: 'Equatorial Guinea' },
  { id: 'eritrea', name: 'Eritrea' },
  { id: 'estonia', name: 'Estonia' },
  { id: 'eswatini', name: 'Eswatini' },
  { id: 'ethiopia', name: 'Ethiopia' },

  // F countries
  { id: 'faroe', name: 'Faroe Islands' },
  { id: 'fiji', name: 'Fiji' },
  { id: 'finland', name: 'Finland' },
  { id: 'france', name: 'France' },

  // G countries
  { id: 'gabon', name: 'Gabon' },
  { id: 'georgia', name: 'Georgia' },
  { id: 'germany', name: 'Germany' },
  { id: 'ghana', name: 'Ghana' },
  { id: 'gibraltar', name: 'Gibraltar' },
  { id: 'greece', name: 'Greece' },
  { id: 'grenada', name: 'Grenada' },
  { id: 'guam', name: 'Guam' },
  { id: 'guatemala', name: 'Guatemala' },
  { id: 'guinea', name: 'Guinea' },
  { id: 'guineabissau', name: 'Guinea-Bissau' },
  { id: 'guyana', name: 'Guyana' },

  // H countries
  { id: 'haiti', name: 'Haiti' },
  { id: 'honduras', name: 'Honduras' },
  { id: 'hongkongsar', name: 'Hong Kong' },
  { id: 'hungary', name: 'Hungary' },

  // I countries
  { id: 'iceland', name: 'Iceland' },
  { id: 'india', name: 'India' },
  { id: 'indonesia', name: 'Indonesia' },
  { id: 'iran', name: 'IR Iran' },
  { id: 'iraq', name: 'Iraq' },
  { id: 'israel', name: 'Israel' },
  { id: 'italy', name: 'Italy' },

  // J countries
  { id: 'jamaica', name: 'Jamaica' },
  { id: 'japan', name: 'Japan' },
  { id: 'jordan', name: 'Jordan' },

  // K countries
  { id: 'kazakhstan', name: 'Kazakhstan' },
  { id: 'kenya', name: 'Kenya' },
  { id: 'korea', name: 'Kora Republic' },
  { id: 'kosovo', name: 'Kosovo' },
  { id: 'kuwait', name: 'Kuwait' },
  { id: 'kyrgyzstan', name: 'Kyrgyz Republic' },

  // L countries
  { id: 'laos', name: 'Laos' },
  { id: 'latvia', name: 'Latvia' },
  { id: 'lebanon', name: 'Lebanon' },
  { id: 'lesotho', name: 'Lesotho' },
  { id: 'liberia', name: 'Liberia' },
  { id: 'libya', name: 'Libya' },
  { id: 'liechtenstein', name: 'Liechtenstein' },
  { id: 'lithuania', name: 'Luxembourg' },
  { id: 'luxembourg', name: 'Luxembourg' },

  // M countries
  { id: 'macausar', name: 'Macau, China' },
  { id: 'madagascar', name: 'Madagascar' },
  { id: 'malawi', name: 'Malawi' },
  { id: 'malaysia', name: 'Malaysia' },
  { id: 'maldives', name: 'Maldives' },
  { id: 'mali', name: 'Mali' },
  { id: 'malta', name: 'Malta ' },
  { id: 'mauritania', name: 'Mauritania' },
  { id: 'mauritius', name: 'Mauritius' },
  { id: 'mexico', name: 'Mexico' },
  { id: 'moldova', name: 'Moldova' },
  { id: 'mongolia', name: 'Mongolia' },
  { id: 'montenegro', name: 'Montenegro' },
  { id: 'montserrat', name: 'Montserrat' },
  { id: 'morocco', name: 'Morocco' },
  { id: 'mozambique', name: 'Mozambique' },
  { id: 'myanmar', name: 'Myanmar' },
  
  // N countries
  { id: 'namibia', name: 'Namibia' },
  { id: 'nepal', name: 'Nepal' },
  { id: 'netherlands', name: 'Netherlands' },
  { id: 'ncaledonia', name: 'New Caledonia' },
  { id: 'nzealand', name: 'New Zealand' },
  { id: 'nicaragua', name: 'Nicaragua' },
  { id: 'niger', name: 'Niger' },
  { id: 'nigeria', name: 'Nigeria' },
  { id: 'northmacedonia', name: 'North Macedonia' },
  { id: 'northernireland', name: 'Northern Ireland' },
  { id: 'norway', name: 'Norway' },

  // O countries
  { id: 'oman', name: 'Oman' },

  // P countries
  { id: 'pakistan', name: 'Pakistan' },
  { id: 'palestine', name: 'Palestine' },
  { id: 'panama', name: 'Panama' },
  { id: 'png', name: 'Papua New Guinea' },
  { id: 'paraguay', name: 'Paraguay' },
  { id: 'peru', name: 'Peru' },
  { id: 'philippines', name: 'Philippines' },
  { id: 'poland', name: 'Poland' },
  { id: 'portugal', name: 'Portugal' },
  { id: 'puertorico', name: 'Puerto Rico' },

  // Q countries
  { id: 'qatar', name: 'Qatar' },

  // R countries
  { id: 'ireland', name: 'Republic of Ireland' },
  { id: 'romania', name: 'Romania' },
  { id: 'russia', name: 'Russia' },
  { id: 'rwanda', name: 'Rwanda' },

  // S countries
  { id: 'samoa', name: 'Samoa' },
  { id: 'sanmarino', name: 'San Marino' },
  { id: 'saotome', name: 'São Tomé and Principe' },
  { id: 'saudiarabia', name: 'Saudi Arabia' },
  { id: 'scotland', name: 'Scotland' },
  { id: 'senegal', name: 'Senegal' },
  { id: 'serbia', name: 'Serbia' },
  { id: 'seychelles', name: 'Seychelles' },
  { id: 'sierraleone', name: 'Sierra Leone' },
  { id: 'singapore', name: 'Singapore' },
  { id: 'slovakia', name: 'Slovakia' },
  { id: 'slovenia', name: 'Slovenia' },
  { id: 'solomon', name: 'Solomon Islands' },
  { id: 'somalia', name: 'Somalia' },
  { id: 'aforikaborwa', name: 'South Africa' },
  { id: 'suuthsudan', name: 'South Sudan' },
  { id: 'spain', name: 'Spain' },
  { id: 'srilanka', name: 'Sri Lanka' },
  { id: 'stkitts', name: 'St. Kitts and Nevis' },
  { id: 'stlucia', name: 'St. Lucia' },
  { id: 'stvg', name: 'St. Vincent / Grenadines' },
  { id: 'sudan', name: 'Sudan' },
  { id: 'suriname', name: 'Suriname' },
  { id: 'sweden', name: 'Sweden' },
  { id: 'switzerland', name: 'Switzerland' },
  { id: 'syria', name: 'Syria' },

  // T countries
  { id: 'tahiti', name: 'Tahiti' },
  { id: 'tajikistan', name: 'Tajikistan' },
  { id: 'tanzania', name: 'Tanzania' },
  { id: 'thailand', name: 'Thailand' },
  { id: 'gambia', name: 'The Gambia' },
  { id: 'easttimor', name: 'Timor-Leste' },
  { id: 'togo', name: 'Togo' },
  { id: 'tonga', name: 'Tonga' },
  { id: 'trinidad', name: 'Trinidad and Tobago' },
  { id: 'tunisia', name: 'Tunisia' },
  { id: 'turkiye', name: 'Türkiye' },
  { id: 'turkmenistan', name: 'Turkmenistan' },
  { id: 'turks', name: 'Turks and Caicos Islands' },

  // U countries
  { id: 'uganda', name: 'Uganda' },
  { id: 'ukraine', name: 'Ukraine' },
  { id: 'uae', name: 'United Arab Emirates' },
  { id: 'uruguay', name: 'Uruguay' },
  { id: 'usvi', name: 'US Virgin Islands' },
  { id: 'usa', name: 'USA' },
  { id: 'uzbekistan', name: 'Uzbekistan' },

  // V countries
  { id: 'vanuatu', name: 'Vanuatu' },
  { id: 'venezuela', name: 'Venezuela' },
  { id: 'vietnam', name: 'Vietnam' },

  // W countries
  { id: 'wales', name: 'Wales' },

  // Y countries
  { id: 'yemen', name: 'Yemen' },

  // Z countries
  { id: 'zambia', name: 'Zambia' },
  { id: 'zimbabwe', name: 'Zimbabwe' }

]

const LEAGUES_BY_COUNTRY = {
  afghanistan: {
    level1: [
      { id: 'acl', name: 'Afghanistan Champions League' }
    ]
  },
  albania: {
    level1: [
      { id: 'ks', name: 'Kategoria Superiore' }
    ],
    level2: [
      { id: 'kep', name: 'Kategoria e Parë', promotesTo: ['ks']}
    ],
    level3: [
      { id: 'ked', name: 'Kategoria e Dytë', promotesTo: ['kep'] }
    ],
    level4: [
      { id: 'ket', name: 'Kategoria e Tretë', promotesTo: ['ked'] }
    ]
  },
  algeria: {
    level1: [
      {id: 'alpu', name: 'Algerian Ligue Professionnelle 1'}
    ],
    level2: [
      {id: 'ld-gcw', name: 'League 2 Group Centre-west', promotesTo: ['alpu']},
      {id: 'ld-gce', name: 'League 2 Group Centre-east', promotesTo: ['alpu']},
    ],
    level3: [
      {id: 'ir-gw', name: 'Interregional Group West', promotesTo: ['ld-gcw']},
      {id: 'ir-gcw', name: 'Interregional Group Centre West', promotesTo: ['ld-gcw']},
      {id: 'ir-gsw', name: 'Interregional Group South West', promotesTo: ['ld-gcw']},
      {id: 'ir-gce', name: 'Interregional Group Centre East', promotesTo: ['ld-gce']},
      {id: 'ir-ge', name: 'Interregional Group East', promotesTo: ['ld-gce']},
      {id: 'ir-gse', name: 'Interregional Group South East', promotesTo: ['ld-gce']}
    ],
  },
  amsamoa: {
    level1: [
      { id: 'ffassl', name: 'FFAS Senior League' }
    ]
  },
  andorra: {
    level1: [
      { id: 'pd', name: 'Primera Divisió' }
    ],
    level2: [
      { id: 'sd', name: 'Segona Divisió', promotesTo: ['pd'] }
    ]
  },
  england: {
    level1: [
      { id: 'pl', name: 'Premier League'}
    ],
    level2: [
      { id: 'efl-c', name: 'EFL Championship', promotesTo: ['pl']}
    ],
    level3: [
      { id: 'efl-lo', name: 'EFL League One', promotesTo: ['efl-c']}
    ],
    level4: [
      { id: 'efl-lt', name: 'EFL League Two', promotesTo: ['efl-lo']}
    ],
    level5: [
      { id: 'nl', name: 'National League', promotesTo: ['efl-lt']}
    ],
    level6: [
      { id: 'nl-n', name: 'National League North', promotesTo: ['nl']},
      { id: 'nl-s', name: 'National League South', promotesTo: ['nl']}
    ],
    level7: [
      { id: 'npl-pd', name: 'Northern Premier League Premier Division', promotesTo: ['nl-n']},
      { id: 'sl-pd-c', name: 'Southern League Premier Division Central', promotesTo: ['nl-n']},
      { id: 'sl-pd-s', name: 'Southern League Premier Division South', promotesTo: ['nl-s']},
      { id: 'il-pd', name: 'Isthmian League Premier Division', promotesTo: ['nl-s']}
    ],
    level8: [
      { id: 'npl-do-e', name: 'Northern Premier League Division One East', promotesTo: ['npl-pd']},
      { id: 'npl-do-w', name: 'Northern Premier League Division One West', promotesTo: ['npl-pd']},
      { id: 'npl-do-m', name: 'Northern Premier League Division One Midlands', promotesTo: ['sl-pd-c']},
      { id: 'sl-do-c', name: 'Southern League Division One Central', promotesTo: ['sl-pd-c']},
      { id: 'sl-do-s', name: 'Southern League Division One South', promotesTo: ['sl-pd-s']},
      { id: 'il-do-sc', name: 'Isthmian League Division One South Central', promotesTo: ['sl-pd-s']},
      { id: 'il-do-n', name: 'Isthmian League Division One North', promotesTo: ['il-pd']},
      { id: 'il-do-se', name: 'Isthmian League Division One South East', promotesTo: ['il-pd']}
    ]
  },
  faroe: {
    level1: [
      { id: 'fipl', name: 'Faroe Islands Premier League' }
    ],
    level2: [
      { id: 'ed', name: '1. deild', promotesTo: ['fipl']}
    ],
    level3: [
      { id: 'tveyd', name: '2. deild', promotesTo: ['ed']}
    ],
    level4: [
      { id: 'td', name: '3. deild', promotesTo: ['tveyd']}
    ]
  },
  france: {
    level1: [
      { id: 'lu', name: 'Ligue 1' } 
    ],
    level2: [
      { id: 'ld', name: 'Ligue 2', promotesTo: ['lu']}
    ],
    level3: [
      { id: 'lt', name: 'Ligue', promotesTo: ['ld']}
    ],
    level4: [
      { id: 'nu', name: 'National 1', promotesTo: ['lt']}
    ],
    level5: [
      { id: 'nd-a', name: 'National 2 Group A', promotesTo: ['nu']},
      { id: 'nd-b', name: 'National 2 Group B', promotesTo: ['nu']},
      { id: 'nd-c', name: 'National 2 Group C', promotesTo: ['nu']}
    ]
  },
  germany: {
    level1: [
      { id: 'e-bl', name: '1. Bundesliga' }
    ],
    level2: [
      { id: 'z-bl', name: '2. Bundesliga', promotesTo: ['e-bl']}
    ],
    level3: [
      { id: 'd-l', name: '3. Liga', promotesTo: ['z-bl']}
    ],
    level4: [
      { id: 'rl-n', name: 'Regionalliga Nord', promotesTo: ['d-l']},
      { id: 'rl-no', name: 'Regionalliga Nordost', promotesTo: ['d-l']},
      { id: 'rl-w', name: 'Regionalliga West', promotesTo: ['d-l']},
      { id: 'rl-sw', name: 'Regionalliga Südwest', promotesTo: ['d-l']},
      { id: 'rl-b', name: 'Regionalliga Bayern', promotesTo: ['d-l']}
    ]
  },
  indonesia: {
    level1: [
      { id: 'sl', name: 'Super League' }
    ],
    level2: [
      { id: 'c-a', name: 'Championship A', promotesTo: ['sl']},
      { id: 'c-b', name: 'Championship B', promotesTo: ['sl']}
    ]
  },
  sweden: {
    level1: [
      { id: 'as', name: 'Allsvenskan' }
    ],
    level2: [
      { id: 'se', name: 'Superettan', promotesTo: ['as']}
    ],
    level3: [
      { id: 'e-n', name: 'Ettan Norra', promotesTo: ['se']},
      { id: 'e-s', name: 'Ettan Södra', promotesTo: ['se']}
    ],
    level4: [
      { id: 'dt-n', name: 'Division 2 Norrland', promotesTo: ['e-n']},
      { id: 'dt-ns', name: 'Division 2 Norra Svealand', promotesTo: ['e-n']},
      { id: 'dt-ss', name: 'Division 2 Södra Svealand', promotesTo: ['e-n']},
      { id: 'dt-ng', name: 'Division 2 Norra Götaland', promotesTo: ['e-s']},
      { id: 'dt-vg', name: 'Division 2 Västra Götaland', promotesTo: ['e-s']},
      { id: 'dt-sg', name: 'Division 2 Södra Götaland', promotesTo: ['e-s']}
    ]
  }
}

// main colour
const MTC_THEME = {
  accent: '#4A4A4A',
  glow: 'rgba(74, 74, 74, 0.3)',
  ribbons: ['#6A6A6A', '#4A4A4A', '#2A2A2A']
}

// put all nation colours here 
// ribbons: light shade, base colour (same as accent), dark shade)
const COUNTRY_THEMES = {
  england: {
    accent: '#ef4444',
    glow: 'rgba(239, 68, 68, 0.3)',
    ribbons: ['#f87171', '#ef4444', '#b91c1c'] 
  },
  france: {
    accent: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.3)',
    ribbons: ['#60a5fa', '#3b82f6', '#1d4ed8']
  },
  germany: {
    accent: '#eab308',
    glow: 'rgba(234, 179, 8, 0.3)',
    ribbons: ['#fde047', '#eab308', '#a16207']
  },
  italy: {
    accent: '#10b981',
    glow: 'rgba(16, 185, 129, 0.3)',
    ribbons: ['#34d399', '#10b981', '#047857']
  },
  spain: {
    accent: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.3)',
    ribbons: ['#fbbf24', '#f59e0b', '#b45309']
  },
  scotland: {
    accent: '#0284c7',
    glow: 'rgba(2, 132, 199, 0.3)',
    ribbons: ['#38bdf8', '#0284c7', '#0369a1']
  }
  // add more using: 
  //            nation: { accent: '...', glow: '...', ribbons: ['light', 'base', 'dark'] }
}

// put all team colours here
const TEAM_THEMES = {
  'arsenal': {
    accent: '#dc2626',
    glow: 'rgba(220, 38, 38, 0.3)',
    ribbons: ['#f87171', '#dc2626', '#991b1b']
  },
  'chelsea': {
    accent: '#2563eb',
    glow: 'rgba(37, 99, 235, 0.3)',
    ribbons: ['#60a5fa', '#2563eb', '#1e40af']
  }
  // add more using: 
  //            'team-id': { accent: '...', glow: '...', ribbons: ['light', 'base', 'dark'] }
}

const FEATURED_PAGES = {

}

function getRandomPage() {
  const pages = []

  // 1. Add all Country pages dynamically from COUNTRIES
  COUNTRIES.forEach(c => {
    pages.push({
      title: `${c.name} Leagues`,
      hash: `#leagues/${c.id}`,
      desc: `Explore the football league structure of ${c.name}.`
    })
  })

  // 2. Add all League pages dynamically from LEAGUES_BY_COUNTRY
  Object.keys(LEAGUES_BY_COUNTRY).forEach(countryId => {
    const country = COUNTRIES.find(c => c.id === countryId)
    const countryName = country ? country.name : countryId
    const countryData = LEAGUES_BY_COUNTRY[countryId]

    Object.values(countryData).flat().forEach(league => {
      pages.push({
        title: league.name,
        hash: `#league/${league.id}`,
        desc: `Check out the standings and tier details for ${league.name} in ${countryName}.`
      })
    })
  })

  // 3. Add all Team pages dynamically from TEAM_THEMES
  Object.keys(TEAM_THEMES).forEach(teamId => {
    pages.push({
      title: teamId.charAt(0).toUpperCase() + teamId.slice(1),
      hash: `#team/${teamId}`,
      desc: `View club details and performance metrics.`
    })
  })

  // Pick a random entry from the dynamic pool
  return pages[Math.floor(Math.random() * pages.length)]
}

function renderHome() {
  setMainTheme()

  const randomPage = getRandomPage()

  const titleEl = document.getElementById('potd-title')
  const descEl = document.getElementById('potd-desc')
  const linkEl = document.getElementById('potd-link')

  if (titleEl && descEl && linkEl) {
    titleEl.textContent = randomPage.title
    descEl.textContent = randomPage.desc
    linkEl.setAttribute('href', randomPage.hash)
  }
}

function route() {
  const hash = window.location.hash || '#home'

  // Hide all views first
  document.querySelectorAll('.view').forEach(view => view.classList.add('hidden'))

  if (hash === '#countries') {
    // 1. All Countries View
    setMainTheme()
    renderCountries()
    document.getElementById('view-countries').classList.remove('hidden')

  } else if (hash.startsWith('#leagues/')) {
    // 2. Leagues View
    const countryId = hash.replace('#leagues/', '')
    const country = COUNTRIES.find(c => c.id === countryId)
    const countryName = country ? country.name : countryId

    setCountryTheme(countryId)
    document.getElementById('selected-country-title').textContent = `${countryName} Leagues`
    renderLeagues(countryId)
    document.getElementById('view-leagues').classList.remove('hidden')

  } else if (hash.startsWith('#league/')) {
    // 3. League Dashboard View
    const leagueId = hash.replace('#league/', '')
    const isNLS = leagueId === 'nl-s' || leagueId === 'nls'
    document.getElementById('league-name-header').textContent = isNLS ? 'National League South' : leagueId.toUpperCase()
    renderLeagueDashboard()
    document.getElementById('view-league-dashboard').classList.remove('hidden')

  } else if (hash.startsWith('#team/')) {
    // 4. Team Dashboard View
    const teamId = hash.replace('#team/', '')
    setTeamTheme(teamId)
    document.getElementById('team-name-header').textContent = teamId === 'hemel' ? 'Hemel Hempstead Town FC' : teamId
    renderTeamDashboard()
    document.getElementById('view-team-dashboard').classList.remove('hidden')

  } else {
    // 5. Default Homepage View (#home, #, or unknown routes)
    renderHome()
    document.getElementById('view-home').classList.remove('hidden')
  }
}

function setMainTheme() {
  applyTheme(MTC_THEME)
}

function setCountryTheme(countryId) {
  const theme = COUNTRY_THEMES[countryId] || MTC_THEME
  applyTheme(theme)
}

function setTeamTheme(teamId) {
  const theme = TEAM_THEMES[teamId] || MTC_THEME
  applyTheme(theme)
}

function applyTheme(theme) {
  document.documentElement.style.setProperty('--country-accent', theme.accent)
  document.documentElement.style.setProperty('--country-glow', theme.glow)
  document.documentElement.style.setProperty('--ribbon-1', theme.ribbons[0])
  document.documentElement.style.setProperty('--ribbon-2', theme.ribbons[1])
  document.documentElement.style.setProperty('--ribbon-3', theme.ribbons[2])
}

function renderCountries() {
  const container = document.getElementById('country-grid')
  const searchInput = document.getElementById('country-search-input')
  if (!container) return

  // 1. Reset search input value when rendering
  if (searchInput) searchInput.value = ''

  // 2. Render cards with normalized data-name attributes
  container.innerHTML = COUNTRIES.map(c => `
    <div class="flag-card" data-name="${c.name.toLowerCase()}" onclick="window.location.hash='#leagues/${c.id}'">
      <div class="country-image-placeholder" style="height: 80px; background: #eee; margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: center; border: 1px dashed #ccc;">
        <span style="font-size: 0.8rem; color: #666;">Image Placeholder</span>
      </div>
      <div class="country-label">${c.name}</div>
    </div>
  `).join('')

  // 3. Attach input event listener directly (bypasses window scope issues)
  if (searchInput && !searchInput.dataset.hasListener) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim()
      const cards = container.querySelectorAll('.flag-card')

      cards.forEach(card => {
        const countryName = card.getAttribute('data-name') || ''
        if (countryName.includes(query)) {
          card.style.display = ''
        } else {
          card.style.display = 'none'
        }
      })
    })
    // Flag to prevent adding multiple listeners if renderCountries runs again
    searchInput.dataset.hasListener = 'true'
  }
}


// search
function filterCountries() {
  const query = document.getElementById('country-search-input').value.toLowerCase().trim()
  const cards = document.querySelectorAll('#country-grid .flag-card')

  cards.forEach(card => {
    const countryName = card.getAttribute('data-name')
    if (countryName.includes(query)) {
      card.style.display = '' // Show card
    } else {
      card.style.display = 'none' // Hide card
    }
  })
}

function renderLeagues(countryId) {
  setCountryTheme(countryId)

  const container = document.getElementById('view-leagues')
  if (!container) return

  const countryData = LEAGUES_BY_COUNTRY[countryId]

  let levelsWrapper = document.getElementById('dynamic-levels-wrapper')
  if (!levelsWrapper) {
    levelsWrapper = document.createElement('div')
    levelsWrapper.id = 'dynamic-levels-wrapper'
    container.appendChild(levelsWrapper)
  }

  if (!countryData) {
    levelsWrapper.innerHTML = `<p style="color: var(--text-muted); padding: 1rem; text-align: center;">No leagues configured for this country yet.</p>`
    return
  }

  const levelKeys = Object.keys(countryData)

  // 3. Render SVG Canvas + HTML Tiers
  levelsWrapper.innerHTML = `
    <svg id="league-svg-canvas"></svg>
    ${levelKeys.map((levelKey, index) => {
      const leagues = countryData[levelKey]
      const levelNumber = index + 1

      return `
        <div class="league-level-section">
          <h4 class="level-header">Level ${levelNumber}</h4>
          <div class="league-row">
            ${leagues.map(l => {
              if (l.isFeederLink) {
                return `
                  <div class="league-card feeder-card" id="league-${l.id}" data-promotes-to="${(l.promotesTo || []).join(',')}" onclick="window.location.hash='#feeders/${l.id}'">
                    <div class="league-card-title">${l.name}</div>
                    <div class="feeder-badge">View Sub-Divisions &rarr;</div>
                  </div>
                `
              }

              return `
                <div class="league-card" id="league-${l.id}" data-promotes-to="${(l.promotesTo || []).join(',')}" onclick="window.location.hash='#league/${l.id}'">
                  <div class="league-card-title">${l.name}</div>
                </div>
              `
            }).join('')}
          </div>
        </div>
      `
    }).join('')}
  `

  requestAnimationFrame(() => {
    drawConnections()
    setTimeout(drawConnections, 50)
  })

  window.removeEventListener('resize', drawConnections)
  window.addEventListener('resize', drawConnections)
}

function drawConnections() {
  const wrapper = document.getElementById('dynamic-levels-wrapper')
  const svg = document.getElementById('league-svg-canvas')
  if (!wrapper || !svg) return

  const wrapperRect = wrapper.getBoundingClientRect()
  svg.setAttribute('width', wrapper.scrollWidth || wrapperRect.width)
  svg.setAttribute('height', wrapper.scrollHeight || wrapperRect.height)

  let svgContent = ''

  const cards = wrapper.querySelectorAll('.league-card')
  cards.forEach(childCard => {
    const targetsStr = childCard.getAttribute('data-promotes-to')
    if (!targetsStr) return

    const childId = childCard.id.replace('league-', '')
    const targetIds = targetsStr.split(',').filter(Boolean)

    targetIds.forEach(targetId => {
      const parentCard = document.getElementById(`league-${targetId}`)
      if (!parentCard) return

      const childRect = childCard.getBoundingClientRect()
      const parentRect = parentCard.getBoundingClientRect()

      const x1 = childRect.left + childRect.width / 2 - wrapperRect.left + wrapper.scrollLeft
      const y1 = childRect.top - wrapperRect.top + wrapper.scrollTop

      const x2 = parentRect.left + parentRect.width / 2 - wrapperRect.left + wrapper.scrollLeft
      const y2 = parentRect.bottom - wrapperRect.top + wrapper.scrollTop

      // Store source and target IDs on line for hover tracing
      svgContent += `
        <line 
          x1="${x1}" y1="${y1}" 
          x2="${x2}" y2="${y2}" 
          data-from="${childId}" 
          data-to="${targetId}" 
          class="league-connection-line"
        />
      `
    })
  })

  svg.innerHTML = svgContent

  // Attach hover listeners after lines are drawn
  attachHoverHighlighting()
}

function attachHoverHighlighting() {
  const cards = document.querySelectorAll('.league-card')
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const cardId = card.id.replace('league-', '')
      highlightPromotionPath(cardId)
    })

    card.addEventListener('mouseleave', () => {
      resetLineHighlights()
    })
  })
}

function highlightPromotionPath(currentLeagueId) {
  const wrapper = document.getElementById('dynamic-levels-wrapper')
  if (!wrapper) return

  // Dim non-matching lines slightly for better contrast
  wrapper.classList.add('lines-hovered')

  // Recursively find and highlight only upward promotion lines
  function traceUpwards(leagueId) {
    const card = document.getElementById(`league-${leagueId}`)
    if (!card) return

    const targetsStr = card.getAttribute('data-promotes-to')
    if (!targetsStr) return

    const targetIds = targetsStr.split(',').filter(Boolean)
    targetIds.forEach(targetId => {
      // Find connecting SVG line from current league up to target
      const line = wrapper.querySelector(`line[data-from="${leagueId}"][data-to="${targetId}"]`)
      if (line) {
        line.classList.add('highlight-white')
      }
      // Continue tracing upward if target promotes further
      traceUpwards(targetId)
    })
  }

  traceUpwards(currentLeagueId)
}

function resetLineHighlights() {
  const wrapper = document.getElementById('dynamic-levels-wrapper')
  if (!wrapper) return

  wrapper.classList.remove('lines-hovered')
  const highlightedLines = wrapper.querySelectorAll('line.highlight-white')
  highlightedLines.forEach(line => line.classList.remove('highlight-white'))
}

function renderLeagueDashboard() {
  const tableBox = document.getElementById('league-standings-table')
  if (!tableBox) return

  tableBox.innerHTML = `
    <table style="width: 100%; text-align: left; border-collapse: collapse; color: white;">
      <thead>
        <tr style="border-bottom: 1px solid #333;">
          <th>#</th>
          <th>Team</th>
          <th>P</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #222; cursor: pointer;" onclick="window.location.hash='#team/hemel'">
          <td>1</td>
          <td><strong>Hemel Hempstead Town</strong></td>
          <td>12</td>
          <td>28</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td>2</td>
          <td>St Albans City</td>
          <td>12</td>
          <td>25</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td>3</td>
          <td>Chelmsford City</td>
          <td>12</td>
          <td>22</td>
        </tr>
      </tbody>
    </table>
  `
}

function renderTeamDashboard() {
  const infoBox = document.getElementById('team-recent-info')
  if (!infoBox) return

  infoBox.innerHTML = `
    <p style="margin-bottom: 0.5rem;"><strong>Current Position:</strong> 1st in National League South</p>
    <p><strong>Last Match:</strong> Hemel Hempstead Town 2 - 1 St Albans City (FT)</p>
  `
}

window.addEventListener('hashchange', route)
window.addEventListener('DOMContentLoaded', route)