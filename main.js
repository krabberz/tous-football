const COUNTRIES = [
  { id: 'england', name: 'England' },
  { id: 'france', name: 'France' },
  { id: 'germany', name: 'Germany' },
  { id: 'sweden', name: 'Sweden' },
  { id: 'indonesia', name: 'Indonesia' },
  { id: 'føroyar', name: 'Faroe Islands' }
]

const LEAGUES_BY_COUNTRY = {
  england: {
    level1: [{ id: 'pl', name: 'Premier League' }],
    level2: [{ id: 'efl-c', name: 'EFL Championship' }],
    level3: [{ id: 'efl-lo', name: 'EFL League One' }],
    level4: [{ id: 'efl-lt', name: 'EFL League Two' }],
    level5: [{ id: 'nl', name: 'National League' }],
    level6: [
      { id: 'nl-n', name: 'National League North' },
      { id: 'nl-s', name: 'National League South' }
    ],
    level7: [
      { id: 'npl-pd', name: 'Northern Premier League Premier Division' },
      { id: 'sl-pd-c', name: 'Southern League Premier Division Central' },
      { id: 'sl-pd-s', name: 'Southern League Premier Division South' },
      { id: 'il-pd', name: 'Isthmian League Premier Division' }
    ],
    level8: [
      { id: 'npl-do-e', name: 'Northern Premier League Division One East' },
      { id: 'npl-do-w', name: 'Northern Premier League Division One West' },
      { id: 'npl-do-m', name: 'Northern Premier League Division One Midlands' },
      { id: 'sl-do-c', name: 'Southern League Division One Central' },
      { id: 'il-do-sc', name: 'Isthmian League Division One South Central' },
      { id: 'il-do-n', name: 'Isthmian League Division One North' },
      { id: 'il-do-se', name: 'Isthmian League Division One South East' }
    ]
  },
  france: {
    level1: [{ id: 'lu', name: 'Ligue 1' }],
    level2: [{ id: 'ld', name: 'Ligue 2' }],
    level3: [{ id: 'lt', name: 'National 1' }],
    level4: [
      { id: 'nu-a', name: 'National 2 Group A' },
      { id: 'nu-b', name: 'National 2 Group B' },
      { id: 'nu-c', name: 'National 2 Group C' }
    ],
    level5: [
      { id: 'nd-a', name: 'National 3 Group A' },
      { id: 'nd-b', name: 'National 3 Group B' },
      { id: 'nd-c', name: 'National 3 Group C' },
      { id: 'nd-d', name: 'National 3 Group D' },
      { id: 'nd-e', name: 'National 3 Group E' },
      { id: 'nd-f', name: 'National 3 Group F' },
      { id: 'nd-g', name: 'National 3 Group G' },
      { id: 'nd-h', name: 'National 3 Group H' }
    ]
  },
  germany: {
    level1: [{ id: 'e-bl', name: '1. Bundesliga' }],
    level2: [{ id: 'z-bl', name: '2. Bundesliga' }],
    level3: [{ id: 'd-l', name: '3. Liga' }],
    level4: [
      { id: 'rl-n', name: 'Regionalliga Nord' },
      { id: 'rl-no', name: 'Regionalliga Nordost' },
      { id: 'rl-w', name: 'Regionalliga West' },
      { id: 'rl-sw', name: 'Regionalliga Südwest' },
      { id: 'rl-b', name: 'Regionalliga Bayern' }
    ]
  },
  sweden: {
    level1: [{ id: 'as', name: 'Allsvenskan' }],
    level2: [{ id: 'se', name: 'Superettan' }],
    level3: [
      { id: 'e-n', name: 'Ettan Norra' },
      { id: 'e-s', name: 'Ettan Södra' }
    ],
    level4: [
      { id: 'dt-n', name: 'Division 2 Norrland' },
      { id: 'dt-ns', name: 'Division 2 Norra Svealand' },
      { id: 'dt-ss', name: 'Division 2 Södra Svealand' },
      { id: 'dt-ng', name: 'Division 2 Norra Götaland' },
      { id: 'dt-vg', name: 'Division 2 Västra Götaland' },
      { id: 'dt-sg', name: 'Division 2 Södra Götaland' }
    ]
  },
  indonesia: {
    level1: [{ id: 'sl', name: 'Super League' }],
    level2: [
      { id: 'c-a', name: 'Championship A' },
      { id: 'c-b', name: 'Championship B' }
    ],
    level3: [
      { id: 'ln-a', name: 'Liga Nusantara Group A' },
      { id: 'ln-b', name: 'Liga Nusantara Group B' },
      { id: 'ln-c', name: 'Liga Nusantara Group C' }
    ]
  },
  føroyar: {
    level1: [{ id: 'fipl', name: 'Faroe Islands Premier League' }],
    level2: [{ id: 'ed', name: '1. deild' }],
    level3: [{ id: 'tveyd', name: '2. deild' }],
    level4: [{ id: 'td', name: '3. deild' }]
  }
}

function route() {
  const hash = window.location.hash || '#countries'

  document.querySelectorAll('.view').forEach(view => view.classList.add('hidden'))

  if (hash.startsWith('#leagues/')) {
    const countryId = hash.replace('#leagues/', '')
    const country = COUNTRIES.find(c => c.id === countryId)
    const countryName = country ? country.name : countryId

    document.getElementById('selected-country-title').textContent = `${countryName} Leagues`
    renderLeagues(countryId)
    document.getElementById('view-leagues').classList.remove('hidden')

  } else if (hash.startsWith('#league/')) {
    const leagueId = hash.replace('#league/', '')
    const isNLS = leagueId === 'nl-s' || leagueId === 'nls'
    document.getElementById('league-name-header').textContent = isNLS ? 'National League South' : leagueId.toUpperCase()
    renderLeagueDashboard()
    document.getElementById('view-league-dashboard').classList.remove('hidden')

  } else if (hash.startsWith('#team/')) {
    const teamId = hash.replace('#team/', '')
    document.getElementById('team-name-header').textContent = teamId === 'hemel' ? 'Hemel Hempstead Town FC' : teamId
    renderTeamDashboard()
    document.getElementById('view-team-dashboard').classList.remove('hidden')

  } else {
    renderCountries()
    document.getElementById('view-countries').classList.remove('hidden')
  }
}

function renderCountries() {
  const container = document.getElementById('country-grid')
  if (!container) return

  container.innerHTML = COUNTRIES.map(c => `
    <div class="flag-card" onclick="window.location.hash='#leagues/${c.id}'">
      <div class="country-image-placeholder" style="height: 80px; background: #eee; margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: center; border: 1px dashed #ccc;">
        <span style="font-size: 0.8rem; color: #666;">Image Placeholder</span>
      </div>
      <div class="country-label">${c.name}</div>
    </div>
  `).join('')
}

function renderLeagues(countryId) {
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
    levelsWrapper.innerHTML = `<p style="color: #888; padding: 1rem;">No leagues configured for this country yet.</p>`
    return
  }

  levelsWrapper.innerHTML = Object.keys(countryData).map((levelKey, index) => {
    const leagues = countryData[levelKey]
    const levelNumber = index + 1

    return `
      <div class="league-level-section" style="margin-bottom: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem; color: #aaa;">Level ${levelNumber}</h4>
        <div class="league-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
          ${leagues.map(l => `
            <div class="league-card" onclick="window.location.hash='#league/${l.id}'" style="padding: 0.75rem; border: 1px solid #333; cursor: pointer; border-radius: 4px;">
              <div class="circle-icon"></div>
              <div>${l.name}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `
  }).join('')
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