onEvent('recipes', e => {

  removeRecipeByID(e, [

  ])

  modifyShaped(e, 'miniutilities:angel_ring', 1, ['AZA', 'ZXZ', 'YZY'], {
    X: '#forge:nether_stars',
    Y: '#misctags:miniutilities/ingot',
    Z: '#forge:ingots/gold',
    A: '#forge:glass'
  })

  modifyShaped(e, 'miniutilities:diamond_spikes', 1, [' X ', 'XYX', 'YZY'], {
    X: 'emendatusenigmatica:diamond_rod',
    Y: '#forge:gems/diamond',
    Z: '#forge:storage_blocks/diamond'
  })

  modifyShaped(e, 'miniutilities:gold_spikes', 1, [' X ', 'XYX', 'YZY'], {
    X: 'emendatusenigmatica:gold_rod',
    Y: '#forge:ingots/gold',
    Z: '#forge:storage_blocks/gold'
  })

  modifyShaped(e, 'miniutilities:iron_spikes', 1, [' X ', 'XYX', 'YZY'], {
    X: 'emendatusenigmatica:iron_rod',
    Y: '#forge:ingots/iron',
    Z: '#forge:storage_blocks/iron'
  })

  modifyShaped(e, 'miniutilities:wooden_spikes', 1, [' X ', 'XYX', 'YZY'], {
    X: 'minecraft:stick',
    Y: '#minecraft:planks',
    Z: '#minecraft:logs'
  })

})
