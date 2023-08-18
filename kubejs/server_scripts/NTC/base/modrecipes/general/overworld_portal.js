events.listen('recipes', function (event) {
  event.recipes.extendedcrafting.shaped_table('kubejs:overworld_portal', [
    'SSSSS',
    'SPCPS',
    'SCMCS',
    'SPCPS',
    'SSSSS'
  ], {
    S: 'enderioalloys:item_alloy_ingot_crystalline_pink_slime',
    P: 'emendatusenigmatica:enderium_plate',
    C: 'extendedcrafting:enhanced_ender_component',
    M: 'projectexpansion:lime_matter',
  }).id(`djefnukem:kubejs/overworld_portal`)
})