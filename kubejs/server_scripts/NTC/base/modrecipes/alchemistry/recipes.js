onEvent('recipes', e => {

  removeRecipeByID(e, [
    'alchemistry:fusion_core',
    'alchemistry:fusion_controller',
    'alchemistry:fusion_casing'
  ])

  modifyShaped(e, 'alchemistry:fusion_core', 1, ['TFT', 'ICI', 'TFT'], {
    F: 'alchemistry:fusion_casing',
    T: '#forge:ingots/thorium',
    I: '#forge:ingots/titanium',
    C: 'kubejs:printed_final_basic_circuit_board'
  })

  modifyShaped(e, 'alchemistry:fusion_casing', 4, ['TIT', 'ICI', 'TIT'], {
    T: '#forge:ingots/tungsten',
    I: '#forge:ingots/neodymium',
    C: 'kubejs:printed_final_basic_circuit_board'
  })

  modifyShaped(e, 'alchemistry:fusion_controller', 1, ['IFI', 'TCS', 'IFI'], {
    F: 'alchemistry:fusion_casing',
    T: 'appliedenergistics2:quartz_vibrant_glass',
    I: '#forge:ingots/selenium',
    S: 'minecraft:nether_star',
    C: 'kubejs:printed_final_basic_circuit_board'
  })

})
