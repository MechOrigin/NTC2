import crafttweaker.api.item.IItemStack; //for stacksize stuff
/*
// Crafting table removals not done by kubejs
*/

craftingTable.removeByName( "extendedcrafting:redstone_ingot");
craftingTable.removeByName( "extendedcrafting:black_iron_ingot");

craftingTable.removeByName( "thermal:rubber_from_vine");
craftingTable.removeByName( "thermal:rubber_from_dandelion");

craftingTable.removeRecipe(<item:tconstruct:flint_and_bronze>);

craftingTable.removeRecipe(<item:avaritia:compressed_crafting_table>);
craftingTable.removeRecipe(<item:avaritia:double_compressed_crafting_table>);

//remove ancient debris dupe
craftingTable.removeRecipe(<item:minecraft:ancient_debris>);

craftingTable.removeByName( "minecraft:ens_gilded_blackstone");
craftingTable.removeByName( "minecraft:ens_blackstone");
craftingTable.removeByName( "minecraft:ens_basalt");

//charcoal progression
craftingTable.removeByName( "quark:building/crafting/compressed/charcoal_block_uncompress");
craftingTable.removeByName( "thermal:storage/charcoal_from_block");
//craftingTable.removeByName( "morecharcoal:from_charcoal_block");
blastFurnace.removeByName( "integrateddynamics:blasting/menril_log_coal");
blastFurnace.removeByName( "integrateddynamics:blasting/menril_log_filled_coal");
furnace.removeRecipe(<tag:items:forge:charcoal>);
craftingTable.addShaped("morecharcoal", <item:morecharcoal:charcoal_block>, [
    [<item:minecraft:charcoal>, <item:minecraft:charcoal>, <item:minecraft:charcoal>],
    [<item:minecraft:charcoal>, <item:minecraft:charcoal>, <item:minecraft:charcoal>],
    [<item:minecraft:charcoal>, <item:minecraft:charcoal>, <item:minecraft:charcoal>]
]);

craftingTable.removeRecipe(<item:cagedmobs:star_infused_netherite_ingot>);

craftingTable.removeRecipe(<item:inspirations:north_compass>);
craftingTable.removeRecipe(<item:inspirations:barometer>);
craftingTable.removeRecipe(<item:inspirations:photometer>);

// remove dupe
craftingTable.removeRecipe(<item:minecraft:crying_obsidian>);

//block chemistry for now until worked out Tier3
//craftingTable.removeRecipe(<item:alchemistry:chemical_combiner>);
//craftingTable.removeRecipe(<item:alchemistry:chemical_dissolver>);
//craftingTable.removeRecipe(<item:alchemistry:evaporator>);

//remove hammer/fortunizer
craftingTable.removeRecipe(<item:emendatusenigmatica:enigmatic_hammer>);
craftingTable.removeRecipe(<item:emendatusenigmatica:enigmatic_fortunizer>);

//remove farmlands
//craftingTable.removeRecipe(<item:minecraft:farmland>);
craftingTable.removeRecipe(<item:mysticalagriculture:inferium_farmland>);
craftingTable.removeRecipe(<item:mysticalagriculture:prudentium_farmland>);
craftingTable.removeRecipe(<item:mysticalagriculture:tertium_farmland>);
craftingTable.removeRecipe(<item:mysticalagriculture:imperium_farmland>);
craftingTable.removeRecipe(<item:mysticalagriculture:supremium_farmland>);
craftingTable.removeRecipe(<item:mysticalagradditions:insanium_farmland>);

//tesseract WIP
craftingTable.removeRecipe(<item:tesseract:tesseract>);

craftingTable.removeByName( "immersiveengineering:crafting/plate_gold_hammering");
craftingTable.removeByName( "immersiveengineering:crafting/plate_iron_hammering");
craftingTable.removeByName( "immersiveengineering:crafting/plate_silver_hammering");
craftingTable.removeByName( "immersiveengineering:crafting/plate_aluminum_hammering");
craftingTable.removeByName( "immersiveengineering:crafting/plate_steel_hammering");
craftingTable.removeByName( "immersiveengineering:crafting/plate_electrum_hammering");
craftingTable.removeByName( "immersiveengineering:crafting/plate_uranium_hammering");
craftingTable.removeByName( "immersiveengineering:crafting/plate_copper_hammering");
craftingTable.removeByName( "immersiveengineering:crafting/plate_nickel_hammering");
craftingTable.removeByName( "immersiveengineering:crafting/plate_lead_hammering");
craftingTable.removeByName( "immersiveengineering:crafting/plate_constantan_hammering");
craftingTable.removeByName( "immersiveengineering:crafting/stick_iron");

// Copper
craftingTable.removeByName( "immersiveengineering:crafting/storage_copper_to_ingot_copper");
craftingTable.removeByName( "mekanism:processing/copper/ingot/from_block");
craftingTable.removeByName( "thermal:storage/copper_ingot_from_block");

craftingTable.removeByName( "tconstruct:common/materials/copper_ingot_from_nuggets");
craftingTable.removeByName( "mekanism:processing/copper/ingot/from_nuggets");
craftingTable.removeByName( "thermal:storage/copper_ingot_from_nuggets");
craftingTable.removeByName( "immersiveengineering:crafting/nugget_copper_to_ingot_copper");

craftingTable.removeByName( "tconstruct:common/materials/copper_ingot_from_block");

// Aluminum
craftingTable.removeByName( "immersiveengineering:crafting/storage_aluminum_to_ingot_aluminum");

craftingTable.removeByName( "immersiveengineering:crafting/nugget_aluminum_to_ingot_aluminum");

// Silver
craftingTable.removeByName( "immersiveengineering:crafting/storage_silver_to_ingot_silver");
craftingTable.removeByName( "thermal:storage/silver_ingot_from_block");

craftingTable.removeByName( "thermal:storage/silver_ingot_from_nuggets");
craftingTable.removeByName( "immersiveengineering:crafting/nugget_silver_to_ingot_silver");

// Lead
craftingTable.removeByName( "immersiveengineering:crafting/storage_lead_to_ingot_lead");
craftingTable.removeByName( "mekanism:processing/lead/ingot/from_block");
craftingTable.removeByName( "thermal:storage/lead_ingot_from_block");

craftingTable.removeByName( "mekanism:processing/lead/ingot/from_nuggets");
craftingTable.removeByName( "thermal:storage/lead_ingot_from_nuggets");
craftingTable.removeByName( "immersiveengineering:crafting/nugget_lead_to_ingot_lead");

// Nickel
craftingTable.removeByName( "immersiveengineering:crafting/storage_nickel_to_ingot_nickel");
craftingTable.removeByName( "thermal:storage/nickel_ingot_from_block");

craftingTable.removeByName( "thermal:storage/nickel_ingot_from_nuggets");
craftingTable.removeByName( "immersiveengineering:crafting/nugget_nickel_to_ingot_nickel");

// Uranium
craftingTable.removeByName( "immersiveengineering:crafting/storage_uranium_to_ingot_uranium");
craftingTable.removeByName( "mekanism:processing/uranium/ingot/from_block");

craftingTable.removeByName( "mekanism:processing/uranium/ingot/from_nuggets");
craftingTable.removeByName( "immersiveengineering:crafting/nugget_uranium_to_ingot_uranium");

// Osmium
craftingTable.removeByName( "mekanism:processing/osmium/ingot/from_block");

craftingTable.removeByName( "mekanism:processing/osmium/ingot/from_nuggets");

// Tin
craftingTable.removeByName( "mekanism:processing/tin/ingot/from_block");
craftingTable.removeByName( "thermal:storage/tin_ingot_from_block");

craftingTable.removeByName( "mekanism:processing/tin/ingot/from_nuggets");
craftingTable.removeByName( "thermal:storage/tin_ingot_from_nuggets");

// Cobalt
craftingTable.removeByName( "tconstruct:common/materials/cobalt_ingot_from_block");

craftingTable.removeByName( "tconstruct:common/materials/cobalt_ingot_from_nuggets");

// Bronze
craftingTable.removeByName( "mekanism:processing/bronze/ingot/from_block");
craftingTable.removeByName( "thermal:storage/bronze_ingot_from_block");

craftingTable.removeByName( "mekanism:processing/bronze/ingot/from_nuggets");
craftingTable.removeByName( "thermal:storage/bronze_ingot_from_nuggets");

// Constantan
craftingTable.removeByName( "immersiveengineering:crafting/storage_constantan_to_ingot_constantan");
craftingTable.removeByName( "thermal:storage/constantan_ingot_from_block");

craftingTable.removeByName( "thermal:storage/constantan_ingot_from_nuggets");
craftingTable.removeByName( "immersiveengineering:crafting/nugget_constantan_to_ingot_constantan");

// Electrum
craftingTable.removeByName( "immersiveengineering:crafting/storage_electrum_to_ingot_electrum");
craftingTable.removeByName( "thermal:storage/electrum_ingot_from_block");

craftingTable.removeByName( "thermal:storage/electrum_ingot_from_nuggets");
craftingTable.removeByName( "immersiveengineering:crafting/nugget_electrum_to_ingot_electrum");

// Steel
craftingTable.removeByName( "immersiveengineering:crafting/storage_steel_to_ingot_steel");
craftingTable.removeByName( "immersiveengineering:crafting/ingot_steel_to_storage_steel");
craftingTable.removeByName( "mekanism:processing/steel/ingot/from_block");
craftingTable.removeByName( "mekanism:storage_blocks/steel");

craftingTable.removeByName( "mekanism:processing/steel/ingot/from_nuggets");
craftingTable.removeByName( "immersiveengineering:crafting/nugget_steel_to_ingot_steel");

// Invar
craftingTable.removeByName( "thermal:storage/invar_ingot_from_block");

craftingTable.removeByName( "thermal:storage/invar_ingot_from_nuggets");

// Signalum
craftingTable.removeByName( "thermal:storage/signalum_ingot_from_block");

craftingTable.removeByName( "thermal:storage/signalum_ingot_from_nuggets");

// Lumium
craftingTable.removeByName( "thermal:storage/lumium_ingot_from_block");

craftingTable.removeByName( "thermal:storage/lumium_ingot_from_nuggets");

// Enderium
craftingTable.removeByName( "thermal:storage/enderium_ingot_from_block");

craftingTable.removeByName( "thermal:storage/enderium_ingot_from_nuggets");

// Rods 
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/iron");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/gold");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/copper");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/aluminum");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/lead");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/nickel");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/uranium");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/osmium");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/tin");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/zinc");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/cobalt");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/bronze");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/brass");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/constantan");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/electrum");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/steel");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/invar");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/signalum");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/lumium");
craftingTable.removeByName( "emendatusenigmatica:rod_from_ingot/enderium");
// Plate
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/iron");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/gold");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/copper");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/aluminum");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/lead");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/nickel");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/uranium");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/osmium");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/tin");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/zinc");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/cobalt");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/bronze");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/brass");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/constantan");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/electrum");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/steel");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/invar");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/signalum");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/lumium");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/enderium");
// Dust
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/apatite");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/silver");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/potassium_nitrate");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/lead");
craftingTable.removeByName( "emendatusenigmatica:plate_from_gem/emerald");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/lapis");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/certus_quartz");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/cobalt");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/uranium");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/dimensional");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/coal");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/emerald");
craftingTable.removeByName( "emendatusenigmatica:plate_from_gem/diamond");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/iron");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/copper");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/aluminum");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/quartz");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/gold");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/sulfur");
craftingTable.removeByName( "emendatusenigmatica:plate_from_ingot/silver");
craftingTable.removeByName( "emendatusenigmatica:dust_from_ore/quartz");
craftingTable.removeByName( "emendatusenigmatica:plate_from_gem/lapis");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/diamond");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/fluorite");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/tin");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/zinc");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/nickel");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/osmium");
craftingTable.removeByName( "emendatusenigmatica:dust_from_chunk/cinnabar");

/*
// Crafting table additions not done by kubejs
*/

craftingTable.addShapeless("experience_droplet", <item:mysticalagriculture:experience_droplet> * 1, 
[<item:miniutilities:experience_pearl>]);
craftingTable.addShapeless("experience_droplet2", <item:miniutilities:experience_pearl> * 1, 
[<item:mysticalagriculture:experience_droplet>]);

craftingTable.addShapeless("earth_slimy_grass_seeds", <item:tconstruct:earth_slime_grass_seeds> * 1, 
[<item:tconstruct:earth_congealed_slime>, <item:exnihilosequentia:grass_seeds>]);
craftingTable.addShapeless("sky_slimy_grass_seeds", <item:tconstruct:sky_slime_grass_seeds> * 1, 
[<item:tconstruct:sky_congealed_slime>, <item:exnihilosequentia:grass_seeds>]);
craftingTable.addShapeless("end_slimy_grass_seeds", <item:tconstruct:ender_slime_grass_seeds> * 1, 
[<item:tconstruct:ender_congealed_slime>, <item:exnihilosequentia:grass_seeds>]);
craftingTable.addShapeless("blood_slimy_grass_seeds", <item:tconstruct:blood_slime_grass_seeds> * 1, 
[<item:tconstruct:blood_slime>, <item:exnihilosequentia:grass_seeds>]);

//ntc portal to ow portal and back
craftingTable.addShapeless("ntc_portal", <item:kubejs:ntc_portal> * 1, 
[<item:kubejs:overworld_portal>]);
craftingTable.addShapeless("overworld_portal", <item:kubejs:overworld_portal> * 1, 
[<item:kubejs:ntc_portal>]);

//early lightning cage upgrade
craftingTable.addShaped("end_rod", <item:minecraft:end_rod> * 2, [
    [<item:minecraft:air>, <item:minecraft:blaze_rod>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:integrateddynamics:proto_chorus>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

//adpother filter
craftingTable.addShaped("filters1", <item:kubejs:filters1> * 8, [
    [<tag:items:forge:wool>, <tag:items:minecraft:leaves>, <item:minecraft:paper>],
    [<tag:items:forge:plates/aluminum>, <tag:items:forge:plates/cobalt>, <tag:items:forge:plates/aluminum>],
    [<tag:items:forge:plates/aluminum>, <tag:items:forge:plates/aluminum>, <tag:items:forge:plates/aluminum>]
]);

/*
// Crafting table one shots not done by kubejs
*/

craftingTable.removeRecipe(<item:minecraft:flint_and_steel>);
craftingTable.addShapeless("flint_and_steel", <item:minecraft:flint_and_steel> * 1, 
[<item:emendatusenigmatica:steel_ingot>, <item:minecraft:flint>]);

craftingTable.removeRecipe(<item:minecraft:crafting_table>);
craftingTable.addShaped("crafting_table", <item:minecraft:crafting_table> * 1, [
    [<item:minecraft:flint>, <item:minecraft:flint>],
    [<item:quark:brown_stained_planks>, <item:quark:brown_stained_planks>]
]);

craftingTable.removeRecipe(<item:minecraft:piston>);
craftingTable.addShaped("piston", <item:minecraft:piston>, [
    [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>],
    [<item:quark:sturdy_stone>, <item:emendatusenigmatica:iron_rod>, <item:quark:sturdy_stone>],
    [<item:quark:sturdy_stone>, <item:extendedcrafting:redstone_ingot>, <item:quark:sturdy_stone>]
]);

craftingTable.removeRecipe(<item:minecraft:furnace>);
craftingTable.addShaped("furnace", <item:minecraft:furnace>, [
    [<item:quark:sturdy_stone>, <item:quark:sturdy_stone>, <item:quark:sturdy_stone>],
    [<item:quark:sturdy_stone>, <item:minecraft:air>, <item:quark:sturdy_stone>],
    [<item:quark:sturdy_stone>, <item:quark:sturdy_stone>, <item:quark:sturdy_stone>]
]);

craftingTable.removeRecipe(<item:minecraft:end_portal_frame>);
craftingTable.addShaped("end_portal_frame", <item:minecraft:end_portal_frame> * 12, [
    [<item:minecraft:ender_eye>, <item:minecraft:ender_eye>, <item:minecraft:ender_eye>],
    [<item:minecraft:ender_eye>, <item:tconstruct:manyullyn_block>, <item:minecraft:ender_eye>],
    [<item:minecraft:end_stone>, <item:minecraft:end_stone>, <item:minecraft:end_stone>]
]);

craftingTable.removeRecipe(<item:ironfurnaces:rainbow_plating>);
craftingTable.addShaped("rainbow_plating", <item:ironfurnaces:rainbow_plating> * 8, [
    [<item:ironfurnaces:netherite_furnace>, <item:ironfurnaces:netherite_furnace>, <item:ironfurnaces:netherite_furnace>],
    [<item:ironfurnaces:netherite_furnace>, <item:mysticalagriculture:supremium_furnace>, <item:ironfurnaces:netherite_furnace>],
    [<item:ironfurnaces:netherite_furnace>, <item:ironfurnaces:netherite_furnace>, <item:ironfurnaces:netherite_furnace>]
]);

craftingTable.removeRecipe(<item:minecraft:stonecutter>);
craftingTable.addShaped("stonecutter", <item:minecraft:stonecutter>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:immersiveengineering:rockcutter>, <item:minecraft:air>],
    [<tag:items:forge:stone>, <tag:items:forge:stone>, <tag:items:forge:stone>]
]);

craftingTable.removeRecipe(<item:scannable:scanner>);
craftingTable.addShaped("scanner", <item:scannable:scanner> * 1, [
    [<item:minecraft:iron_nugget>, <item:minecraft:air>, <item:minecraft:iron_nugget>],
    [<item:emendatusenigmatica:copper_rod>, <item:numina:component_laser_emitter>, <item:emendatusenigmatica:copper_rod>],
    [<item:numina:battery_basic>, <item:extendedcrafting:redstone_ingot>, <item:numina:battery_basic>]
]);

//gas pipez
craftingTable.removeRecipe(<item:pipez:gas_pipe>);
craftingTable.addShaped("gas_pipe", <item:pipez:gas_pipe> * 16, [
	[<item:emendatusenigmatica:steel_ingot>, <item:emendatusenigmatica:steel_ingot>, <item:emendatusenigmatica:steel_ingot>], 
	[<item:minecraft:glass>, <item:extendedcrafting:redstone_ingot>, <item:minecraft:glass>], 
	[<item:emendatusenigmatica:steel_ingot>, <item:emendatusenigmatica:steel_ingot>, <item:emendatusenigmatica:steel_ingot>]
]);

//mulch
craftingTable.removeRecipe(<item:inspirations:brown_mulch>);
craftingTable.addShaped("brown_mulch", <item:inspirations:brown_mulch> * 8, [
	[<item:inspirations:plain_mulch>, <item:inspirations:plain_mulch>, <item:inspirations:plain_mulch>], 
	[<item:inspirations:plain_mulch>, <item:minecraft:brown_dye>, <item:inspirations:plain_mulch>], 
	[<item:inspirations:plain_mulch>, <item:inspirations:plain_mulch>, <item:inspirations:plain_mulch>]
]);

craftingTable.removeRecipe(<item:inspirations:red_mulch>);
craftingTable.addShaped("red_mulch", <item:inspirations:red_mulch> * 4, [
	[<item:inspirations:brown_mulch>, <item:inspirations:brown_mulch>, <item:inspirations:brown_mulch>], 
	[<item:inspirations:brown_mulch>, <item:minecraft:red_dye>, <item:inspirations:brown_mulch>], 
	[<item:inspirations:brown_mulch>, <item:inspirations:brown_mulch>, <item:inspirations:brown_mulch>]
]);

craftingTable.removeRecipe(<item:inspirations:black_mulch>);
craftingTable.addShaped("black_mulch", <item:inspirations:black_mulch> * 2, [
	[<item:inspirations:red_mulch>, <item:inspirations:red_mulch>, <item:inspirations:red_mulch>], 
	[<item:inspirations:red_mulch>, <item:minecraft:black_dye>, <item:inspirations:red_mulch>], 
	[<item:inspirations:red_mulch>, <item:inspirations:red_mulch>, <item:inspirations:red_mulch>]
]);

craftingTable.removeRecipe(<item:inspirations:blue_mulch>);
craftingTable.addShaped("blue_mulch", <item:inspirations:blue_mulch> * 1, [
	[<item:inspirations:black_mulch>, <item:inspirations:black_mulch>, <item:inspirations:black_mulch>], 
	[<item:inspirations:black_mulch>, <item:minecraft:blue_dye>, <item:inspirations:black_mulch>], 
	[<item:inspirations:black_mulch>, <item:inspirations:black_mulch>, <item:inspirations:black_mulch>]
]);


craftingTable.addShaped("upgrade_basic", <item:kubejs:upgrade_basic> * 1, [
	[<item:minecraft:air>, <item:thermal:signalum_glass>, <item:minecraft:air>], 
	[<item:mekanism:alloy_infused>, <item:emendatusenigmatica:osmium_plate>, <item:mekanism:alloy_infused>], 
	[<item:minecraft:air>, <item:thermal:signalum_glass>, <item:minecraft:air>]
]);

//alchemistry

craftingTable.removeRecipe(<item:alchemistry:chemical_combiner>);
craftingTable.addShaped("chemical_combiner", <item:alchemistry:chemical_combiner> * 1, [
	[<item:emendatusenigmatica:osmium_plate>, <item:mekanism:enriched_diamond>, <item:emendatusenigmatica:osmium_plate>], 
	[<item:chemlib:element_oganesson>, <item:mekanism:enriched_refined_obsidian>, <item:chemlib:element_oganesson>], 
	[<item:emendatusenigmatica:osmium_plate>, <item:minecraft:piston>, <item:emendatusenigmatica:osmium_plate>]
]);

craftingTable.removeRecipe(<item:alchemistry:chemical_dissolver>);
craftingTable.addShaped("chemical_dissolver", <item:alchemistry:chemical_dissolver> * 1, [
	[<item:emendatusenigmatica:osmium_plate>, <item:minecraft:piston>, <item:emendatusenigmatica:osmium_plate>], 
	[<item:emendatusenigmatica:osmium_plate>, <item:mekanism:enriched_diamond>, <item:emendatusenigmatica:osmium_plate>], 
	[<item:emendatusenigmatica:osmium_plate>, <item:minecraft:piston>, <item:emendatusenigmatica:osmium_plate>]
]);


//why was this deleted?
craftingTable.addShaped("basic_crafter", <item:packagedexcrafting:basic_crafter>, [
    [<item:extendedcrafting:black_iron_ingot>, <item:packagedauto:package_component>, <item:extendedcrafting:black_iron_ingot>],
    [<item:extendedcrafting:crystaltine_component>, <item:extendedcrafting:basic_auto_table>, <item:extendedcrafting:crystaltine_component>],
    [<item:extendedcrafting:black_iron_ingot>, <item:extendedcrafting:redstone_catalyst>, <item:extendedcrafting:black_iron_ingot>]
]);

//stacksize stuff
<item:minecraft:ender_pearl>.setMaxStackSize(64);

<item:tconstruct:seared_fuel_tank>.setMaxStackSize(1);
<item:tconstruct:seared_ingot_tank>.setMaxStackSize(1);
<item:tconstruct:scorched_fuel_tank>.setMaxStackSize(1);
<item:tconstruct:scorched_fuel_gauge>.setMaxStackSize(1);
<item:tconstruct:scorched_ingot_tank>.setMaxStackSize(1);
<item:integrateddynamics:energy_battery>.setMaxStackSize(1);