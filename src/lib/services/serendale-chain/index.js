import { Contract, providers } from 'ethers'

export const RPC = new providers.JsonRpcProvider(
  'https://harmony-0-rpc.gateway.pokt.network'
)

export const contractJson = {
  jewel: require('./data/Jewel.json'),
  xJewel: require('./data/xJewel.json'),
  gardener: require('./data/MasterGardener.json'),
  gardenerV2: require('./data/MasterGardenerV2.json'),
  uni: require('./data/UniSwap.json'),
  erc20: require('./data/ERC20.json'),
  profile: require('./data/profile.json'),
  hero: require('./data/heroes.json'),
  auction: require('./data/auctions.json'),
}

export const contractAddrs = {
  jewel: '0x72Cb10C6bfA5624dD07Ef608027E366bd690048F',
  xJewel: '0xa9ce83507d872c5e1273e745abcfda849daa654f',
  gardener: '0xdb30643c71ac9e2122ca0341ed77d09d5f99f924',
  profile: '0xabd4741948374b1f5dd5dd7599ac1f85a34cacdd',
  hero: '0x5f753dcdf9b1ad9aabc1346614d1f4746fd6ce5c',
  auction: '0x13a65B9F8039E2c032Bc022171Dc05B30c3f2892',
}

export const contracts = {
  token: new Contract(contractAddrs.jewel, contractJson.jewel.abi, RPC),
  xToken: new Contract(contractAddrs.xJewel, contractJson.xJewel.abi, RPC),
  gardener: new Contract(
    contractAddrs.gardener,
    contractJson.gardener.abi,
    RPC
  ),
  profile: new Contract(contractAddrs.profile, contractJson.profile.abi, RPC),
  hero: new Contract(contractAddrs.hero, contractJson.hero.abi, RPC),
  auction: new Contract(contractAddrs.auction, contractJson.auction.abi, RPC),
}
