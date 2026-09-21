function navigate() {
  const hash = window.location.hash || '#countries'
  
  document.querySelectorAll('.view').forEach(view => view.classList.add('hidden'))

  if (hash.startsWith('#league/')) {
    document.getElementById('view-league-dashboard').classList.remove('hidden')
  } else if (hash.startsWith('#team/')) {
    document.getElementById('view-team-dashboard').classList.remove('hidden')
  } else if (hash.startsWith('#leagues/')) {
    document.getElementById('view-leagues').classList.remove('hidden')
  } else {
    document.getElementById('view-countries').classList.remove('hidden')
  }
}

window.addEventListener('hashchange', navigate)
window.addEventListener('DOMContentLoaded', navigate)