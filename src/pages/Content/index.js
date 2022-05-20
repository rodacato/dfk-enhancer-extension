import {
  enhanceHeroCard,
  enhanceInventoryItem,
  detectNetwork,
} from '../../lib/helpers/inject'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip)

// Heros observer
const herosObserver = new MutationObserver(function (mutations, obs) {
  const network = detectNetwork(document)

  document.querySelectorAll('.cardContainer').forEach((card) => {
    enhanceHeroCard(card, network)
  })
})

herosObserver.observe(document, {
  childList: true,
  subtree: true,
})

/// Inventory observer
const inventoryObserver = new MutationObserver(function (mutations, obs) {
  const network = detectNetwork(document)

  document
    .querySelectorAll(
      '.fancy-modal-blocker [class*="InventoryBlock_inventoryBlock"] img',
      '.fancy-modal-blocker [class*="RewardBlock_rewardBlock"] img'
    )
    .forEach((image) => {
      let item = image.closest('[class*="InventoryBlock_inventoryBlock"]')
      item ||= image.closest('[class*="RewardBlock_rewardBlock"]')

      enhanceInventoryItem(item, network)
    })
})

inventoryObserver.observe(document, {
  childList: true,
  subtree: true,
})
