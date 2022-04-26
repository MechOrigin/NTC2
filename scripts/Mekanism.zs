
//craftingTable.removeRecipe(<item:mekanism:steel_casing>);

//extended crafting now
craftingTable.removeRecipe(<item:mekanism:metallurgic_infuser>);

craftingTable.removeRecipe(<item:mekanismgenerators:solar_panel>);

craftingTable.removeRecipe(<item:mekanismgenerators:solar_generator>);
craftingTable.addShaped("solar_generator", <item:mekanismgenerators:solar_generator>, [
    [<item:solarflux:sp_1>, <item:solarflux:sp_1>, <item:solarflux:sp_1>],
    [<item:emendatusenigmatica:iron_plate>, <item:emendatusenigmatica:iron_rod>, <item:emendatusenigmatica:iron_plate>],
    [<item:emendatusenigmatica:iron_plate>, <item:extendedcrafting:redstone_ingot>, <item:emendatusenigmatica:iron_plate>]
]);

craftingTable.removeRecipe(<item:mekanismgenerators:advanced_solar_generator>);
craftingTable.addShaped("advanced_solar_generator", <item:mekanismgenerators:advanced_solar_generator>, [
    [<item:solarflux:sp_2>, <item:solarflux:sp_2>, <item:solarflux:sp_2>],
    [<item:emendatusenigmatica:steel_plate>, <item:emendatusenigmatica:iron_rod>, <item:emendatusenigmatica:steel_plate>],
    [<item:emendatusenigmatica:steel_plate>, <item:extendedcrafting:redstone_ingot>, <item:emendatusenigmatica:steel_plate>]
]);


craftingTable.removeRecipe(<item:mekanism:basic_fluid_tank>);
craftingTable.addShaped("basic_fluid_tank", <item:mekanism:basic_fluid_tank>, [
    [<item:minecraft:green_stained_glass_pane>, <item:engineersdecor:straight_pipe_valve_redstone>, <item:minecraft:green_stained_glass_pane>],
    [<item:minecraft:green_stained_glass_pane>, <item:thermal:fluid_cell>, <item:minecraft:green_stained_glass_pane>],
    [<item:minecraft:green_stained_glass_pane>, <item:engineersdecor:straight_pipe_valve_redstone>, <item:minecraft:green_stained_glass_pane>]
]);

craftingTable.removeRecipe(<item:mekanism:advanced_fluid_tank>);
/*
craftingTable.addShaped("advanced_fluid_tank", <item:mekanism:advanced_fluid_tank>, [
    [<item:emendatusenigmatica:diamond_plate>, <item:emendatusenigmatica:gold_gear>, <item:emendatusenigmatica:diamond_plate>],
    [<item:minecraft:red_stained_glass_pane>, <item:mekanism:basic_fluid_tank>, <item:minecraft:red_stained_glass_pane>],
    [<item:emendatusenigmatica:diamond_plate>, <item:emendatusenigmatica:gold_gear>, <item:emendatusenigmatica:diamond_plate>]
]);
*/

craftingTable.removeRecipe(<item:mekanism:elite_fluid_tank>);
/*
craftingTable.addShaped("elite_fluid_tank", <item:mekanism:elite_fluid_tank>, [
    [<item:minecraft:netherite_scrap>, <item:emendatusenigmatica:emerald_gear>, <item:minecraft:netherite_scrap>],
    [<item:minecraft:blue_stained_glass_pane>, <item:mekanism:advanced_fluid_tank>, <item:minecraft:blue_stained_glass_pane>],
    [<item:minecraft:netherite_scrap>, <item:emendatusenigmatica:emerald_gear>, <item:minecraft:netherite_scrap>]
]);
*/

craftingTable.removeRecipe(<item:mekanism:ultimate_fluid_tank>);
/*
craftingTable.addShaped("ultimate_fluid_tank", <item:mekanism:ultimate_fluid_tank>, [
    [<item:miniutilities:unstable_ingot>, <item:minecraft:netherite_ingot>, <item:miniutilities:unstable_ingot>],
    [<item:minecraft:purple_stained_glass_pane>, <item:mekanism:elite_fluid_tank>, <item:minecraft:purple_stained_glass_pane>],
    [<item:miniutilities:unstable_ingot>, <item:minecraft:netherite_ingot>, <item:miniutilities:unstable_ingot>]
]);
*/

// progression
craftingTable.removeRecipe(<item:mekanismgenerators:heat_generator>);
craftingTable.addShaped("heat_generator", <item:mekanismgenerators:heat_generator>, [
    [<item:emendatusenigmatica:iron_plate>, <item:emendatusenigmatica:iron_plate>, <item:emendatusenigmatica:iron_plate>],
    [<item:quark:purple_stained_planks>, <item:emendatusenigmatica:osmium_gear>, <item:quark:purple_stained_planks>],
    [<item:emendatusenigmatica:bronze_plate>, <item:ironfurnaces:iron_furnace>, <item:emendatusenigmatica:bronze_plate>]
]);