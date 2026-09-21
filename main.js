const COUNTRIES = [
  { id: 'england', name: 'England' },
  { id: 'france', name: 'France' },
  { id: 'germany', name: 'Germany' },
  { id: 'usa', name: 'USA' },
  { id: 'indonesia', name: 'Indonesia' },
  { id: 'australia', name: 'Australia' }
]

const ENGLAND_LEAGUES_STEP_1 = [
  { id: 'nl', name: 'National League' }
]

const ENGLAND_LEAGUES_STEP_2 = [
  { id: 'nl-n', name: 'National League North' },
  { id: 'nl-s', name: 'National League South' }
]

const ENGLAND_LEAGUES_STEP_3 = [
  { id: 'il-pd', name: 'Isthmian League Premier Division' },
  { id: 'npl-pd', name: 'Northern Premier League Premier Division' },
  { id: 'sl-pd-c', name: 'Southern League Premier Division Central' },
  { id: 'sl-pd-s', name: 'Southern League Premier Division South' }
]

function route() {
  const hash = window.location.hash || '#countries'

  document.querySelectorAll('.view').forEach(view => view.classList.add('hidden'))

  if (hash.startsWith('#leagues/')) {
    const countryId = hash.replace('#leagues/', '')
    document.getElementById('selected-country-title').textContent = `${countryId} leagues`
    renderLeagues()
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

function renderLeagues() {
  const step1 = document.getElementById('step-1-grid')
  const step2 = document.getElementById('step-2-grid')
  const step3 = document.getElementById('step-3-grid')

  if (step1) {
    step1.innerHTML = ENGLAND_LEAGUES_STEP_1.map(l => `
      <div class="league-card" onclick="window.location.hash='#league/${l.id}'">
        <div class="circle-icon"></div>
        <div>${l.name}</div>
      </div>
    `).join('')
  }

  if (step2) {
    step2.innerHTML = ENGLAND_LEAGUES_STEP_2.map(l => `
      <div class="league-card" onclick="window.location.hash='#league/${l.id}'">
        <div class="circle-icon"></div>
        <div>${l.name}</div>
      </div>
    `).join('')
  }

  if (step3) {
    step3.innerHTML = ENGLAND_LEAGUES_STEP_3.map(l => `
      <div class="league-card" onclick="window.location.hash='#league/${l.id}'">
        <div class="circle-icon"></div>
        <div>${l.name}</div>
      </div>
    `).join('')
  }
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