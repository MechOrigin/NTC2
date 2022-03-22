

craftingTable.removeRecipe(<item:ironjetpacks:basic_coil>);
craftingTable.addShaped("basic_coil", <item:ironjetpacks:basic_coil> * 1, [
    [<item:minecraft:air>, <tag:items:forge:plates/cobalt>, <item:extendedcrafting:redstone_nugget>],
    [<tag:items:forge:plates/cobalt>, <tag:items:forge:rods/cobalt>, <tag:items:forge:plates/cobalt>],
    [<item:extendedcrafting:redstone_nugget>, <tag:items:forge:plates/cobalt>, <item:minecraft:air>]
]);

craftingTable.removeRecipe(<item:ironjetpacks:advanced_coil>);
craftingTable.addShaped("advanced_coil", <item:ironjetpacks:advanced_coil> * 1, [
    [<item:minecraft:air>, <tag:items:forge:plates/osmium>, <item:extendedcrafting:redstone_nugget>],
    [<tag:items:forge:plates/osmium>, <tag:items:forge:rods/osmium>, <tag:items:forge:plates/osmium>],
    [<item:extendedcrafting:redstone_nugget>, <tag:items:forge:plates/osmium>, <item:minecraft:air>]
]);