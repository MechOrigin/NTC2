
//imports things to the network
craftingTable.removeRecipe(<item:integrateddynamics:variable_transformer_input>);
craftingTable.addShaped("input_bus", <item:integrateddynamics:variable_transformer_input>, [
    [<item:minecraft:air>, <item:integrateddynamics:variable>, <item:minecraft:air>],
    [<item:integrateddynamics:crystalized_menril_chunk>, <item:inspirations:collector>, <item:integrateddynamics:crystalized_menril_chunk>],
    [<item:minecraft:air>, <item:integrateddynamics:variable>, <item:minecraft:air>]
]);

//exports things from the network
craftingTable.removeRecipe(<item:integrateddynamics:variable_transformer_output>);
craftingTable.addShaped("output_bus", <item:integrateddynamics:variable_transformer_output>, [
    [<item:minecraft:air>, <item:integrateddynamics:variable>, <item:minecraft:air>],
    [<item:integrateddynamics:crystalized_menril_chunk>, <item:minecraft:dispenser>, <item:integrateddynamics:crystalized_menril_chunk>],
    [<item:minecraft:air>, <item:integrateddynamics:variable>, <item:minecraft:air>]
]);

//new progression
craftingTable.removeRecipe(<item:integrateddynamics:squeezer>);
craftingTable.addShaped("squeezer", <item:integrateddynamics:squeezer>, [
    [<tag:items:forge:rods/wooden>, <tag:items:forge:storage_blocks/bronze>, <tag:items:forge:rods/wooden>],
    [<tag:items:forge:rods/wooden>, <item:minecraft:air>, <tag:items:forge:rods/wooden>],
    [<item:quark:black_stained_planks>, <item:emendatusenigmatica:bronze_ingot>, <item:quark:black_stained_planks>]
]);

craftingTable.removeRecipe(<item:integrateddynamics:drying_basin>);
craftingTable.addShaped("drying_basin", <item:integrateddynamics:drying_basin>, [
    [<tag:items:minecraft:logs>, <item:quark:black_stained_planks>, <tag:items:minecraft:logs>],
    [<item:emendatusenigmatica:bronze_ingot>, <item:minecraft:air>, <item:emendatusenigmatica:bronze_ingot>],
    [<item:quark:sturdy_stone>, <item:quark:black_stained_planks>, <item:quark:sturdy_stone>]
]);