import mods.exnihilosequentia.ZenHammerRecipe;
import mods.exnihilosequentia.ZenSieveRecipe;
import mods.exnihilosequentia.ZenCrookRecipe;
import mods.exnihilosequentia.ZenCompostRecipe;
import mods.exnihilosequentia.ZenFluidItemRecipe;

<recipetype:exnihilosequentia:hammer>.removeAll();

<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_gold>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_lead>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:minecraft:coal>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_aluminum>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_nickel>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_silver>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_iron>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_copper>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_uranium>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_tin>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:piece_osmium>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:minecraft:diamond>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:minecraft:flint>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:minecraft:lapis_lazuli>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:minecraft:emerald>);

<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:appliedenergistics2:fluix_dust>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:appliedenergistics2:sky_dust>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:appliedenergistics2:certus_quartz_crystal>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:appliedenergistics2:charged_certus_quartz_crystal>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:appliedenergistics2:certus_quartz_dust>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:appliedenergistics2:nether_quartz_dust>);

<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:thermal:cinnabar>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:thermal:sulfur>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:thermal:apatite>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:thermal:niter>);

<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:pebble_basalt>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:pebble_blackstone>);


craftingTable.removeRecipe(<item:exnihilosequentia:hammer_wood>);
craftingTable.removeRecipe(<item:exnihilosequentia:hammer_stone>);
craftingTable.removeRecipe(<item:exnihilosequentia:hammer_iron>);
craftingTable.removeRecipe(<item:exnihilosequentia:hammer_diamond>);
craftingTable.removeRecipe(<item:exnihilosequentia:hammer_netherite>);
craftingTable.removeRecipe(<item:exnihilosequentia:hammer_gold>);

craftingTable.removeRecipe(<item:exnihilosequentia:crook_wood>);
craftingTable.removeRecipe(<item:exnihilosequentia:crook_stone>);
craftingTable.removeRecipe(<item:exnihilosequentia:crook_andesite>);
craftingTable.removeRecipe(<item:exnihilosequentia:crook_granite>);
craftingTable.removeRecipe(<item:exnihilosequentia:crook_diorite>);
craftingTable.removeRecipe(<item:exnihilosequentia:crook_iron>);
craftingTable.removeRecipe(<item:exnihilosequentia:crook_diamond>);
craftingTable.removeRecipe(<item:exnihilosequentia:crook_bone>);
craftingTable.removeRecipe(<item:exnihilosequentia:crook_gold>);

craftingTable.removeRecipe(<item:exnihilosequentia:porcelain_clay>);

craftingTable.removeRecipe(<item:exnihilosequentia:doll_crafting>);
craftingTable.addShaped("doll_crafting_4", <item:exnihilosequentia:doll_crafting> * 4, [
    [<item:ceramics:unfired_porcelain>, <item:minecraft:diamond>, <item:ceramics:unfired_porcelain>],
    [<item:minecraft:air>, <item:ceramics:unfired_porcelain>, <item:minecraft:air>],
    [<item:ceramics:unfired_porcelain>, <item:minecraft:air>, <item:ceramics:unfired_porcelain>]
]);
craftingTable.addShaped("doll_crafting_6", <item:exnihilosequentia:doll_crafting> * 6, [
    [<item:ceramics:unfired_porcelain>, <item:minecraft:emerald>, <item:ceramics:unfired_porcelain>],
    [<item:minecraft:air>, <item:ceramics:unfired_porcelain>, <item:minecraft:air>],
    [<item:ceramics:unfired_porcelain>, <item:minecraft:air>, <item:ceramics:unfired_porcelain>]
]);

craftingTable.removeRecipe(<item:exnihilosequentia:crucible_unfired>);
craftingTable.addShaped("crucible_unfired", <item:exnihilosequentia:crucible_unfired>, [
    [<item:ceramics:unfired_porcelain>, <item:minecraft:air>, <item:ceramics:unfired_porcelain>],
    [<item:ceramics:unfired_porcelain>, <item:minecraft:air>, <item:ceramics:unfired_porcelain>],
    [<item:ceramics:unfired_porcelain>, <item:ceramics:unfired_porcelain>, <item:ceramics:unfired_porcelain>]
]);

<recipetype:exnihilosequentia:crook>.removeRecipe(<item:exnihilosequentia:silkworm>);
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:exnihilosequentia:silkworm>);
<recipetype:exnihilosequentia:compost>.removeRecipe(<item:exnihilosequentia:silkworm>);

craftingTable.removeRecipe(<item:exnihilosequentia:end_cake>);

<recipetype:exnihilosequentia:fluid_item>.removeRecipe(<item:minecraft:netherrack>);
<recipetype:exnihilosequentia:fluid_item>.removeRecipe(<item:minecraft:end_stone>);

<recipetype:exnihilosequentia:sieve>.create("sieve_1").setInput(<item:thermal:sawdust_block>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:blue_banded_bee" as string, productivebees_gene_value: 0 as int})).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);
<recipetype:exnihilosequentia:sieve>.create("sieve_2").setInput(<item:thermal:sawdust_block>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:resin_bee" as string, productivebees_gene_value: 0 as int})).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);
<recipetype:exnihilosequentia:sieve>.create("sieve_3").setInput(<item:thermal:sawdust_block>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:green_carpenter_bee" as string, productivebees_gene_value: 0 as int})).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);
<recipetype:exnihilosequentia:sieve>.create("sieve_4").setInput(<item:thermal:sawdust_block>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:yellow_black_carpenter_bee" as string, productivebees_gene_value: 0 as int})).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_5").setInput(<item:quark:sugar_cane_block>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:mason_bee" as string, productivebees_gene_value: 0 as int})).addRoll("string", 0.01).addRoll("flint", 0.2).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);
<recipetype:exnihilosequentia:sieve>.create("sieve_6").setInput(<item:minecraft:gravel>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:digger_bee" as string, productivebees_gene_value: 0 as int})).addRoll("flint", 0.2).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_7").setInput(<item:minecraft:coarse_dirt>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:chocolate_mining_bee" as string, productivebees_gene_value: 0 as int})).addRoll("string", 0.01).addRoll("flint", 0.2).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);
<recipetype:exnihilosequentia:sieve>.create("sieve_8").setInput(<item:minecraft:coarse_dirt>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:leafcutter_bee" as string, productivebees_gene_value: 0 as int})).addRoll("string", 0.01).addRoll("flint", 0.2).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);
<recipetype:exnihilosequentia:sieve>.create("sieve_9").setInput(<item:minecraft:coarse_dirt>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:ashy_mining_bee" as string, productivebees_gene_value: 0 as int})).addRoll("string", 0.01).addRoll("flint", 0.2).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_10").setInput(<item:minecraft:gravel>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:reed_bee" as string, productivebees_gene_value: 0 as int})).addRoll("flint", 0.2).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_11").setInput(<item:minecraft:slime_block>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:slimy" as string, productivebees_gene_value: 0 as int})).addRoll("string", 0.01).addRoll("flint", 0.2).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_12").setInput(<item:minecraft:glowstone>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:glowing" as string, productivebees_gene_value: 0 as int})).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_13").setInput(<item:minecraft:soul_sand>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:ghostly" as string, productivebees_gene_value: 0 as int})).addRoll("string", 0.01).addRoll("flint", 0.2).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_14").setInput(<item:minecraft:nether_quartz_ore>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:crystalline" as string, productivebees_gene_value: 0 as int})).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_15").setInput(<item:minecraft:snow>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:sweaty_bee" as string, productivebees_gene_value: 0 as int})).addRoll("string", 0.01).addRoll("flint", 0.2).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_16").setInput(<item:minecraft:nether_gold_ore>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:gold" as string, productivebees_gene_value: 0 as int})).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_17").setInput(<item:minecraft:magma_block>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:magmatic" as string, productivebees_gene_value: 0 as int})).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_18").setInput(<item:exnihilosequentia:crushed_end_stone>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:ender" as string, productivebees_gene_value: 0 as int})).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_19").setInput(<item:minecraft:obsidian>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:draconic" as string, productivebees_gene_value: 0 as int})).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_20").setInput(<item:minecraft:dirt>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:bumble_bee" as string, productivebees_gene_value: 0 as int})).addRoll("string", 0.01).addRoll("flint", 0.2).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_21").setInput(<item:minecraft:coarse_dirt>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:nomad_bee" as string, productivebees_gene_value: 0 as int})).addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.04).addRoll("emerald", 0.05).addRoll("netherite", 0.06);

<recipetype:exnihilosequentia:sieve>.create("sieve_22").setInput(<item:thermal:sawdust_block>).addDrop(<item:productivebees:gene>.withTag({productivebees_gene_purity: 8 as int, productivebees_gene_attribute: "productivebees:neon_cuckoo_bee" as string, productivebees_gene_value: 0 as int})).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);


<recipetype:exnihilosequentia:sieve>.create("prosperity").setInput(<item:biomesoplenty:white_sand>).addDrop(<item:mysticalagriculture:prosperity_shard>).addRoll("string", 0.01).addRoll("flint", 0.2).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

// for progression
<recipetype:exnihilosequentia:sieve>.removeRecipe(<item:minecraft:blaze_powder>);

//better end progression
<recipetype:exnihilosequentia:sieve>.create("sieve_23").setInput(<item:betterendforge:endstone_dust>)
.addDrop(<item:betterendforge:blue_vine_seed>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_24").setInput(<item:betterendforge:endstone_dust>)
.addDrop(<item:betterendforge:end_lily_seed>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_25").setInput(<item:betterendforge:endstone_dust>)
.addDrop(<item:betterendforge:end_lotus_seed>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_26").setInput(<item:betterendforge:endstone_dust>)
.addDrop(<item:betterendforge:lanceleaf_seed>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_27").setInput(<item:betterendforge:endstone_dust>)
.addDrop(<item:betterendforge:lumecorn_seed>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_28").setInput(<item:betterendforge:endstone_dust>)
.addDrop(<item:betterendforge:glowing_pillar_seed>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_29").setInput(<item:betterendforge:endstone_dust>)
.addDrop(<item:betterendforge:shadow_berry>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_30").setInput(<item:betterendforge:endstone_dust>)
.addDrop(<item:betterendforge:blossom_berry_seed>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_31").setInput(<item:betterendforge:endstone_dust>)
.addDrop(<item:betterendforge:amber_root_seed>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_32").setInput(<item:betterendforge:endstone_dust>)
.addDrop(<item:betterendforge:chorus_mushroom_seed>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);

<recipetype:exnihilosequentia:sieve>.create("sieve_33").setInput(<item:betterendforge:endstone_dust>)
.addDrop(<item:betterendforge:bulb_vine_seed>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);


<recipetype:exnihilosequentia:sieve>.create("certus_quartz_gem").setInput(<item:exnihiloae:crushed_skystone>)
.addDrop(<item:appliedenergistics2:certus_quartz_crystal>)
.addRoll("iron", 0.7).addRoll("diamond", 0.8).addRoll("emerald", 0.8).addRoll("netherite", 0.8);

<recipetype:exnihilosequentia:sieve>.create("charged_certus_quartz_gem").setInput(<item:exnihiloae:crushed_skystone>)
.addDrop(<item:appliedenergistics2:charged_certus_quartz_crystal>)
.addRoll("diamond", 0.1).addRoll("emerald", 0.1).addRoll("netherite", 0.1);

<recipetype:exnihilosequentia:sieve>.create("certus_quartz_dust").setInput(<item:exnihilosequentia:dust>)
.addDrop(<item:emendatusenigmatica:certus_quartz_dust>)
.addRoll("iron", 0.15).addRoll("diamond", 0.15).addRoll("emerald", 0.15).addRoll("netherite", 0.15);

<recipetype:exnihilosequentia:sieve>.create("nether_quartz_dust").setInput(<item:exnihilosequentia:dust>)
.addDrop(<item:emendatusenigmatica:nether_quartz_dust>)
.addRoll("iron", 0.15).addRoll("diamond", 0.15).addRoll("emerald", 0.15).addRoll("netherite", 0.15);


<recipetype:exnihilosequentia:sieve>.create("soulium_dust").setInput(<item:minecraft:soul_soil>).addDrop(<item:mysticalagriculture:soulium_dust>).addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.15).addRoll("netherite", 0.16);
<recipetype:exnihilosequentia:sieve>.create("soul_dust").setInput(<item:minecraft:soul_soil>).addDrop(<item:mysticalagriculture:soul_dust>).addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.15).addRoll("netherite", 0.16);

//<recipetype:exnihilosequentia:sieve>.create("iron_nugget").setInput(<item:minecraft:gravel>).addDrop(<tag:items:forge:nuggets/iron>).addRoll("flint", 0.2).addRoll("iron", 0.3).addRoll("diamond", 0.4).addRoll("emerald", 0.5).addRoll("netherite", 0.6);


<recipetype:exnihilosequentia:fluid_item>.create("sky_slime_fluid_item_transform").setFluidInTank(<fluid:tconstruct:earth_slime>* 1000).setInputItem(<item:minecraft:cyan_dye>).setResult(<item:tconstruct:sky_slime>);

<recipetype:exnihilosequentia:sieve>.create("raw_amber").setInput(<item:betterendforge:endstone_dust>).addDrop(<item:betterendforge:raw_amber>).addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.15).addRoll("netherite", 0.16);

<recipetype:exnihilosequentia:sieve>.create("ender_shard").setInput(<item:betterendforge:endstone_dust>).addDrop(<item:betterendforge:ender_shard>).addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.15).addRoll("netherite", 0.16);


//Seeds
/*
<recipetype:exnihilosequentia:sieve>.create("seed_1").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:sesameseedsitem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_2").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:mustardseedsitem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_3").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:agaveseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_4").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:amaranthseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_5").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:arrowrootseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_6").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:artichokeseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_7").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:asparagusseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_8").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:barleyseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_9").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:beanseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);


<recipetype:exnihilosequentia:sieve>.create("seed_10").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:bellpepperseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_11").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:blackberryseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_12").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:blueberryseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_13").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:broccoliseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_14").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:brusselsproutseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_15").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:cabbageseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_16").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:cactusfruitseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_17").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:candleberryseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_18").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:cantaloupeseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);



<recipetype:exnihilosequentia:sieve>.create("seed_19").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:cassavaseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_20").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:cauliflowerseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_21").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:celeryseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_22").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:chickpeaseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_23").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:chilipepperseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_24").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:coffeebeanseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_25").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:cornseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_26").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:cottonseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_27").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:cranberryseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);


<recipetype:exnihilosequentia:sieve>.create("seed_28").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:cucumberseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_29").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:eggplantseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_30").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:elderberryseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_31").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:flaxseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_32").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:garlicseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_33").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:gingerseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_34").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:grapeseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_35").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:greengrapeseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_36").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:huckleberryseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);


<recipetype:exnihilosequentia:sieve>.create("seed_37").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:jicamaseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_38").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:juniperberryseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_39").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:juteseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_40").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:kaleseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_41").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:kenafseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_42").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:kiwiseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_43").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:kohlrabiseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_44").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:leekseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_45").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:lentilseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);


<recipetype:exnihilosequentia:sieve>.create("seed_46").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:lettuceseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_47").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:milletseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_48").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:mulberryseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_49").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:mustardseedsseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_50").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:oatsseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_51").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:okraseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_52").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:onionseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_53").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:parsnipseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_54").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:peanutseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);


<recipetype:exnihilosequentia:sieve>.create("seed_55").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:peasseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_56").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:pineappleseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_57").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:quinoaseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_58").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:radishseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_59").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:raspberryseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_60").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:rhubarbseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_61").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:riceseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_62").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:rutabagaseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_63").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:ryeseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);


<recipetype:exnihilosequentia:sieve>.create("seed_64").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:scallionseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_65").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:sesameseedsseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_66").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:sisalseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_67").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:soybeanseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_68").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:spiceleafseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_69").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:spinachseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_70").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:strawberryseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_71").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:sweetpotatoseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_72").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:taroseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);


<recipetype:exnihilosequentia:sieve>.create("seed_73").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:tealeafseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_74").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:tomatilloseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_75").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:tomatoseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_76").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:turnipseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_77").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:waterchestnutseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_78").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:whitemushroomseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_79").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:wintersquashseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_80").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2crops:zucchiniseeditem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);

<recipetype:exnihilosequentia:sieve>.create("seed_81").setInput(<item:compressium:dirt_1>)
.addDrop(<item:pamhc2foodcore:sunflowerseedsitem>)
.addRoll("string", 0.01).addRoll("flint", 0.02).addRoll("iron", 0.03).addRoll("diamond", 0.1).addRoll("emerald", 0.2).addRoll("netherite", 0.3);
*/
