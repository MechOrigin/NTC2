

craftingTable.removeRecipe(<item:solarflux:photovoltaic_cell_1>);
craftingTable.addShaped("photovoltaic_cell_1", <item:solarflux:photovoltaic_cell_1>, [
    [<tag:items:forge:glass>, <tag:items:forge:glass>, <tag:items:forge:glass>],
    [<item:emendatusenigmatica:lapis_plate>, <item:emendatusenigmatica:lapis_plate>, <item:emendatusenigmatica:lapis_plate>],
    [<item:solarflux:mirror>, <item:solarflux:mirror>, <item:solarflux:mirror>]
]);

craftingTable.removeRecipe(<item:solarflux:photovoltaic_cell_2>);
craftingTable.addShaped("photovoltaic_cell_2", <item:solarflux:photovoltaic_cell_2>, [
    [<tag:items:forge:gems/silicon>, <item:emendatusenigmatica:cobalt_plate>, <tag:items:forge:gems/silicon>],
    [<item:emendatusenigmatica:cobalt_plate>, <tag:items:forge:gems/silicon>, <item:emendatusenigmatica:cobalt_plate>],
    [<item:solarflux:mirror>, <item:solarflux:photovoltaic_cell_1>, <item:solarflux:mirror>]
]);

craftingTable.removeRecipe(<item:solarflux:photovoltaic_cell_3>);
craftingTable.addShaped("photovoltaic_cell_3", <item:solarflux:photovoltaic_cell_3>, [
    [<item:thermal:obsidian_glass>, <item:thermal:obsidian_glass>, <item:thermal:obsidian_glass>],
    [<item:enderioalloys:item_alloy_ingot_dark_steel>, <item:emendatusenigmatica:electrum_ingot>, <item:enderioalloys:item_alloy_ingot_dark_steel>],
    [<item:tconstruct:hepatizon_ingot>, <item:solarflux:photovoltaic_cell_2>, <item:tconstruct:hepatizon_ingot>]
]);

craftingTable.removeRecipe(<item:solarflux:photovoltaic_cell_4>);
craftingTable.addShaped("photovoltaic_cell_4", <item:solarflux:photovoltaic_cell_4>, [
    [<item:thermal:signalum_glass>, <item:thermal:signalum_glass>, <item:thermal:signalum_glass>],
    [<item:enderioalloys:item_alloy_ingot_end_steel>, <item:appliedenergistics2:purified_certus_quartz_crystal>, <item:enderioalloys:item_alloy_ingot_end_steel>],
    [<item:emendatusenigmatica:osmium_ingot>, <item:solarflux:photovoltaic_cell_3>, <item:emendatusenigmatica:osmium_ingot>]
]);

craftingTable.removeRecipe(<item:solarflux:photovoltaic_cell_5>);
craftingTable.addShaped("photovoltaic_cell_5", <item:solarflux:photovoltaic_cell_5>, [
    [<item:thermal:lumium_glass>, <item:thermal:lumium_glass>, <item:thermal:lumium_glass>],
    [<item:enderioalloys:item_alloy_ingot_melodic_alloy>, <item:appliedenergistics2:purified_nether_quartz_crystal>, <item:enderioalloys:item_alloy_ingot_melodic_alloy>],
    [<item:mekanism:ingot_refined_glowstone>, <item:solarflux:photovoltaic_cell_4>, <item:mekanism:ingot_refined_glowstone>]
]);

craftingTable.removeRecipe(<item:solarflux:photovoltaic_cell_6>);
craftingTable.addShaped("photovoltaic_cell_6", <item:solarflux:photovoltaic_cell_6>, [
    [<item:thermal:enderium_glass>, <item:thermal:enderium_glass>, <item:thermal:enderium_glass>],
    [<item:enderioalloys:item_alloy_ingot_stellar_alloy>, <item:appliedenergistics2:purified_fluix_crystal>, <item:enderioalloys:item_alloy_ingot_stellar_alloy>],
    [<item:mekanism:ingot_refined_obsidian>, <item:solarflux:photovoltaic_cell_5>, <item:mekanism:ingot_refined_obsidian>]
]);


craftingTable.removeRecipe(<item:solarflux:sp_1>);
craftingTable.addShaped("sp_1", <item:solarflux:sp_1> * 4, [
    [<item:solarflux:mirror>, <item:solarflux:mirror>, <item:solarflux:mirror>],
    [<item:quark:green_stained_planks>, <item:minecraft:redstone>, <item:quark:green_stained_planks>],
    [<item:quark:green_stained_planks>, <item:quark:green_stained_planks>, <item:quark:green_stained_planks>]
]);

craftingTable.removeRecipe(<item:solarflux:sp_3>);
craftingTable.addShaped("sp_3", <item:solarflux:sp_3> * 4, [
    [<item:solarflux:photovoltaic_cell_1>, <item:solarflux:photovoltaic_cell_1>, <item:solarflux:photovoltaic_cell_1>],
    [<item:solarflux:sp_2>, <item:immersiveengineering:coil_lv>, <item:solarflux:sp_2>],
    [<item:solarflux:sp_2>, <item:emendatusenigmatica:steel_block>, <item:solarflux:sp_2>]
]);

craftingTable.removeRecipe(<item:solarflux:sp_4>);
craftingTable.addShaped("sp_4", <item:solarflux:sp_4> * 4, [
    [<item:solarflux:photovoltaic_cell_2>, <item:solarflux:photovoltaic_cell_2>, <item:solarflux:photovoltaic_cell_2>],
    [<item:solarflux:sp_3>, <item:immersiveengineering:coil_mv>, <item:solarflux:sp_3>],
    [<item:solarflux:sp_3>, <item:emendatusenigmatica:cobalt_block>, <item:solarflux:sp_3>]
]);

craftingTable.removeRecipe(<item:solarflux:sp_5>);
craftingTable.addShaped("sp_5", <item:solarflux:sp_5> * 4, [
    [<item:solarflux:photovoltaic_cell_3>, <item:solarflux:photovoltaic_cell_3>, <item:solarflux:photovoltaic_cell_3>],
    [<item:solarflux:sp_4>, <item:immersiveengineering:coil_hv>, <item:solarflux:sp_4>],
    [<item:solarflux:sp_4>, <item:tconstruct:hepatizon_block>, <item:solarflux:sp_4>]
]);

craftingTable.removeRecipe(<item:solarflux:sp_6>);
craftingTable.addShaped("sp_6", <item:solarflux:sp_6> * 4, [
    [<item:solarflux:photovoltaic_cell_4>, <item:solarflux:photovoltaic_cell_4>, <item:solarflux:photovoltaic_cell_4>],
    [<item:solarflux:sp_5>, <item:mekanism:alloy_infused>, <item:solarflux:sp_5>],
    [<item:solarflux:sp_5>, <item:emendatusenigmatica:osmium_block>, <item:solarflux:sp_5>]
]);

craftingTable.removeRecipe(<item:solarflux:sp_7>);
craftingTable.addShaped("sp_7", <item:solarflux:sp_7> * 4, [
    [<item:solarflux:photovoltaic_cell_5>, <item:solarflux:photovoltaic_cell_5>, <item:solarflux:photovoltaic_cell_5>],
    [<item:solarflux:sp_6>, <item:mekanism:alloy_reinforced>, <item:solarflux:sp_6>],
    [<item:solarflux:sp_6>, <item:mekanism:block_refined_glowstone>, <item:solarflux:sp_6>]
]);

craftingTable.removeRecipe(<item:solarflux:sp_8>);
craftingTable.addShaped("sp_8", <item:solarflux:sp_8> * 4, [
    [<item:solarflux:photovoltaic_cell_6>, <item:solarflux:photovoltaic_cell_6>, <item:solarflux:photovoltaic_cell_6>],
    [<item:solarflux:sp_7>, <item:mekanism:alloy_atomic>, <item:solarflux:sp_7>],
    [<item:solarflux:sp_7>, <item:mekanism:block_refined_obsidian>, <item:solarflux:sp_7>]
]);