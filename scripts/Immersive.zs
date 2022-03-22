
// <recipetype:immersiveengineering:blast_furnace>.removeRecipe(IItemStack output)
<recipetype:immersiveengineering:blast_furnace>.removeRecipe(<item:immersiveengineering:storage_steel>);
<recipetype:immersiveengineering:blast_furnace>.removeRecipe(<item:immersiveengineering:ingot_steel>);

// <recipetype:immersiveengineering:blast_furnace>.addRecipe(string recipePath, IIngredient ingredient, int time, IItemStack output, @Optional(<item:minecraft:air>) IItemStack slag)
//<recipetype:immersiveengineering:blast_furnace>.addRecipe("steel_block", <item:minecraft:iron_block>, 10800, <item:emendatusenigmatica:steel_block>, <item:thermal:slag> * 9);
//<recipetype:immersiveengineering:blast_furnace>.addRecipe("steel", <item:minecraft:iron_ingot>, 1200, <item:emendatusenigmatica:steel_ingot>, <item:thermal:slag> * 1);

/*
craftingTable.removeRecipe(<item:immersiveengineering:stick_iron>);
craftingTable.addShaped("stick_iron", <item:immersiveengineering:stick_iron>, [
    [<item:minecraft:air>, <item:minecraft:iron_ingot>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:iron_ingot>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:immersiveengineering:hammer>, <item:minecraft:air>]
]);
*/

craftingTable.removeByName( "immersiveengineering:crafting/component_iron");
craftingTable.removeByName( "immersiveengineering:crafting/component_steel");

<recipetype:immersiveengineering:coke_oven>.removeRecipe(<item:minecraft:charcoal>);



// <recipetype:immersiveengineering:alloy>.addRecipe(string recipePath, IIngredient inputA, IIngredient inputB, int time, IItemStack output)
<recipetype:immersiveengineering:alloy>.addRecipe("redstone_alloy", <item:minecraft:redstone> * 1, <tag:items:forge:gems/silicon>, 200, <item:extendedcrafting:redstone_ingot> * 1);

// <recipetype:immersiveengineering:alloy>.addRecipe(string recipePath, IIngredient inputA, IIngredient inputB, int time, IItemStack output)
<recipetype:immersiveengineering:alloy>.addRecipe("ender_alloy", <item:minecraft:ender_pearl> * 1, <item:minecraft:iron_ingot>, 200, <item:extendedcrafting:ender_ingot> * 1);

// blueprint for electrode
craftingTable.addShaped("graphite_electrode_blueprint", <item:immersiveengineering:blueprint>.withTag({blueprint: "electrode" as string}), [
    [<item:minecraft:air>, <item:immersiveengineering:graphite_electrode>.withTag({graphDmg: 0 as int}), <item:minecraft:air>],
    [<tag:items:forge:dyes/blue>, <tag:items:forge:dyes/blue>, <tag:items:forge:dyes/blue>],
    [<item:minecraft:paper>, <item:minecraft:paper>, <item:minecraft:paper>]
]);

// <recipetype:immersiveengineering:blueprint>.addRecipe(name as string, blueprintCategory as string, inputs as IIngredient[], output as IItemStack)
/*
- bannerpatterns
- bullet
- components
- electrode
- molds
- specialBullet
*/
craftingTable.removeRecipe(<item:appliedenergistics2:calculation_processor_press>);
<recipetype:immersiveengineering:blueprint>.addRecipe("calculation_press", "components", [<item:emendatusenigmatica:osmium_plate> * 1, <item:appliedenergistics2:purified_certus_quartz_crystal> * 1], <item:appliedenergistics2:calculation_processor_press> * 1);

craftingTable.removeRecipe(<item:appliedenergistics2:engineering_processor_press>);
<recipetype:immersiveengineering:blueprint>.addRecipe("engineering_press", "components", [<item:emendatusenigmatica:osmium_plate> * 1, <item:minecraft:diamond> * 1], <item:appliedenergistics2:engineering_processor_press>);

craftingTable.removeRecipe(<item:appliedenergistics2:logic_processor_press>);
<recipetype:immersiveengineering:blueprint>.addRecipe("logic_press", "components", [<item:emendatusenigmatica:osmium_plate> * 1, <item:minecraft:gold_ingot> * 1], <item:appliedenergistics2:logic_processor_press>);

craftingTable.removeRecipe(<item:appliedenergistics2:silicon_press>);
<recipetype:immersiveengineering:blueprint>.addRecipe("silicon_press", "components", [<item:emendatusenigmatica:osmium_plate> * 1, <tag:items:forge:silicon> * 1], <item:appliedenergistics2:silicon_press>);

craftingTable.removeRecipe(<item:immersiveengineering:rs_engineering>);
craftingTable.addShaped("rs_engineering", <item:immersiveengineering:rs_engineering> * 4, [
    [<item:immersiveengineering:sheetmetal_iron>, <item:immersiveengineering:wirecoil_redstone>, <item:immersiveengineering:sheetmetal_iron>],
    [<item:immersiveengineering:wirecoil_redstone>, <item:emendatusenigmatica:copper_gear>, <item:immersiveengineering:wirecoil_redstone>],
    [<item:immersiveengineering:sheetmetal_iron>, <item:immersiveengineering:wirecoil_redstone>, <item:immersiveengineering:sheetmetal_iron>]
]);

craftingTable.removeRecipe(<item:immersiveengineering:light_engineering>);
craftingTable.addShaped("light_engineering", <item:immersiveengineering:light_engineering> * 4, [
    [<item:immersiveengineering:sheetmetal_iron>, <item:immersiveengineering:component_iron>, <item:immersiveengineering:sheetmetal_iron>],
    [<item:immersiveengineering:component_iron>, <item:emendatusenigmatica:copper_gear>, <item:immersiveengineering:component_iron>],
    [<item:immersiveengineering:sheetmetal_iron>, <item:immersiveengineering:component_iron>, <item:immersiveengineering:sheetmetal_iron>]
]);

craftingTable.removeRecipe(<item:immersiveengineering:heavy_engineering>);
craftingTable.addShaped("heavy_engineering", <item:immersiveengineering:heavy_engineering> * 4, [
    [<item:immersiveengineering:sheetmetal_steel>, <item:immersiveengineering:component_steel>, <item:immersiveengineering:sheetmetal_steel>],
    [<item:immersiveengineering:component_steel>, <item:emendatusenigmatica:electrum_gear>, <item:immersiveengineering:component_steel>],
    [<item:immersiveengineering:sheetmetal_steel>, <item:immersiveengineering:component_steel>, <item:immersiveengineering:sheetmetal_steel>]
]);

craftingTable.removeRecipe(<item:immersiveengineering:hammer>);
craftingTable.addShaped("hammer", <item:immersiveengineering:hammer>, [
    [<item:minecraft:air>, <item:minecraft:iron_nugget>, <item:minecraft:string>],
    [<item:minecraft:air>, <tag:items:forge:rods/wooden>, <item:minecraft:iron_nugget>],
    [<tag:items:forge:rods/wooden>, <item:minecraft:air>, <item:minecraft:air>]
]);

/* Better End Alloys */
<recipetype:immersiveengineering:alloy>.addRecipe("terminite_alloy", <item:emendatusenigmatica:ender_dust> * 1, <item:minecraft:iron_ingot>, 200, <item:betterendforge:terminite_ingot> * 1);

<recipetype:immersiveengineering:alloy>.addRecipe("aeternium_alloy", <item:betterendforge:terminite_ingot> * 1, <item:minecraft:netherite_ingot>, 200, <item:betterendforge:aeternium_ingot> * 1);


// Wire Progression
craftingTable.removeRecipe(<item:immersiveengineering:wire_aluminum>);
craftingTable.addShapeless("wire_aluminum", <item:immersiveengineering:wire_aluminum> * 1, 
[<tag:items:forge:plates/aluminum>, <item:immersiveengineering:wirecutter>.anyDamage()]);

craftingTable.removeRecipe(<item:immersiveengineering:wire_copper>);
craftingTable.addShapeless("wire_copper", <item:immersiveengineering:wire_copper> * 1, 
[<tag:items:forge:plates/copper>, <item:immersiveengineering:wirecutter>.anyDamage()]);

craftingTable.removeRecipe(<item:immersiveengineering:wire_electrum>);
craftingTable.addShapeless("wire_electrum", <item:immersiveengineering:wire_electrum> * 1, 
[<tag:items:forge:plates/electrum>, <item:immersiveengineering:wirecutter>.anyDamage()]);

craftingTable.removeRecipe(<item:immersiveengineering:wire_lead>);
craftingTable.addShapeless("wire_lead", <item:immersiveengineering:wire_lead> * 1, 
[<tag:items:forge:plates/lead>, <item:immersiveengineering:wirecutter>.anyDamage()]);

craftingTable.removeRecipe(<item:immersiveengineering:wire_steel>);
craftingTable.addShapeless("wire_steel", <item:immersiveengineering:wire_steel> * 1, 
[<tag:items:forge:plates/steel>, <item:immersiveengineering:wirecutter>.anyDamage()]);


//<recipetype:immersiveengineering:squeezer>.removeRecipe(IItemStack output)
<recipetype:immersiveengineering:squeezer>.removeRecipe(<item:immersiveengineering:dust_hop_graphite>);

// <recipetype:immersiveengineering:squeezer>.addRecipe(string recipePath, IIngredient input, int energy, IItemStack itemOutput)
<recipetype:immersiveengineering:squeezer>.addRecipe("dust_hop_graphite_0", <item:emendatusenigmatica:coke_dust> * 8, 19200, <item:immersiveengineering:dust_hop_graphite>);

craftingTable.removeRecipe(<item:immersiveengineering:sawdust>);