onEvent('recipes', (event) => {
    const id_prefix = 'ntc2:base/mekanism/enriching/';
    // ! These have to be tags , the blizz, etc rods dont work
    const recipes = [
        {
            input: '#forge:storage_blocks/aurora',
            output: Item.of('betterendforge:crystal_shards', 4),
            id: `${id_prefix}crystal_shards`
        },
        {
            input: '#forge:ores/ender',
            output: Item.of('#forge:shards/ender', 3),
            id: `${id_prefix}ender_shards`
        },
        {
            input: '#forge:ores/amber',
            output: Item.of('#forge:shards/amber', 3),
            id: `${id_prefix}amber_shards`
        },
        {
            input: '#forge:ores/biotite',
            output: Item.of('kubejs:monazite_gem', 3),
            id: `${id_prefix}monazite_gems`
        },
        {
            input: 'minecraft:sugar_cane',
            output: Item.of('minecraft:sugar', 2),
            id: `${id_prefix}sugar`
        },
        {
            input: 'thermal:blizz_rod',
            output: Item.of('thermal:blizz_powder', 4),
            id: `${id_prefix}blizz_powder`
        },
        {
            input: 'thermal:blitz_rod',
            output: Item.of('thermal:blitz_powder', 4),
            id: `${id_prefix}blitz_powder`
        },
        {
            input: 'thermal:basalz_rod',
            output: Item.of('thermal:basalz_powder', 4),
            id: `${id_prefix}basalz_powder`
        },
        {
            input: 'minecraft:blaze_rod',
            output: Item.of('minecraft:blaze_powder', 4),
            id: `${id_prefix}blaze_powder`
        },
        {
            input: '#forge:ores/quartz',
            output: Item.of('minecraft:quartz', 3),
            id: 'mekanism:processing/quartz/from_ore'
        },
        {
            input: 'mekanism:hdpe_pellet',
            output: 'mekanism:hdpe_sheet',
            id: 'mekanism:enriching/hdpe_sheet'
        },
        {
            input: '#forge:ores/netherite_scrap',
            output: Item.of('minecraft:netherite_scrap', 2),
            id: 'mekanism:processing/netherite/ancient_debris_to_scrap'
        },
        {
            input: 'mekanism:dirty_netherite_scrap',
            output: Item.of('minecraft:netherite_scrap'),
            id: 'mekanism:processing/netherite/dirty_scrap_to_scrap'
        },
        {
            input: '#ntc2:seeds/monazite',
            output: Item.of('kubejs:monazite_gem', 1),
            id: `${id_prefix}monazite_gem_seed`
        },
        {
            input: '#ntc2:seeds/crystal_shard',
            output: Item.of('betterendforge:crystal_shards', 1),
            id: `${id_prefix}crystal_shard_seed`
        },
        {
            input: '#ntc2:seeds/ender_shard',
            output: Item.of('betterendforge:ender_shard', 1),
            id: `${id_prefix}ender_shard_seed`
        },
        {
            input: '#ntc2:seeds/amber',
            output: Item.of('betterendforge:amber_gem', 1),
            id: `${id_prefix}amber_gem_seed`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(recipe.id);
    });
});
