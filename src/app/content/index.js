import { enhanceHeroCard } from '../../lib/helpers/inject'

const observer = new MutationObserver(function (mutations, obs) {
  document.querySelectorAll('.cardContainer').forEach((card) => {
    enhanceHeroCard(card)
  })
})

observer.observe(document, {
  childList: true,
  subtree: true,
})
