


// <recipetype:thermal:smelter>.addRecipe(String name, MCWeightedItemStack[] outputs, IIngredient[] ingredients, float experience, int energy);
<recipetype:thermal:smelter>.addRecipe("redstone_ingot", [<item:extendedcrafting:redstone_ingot> % 100/*, <item:appliedenergistics2:certus_quartz_crystal> %5*/], [<tag:items:forge:gems/silicon>, <item:minecraft:redstone>], 0.1, 500);

<recipetype:thermal:smelter>.addRecipe("ender_ingot", [<item:extendedcrafting:ender_ingot> % 100], [<item:minecraft:ender_pearl>, <item:minecraft:iron_ingot>], 0.1, 500);

craftingTable.removeRecipe(<item:thermal:redstone_servo>);
craftingTable.addShaped("redstone_servo", <item:thermal:redstone_servo>, [
    [<item:minecraft:air>, <item:immersiveengineering:wirecoil_redstone>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:emendatusenigmatica:iron_rod>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:immersiveengineering:wirecoil_redstone>, <item:minecraft:air>]
]);

craftingTable.removeRecipe(<item:thermal:rf_coil>);
craftingTable.addShaped("rf_coil", <item:thermal:rf_coil>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:immersiveengineering:wirecoil_redstone>],
    [<item:minecraft:air>, <item:emendatusenigmatica:gold_rod>, <item:minecraft:air>],
    [<item:immersiveengineering:wirecoil_redstone>, <item:minecraft:air>, <item:minecraft:air>]
]);

craftingTable.removeRecipe(<item:thermal:watering_can>);

// <recipetype:thermal:press>.addRecipe(String name, MCWeightedItemStack[] outputs, IFluidStack outputFluid, IIngredient[] ingredients, int energy);
<recipetype:thermal:press>.addRecipe("plastic", [<item:industrialforegoing:plastic> % 120], <fluid:minecraft:empty>, [<item:thermal:cured_rubber>], 5000);
<recipetype:thermal:press>.addRecipe("plastic_block", [<item:industrialforegoing:plastic> % 900], <fluid:minecraft:empty>, [<item:thermal:cured_rubber_block>], 45000);

<recipetype:thermal:press>.addRecipe("chorus", [<item:integrateddynamics:crystalized_chorus_chunk> % 350], <fluid:integrateddynamics:liquid_chorus> * 125, [<item:minecraft:popped_chorus_fruit>], 500);

<recipetype:thermal:press>.addRecipe("menril_plank", [<item:integrateddynamics:crystalized_menril_chunk> % 100], <fluid:integrateddynamics:menril_resin> * 250, [<item:integrateddynamics:menril_planks>], 500);
<recipetype:thermal:press>.addRecipe("menril_log", [<item:integrateddynamics:crystalized_menril_chunk> % 350], <fluid:integrateddynamics:menril_resin> * 1000, [<item:integrateddynamics:menril_log>], 500);
<recipetype:thermal:press>.addRecipe("en_menril_log", [<item:integrateddynamics:crystalized_menril_chunk> % 450], <fluid:integrateddynamics:menril_resin> * 1500, [<item:integrateddynamics:menril_log_filled>], 500);

<recipetype:thermal:press>.addRecipe("liquid_amber_root", [], <fluid:kubejs:liquid_amber_root> * 125, [<item:betterendforge:amber_root_raw>], 5000);
<recipetype:thermal:press>.addRecipe("liquid_blossom_berry", [], <fluid:kubejs:liquid_blossom_berry> * 250, [<item:betterendforge:blossom_berry>], 5000);
<recipetype:thermal:press>.addRecipe("liquid_blue_vine", [], <fluid:kubejs:liquid_blue_vine> * 500, [<item:betterendforge:blue_vine_lantern>], 5000);
<recipetype:thermal:press>.addRecipe("liquid_bulb_vine", [], <fluid:kubejs:liquid_bulb_vine> * 250, [<item:betterendforge:glowing_bulb>], 5000);
<recipetype:thermal:press>.addRecipe("liquid_chorus_mushroom", [], <fluid:kubejs:liquid_chorus_mushroom> * 50, [<item:betterendforge:chorus_mushroom_raw>], 5000);
<recipetype:thermal:press>.addRecipe("liquid_end_lily", [], <fluid:kubejs:liquid_end_lily> * 75, [<item:betterendforge:end_lily_leaf>], 5000);
<recipetype:thermal:press>.addRecipe("liquid_end_lotus", [], <fluid:kubejs:liquid_end_lotus> * 125, [<item:betterendforge:end_lotus_stem>], 5000);
<recipetype:thermal:press>.addRecipe("liquid_glowing_pillar", [], <fluid:kubejs:liquid_glowing_pillar> * 500, [<item:betterendforge:glowing_pillar_luminophor>], 5000);
<recipetype:thermal:press>.addRecipe("liquid_lumecorn", [], <fluid:kubejs:liquid_lumecorn> * 125, [<item:betterendforge:lumecorn_rod>], 5000);
<recipetype:thermal:press>.addRecipe("liquid_shadow_berry", [], <fluid:kubejs:liquid_shadow_berry> * 250, [<item:betterendforge:shadow_berry_raw>], 5000);

<recipetype:thermal:press>.addRecipe("graphite_electrode", [<item:immersiveengineering:graphite_electrode>.withTag({graphDmg: 0 as int})], <fluid:minecraft:empty>, [<tag:items:forge:ingots/hop_graphite>*4, <item:immersiveengineering:mold_rod>], 5000);



//craftingTable.removeRecipe(<item:thermal:machine_frame>);

//craftingTable.removeRecipe(<item:thermal:energy_cell_frame>);

//craftingTable.removeRecipe(<item:thermal:fluid_cell_frame>);

// <recipetype:thermal:bottler>.addRecipe(String name, IItemStack output, IIngredient ingredient, IFluidStack fluidInput, int energy);
<recipetype:thermal:bottler>.addRecipe("black_iron_ingot", <item:extendedcrafting:black_iron_ingot>, <item:minecraft:iron_ingot>, <fluid:tconstruct:blazing_blood> *125, 500);

<recipetype:thermal:bottler>.addRecipe("basalz_powder", <item:thermal:basalz_powder>, <item:emendatusenigmatica:obsidian_dust>, <fluid:industrialforegoing:essence> *250, 500);

<recipetype:thermal:bottler>.addRecipe("blaze_powder", <item:minecraft:blaze_powder>, <item:emendatusenigmatica:sulfur_dust>, <fluid:industrialforegoing:essence> *250, 500);

<recipetype:thermal:bottler>.addRecipe("blitz_powder", <item:thermal:blitz_powder>, <item:emendatusenigmatica:potassium_nitrate_dust>, <fluid:industrialforegoing:essence> *250, 500);

<recipetype:thermal:bottler>.addRecipe("blizz_powder", <item:thermal:blizz_powder>, <item:minecraft:snowball>, <fluid:industrialforegoing:essence> *250, 500);

<recipetype:thermal:bottler>.addRecipe("sky_stone", <item:appliedenergistics2:sky_stone_block>, <item:minecraft:basalt>, <fluid:kubejs:molten_blitz> *250, 500);

<recipetype:thermal:bottler>.addRecipe("end_stone", <item:minecraft:end_stone>, <tag:items:forge:sandstone>, <fluid:thermal:ender> *250, 500);


// <recipetype:thermal:insolator>.addRecipe(String name, MCWeightedItemStack[] outputs, IIngredient ingredient, int fluidAmount, int energy);
//<recipetype:thermal:insolator>.addRecipe("charged_certus", [<item:appliedenergistics2:charged_certus_quartz_crystal> % 100], <item:appliedenergistics2:certus_quartz_crystal>, 0, 500);

//set up certus quartz to liquid and process to charged

// <recipetype:thermal:crucible>.addRecipe(String name, IFluidStack output, IIngredient ingredient, int energy);
//<recipetype:thermal:crucible>.addRecipe("certus_fluid", <fluid:emendatusenigmatica:molten_certus_quartz> * 144, <item:emendatusenigmatica:certus_quartz_gem>, 500);

<recipetype:thermal:crucible>.addRecipe("blaze_fluid", <fluid:tconstruct:blazing_blood> * 250, <item:minecraft:blaze_powder>, 500);


<recipetype:thermal:bottler>.addRecipe("charged_certus", <item:emendatusenigmatica:charged_certus_quartz_gem>, <item:thermal:lightning_charge>, <fluid:emendatusenigmatica:molten_certus_quartz> *144, 500);

// <recipetype:thermal:pulverizer>.addRecipe(String name, MCWeightedItemStack[] outputs, IIngredient ingredient, float experience, int energy);
/*
<recipetype:thermal:pulverizer>.addRecipe("ex_dust", [<item:exnihilosequentia:dust> * 3 % 100] , <item:minecraft:sand>, 0.1, 500);
<recipetype:thermal:pulverizer>.addRecipe("ex_endstone", [<item:exnihilosequentia:crushed_end_stone> * 3 % 100] , <item:minecraft:end_stone>, 0.1, 500);
<recipetype:thermal:pulverizer>.addRecipe("ex_netherrack", [<item:exnihilosequentia:crushed_netherrack> * 3 % 100] , <item:minecraft:netherrack>, 0.1, 500);
<recipetype:thermal:pulverizer>.addRecipe("betterend_endstone", [<item:betterendforge:endstone_dust> * 3 % 100] , <item:exnihilosequentia:crushed_end_stone>, 0.1, 500);
*/

<recipetype:thermal:smelter>.addRecipe("crystalline_pink_slime_ingot", [<item:enderioalloys:item_alloy_ingot_crystalline_pink_slime> % 100], [<item:enderioalloys:item_material_pulsating_powder>, <item:industrialforegoing:pink_slime_ingot>], 0.1, 9000);
<recipetype:thermal:pulverizer>.addRecipe("pulsating_powder", [<item:enderioalloys:item_material_pulsating_powder> * 1 % 100] , <item:enderioalloys:item_material_pulsating_crystal>, 0.1, 9000);
/*
<recipetype:thermal:smelter>.addRecipe("terminite_alloy", [<item:betterendforge:terminite_ingot> % 100], [<item:emendatusenigmatica:enderium_dust>, <item:minecraft:iron_ingot>], 0.1, 500);

<recipetype:thermal:smelter>.addRecipe("aeternium_alloy", [<item:betterendforge:aeternium_ingot> % 100], [<item:betterendforge:terminite_ingot>, <item:minecraft:netherite_ingot>], 0.1, 500);
*/
<recipetype:thermal:smelter>.addRecipe("fluix_crystal", [<item:emendatusenigmatica:fluix_gem> % 200], [<item:emendatusenigmatica:charged_certus_quartz_gem>, <item:minecraft:quartz>, <item:minecraft:redstone>], 0.1, 1000);


craftingTable.removeRecipe(<item:thermal:beekeeper_fabric>);
craftingTable.addShaped("beekeeper_fabric", <item:thermal:beekeeper_fabric>, [
    [<item:minecraft:air>, <item:minecraft:string>, <item:minecraft:air>],
    [<item:minecraft:string>, <item:exnihilosequentia:beehive_frame>, <item:minecraft:string>],
    [<item:minecraft:air>, <item:minecraft:string>, <item:minecraft:air>]
]);

craftingTable.removeRecipe(<item:thermal:device_tree_extractor>);
craftingTable.addShaped("device_tree_extractor", <item:thermal:device_tree_extractor>, [
    [<item:quark:blue_stained_planks>, <tag:items:forge:gears/iron>, <item:quark:blue_stained_planks>],
    [<tag:items:forge:glass>, <item:minecraft:bucket>, <tag:items:forge:glass>],
    [<item:quark:blue_stained_planks>, <item:thermal:redstone_servo>, <item:quark:blue_stained_planks>]
]);


// Oil Stuff

// <recipetype:thermal:refinery>.addRecipe(String name, MCWeightedItemStack itemOutput, IFluidStack[] fluidsOutput, IFluidStack inputFluid, int energy);
//<recipetype:thermal:refinery>.addRecipe("refinery_test_with_item", <item:minecraft:diamond>, [<fluid:minecraft:empty>], <fluid:minecraft:water> *500, 500);
//<recipetype:thermal:refinery>.addRecipe("refinery_test_with_fluid", <item:minecraft:air>, [<fluid:minecraft:lava> *100], <fluid:minecraft:water> *500, 500);
//<recipetype:thermal:refinery>.addRecipe("refinery_test_with_item_and_fluid", <item:minecraft:diamond>, [<fluid:minecraft:lava> *100, <fluid:thermal:resin> *100], <fluid:minecraft:water> *500, 500);


<recipetype:thermal:refinery>.addRecipe("refinery_ethylene", <item:minecraft:air>, [<fluid:mekanism:ethene> *50], <fluid:kubejs:liquid_ethane> *100, 500); // assuming hydrogenation using hydrogen gas in presence of nickel or palladium catalyst

<recipetype:thermal:refinery>.addRecipe("refinery_propylene", <item:minecraft:air>, [<fluid:kubejs:liquid_propylene> *50], <fluid:kubejs:liquid_propane> *100, 500); // assuming hydrogenation using hydrogen gas in presence of nickel or palladium catalyst

<recipetype:thermal:bottler>.addRecipe("ethylene_to_hdpe", <item:mekanism:hdpe_pellet> *1, <item:chemlib:element_oxygen>, <fluid:mekanism:ethene> *50, 500);
<recipetype:thermal:bottler>.addRecipe("propylene_to_rubber", <item:thermal:rubber> *3, <tag:items:forge:dusts/charcoal>, <fluid:kubejs:liquid_propylene> *50, 500);


//<recipetype:thermal:press>.addRecipe("hdpe_sheet", [<item:mekanism:hdpe_sheet> % 100], <fluid:minecraft:empty>, [<item:mekanism:hdpe_pellet> *3], 500);

//Advanced Recipes
craftingTable.removeRecipe(<item:thermal:machine_press>);
craftingTable.addShaped("machine_press", <item:thermal:machine_press>, [
    [<item:numina:component_servo>, <item:minecraft:iron_block>, <item:numina:component_servo>],
    [<item:emendatusenigmatica:bronze_plate>, <item:thermal:machine_frame>, <item:emendatusenigmatica:bronze_plate>],
    [<item:emendatusenigmatica:constantan_gear>, <item:thermal:rf_coil>, <item:emendatusenigmatica:constantan_gear>]
]);

craftingTable.removeRecipe(<item:thermal:machine_refinery>);
craftingTable.addShaped("machine_refinery", <item:thermal:machine_refinery>, [
    [<item:numina:component_servo>, <tag:items:forge:glass>, <item:numina:component_servo>],
    [<item:emendatusenigmatica:copper_plate>, <item:thermal:machine_frame>, <item:emendatusenigmatica:copper_plate>],
    [<item:emendatusenigmatica:invar_gear>, <item:thermal:rf_coil>, <item:emendatusenigmatica:invar_gear>]
]);

craftingTable.removeRecipe(<item:thermal:machine_centrifuge>);
craftingTable.addShaped("machine_centrifuge", <item:thermal:machine_centrifuge>, [
    [<item:numina:component_servo>, <item:minecraft:compass>, <item:numina:component_servo>],
    [<item:emendatusenigmatica:tin_plate>, <item:thermal:machine_frame>, <item:emendatusenigmatica:tin_plate>],
    [<item:emendatusenigmatica:constantan_gear>, <item:thermal:rf_coil>, <item:emendatusenigmatica:constantan_gear>]
]);

craftingTable.removeRecipe(<item:thermal:machine_pyrolyzer>);
craftingTable.addShaped("machine_pyrolyzer", <item:thermal:machine_pyrolyzer>, [
    [<item:numina:component_servo>, <item:minecraft:blaze_rod>, <item:numina:component_servo>],
    [<item:immersiveengineering:blastbrick>, <item:thermal:machine_frame>, <item:immersiveengineering:blastbrick>],
    [<item:emendatusenigmatica:constantan_gear>, <item:thermal:rf_coil>, <item:emendatusenigmatica:constantan_gear>]
]);

craftingTable.removeRecipe(<item:thermal:machine_bottler>);
craftingTable.addShaped("machine_bottler", <item:thermal:machine_bottler>, [
    [<item:numina:component_servo>, <item:minecraft:bucket>, <item:numina:component_servo>],
    [<tag:items:forge:glass>, <item:thermal:machine_frame>, <tag:items:forge:glass>],
    [<item:emendatusenigmatica:copper_gear>, <item:thermal:rf_coil>, <item:emendatusenigmatica:copper_gear>]
]);

craftingTable.removeRecipe(<item:thermal:machine_smelter>);
craftingTable.addShaped("machine_smelter", <item:thermal:machine_smelter>, [
    [<item:numina:component_magnet>, <item:minecraft:blast_furnace>, <item:numina:component_magnet>],
    [<item:engineersdecor:dense_grit_sand_block>, <item:thermal:machine_frame>, <item:engineersdecor:dense_grit_sand_block>],
    [<item:emendatusenigmatica:invar_gear>, <item:thermal:rf_coil>, <item:emendatusenigmatica:invar_gear>]
]);

// misc
<recipetype:thermal:pulverizer>.addRecipe("plain_mulch", [<item:inspirations:plain_mulch> * 1 % 100] , <tag:items:minecraft:planks>, 0.1, 500);

/*
craftingTable.removeRecipe(<item:thermal:rubber>);
craftingTable.addShapeless("rubber", <item:thermal:rubber> * 1, 
[<item:thermal:latex_bucket>]);
*/
<recipetype:thermal:press>.addRecipe("hop_graphite", [<item:immersiveengineering:dust_hop_graphite> % 100], <fluid:minecraft:empty>, [<item:emendatusenigmatica:coke_dust> *8], 19200);


// Chemical stuff

// <recipetype:thermal:pyrolyzer>.addRecipe(String name, MCWeightedItemStack[] outputs, IFluidStack outputFluid, IIngredient ingredient, int energy);
//<recipetype:thermal:pyrolyzer>.addRecipe("sulfur_dioxide_fluid", [<item:minecraft:air> %0], <fluid:mekanism:sulfur_dioxide> *100, <item:emendatusenigmatica:sulfur_dust>, 500);
<recipetype:thermal:crucible>.addRecipe("sulfur_dioxide_fluid", <fluid:mekanism:sulfur_dioxide> *100, <item:emendatusenigmatica:sulfur_dust>, 800);

// <recipetype:thermal:refinery>.addRecipe(String name, MCWeightedItemStack itemOutput, IFluidStack[] fluidsOutput, IFluidStack inputFluid, int energy);
<recipetype:thermal:refinery>.addRecipe("compound_sulfur_dioxide", <item:chemlib:compound_sulfur_dioxide>, [<fluid:minecraft:empty>], <fluid:mekanism:sulfur_dioxide> *100, 500);

<recipetype:thermal:bottler>.addRecipe("compound_sulfur_trioxide", <item:chemlib:compound_sulfur_trioxide>, <item:chemlib:compound_sulfur_dioxide>, <fluid:mekanism:oxygen> *50, 500);

//<recipetype:thermal:pyrolyzer>.addRecipe("sulfur_trioxide_fluid", [<item:minecraft:air> %0], <fluid:mekanism:sulfur_trioxide> *100, <item:chemlib:compound_sulfur_trioxide>, 500);
<recipetype:thermal:crucible>.addRecipe("sulfur_trioxide_fluid", <fluid:mekanism:sulfur_trioxide> *100, <item:chemlib:compound_sulfur_trioxide>, 800);

//<recipetype:thermal:refinery>.addRecipe("compound_water", <item:chemlib:compound_water> * 8, [<fluid:minecraft:empty>], <fluid:minecraft:water> * 500, 500);
// <recipetype:thermal:crucible>.addRecipe(String name, IFluidStack output, IIngredient ingredient, int energy);
<recipetype:thermal:crucible>.addRecipe("compound_water", <fluid:minecraft:water> * 500, <item:chemlib:compound_water> * 8, 800);

<recipetype:thermal:bottler>.addRecipe("compound_sulfuric_acid", <item:chemlib:compound_sulfuric_acid> * 5, <item:chemlib:compound_water> * 8, <fluid:mekanism:sulfur_trioxide> *500, 500);

//<recipetype:thermal:pyrolyzer>.addRecipe("sulfuric_acid_fluid", [<item:minecraft:air> %0], <fluid:mekanism:sulfuric_acid> *25, <item:chemlib:compound_sulfuric_acid>, 500);
<recipetype:thermal:crucible>.addRecipe("sulfuric_acid_fluid", <fluid:mekanism:sulfuric_acid> *25, <item:chemlib:compound_sulfuric_acid>, 800);

<recipetype:thermal:pyrolyzer>.addRecipe("oxygen_from_flint", [<item:minecraft:air> %0], <fluid:mekanism:oxygen> *10, <item:minecraft:flint>, 500);

//<recipetype:thermal:refinery>.addRecipe("element_oxygen", <item:chemlib:element_oxygen> * 8, [<fluid:minecraft:empty>], <fluid:mekanism:oxygen> *500, 500);
<recipetype:thermal:crucible>.addRecipe("element_oxygen", <fluid:mekanism:oxygen> *500, <item:chemlib:element_oxygen> * 8, 800);

<recipetype:thermal:refinery>.addRecipe("liquid_refined_glue", <item:thermal:rosin> % 50, [<fluid:thermal:tree_oil> * 100, <fluid:kubejs:liquid_refined_glue> * 50], <fluid:thermal:resin> * 200, 4000);

<recipetype:thermal:crucible>.addRecipe("compound_sucrose", <fluid:kubejs:molten_sugar> *144, <item:chemlib:compound_sucrose> * 1, 800);

<recipetype:thermal:refinery>.addRecipe("oxygen_from_fluid", <item:chemlib:element_oxygen>*8, [<fluid:minecraft:empty>], <fluid:mekanism:oxygen> *500, 800);



//6 times materials ore processing
//calcium carbonate + acetic acid -> calcium acetate
<recipetype:thermal:bottler>.addRecipe("calcium_acetate_reaction", <item:kubejs:calcium_acetate>, <item:chemlib:compound_calcium_carbonate>, <fluid:kubejs:liquid_vinegar> *250, 500);

// <recipetype:thermal:centrifuge>.addRecipe(String name, MCWeightedItemStack[] outputs, IFluidStack outputFluid, IIngredient ingredient, int energy);
// calcium acetate -> calcium carbonate + liquid acetone
<recipetype:thermal:centrifuge>.addRecipe("liquid_acetone_centrifuge", [<item:chemlib:compound_calcium_carbonate> % 100], <fluid:kubejs:liquid_acetone> *250, <item:kubejs:calcium_acetate>, 500);

//calcium carbonate handled by chemical disolver (coral, eggs, shells, travertine)

//terpentine for DIP
<recipetype:thermal:refinery>.addRecipe("refinery_terpentine", <item:thermal:rosin>, [<fluid:kubejs:liquid_turpentine> *50], <fluid:kubejs:liquid_pine_resin> *100, 500);

//chemical reactor stuff handled by custommachinery_recipes.js

//8 times materials
<recipetype:thermal:refinery>.addRecipe("refinery_carbonic_acid", <item:minecraft:air> %0, [<fluid:kubejs:liquid_carbonic_acid> *250], <fluid:kubejs:liquid_carbonated_water> *500, 500);

//actual processing

//8x

//Enricher stuff handled by dissolution.js

// <recipetype:thermal:bottler>.addRecipe(String name, IItemStack output, IIngredient ingredient, IFluidStack fluidInput, int energy);
<recipetype:thermal:bottler>.addRecipe("dry_cleaned_aluminum", <item:kubejs:dry_cleaned_aluminum>, <item:kubejs:irradiated_aluminum>, <fluid:kubejs:liquid_perchloroethylene> *100, 500);
<recipetype:thermal:bottler>.addRecipe("dry_cleaned_cobalt", <item:kubejs:dry_cleaned_cobalt>, <item:kubejs:irradiated_cobalt>, <fluid:kubejs:liquid_perchloroethylene> *100, 500);
<recipetype:thermal:bottler>.addRecipe("dry_cleaned_copper", <item:kubejs:dry_cleaned_copper>, <item:kubejs:irradiated_copper>, <fluid:kubejs:liquid_perchloroethylene> *100, 500);
<recipetype:thermal:bottler>.addRecipe("dry_cleaned_gold", <item:kubejs:dry_cleaned_gold>, <item:kubejs:irradiated_gold>, <fluid:kubejs:liquid_perchloroethylene> *100, 500);
<recipetype:thermal:bottler>.addRecipe("dry_cleaned_iron", <item:kubejs:dry_cleaned_iron>, <item:kubejs:irradiated_iron>, <fluid:kubejs:liquid_perchloroethylene> *100, 500);
<recipetype:thermal:bottler>.addRecipe("dry_cleaned_lead", <item:kubejs:dry_cleaned_lead>, <item:kubejs:irradiated_lead>, <fluid:kubejs:liquid_perchloroethylene> *100, 500);
<recipetype:thermal:bottler>.addRecipe("dry_cleaned_nickel", <item:kubejs:dry_cleaned_nickel>, <item:kubejs:irradiated_nickel>, <fluid:kubejs:liquid_perchloroethylene> *100, 500);
<recipetype:thermal:bottler>.addRecipe("dry_cleaned_osmium", <item:kubejs:dry_cleaned_osmium>, <item:kubejs:irradiated_osmium>, <fluid:kubejs:liquid_perchloroethylene> *100, 500);
<recipetype:thermal:bottler>.addRecipe("dry_cleaned_silver", <item:kubejs:dry_cleaned_silver>, <item:kubejs:irradiated_silver>, <fluid:kubejs:liquid_perchloroethylene> *100, 500);
<recipetype:thermal:bottler>.addRecipe("dry_cleaned_thallasium", <item:kubejs:dry_cleaned_thallasium>, <item:kubejs:irradiated_thallasium>, <fluid:kubejs:liquid_perchloroethylene> *100, 500);
<recipetype:thermal:bottler>.addRecipe("dry_cleaned_tin", <item:kubejs:dry_cleaned_tin>, <item:kubejs:irradiated_tin>, <fluid:kubejs:liquid_perchloroethylene> *100, 500);
<recipetype:thermal:bottler>.addRecipe("dry_cleaned_uranium", <item:kubejs:dry_cleaned_uranium>, <item:kubejs:irradiated_uranium>, <fluid:kubejs:liquid_perchloroethylene> *100, 500);
<recipetype:thermal:bottler>.addRecipe("dry_cleaned_zinc", <item:kubejs:dry_cleaned_zinc>, <item:kubejs:irradiated_zinc>, <fluid:kubejs:liquid_perchloroethylene> *100, 500);

// <recipetype:thermal:press>.addRecipe(String name, MCWeightedItemStack[] outputs, IFluidStack outputFluid, IIngredient[] ingredients, int energy);
<recipetype:thermal:press>.addRecipe("clean_pressed_aluminum", [<item:kubejs:clean_pressed_aluminum> *4], <fluid:minecraft:empty>, [<item:kubejs:dry_cleaned_aluminum>], 5000);
<recipetype:thermal:press>.addRecipe("clean_pressed_cobalt", [<item:kubejs:clean_pressed_cobalt> *4], <fluid:minecraft:empty>, [<item:kubejs:dry_cleaned_cobalt>], 5000);
<recipetype:thermal:press>.addRecipe("clean_pressed_copper", [<item:kubejs:clean_pressed_copper> *4], <fluid:minecraft:empty>, [<item:kubejs:dry_cleaned_copper>], 5000);
<recipetype:thermal:press>.addRecipe("clean_pressed_gold", [<item:kubejs:clean_pressed_gold> *4], <fluid:minecraft:empty>, [<item:kubejs:dry_cleaned_gold>], 5000);
<recipetype:thermal:press>.addRecipe("clean_pressed_iron", [<item:kubejs:clean_pressed_iron> *4], <fluid:minecraft:empty>, [<item:kubejs:dry_cleaned_iron>], 5000);
<recipetype:thermal:press>.addRecipe("clean_pressed_lead", [<item:kubejs:clean_pressed_lead> *4], <fluid:minecraft:empty>, [<item:kubejs:dry_cleaned_lead>], 5000);
<recipetype:thermal:press>.addRecipe("clean_pressed_nickel", [<item:kubejs:clean_pressed_nickel> *4], <fluid:minecraft:empty>, [<item:kubejs:dry_cleaned_nickel>], 5000);
<recipetype:thermal:press>.addRecipe("clean_pressed_osmium", [<item:kubejs:clean_pressed_osmium> *4], <fluid:minecraft:empty>, [<item:kubejs:dry_cleaned_osmium>], 5000);
<recipetype:thermal:press>.addRecipe("clean_pressed_silver", [<item:kubejs:clean_pressed_silver> *4], <fluid:minecraft:empty>, [<item:kubejs:dry_cleaned_silver>], 5000);
<recipetype:thermal:press>.addRecipe("clean_pressed_thallasium", [<item:kubejs:clean_pressed_thallasium> *4], <fluid:minecraft:empty>, [<item:kubejs:dry_cleaned_thallasium>], 5000);
<recipetype:thermal:press>.addRecipe("clean_pressed_tin", [<item:kubejs:clean_pressed_tin> *4], <fluid:minecraft:empty>, [<item:kubejs:dry_cleaned_tin>], 5000);
<recipetype:thermal:press>.addRecipe("clean_pressed_uranium", [<item:kubejs:clean_pressed_uranium> *4], <fluid:minecraft:empty>, [<item:kubejs:dry_cleaned_uranium>], 5000);
<recipetype:thermal:press>.addRecipe("clean_pressed_zinc", [<item:kubejs:clean_pressed_zinc> *4], <fluid:minecraft:empty>, [<item:kubejs:dry_cleaned_zinc>], 5000);
//This concludes 8x

//7 times materials

//target_chamber stuff handled by nucleosynthesizing.js

// Enricher stuff handled by dissolution.js


// <recipetype:thermal:centrifuge>.addRecipe(String name, MCWeightedItemStack[] outputs, IFluidStack outputFluid, IIngredient ingredient, int energy);
// centrifuge - bonsai
<recipetype:thermal:centrifuge>.addRecipe("basic_power_flower", [<item:projectexpansion:basic_compressed_collector> * 2, <item:projectexpansion:basic_relay> * 6, <item:projectexpansion:basic_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:basic_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("dark_power_flower", [<item:projectexpansion:dark_compressed_collector> * 2, <item:projectexpansion:dark_relay> * 6, <item:projectexpansion:dark_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:dark_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("red_power_flower", [<item:projectexpansion:red_compressed_collector> * 2, <item:projectexpansion:red_relay> * 6, <item:projectexpansion:red_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:red_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("magenta_power_flower", [<item:projectexpansion:magenta_compressed_collector> * 2, <item:projectexpansion:magenta_relay> * 6, <item:projectexpansion:magenta_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:magenta_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("pink_power_flower", [<item:projectexpansion:pink_compressed_collector> * 2, <item:projectexpansion:pink_relay> * 6, <item:projectexpansion:pink_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:pink_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("purple_power_flower", [<item:projectexpansion:purple_compressed_collector> * 2, <item:projectexpansion:purple_relay> * 6, <item:projectexpansion:purple_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:purple_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("violet_power_flower", [<item:projectexpansion:violet_compressed_collector> * 2, <item:projectexpansion:violet_relay> * 6, <item:projectexpansion:violet_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:violet_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("blue_power_flower", [<item:projectexpansion:blue_compressed_collector> * 2, <item:projectexpansion:blue_relay> * 6, <item:projectexpansion:blue_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:blue_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("cyan_power_flower", [<item:projectexpansion:cyan_compressed_collector> * 2, <item:projectexpansion:cyan_relay> * 6, <item:projectexpansion:cyan_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:cyan_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("green_power_flower", [<item:projectexpansion:green_compressed_collector> * 2, <item:projectexpansion:green_relay> * 6, <item:projectexpansion:green_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:green_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("lime_power_flower", [<item:projectexpansion:lime_compressed_collector> * 2, <item:projectexpansion:lime_relay> * 6, <item:projectexpansion:lime_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:lime_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("yellow_power_flower", [<item:projectexpansion:yellow_compressed_collector> * 2, <item:projectexpansion:yellow_relay> * 6, <item:projectexpansion:yellow_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:yellow_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("orange_power_flower", [<item:projectexpansion:orange_compressed_collector> * 2, <item:projectexpansion:orange_relay> * 6, <item:projectexpansion:orange_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:orange_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("white_power_flower", [<item:projectexpansion:white_compressed_collector> * 2, <item:projectexpansion:white_relay> * 6, <item:projectexpansion:white_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:white_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("fading_power_flower", [<item:projectexpansion:fading_compressed_collector> * 2, <item:projectexpansion:fading_relay> * 6, <item:projectexpansion:fading_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:fading_power_flower>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("final_power_flower", [<item:projectexpansion:final_compressed_collector> * 2, <item:projectexpansion:final_relay> * 6, <item:projectexpansion:final_emc_link>], <fluid:minecraft:empty>, <item:projectexpansion:final_power_flower>, 4000);

//Relays back recipe - Thanks Dasffion
<recipetype:thermal:centrifuge>.addRecipe("basic_relay", [<item:projecte:relay_mk1>], <fluid:minecraft:empty>, <item:projectexpansion:basic_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("dark_relay", [<item:projecte:relay_mk2>], <fluid:minecraft:empty>, <item:projectexpansion:dark_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("red_relay", [<item:projecte:relay_mk3>], <fluid:minecraft:empty>, <item:projectexpansion:red_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("magenta_relay", [<item:projectexpansion:red_relay>, <item:projectexpansion:magenta_matter>], <fluid:minecraft:empty>, <item:projectexpansion:magenta_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("pink_relay", [<item:projectexpansion:magenta_relay>, <item:projectexpansion:pink_matter>], <fluid:minecraft:empty>, <item:projectexpansion:pink_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("purple_relay", [<item:projectexpansion:pink_relay>, <item:projectexpansion:purple_matter>], <fluid:minecraft:empty>, <item:projectexpansion:purple_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("violet_relay", [<item:projectexpansion:purple_relay>, <item:projectexpansion:violet_matter>], <fluid:minecraft:empty>, <item:projectexpansion:violet_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("blue_relay", [<item:projectexpansion:violet_relay>, <item:projectexpansion:blue_matter>], <fluid:minecraft:empty>, <item:projectexpansion:blue_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("cyan_relay", [<item:projectexpansion:blue_relay>, <item:projectexpansion:cyan_matter>], <fluid:minecraft:empty>, <item:projectexpansion:cyan_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("green_relay", [<item:projectexpansion:cyan_relay>, <item:projectexpansion:green_matter>], <fluid:minecraft:empty>, <item:projectexpansion:green_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("lime_relay", [<item:projectexpansion:green_relay>, <item:projectexpansion:lime_matter>], <fluid:minecraft:empty>, <item:projectexpansion:lime_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("yellow_relay", [<item:projectexpansion:lime_relay>, <item:projectexpansion:yellow_matter>], <fluid:minecraft:empty>, <item:projectexpansion:yellow_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("orange_relay", [<item:projectexpansion:yellow_relay>, <item:projectexpansion:orange_matter>], <fluid:minecraft:empty>, <item:projectexpansion:orange_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("white_relay", [<item:projectexpansion:orange_relay>, <item:projectexpansion:white_matter>], <fluid:minecraft:empty>, <item:projectexpansion:white_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("fading_relay", [<item:projectexpansion:white_relay>, <item:projectexpansion:fading_matter>], <fluid:minecraft:empty>, <item:projectexpansion:fading_relay>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("final_relay", [<item:projectexpansion:fading_relay>, <item:projectexpansion:final_star_shard>], <fluid:minecraft:empty>, <item:projectexpansion:final_relay>, 4000);

//Collectors back recipe - Thanks Dasffion
<recipetype:thermal:centrifuge>.addRecipe("final_collector", [<item:projectexpansion:fading_collector>, <item:projectexpansion:final_star_shard>], <fluid:minecraft:empty>, <item:projectexpansion:final_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("fading_collector", [<item:projectexpansion:white_collector>, <item:projectexpansion:fading_matter>], <fluid:minecraft:empty>, <item:projectexpansion:fading_collector>,4000);
<recipetype:thermal:centrifuge>.addRecipe("white_collector", [<item:projectexpansion:orange_collector>, <item:projectexpansion:white_matter>], <fluid:minecraft:empty>, <item:projectexpansion:white_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("orange_collector", [<item:projectexpansion:yellow_collector>, <item:projectexpansion:orange_matter>], <fluid:minecraft:empty>, <item:projectexpansion:orange_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("yellow_collector", [<item:projectexpansion:lime_collector>, <item:projectexpansion:yellow_matter>], <fluid:minecraft:empty>, <item:projectexpansion:yellow_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("lime_collector", [<item:projectexpansion:green_collector>, <item:projectexpansion:lime_matter>], <fluid:minecraft:empty>, <item:projectexpansion:lime_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("green_collector", [<item:projectexpansion:cyan_collector>, <item:projectexpansion:green_matter>], <fluid:minecraft:empty>, <item:projectexpansion:green_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("cyan_collector", [<item:projectexpansion:blue_collector>, <item:projectexpansion:cyan_matter>], <fluid:minecraft:empty>, <item:projectexpansion:cyan_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("blue_collector", [<item:projectexpansion:violet_collector>, <item:projectexpansion:blue_matter>], <fluid:minecraft:empty>, <item:projectexpansion:blue_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("violet_collector", [<item:projectexpansion:purple_collector>, <item:projectexpansion:violet_matter>], <fluid:minecraft:empty>, <item:projectexpansion:violet_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("purple_collector", [<item:projectexpansion:pink_collector>, <item:projectexpansion:purple_matter>], <fluid:minecraft:empty>, <item:projectexpansion:purple_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("pink_collector", [<item:projectexpansion:magenta_collector>, <item:projectexpansion:pink_matter>], <fluid:minecraft:empty>, <item:projectexpansion:pink_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("magenta_collector", [<item:projectexpansion:red_collector>, <item:projectexpansion:magenta_matter>], <fluid:minecraft:empty>, <item:projectexpansion:magenta_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("red_collector", [<item:projecte:collector_mk3>], <fluid:minecraft:empty>, <item:projectexpansion:red_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("dark_collector", [<item:projecte:collector_mk2>], <fluid:minecraft:empty>, <item:projectexpansion:dark_collector>, 4000);
<recipetype:thermal:centrifuge>.addRecipe("basic_collector", [<item:projecte:collector_mk1>], <fluid:minecraft:empty>, <item:projectexpansion:basic_collector>, 4000);
