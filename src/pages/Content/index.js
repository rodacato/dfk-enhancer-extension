import { enhanceHeroCard } from '../../lib/helpers/inject'
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
  document.querySelectorAll('.cardContainer').forEach((card) => {
    enhanceHeroCard(card)
  })
})

observer.observe(document, {
  childList: true,
  subtree: true,
})
