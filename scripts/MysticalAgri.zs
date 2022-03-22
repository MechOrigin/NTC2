import mods.mysticalagriculture.InfusionCrafting;


//compact machines handle this now
craftingTable.removeRecipe(<item:mysticalagriculture:machine_frame>);


// mods.mysticalagriculture.InfusionCrafting.addRecipe(id as string, output as IItemStack, inputs as IIngredient[]);

//mods.mysticalagriculture.InfusionCrafting.addRecipe("test", <item:minecraft:stick> * 10, [<item:minecraft:diamond>, <tag:forge:ingots/iron>, <item:minecraft:stick>]);

craftingTable.addShaped("witherproof_glass", <item:mysticalagriculture:witherproof_glass> * 1, [
    [<item:minecraft:air>, <item:tconstruct:necrotic_bone>, <item:minecraft:air>],
    [<item:tconstruct:necrotic_bone>, <item:mysticalagriculture:soul_glass>, <item:tconstruct:necrotic_bone>],
    [<item:minecraft:air>, <item:tconstruct:necrotic_bone>, <item:minecraft:air>]
]);

craftingTable.addShaped("witherproof_block", <item:mysticalagriculture:witherproof_block> * 1, [
    [<item:minecraft:air>, <item:tconstruct:necrotic_bone>, <item:minecraft:air>],
    [<item:tconstruct:necrotic_bone>, <item:mysticalagriculture:soulstone>, <item:tconstruct:necrotic_bone>],
    [<item:minecraft:air>, <item:tconstruct:necrotic_bone>, <item:minecraft:air>]
]);

// fixing missing recipes
craftingTable.addShaped("rubber_essence", <item:industrialforegoing:dryrubber> * 8, [
    [<item:mysticalagriculture:rubber_essence>, <item:mysticalagriculture:rubber_essence>, <item:minecraft:air>],
    [<item:mysticalagriculture:rubber_essence>, <item:mysticalagriculture:rubber_essence>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);
craftingTable.addShaped("graphite_essence", <item:emendatusenigmatica:graphite_dust> * 8, [
    [<item:mysticalagriculture:graphite_essence>, <item:mysticalagriculture:graphite_essence>, <item:minecraft:air>],
    [<item:mysticalagriculture:graphite_essence>, <item:mysticalagriculture:graphite_essence>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);


// mods.mysticalagriculture.InfusionCrafting.addRecipe(id as string, output as IItemStack, inputs as IIngredient[]);

mods.mysticalagriculture.InfusionCrafting.addRecipe("inferium_farmland", <item:mysticalagriculture:inferium_farmland> * 10, [<tag:items:forge:dirt>, <item:mysticalagriculture:inferium_block>, <item:mysticalagriculture:inferium_block>, <item:mysticalagriculture:inferium_block>, <item:mysticalagriculture:inferium_block>, <item:mysticalagriculture:inferium_block>, <item:mysticalagriculture:inferium_block>, <item:mysticalagriculture:inferium_block>, <item:mysticalagriculture:inferium_block>]);

mods.mysticalagriculture.InfusionCrafting.addRecipe("prudentium_farmland", <item:mysticalagriculture:prudentium_farmland> * 10, [<tag:items:forge:dirt>, <item:mysticalagriculture:prudentium_block>, <item:mysticalagriculture:prudentium_block>, <item:mysticalagriculture:prudentium_block>, <item:mysticalagriculture:prudentium_block>, <item:mysticalagriculture:prudentium_block>, <item:mysticalagriculture:prudentium_block>, <item:mysticalagriculture:prudentium_block>, <item:mysticalagriculture:prudentium_block>]);

mods.mysticalagriculture.InfusionCrafting.addRecipe("tertium_farmland", <item:mysticalagriculture:tertium_farmland> * 10, [<tag:items:forge:dirt>, <item:mysticalagriculture:tertium_block>, <item:mysticalagriculture:tertium_block>, <item:mysticalagriculture:tertium_block>, <item:mysticalagriculture:tertium_block>, <item:mysticalagriculture:tertium_block>, <item:mysticalagriculture:tertium_block>, <item:mysticalagriculture:tertium_block>, <item:mysticalagriculture:tertium_block>]);

mods.mysticalagriculture.InfusionCrafting.addRecipe("imperium_farmland", <item:mysticalagriculture:imperium_farmland> * 10, [<tag:items:forge:dirt>, <item:mysticalagriculture:imperium_block>, <item:mysticalagriculture:imperium_block>, <item:mysticalagriculture:imperium_block>, <item:mysticalagriculture:imperium_block>, <item:mysticalagriculture:imperium_block>, <item:mysticalagriculture:imperium_block>, <item:mysticalagriculture:imperium_block>, <item:mysticalagriculture:imperium_block>]);

mods.mysticalagriculture.InfusionCrafting.addRecipe("supremium_farmland", <item:mysticalagriculture:supremium_farmland> * 10, [<tag:items:forge:dirt>, <item:mysticalagriculture:supremium_block>, <item:mysticalagriculture:supremium_block>, <item:mysticalagriculture:supremium_block>, <item:mysticalagriculture:supremium_block>, <item:mysticalagriculture:supremium_block>, <item:mysticalagriculture:supremium_block>, <item:mysticalagriculture:supremium_block>, <item:mysticalagriculture:supremium_block>]);

mods.mysticalagriculture.InfusionCrafting.addRecipe("insanium_farmland", <item:mysticalagradditions:insanium_farmland> * 10, [<tag:items:forge:dirt>, <item:mysticalagradditions:insanium_block>, <item:mysticalagradditions:insanium_block>, <item:mysticalagradditions:insanium_block>, <item:mysticalagradditions:insanium_block>, <item:mysticalagradditions:insanium_block>, <item:mysticalagradditions:insanium_block>, <item:mysticalagradditions:insanium_block>, <item:mysticalagradditions:insanium_block>]);

//mystical agri essences
/*
craftingTable.removeByName( "mysticalagriculture:essence/common/sulfur");
craftingTable.removeByName( "mysticalagriculture:essence/common/copper_ingot");
craftingTable.removeByName( "mysticalagriculture:essence/common/saltpeter");
craftingTable.removeByName( "mysticalagriculture:essence/common/tin_ingot");
craftingTable.removeByName( "mysticalagriculture:essence/common/bronze_ingot");
craftingTable.removeByName( "mysticalagriculture:essence/common/steel_ingot");
craftingTable.removeByName( "mysticalagriculture:essence/mekanism/osmium_ingot");
craftingTable.removeByName( "mysticalagriculture:essence/mekanism/refined_glowstone_ingot");
craftingTable.removeByName( "mysticalagriculture:essence/mekanism/refined_obsidian_ingot");
*/

// fixing missing recipes
mods.mysticalagriculture.InfusionCrafting.addRecipe("rubber_seeds", <item:mysticalagriculture:rubber_seeds> * 1, [<item:mysticalagriculture:prosperity_seed_base>, <item:industrialforegoing:dryrubber>, <item:mysticalagriculture:prudentium_essence>, <item:industrialforegoing:dryrubber>, <item:mysticalagriculture:prudentium_essence>, <item:industrialforegoing:dryrubber>, <item:mysticalagriculture:prudentium_essence>, <item:industrialforegoing:dryrubber>, <item:mysticalagriculture:prudentium_essence>]);

mods.mysticalagriculture.InfusionCrafting.addRecipe("graphite_seeds", <item:mysticalagriculture:graphite_seeds> * 1, [<item:mysticalagriculture:prosperity_seed_base>, <item:emendatusenigmatica:graphite_dust>, <item:mysticalagriculture:tertium_essence>, <item:emendatusenigmatica:graphite_dust>, <item:mysticalagriculture:tertium_essence>, <item:emendatusenigmatica:graphite_dust>, <item:mysticalagriculture:tertium_essence>, <item:emendatusenigmatica:graphite_dust>, <item:mysticalagriculture:tertium_essence>]);
