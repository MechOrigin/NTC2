/* Tool Overhaul */

// Removes all tools in minecraft
/*
craftingTable.removeByRegex( "minecraft:.*_shovel");
craftingTable.removeByRegex( "minecraft:.*_pickaxe");
craftingTable.removeByRegex( "minecraft:.*_axe");
craftingTable.removeByRegex( "minecraft:.*_hoe");
craftingTable.removeByRegex( "minecraft:.*_sword");
<recipetype:minecraft:smithing>.removeRecipe(<item:minecraft:netherite_shovel>);
<recipetype:minecraft:smithing>.removeRecipe(<item:minecraft:netherite_pickaxe>);
<recipetype:minecraft:smithing>.removeRecipe(<item:minecraft:netherite_axe>);
<recipetype:minecraft:smithing>.removeRecipe(<item:minecraft:netherite_hoe>);
<recipetype:minecraft:smithing>.removeRecipe(<item:minecraft:netherite_sword>);
*/

// Removes all tools in AE2
craftingTable.removeByRegex( "appliedenergistics2:.*_shovel");
craftingTable.removeByRegex( "appliedenergistics2:.*_pickaxe");
craftingTable.removeByRegex( "appliedenergistics2:.*_axe");
craftingTable.removeByRegex( "appliedenergistics2:.*_hoe");
craftingTable.removeByRegex( "appliedenergistics2:.*_sword");

craftingTable.removeByRegex( "appliedenergistics2:.nether_quartz_shovel");
craftingTable.removeByRegex( "appliedenergistics2:.nether_quartz_pickaxe");
craftingTable.removeByRegex( "appliedenergistics2:.nether_quartz_axe");
craftingTable.removeByRegex( "appliedenergistics2:.nether_quartz_hoe");
craftingTable.removeByRegex( "appliedenergistics2:.nether_quartz_sword");

// Removes all tools in immersive
craftingTable.removeRecipe(<item:immersiveengineering:shovel_steel>);
craftingTable.removeRecipe(<item:immersiveengineering:pickaxe_steel>);
craftingTable.removeRecipe(<item:immersiveengineering:axe_steel>);
craftingTable.removeRecipe(<item:immersiveengineering:hoe_steel>);
craftingTable.removeRecipe(<item:immersiveengineering:sword_steel>);
craftingTable.removeRecipe(<item:immersiveengineering:shovel_steel>);

// Removes all tools in mysticalagri
craftingTable.removeByRegex( "mysticalagriculture:.*_shovel");
craftingTable.removeByRegex( "mysticalagriculture:.*_pickaxe");
craftingTable.removeByRegex( "mysticalagriculture:.*_axe");
craftingTable.removeByRegex( "mysticalagriculture:.*_hoe");
craftingTable.removeByRegex( "mysticalagriculture:.*_sword");
craftingTable.removeByRegex( "mysticalagradditions:.*_paxel");


/* Armor Overhaul */

/*
HELMET
*/
craftingTable.removeRecipe(<item:minecraft:chainmail_helmet>);
craftingTable.addShaped("chain_helmet", <item:minecraft:chainmail_helmet>, [
    [<item:minecraft:leather_helmet>, <item:minecraft:chain>]
    ]);

craftingTable.removeRecipe(<item:minecraft:iron_helmet>);
craftingTable.addShaped("iron_helmet", <item:minecraft:iron_helmet>, [
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>], 
    [<item:minecraft:iron_ingot>, <item:minecraft:chainmail_helmet>, <item:minecraft:iron_ingot>]]);

craftingTable.removeRecipe(<item:minecraft:diamond_helmet>);
craftingTable.addShaped("diamond_helmet", <item:minecraft:diamond_helmet>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
    [<item:minecraft:diamond>, <item:minecraft:iron_helmet>, <item:minecraft:diamond>]]);

//netherite handled by tconstruct in kubejs/data now
<recipetype:minecraft:smithing>.removeRecipe(<item:minecraft:netherite_helmet>);

/*
CHESTPLATE
*/
craftingTable.removeRecipe(<item:minecraft:chainmail_chestplate>);
craftingTable.addShaped("chain_chestplate", <item:minecraft:chainmail_chestplate>, [
    [<item:minecraft:leather_chestplate>, <item:minecraft:chain>]
    ]);

craftingTable.removeRecipe(<item:minecraft:iron_chestplate>);
craftingTable.addShaped("iron_chestplate", <item:minecraft:iron_chestplate>, [
    [<item:minecraft:iron_ingot>, <item:minecraft:chainmail_chestplate>, <item:minecraft:iron_ingot>], 
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>]]);

craftingTable.removeRecipe(<item:minecraft:diamond_chestplate>);
craftingTable.addShaped("diamond_chestplate", <item:minecraft:diamond_chestplate>, [
    [<item:minecraft:diamond>, <item:minecraft:iron_chestplate>, <item:minecraft:diamond>], 
    [<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>]]);

//netherite handled by tconstruct in kubejs/data now
<recipetype:minecraft:smithing>.removeRecipe(<item:minecraft:netherite_chestplate>);

/*
LEGGINGS
*/
craftingTable.removeRecipe(<item:minecraft:chainmail_leggings>);
craftingTable.addShaped("chain_leggings", <item:minecraft:chainmail_leggings>, [
    [<item:minecraft:leather_leggings>, <item:minecraft:chain>]
    ]);

craftingTable.removeRecipe(<item:minecraft:iron_leggings>);
craftingTable.addShaped("iron_leggings", <item:minecraft:iron_leggings>, [
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>], 
    [<item:minecraft:iron_ingot>, <item:minecraft:chainmail_leggings>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:air>, <item:minecraft:iron_ingot>]]);

craftingTable.removeRecipe(<item:minecraft:diamond_leggings>);
craftingTable.addShaped("diamond_leggings", <item:minecraft:diamond_leggings>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
    [<item:minecraft:diamond>, <item:minecraft:iron_leggings>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>]]);

//netherite handled by tconstruct in kubejs/data now
<recipetype:minecraft:smithing>.removeRecipe(<item:minecraft:netherite_leggings>);

/*
BOOTS
*/
craftingTable.removeRecipe(<item:minecraft:chainmail_boots>);
craftingTable.addShaped("chain_boots", <item:minecraft:chainmail_boots>, [
    [<item:minecraft:leather_boots>, <item:minecraft:chain>]
    ]);

craftingTable.removeRecipe(<item:minecraft:iron_boots>);
craftingTable.addShaped("iron_boots", <item:minecraft:iron_boots>, [
    [<item:minecraft:iron_ingot>, <item:minecraft:air>, <item:minecraft:iron_ingot>], 
    [<item:minecraft:iron_ingot>, <item:minecraft:chainmail_boots>, <item:minecraft:iron_ingot>]]);

craftingTable.removeRecipe(<item:minecraft:diamond_boots>);
craftingTable.addShaped("diamond_boots", <item:minecraft:diamond_boots>, [
    [<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>], 
    [<item:minecraft:diamond>, <item:minecraft:iron_boots>, <item:minecraft:diamond>]]);

//netherite handled by tconstruct in kubejs/data now
<recipetype:minecraft:smithing>.removeRecipe(<item:minecraft:netherite_boots>);

/* Better End */

<recipetype:minecraft:smithing>.removeRecipe(<item:betterendforge:aeternium_helmet>);
<recipetype:minecraft:smithing>.removeRecipe(<item:betterendforge:aeternium_chestplate>);
<recipetype:minecraft:smithing>.removeRecipe(<item:betterendforge:aeternium_leggings>);
<recipetype:minecraft:smithing>.removeRecipe(<item:betterendforge:aeternium_boots>);

/* Mystical Agri */

craftingTable.removeByRegex( "mysticalagriculture:.*_helmet");
craftingTable.removeByRegex( "mysticalagriculture:.*_chestplate");
craftingTable.removeByRegex( "mysticalagriculture:.*_leggings");
craftingTable.removeByRegex( "mysticalagriculture:.*_boots");

/* ProjectE */

//Handled by Extended Crafting


//Replaced all tools in recipes to tconstruct
//Handled by KubeJs
