import { enhanceHeroCard, detectNetwork } from '../../lib/helpers/inject'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip)

const observer = new MutationObserver(function (mutations, obs) {
  const network = detectNetwork(document)

  document.querySelectorAll('.cardContainer').forEach((card) => {
    enhanceHeroCard(card, network)
  })
})

observer.observe(document, {
  childList: true,
  subtree: true,
})
