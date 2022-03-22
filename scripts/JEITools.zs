/* Regex */
val removeRegex = [
    /*
    "minecraft:.*_shovel",
    "minecraft:.*_pickaxe",
    "minecraft:.*_axe",
    "minecraft:.*_hoe",
    "minecraft:.*_sword",
    */
    "appliedenergistics2:.*_shovel",
    "appliedenergistics2:.*_pickaxe",
    "appliedenergistics2:.*_axe",
    "appliedenergistics2:.*_hoe",
    "appliedenergistics2:.*_sword",

    "immersiveengineering:shovel_.*",
    "immersiveengineering:pickaxe_.*",
    "immersiveengineering:axe_.*",
    "immersiveengineering:hoe_.*",
    "immersiveengineering:sword_.*",

    "mysticalagriculture:.*_shovel",
    "mysticalagriculture:.*_pickaxe",
    "mysticalagriculture:.*_axe",
    "mysticalagriculture:.*_hoe",
    "mysticalagriculture:.*_sword",
    "mysticalagradditions:.*_paxel",

    "mysticalagriculture:.*_helmet",
    "mysticalagriculture:.*_chestplate",
    "mysticalagriculture:.*_leggings",
    "mysticalagriculture:.*_boots"
] as string[];

	for regexitem in removeRegex {
		mods.jei.JEI.hideRegex(regexitem);
	}
