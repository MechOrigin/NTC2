onEvent('recipes', e => {

  removeRecipeByID(e, [
    'immersiveengineering:crafting/treated_wood_horizontal',
    'sophisticatedbackpacks:crafting_upgrade'
  ])

  modifyShaped(e, 'immersiveengineering:treated_wood_horizontal', 8, ['DDD', 'DGD', 'DDD'], {
    G: 'immersiveengineering:creosote_bucket',
    D: '#minecraft:planks'
  })

  modifyShaped(e, 'minecraft:dragon_breath', 1, [' D ', ' G ', '   '], {
    G: 'minecraft:glass_bottle',
    D: '#cagedmobs:dragon_scales'
  })


  e.shaped(Item.of('betternether:cincinnasite_pickaxe_diamond', '{RepairCost:1,Damage:0}').enchant('minecraft:silk_touch', 1), [' C ', 'CSC', ' C '], {
    S: 'betternether:cincinnasite_pickaxe_diamond',
    C: 'tconstruct:silky_cloth'
  }).id(`kubejs:end_portal_breaker`)


  //mass fabricator
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:mekanism_matter/mass_fabricator"}'),
  ['ABA', 'CDC', 'ABA'], {
    A: 'mekanism:alloy_atomic',
    B: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:steel_casing',
    D: 'mekanism:antiprotonic_nucleosynthesizer'
  }).id(`ntc2:mass_fabricator`)

  //antimatter synthesizer
  e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:mekanism_matter/antimatter_synthesizer"}'),
  ['ACA', 'DBE', 'ACA'], {
    A: 'mekanism:alloy_atomic',
    B: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:steel_casing',
    D: 'mekanism:pellet_antimatter',
    E: 'kubejs:uu_matter_2'
  }).id(`ntc2:antimatter_synthesizer`)

    //nitrogen collector handled by extendedcrafting.zs
    // e.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:nitrogen_collector"}'),
    // ['ACA', 'DBD', 'CEC'], {
    //   A: 'chemlib:ingot_beryllium',
    //   B: 'thermal:machine_frame',
    //   C: 'immersiveengineering:ingot_hop_graphite',
    //   D: 'minecraft:bucket',
    //   E: 'kubejs:printed_final_basic_circuit_board'
    // }).id(`ntc2:antimatter_synthesizer`)

  // uu matter
  e.shaped(Item.of('minecraft:bone', 32), ['A  ', 'AA ', 'A  '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_bones`)

  e.shaped(Item.of('minecraft:coal', 8), ['  A', 'A  ', '  A'], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_coal`)

  e.shaped(Item.of('emendatusenigmatica:copper_ingot', 1), ['  A', 'A A', '   '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_copper`)

  e.shaped(Ingredient.of('#forge:ores/emerald', 1), [' AA', 'A A', 'AA '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_emerald`)

  e.shaped(Item.of('minecraft:feather', 32), [' A ', ' A ', 'A A'], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_feather`)

  e.shaped(Item.of('minecraft:glass', 32), [' A ', 'A A', ' A '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_glass`)

  e.shaped(Item.of('minecraft:grass_block', 16), ['A  ', 'A  ', '   '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_grass_block`)

  e.shaped(Item.of('minecraft:ink_sac', 48), ['AA ', 'AA ', 'A  '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_ink_sac`)

  e.shaped(Item.of('minecraft:lapis_lazuli', 9), ['A  ', 'A  ', 'AA '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_lapis_lazuli`)

  e.shaped(Item.of('minecraft:lava_bucket', 1), ['BA ', 'AA ', '   '], {
    A: 'kubejs:uu_matter_2',
    B: 'minecraft:bucket'
  }).id(`kubejs:uu_matter_lava_bucket`)

  e.shaped(Item.of('minecraft:leather', 32), ['A A', ' A ', 'AAA'], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_leather`)

  e.shaped(Item.of('minecraft:oak_log', 8), ['A  ', '   ', '   '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_oak_log`)

  e.shaped(Item.of('emendatusenigmatica:osmium_ingot', 1), ['A A', '   ', 'A A'], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_osmium`)

  e.shaped(Item.of('minecraft:redstone', 24), [' A ', 'AAA', '   '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_redstone`)

  e.shaped(Item.of('minecraft:snow_block', 16), ['A A', '   ', '   '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_snow_block`)

  e.shaped(Item.of('emendatusenigmatica:steel_ingot', 1), ['AAA', ' A ', 'AAA'], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_steel`)

  e.shaped(Item.of('emendatusenigmatica:tin_ingot', 1), ['A A', '  A', '   '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_tin`)

  e.shaped(Item.of('minecraft:water_bucket', 1), ['BA ', 'A  ', '   '], {
    A: 'kubejs:uu_matter_2',
    B: 'minecraft:bucket'
  }).id(`kubejs:uu_matter_water_bucket`)

  e.shaped(Item.of('minecraft:white_wool', 12), ['A A', '   ', ' A '], {
    A: 'kubejs:uu_matter_2'
  }).id(`kubejs:uu_matter_white_wool`)

//Heads
  e.shaped(Item.of('tconstruct:husk_head', 1), ['BBB', 'BAB', 'BBB'], {
    A: 'minecraft:zombie_head',
    B: 'mysticalagriculture:dirt_essence'
  }).id(`kubejs:husk_head`)

  e.shaped(Item.of('tconstruct:drowned_head', 1), ['BBB', 'BAB', 'BBB'], {
    A: 'minecraft:zombie_head',
    B: 'mysticalagriculture:water_essence'
  }).id(`kubejs:drowned_head`)
  
  e.shaped(Item.of('tconstruct:enderman_head', 1), ['BBB', 'BAB', 'BBB'], {
    A: 'mysticalagriculture:blank_skull',
    B: 'mysticalagriculture:enderman_essence'
  }).id(`kubejs:enderman_head`)

//Fluid Drawer
  e.shaped(Item.of('fluiddrawerslegacy:fluiddrawer', 4), ['BAB', 'ACA', 'BAB'], {
    A: 'pipez:fluid_pipe',
    B: 'emendatusenigmatica:steel_plate',
    C: '#storagedrawers:drawers'
  }).id(`kubejs:fluiddrawer`)

//Mystical Agri custom crops
  e.shaped(Item.of('avaritia:pileof_neutrons', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:neutronium_essence'
  }).id(`kubejs:neutronium_essence`)

  e.shaped(Item.of('enderioalloys:item_alloy_ingot_energetic_alloy', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:energetic_alloy_essence'
  }).id(`kubejs:energetic_alloy_essence`)

  e.shaped(Item.of('enderioalloys:item_alloy_ingot_melodic_alloy', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:melodic_alloy_essence'
  }).id(`kubejs:melodic_alloy_essence`)

  e.shaped(Item.of('industrialforegoing:pink_slime_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:pink_slime_ingot_essence'
  }).id(`kubejs:pink_slime_ingot_essence`)

  e.shaped(Item.of('enderioalloys:item_alloy_ingot_vibrant_alloy', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:vibrant_alloy_essence'
  }).id(`kubejs:vibrant_alloy_essence`)

  e.shaped(Item.of('enderioalloys:item_alloy_ingot_crystalline_pink_slime', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:crystalline_pink_slime_essence'
  }).id(`kubejs:crystalline_pink_slime_essence`)

  e.shaped(Item.of('enderioalloys:item_alloy_ingot_dark_steel', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:dark_steel_alloy_essence'
  }).id(`kubejs:dark_steel_alloy_essence`)

  e.shaped(Item.of('enderioalloys:item_alloy_ingot_end_steel', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:end_steel_alloy_essence'
  }).id(`kubejs:end_steel_alloy_essence`)

  e.shaped(Item.of('enderioalloys:item_alloy_ingot_stellar_alloy', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:stellar_alloy_essence'
  }).id(`kubejs:stellar_alloy_essence`)

  e.shaped(Item.of('appliedenergistics2:charged_certus_quartz_crystal', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:charged_certus_quartz_essence'
  }).id(`kubejs:charged_certus_quartz_essence`)
  
  e.shaped(Item.of('kubejs:silicon_sheet', 1), ['BBB', 'BBB', 'BBB'], {
    B: 'emendatusenigmatica:silicon_gem'
  }).id(`kubejs:silicon_sheet`)

  //missing MA essence recipes
  /*
    aluminum, saltpeter, apatite, zinc, brass, silver, lead, nickel, constantan, electrum, invar, tungsten, titanium, uranium, signalum, lumium, platinum, iridium, enderium
  */
  e.shaped(Item.of('emendatusenigmatica:aluminum_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:aluminum_essence'
  }).id(`kubejs:aluminum_essence`)

  e.shaped(Item.of('emendatusenigmatica:potassium_nitrate_dust', 16), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:saltpeter_essence'
  }).id(`kubejs:saltpeter_essence`)

  e.shaped(Item.of('emendatusenigmatica:apatite_gem', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:apatite_essence'
  }).id(`kubejs:apatite_essence`)

  e.shaped(Item.of('emendatusenigmatica:zinc_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:zinc_essence'
  }).id(`kubejs:zinc_essence`)

  e.shaped(Item.of('emendatusenigmatica:brass_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:brass_essence'
  }).id(`kubejs:brass_essence`)

  e.shaped(Item.of('emendatusenigmatica:silver_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:silver_essence'
  }).id(`kubejs:silver_essence`)

  e.shaped(Item.of('emendatusenigmatica:lead_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:lead_essence'
  }).id(`kubejs:lead_essence`)

  e.shaped(Item.of('emendatusenigmatica:nickel_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:nickel_essence'
  }).id(`kubejs:nickel_essence`)

  e.shaped(Item.of('emendatusenigmatica:constantan_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:constantan_essence'
  }).id(`kubejs:constantan_essence`)

  e.shaped(Item.of('emendatusenigmatica:electrum_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:electrum_essence'
  }).id(`kubejs:electrum_essence`)

  e.shaped(Item.of('emendatusenigmatica:invar_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:invar_essence'
  }).id(`kubejs:invar_essence`)
  
  e.shaped(Item.of('chemlib:ingot_tungsten', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:tungsten_essence'
  }).id(`kubejs:tungsten_essence`)
  
  e.shaped(Item.of('chemlib:ingot_titanium', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:titanium_essence'
  }).id(`kubejs:titanium_essence`)
  
  e.shaped(Item.of('emendatusenigmatica:uranium_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:uranium_essence'
  }).id(`kubejs:uranium_essence`)
  
  e.shaped(Item.of('emendatusenigmatica:signalum_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:signalum_essence'
  }).id(`kubejs:signalum_essence`)
  
  e.shaped(Item.of('emendatusenigmatica:lumium_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:lumium_essence'
  }).id(`kubejs:lumium_essence`)
  
  e.shaped(Item.of('chemlib:ingot_platinum', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:platinum_essence'
  }).id(`kubejs:platinum_essence`)
  
  e.shaped(Item.of('emendatusenigmatica:iridium_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:iridium_essence'
  }).id(`kubejs:iridium_essence`)

  e.shaped(Item.of('emendatusenigmatica:enderium_ingot', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:enderium_essence'
  }).id(`kubejs:enderium_essence`)

  e.shaped(Item.of('emendatusenigmatica:silicon_gem', 8), ['BBB', 'B B', 'BBB'], {
    B: 'mysticalagriculture:silicon_essence'
  }).id(`kubejs:silicon_essence`)

})
