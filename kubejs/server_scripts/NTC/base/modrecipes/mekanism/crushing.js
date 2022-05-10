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
            input: '#forge:ores/netherite',
            output: Item.of('mekanism:dirty_netherite_scrap', 3),
            id: 'mekanism:processing/netherite/ancient_debris_to_dirty_scrap'
        },
        {
            input: '#forge:glass',
            output: Item.of('quark:clear_shard', 4),
            id: `${id_prefix}cobblestone`
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
                '#forge:mushroom_stems',
                '#forge:mushrooms'
            ]
        },
        {
            count: 7,
            inputs: ['#forge:mushroom_caps']
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
