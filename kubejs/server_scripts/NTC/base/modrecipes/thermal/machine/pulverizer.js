onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/pulverizer/';
    const recipes = [
        {
            input: '#forge:ores/netherite',
            experience: 0.2,
            outputs: [Item.of('minecraft:netherite_scrap', 2)],
            id: 'thermal:machine/pulverizer/pulverizer_netherite'
        },
        {
            input: 'biomesoplenty:white_sandstone',
            experience: 0.2,
            outputs: [Item.of('biomesoplenty:white_sand', 2), Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)],
            id: 'thermal:machine/pulverizer/pulverizer_white_sandstone'
        },
        {
            input: 'biomesoplenty:orange_sandstone',
            experience: 0.2,
            outputs: [Item.of('biomesoplenty:orange_sand', 2), Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)],
            id: 'thermal:machine/pulverizer/pulverizer_orange_sandstone'
        },
        {
            input: 'biomesoplenty:black_sandstone',
            experience: 0.2,
            outputs: [Item.of('biomesoplenty:black_sand', 2), Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)],
            id: 'thermal:machine/pulverizer/pulverizer_black_sandstone'
        },
        {
            input: 'atmospheric:arid_sandstone',
            experience: 0.2,
            outputs: [
                Item.of('atmospheric:arid_sand', 2),
                Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
            ],
            id: 'thermal:machine/pulverizer/pulverizer_arid_sandstone'
        },
        {
            input: 'atmospheric:red_arid_sandstone',
            experience: 0.2,
            outputs: [
                Item.of('atmospheric:red_arid_sand', 2),
                Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.3)
            ],
            id: 'thermal:machine/pulverizer/pulverizer_red_arid_sandstone'
        },
        {
            input: 'buildinggadgets:construction_block_dense',
            experience: 0.2,
            outputs: [
                Item.of('buildinggadgets:construction_paste', 3),
                Item.of('buildinggadgets:construction_paste', 2).chance(0.5)
            ],
            id: 'thermal:machine/pulverizer/pulverizer_construction_block'
        },
        {
            input: '#forge:storage_blocks/aurora',
            experience: 0.2,
            outputs: [Item.of('betterendforge:crystal_shards', 4)],
            id: 'thermal:machine/pulverizer/pulverizer_aurora'
        },
        {
            input: '#forge:end_stones',
            experience: 0.2,
            outputs: [Item.of('exnihilosequentia:crushed_end_stone', 2)],
            id: 'thermal:machine/pulverizer/pulverizer_end_stone'
        },
        {
            input: '#forge:obsidian',
            experience: 0.2,
            outputs: [Item.of('emendatusenigmatica:obsidian_dust', 4)],
            id: 'thermal:machine/pulverizer/pulverizer_obsidian'
        },
        {
            input: '#forge:grain',
            experience: 0.2,
            outputs: [Item.of('pamhc2foodcore:flouritem'), Item.of('pamhc2foodcore:flouritem').chance(0.25)],
            id: `${id_prefix}wheat_flour`
        },
        {
            input: 'minecraft:sugar_cane',
            experience: 0.2,
            outputs: [Item.of('minecraft:sugar', 2), Item.of('minecraft:sugar').chance(0.1)],
            id: `${id_prefix}sugar`
        },
        {
            input: '#forge:rods/blaze',
            experience: 0.2,
            outputs: [Item.of('minecraft:blaze_powder', 3), Item.of('emendatusenigmatica:sulfur_dust').chance(0.25)],
            id: 'thermal:machine/pulverizer/pulverizer_blaze_rod'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.pulverizer(recipe.outputs, recipe.input).experience(recipe.experience).id(recipe.id);
    });
});
