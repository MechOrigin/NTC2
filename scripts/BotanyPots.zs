import mods.botanypots.ZenCrop;

val crops = <recipetype:botanypots:crop>;

// Simple crop entry
// crops.create(id, seedInput, renderBlock, growthTicks, soilCategory);
//val goldCrop = crops.create( "examplepack:gold", <item:minecraft:gold_nugget>, <blockstate:minecraft:gold_block>, 3000, "dirt");

// Crop with multiple render blocks and multiple soil categories.
// crops.create(id, seedInput, renderBlockArray, growthTicks, soilCategoryArray);
//val ironCrop = crops.create( "examplepack:iron", <item:minecraft:iron_nugget>, [<blockstate:minecraft:iron_block>, <blockstate:minecraft:iron_ore>], 3000, ["dirt", "nether"]);
/*
val chorus_flower = crops.getCrop( "botanypots:crops/chorus_flower");

// addDrop(item, chance, minRolls, maxRolls);
chorus_flower.addDrop(<item:minecraft:ender_pearl>, 0.01, 1, 2); // 5% drop rate AND 1 to 8 attempts.
chorus_flower.addDrop(<item:betterendforge:ender_shard>, 0.05, 1, 4); // 5% drop rate AND 1 to 8 attempts.
*/

//powered botany pots
craftingTable.addShaped("power_pot_mk1", <item:ftb-power-pots:power_pot_mk1> * 1, [
	[<item:minecraft:green_terracotta>, <item:minecraft:iron_block>, <item:minecraft:green_terracotta>], 
	[<item:minecraft:green_terracotta>, <item:botanypots:hopper_botany_pot>, <item:minecraft:green_terracotta>], 
	[<item:minecraft:green_terracotta>, <item:minecraft:iron_block>, <item:minecraft:green_terracotta>]
]);

craftingTable.addShaped("power_pot_mk2", <item:ftb-power-pots:power_pot_mk2> * 1, [
	[<item:minecraft:yellow_terracotta>, <item:tconstruct:slimesteel_block>, <item:minecraft:yellow_terracotta>], 
	[<item:minecraft:yellow_terracotta>, <item:ftb-power-pots:power_pot_mk1>, <item:minecraft:yellow_terracotta>], 
	[<item:minecraft:yellow_terracotta>, <item:tconstruct:slimesteel_block>, <item:minecraft:yellow_terracotta>]
]);

craftingTable.addShaped("power_pot_mk3", <item:ftb-power-pots:power_pot_mk3> * 1, [
	[<item:minecraft:blue_terracotta>, <item:enderioalloys:block_alloy_crystalline_pink_slime>, <item:minecraft:blue_terracotta>], 
	[<item:minecraft:blue_terracotta>, <item:ftb-power-pots:power_pot_mk2>, <item:minecraft:blue_terracotta>], 
	[<item:minecraft:blue_terracotta>, <item:enderioalloys:block_alloy_crystalline_pink_slime>, <item:minecraft:blue_terracotta>]
]);

craftingTable.addShaped("power_pot_mk4", <item:ftb-power-pots:power_pot_mk4> * 1, [
	[<item:minecraft:purple_terracotta>, <item:enderioalloys:block_alloy_stellar_alloy>, <item:minecraft:purple_terracotta>], 
	[<item:minecraft:purple_terracotta>, <item:ftb-power-pots:power_pot_mk3>, <item:minecraft:purple_terracotta>], 
	[<item:minecraft:purple_terracotta>, <item:enderioalloys:block_alloy_stellar_alloy>, <item:minecraft:purple_terracotta>]
]);