onEvent('recipes', e => {

  removeRecipeByID(e, [
    'immersiveengineering:crafting/treated_wood_horizontal'
  ])

  modifyShaped(e, 'immersiveengineering:treated_wood_horizontal', 8, ['DDD', 'DGD', 'DDD'], {
    G: 'immersiveengineering:creosote_bucket',
    D: '#minecraft:planks'
  })


  e.shaped(Item.of('betternether:cincinnasite_pickaxe_diamond', '{RepairCost:1,Damage:0}').enchant('minecraft:silk_touch', 1), [' C ', 'CSC', ' C '], {
    S: 'betternether:cincinnasite_pickaxe_diamond',
    C: 'tconstruct:silky_cloth'
  }).id(`kubejs:end_portal_breaker`)


})
