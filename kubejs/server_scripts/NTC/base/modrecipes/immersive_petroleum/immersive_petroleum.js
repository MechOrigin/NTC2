onEvent('recipes', e => {

  removeRecipeByID(e, [
    'immersivepetroleum:asphalt2',
    'immersivepetroleum:asphalt'
  ])
/*
modifyShaped(e, 'immersivepetroleum:asphalt', 8, ['SCS', 'GBG', 'SCS'], {
  C: 'thermal:tar',
  S: '#forge:sand',
  G: '#forge:gravel',
  B: 'minecraft:water_bucket'
})
*/
e.shaped('8x immersivepetroleum:asphalt', ['SCS', 'GBG', 'SCS'], {
  C: 'thermal:tar',
  S: '#forge:sand',
  G: '#forge:gravel',
  B: 'minecraft:water_bucket'
}).id(`kubejs:immersivepetroleum/asphalt`)
/*
modifyShaped(e, 'immersivepetroleum:asphalt', 12, ['SCS', 'GBG', 'SCS'], {
  C: 'thermal:tar',
  S: 'thermal:slag',
  G: '#forge:gravel',
  B: 'minecraft:water_bucket'
})
*/
e.shaped('12x immersivepetroleum:asphalt', ['SCS', 'GBG', 'SCS'], {
  C: 'thermal:tar',
  S: 'thermal:slag',
  G: '#forge:gravel',
  B: 'minecraft:water_bucket'
}).id(`kubejs:immersivepetroleum/asphalt`)

})
