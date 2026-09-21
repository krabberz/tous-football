const COUNTRIES = [
  { id: 'england', name: 'England' },
  { id: 'france', name: 'France' },
  { id: 'germany', name: 'Germany' },
  { id: 'sweden', name: 'Sweden' },
  { id: 'indonesia', name: 'Indonesia' },
  { id: 'faroe', name: 'Faroe Islands' }
]

const LEAGUES_BY_COUNTRY = {
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
  france: {
    level1: [
      { id: 'lu', name: 'Ligue 1' } 
    ],
    level2: [
      { id: 'ld', name: 'Ligue 2', promotesTo: ['lu']}
    ],
    level3: [
      { id: 'lt', name: 'National 1', promotesTo: ['ld']}
    ],
    level4: [
      { id: 'nu-a', name: 'National 2 Group A', promotesTo: ['lt']},
      { id: 'nu-b', name: 'National 2 Group B', promotesTo: ['lt']},
      { id: 'nu-c', name: 'National 2 Group C', promotesTo: ['lt']}
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
  },
  indonesia: {
    level1: [{ id: 'sl', name: 'Super League' }],
    level2: [
      { id: 'c-a', name: 'Championship A', promotesTo: ['sl']},
      { id: 'c-b', name: 'Championship B', promotesTo: ['sl']}
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
    levelsWrapper.innerHTML = `<p style="color: #888; padding: 1rem; text-align: center;">No leagues configured for this country yet.</p>`
    return
  }

  const levelKeys = Object.keys(countryData)

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

  // Double-check connection coordinates after DOM layout stabilizes
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

  // Cover full dimensions of wrapper
  const wrapperRect = wrapper.getBoundingClientRect()
  svg.setAttribute('width', wrapper.scrollWidth || wrapperRect.width)
  svg.setAttribute('height', wrapper.scrollHeight || wrapperRect.height)

  let svgContent = ''

  const cards = wrapper.querySelectorAll('.league-card')
  cards.forEach(childCard => {
    const targetsStr = childCard.getAttribute('data-promotes-to')
    if (!targetsStr) return

    const targetIds = targetsStr.split(',').filter(Boolean)
    targetIds.forEach(targetId => {
      const parentCard = document.getElementById(`league-${targetId}`)
      if (!parentCard) return

      const childRect = childCard.getBoundingClientRect()
      const parentRect = parentCard.getBoundingClientRect()

      // Calculate relative coordinates to container
      const x1 = childRect.left + childRect.width / 2 - wrapperRect.left + wrapper.scrollLeft
      const y1 = childRect.top - wrapperRect.top + wrapper.scrollTop

      const x2 = parentRect.left + parentRect.width / 2 - wrapperRect.left + wrapper.scrollLeft
      const y2 = parentRect.bottom - wrapperRect.top + wrapper.scrollTop

      svgContent += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#555" stroke-width="2" />`
    })
  })

  svg.innerHTML = svgContent
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