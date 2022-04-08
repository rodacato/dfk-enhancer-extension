const { Contract, providers, utils } = require('ethers')
const { JsonRpcProvider } = providers
export const { formatUnits, formatEther } = utils

export const RPC = new JsonRpcProvider(
  'https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc'
)

export const contractJson = {
  crystal: require('../data/crystal.json'),
  xCrystal: require('../data/xCrystal.json'),
  gardener: require('../data/MasterGardener.json'),
}

export const contractAddrs = {
  crystal: '0x04b9dA42306B023f3572e106B11D82aAd9D32EBb',
  xCrystal: '0x6e7185872bcdf3f7a6cbbe81356e50daffb002d2',
  gardener: '0x57Dec9cC7f492d6583c773e2E7ad66dcDc6940Fb',
}

export const contracts = {
  token: new Contract(contractAddrs.crystal, contractJson.crystal.abi, RPC),
  xToken: new Contract(contractAddrs.xCrystal, contractJson.xCrystal.abi, RPC),
  gardener: new Contract(
    contractAddrs.gardener,
    contractJson.gardenerV2.abi,
    RPC
  ),
}

// export const expansionSet = {
//   sd: 0,
//   cv: 0,
// }

// export const expansionArraySet = {
//   sd: [],
//   cv: [],
// }

// export const expansionObjSet = {
//   sd: {},
//   cv: {},
// }
