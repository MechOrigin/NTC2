

craftingTable.removeRecipe(<item:projecte:alchemical_chest>);
craftingTable.addShaped("alchemical_chest", <item:projecte:alchemical_chest>, [
    [<item:projecte:low_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:high_covalence_dust>],
    [<tag:items:forge:stone>, <item:minecraft:diamond>, <tag:items:forge:stone>],
    [<item:minecraft:iron_ingot>, <item:metalbarrels:obsidian_barrel>, <item:minecraft:iron_ingot>]
]);

craftingTable.removeRecipe(<item:projecte:black_hole_band>);
craftingTable.removeRecipe(<item:projecte:archangel_smite>);
craftingTable.removeRecipe(<item:projecte:harvest_goddess_band>);
craftingTable.removeRecipe(<item:projecte:ignition_ring>);
craftingTable.removeRecipe(<item:projecte:zero_ring>);
craftingTable.removeRecipe(<item:projecte:swiftwolf_rending_gale>);
craftingTable.removeRecipe(<item:projecte:evertide_amulet>);
craftingTable.removeRecipe(<item:projecte:volcanite_amulet>);
craftingTable.removeRecipe(<item:projecte:gem_of_eternal_density>);
craftingTable.removeRecipe(<item:projecte:mercurial_eye>);
craftingTable.removeRecipe(<item:projecte:body_stone>);
craftingTable.removeRecipe(<item:projecte:soul_stone>);
craftingTable.removeRecipe(<item:projecte:mind_stone>);
craftingTable.removeRecipe(<item:projecte:life_stone>);
craftingTable.removeRecipe(<item:projecte:watch_of_flowing_time>);

craftingTable.removeByName( "projectexpansion:collector/basic");
craftingTable.removeByName( "projectexpansion:relay/basic");

craftingTable.removeByName( "projectexpansion:collector/dark");
craftingTable.removeByName( "projectexpansion:relay/dark");
craftingTable.removeByName( "projectexpansion:collector/red");
craftingTable.removeByName( "projectexpansion:relay/red");

//Keep regular dm progression
//This whole clay is balanced meme is gone to far
//craftingTable.removeByName( "emcbaubles:shaped/make_dark_matter_1");
//craftingTable.removeByName( "emcbaubles:shaped/make_dark_matter_2");
//removed emc baubles

craftingTable.removeRecipe(<item:projectexpansion:basic_emc_link>);
//craftingTable.removeRecipe(<item:projectexpansion:red_emc_link>);

craftingTable.addShaped("basic_emc_link", <item:projectexpansion:basic_emc_link>, [
    [<item:projecte:low_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:high_covalence_dust>],
    [<item:projecte:transmutation_tablet>, <item:projecte:condenser_mk1>, <item:projecte:transmutation_tablet>],
    [<item:projecte:high_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:low_covalence_dust>]
]);

// craftingTable.addShaped("red_emc_link", <item:projectexpansion:red_emc_link>, [
//     [<item:projecte:low_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:high_covalence_dust>],
//     [<item:projecte:transmutation_tablet>, <item:projectexpansion:dark_emc_link>, <item:projecte:transmutation_tablet>],
//     [<item:projecte:high_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:low_covalence_dust>]
// ]);

craftingTable.removeRecipe(<item:projectexpansion:transmutation_interface>);
craftingTable.addShaped("transmutation_interface", <item:projectexpansion:transmutation_interface>, [
  [<item:projectexpansion:lime_matter>, <item:projecte:condenser_mk2>, <item:projectexpansion:lime_matter>],
  [<item:ae2extras:16m_cell_component>, <item:appliedenergistics2:controller>, <item:appliedenergistics2:storage_bus>],
  [<item:appliedenergistics2:formation_core>, <item:projectexpansion:magnum_star_omega>, <item:appliedenergistics2:annihilation_core>]
]);

craftingTable.removeRecipe(<item:projectexpansion:infinite_fuel>);
craftingTable.addShaped("infinite_fuel", <item:projectexpansion:infinite_fuel>, [
  [<item:projecte:low_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:high_covalence_dust>],
  [<item:projectexpansion:basic_emc_link>, <item:projectexpansion:white_fuel>, <item:projectexpansion:basic_emc_link>],
  [<item:projectexpansion:magenta_matter>, <item:projecte:condenser_mk2>, <item:projectexpansion:magenta_matter>]
]);