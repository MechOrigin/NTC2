onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/mekanism/crushing/';
    const recipes = [
        {
            input: 'atmospheric:arid_sandstone',
            output: item.of('atmospheric:arid_sand', 2),
            id: `${id_prefix}arid_sand`
        },
        {
            input: 'atmospheric:red_arid_sandstone',
            output: item.of('atmospheric:red_arid_sand', 2),
            id: `${id_prefix}red_arid_sand`
        },
        {
            input: '#forge:stone',
            output: 'minecraft:cobblestone',
            id: `${id_prefix}cobblestone`
        },
        {
            input: 'buildinggadgets:construction_block_dense',
            output: Item.of('buildinggadgets:construction_paste', 3),
            id: `${id_prefix}construction_paste`
        },
        {
            input: '#forge:ores/netherite_scrap',
            output: Item.of('mekanism:dirty_netherite_scrap', 3),
            id: 'mekanism:processing/netherite/ancient_debris_to_dirty_scrap'
        },
        {
            input: '#forge:glass',
            output: Item.of('quark:clear_shard', 4),
            id: `${id_prefix}clear_shard`
        },
        {
            input: 'enderioalloys:item_material_pulsating_crystal',
            output: Item.of('enderioalloys:item_material_pulsating_powder', 1),
            id: `${id_prefix}item_material_pulsating_powder`
        },
        {
            input: '#minecraft:planks',
            output: Item.of('inspirations:plain_mulch', 1),
            id: `${id_prefix}plain_mulch`
        },
        {
            input: 'minecraft:charcoal',
            output: Item.of('emendatusenigmatica:charcoal_dust', 1),
            id: `${id_prefix}charcoal_to_charcoal_dust`
        },
        {
            input: 'morecharcoal:charcoal_block',
            output: Item.of('emendatusenigmatica:charcoal_dust', 9),
            id: `${id_prefix}charcoal_block_to_charcoal_dust`
        },
        {
            input: '#forge:storage_blocks/aurora',
            output: Item.of('betterendforge:crystal_shards', 4),
            id: `${id_prefix}crystal_shards`
        }
    ];

    const biofuels = [
        {
            count: 2,
            inputs: [
                '#minecraft:leaves',
                'projectvibrantjourneys:cattail'
            ]
        },
        {
            count: 5,
            inputs: [
                '#minecraft:small_flowers',
                '#minecraft:tall_flowers',
                '#forge:mushrooms'
            ]
        }
    ];

    biofuels.forEach((biofuel) => {
        biofuel.inputs.forEach((input) => {
            recipes.push({
                input: input,
                output: Item.of('mekanism:bio_fuel', biofuel.count),
                id: `${id_prefix}bio_fuel_from_${input.split(':')[0].replace('#', '')}_${input.split(':')[1]}`
            });
        });
    });

    recipes.forEach((recipe) => {
        event.recipes.mekanism.crushing(recipe.output, recipe.input).id(recipe.id);
    });
});
