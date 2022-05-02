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


  //mass fabricator
  e.shaped(Item.of('custommachinery:mekanism_matter/mass_fabricator', 1),
  ['010', '232', '010'], {
    0: 'mekanism:alloy_atomic',
    1: 'mekanism:ultimate_control_circuit',
    2: 'mekanism:steel_casing',
    3: 'mekanism:antiprotonic_nucleosynthesizer'
  }).id(`custommachinery:mekanism_matter/mass_fabricator`)

  //antimatter synthesizer
  e.shaped(Item.of('custommachinery:mekanism_matter/antimatter_synthesizer', 1),
  ['020', '314', '020'], {
    0: 'mekanism:alloy_atomic',
    1: 'mekanism:ultimate_control_circuit',
    2: 'mekanism:steel_casing',
    3: 'mekanism:pellet_antimatter',
    4: 'kubejs:uu_matter_2'
  }).id(`custommachinery:mekanism_matter/antimatter_synthesizer`)

})
