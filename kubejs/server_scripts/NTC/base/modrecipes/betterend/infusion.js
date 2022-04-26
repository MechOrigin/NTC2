onEvent('recipes', (event) => {

    //index: 0-7
    const id_prefix = 'ntc2:betterendforge/infusion/';
    var data = {
        recipes: [
            {
                input: 'betterendforge:crystalite_boots',
                output: 'betterendforge:aeternium_boots',
                catalysts: [
                    { index: 0, tag: 'forge:gems/amber' },
                    { index: 2, tag: 'forge:gems/crystal' },
                    { index: 6, tag: 'forge:gems/crystal' },
                    { index: 4, tag: 'forge:ingots/aeternium' }
                ],
                time: 250,
                id: `${id_prefix}aeternium_boots`
            },
            {
                input: 'betterendforge:crystalite_chestplate',
                output: 'betterendforge:aeternium_chestplate',
                catalysts: [
                    { index: 0, tag: 'forge:gems/amber' },
                    { index: 1, tag: 'forge:gems/crystal' },
                    { index: 3, tag: 'forge:gems/crystal' },
                    { index: 4, tag: 'forge:ingots/aeternium' },
                    { index: 5, tag: 'forge:gems/crystal' },
                    { index: 7, tag: 'forge:gems/crystal' }
                ],
                time: 250,
                id: `${id_prefix}aeternium_chestplate`
            },
            {
                input: 'betterendforge:crystalite_helmet',
                output: 'betterendforge:aeternium_helmet',
                catalysts: [
                    { index: 0, tag: 'forge:gems/amber' },
                    { index: 2, tag: 'forge:gems/crystal' },
                    { index: 6, tag: 'forge:gems/crystal' },
                    { index: 4, tag: 'forge:ingots/aeternium' }
                ],
                time: 250,
                id: `${id_prefix}aeternium_helmet`
            },
            {
                input: 'betterendforge:crystalite_leggings',
                output: 'betterendforge:aeternium_leggings',
                catalysts: [
                    { index: 0, tag: 'forge:gems/amber' },
                    { index: 2, tag: 'forge:gems/crystal' },
                    { index: 6, tag: 'forge:gems/crystal' },
                    { index: 4, tag: 'forge:ingots/aeternium' }
                ],
                time: 250,
                id: `${id_prefix}aeternium_leggings`
            },
            {
                input: 'minecraft:netherite_ingot',
                output: 'cagedmobs:star_infused_netherite_ingot',
                catalysts: [
                    { index: 0, tag: 'forge:nether_stars' },
                    { index: 2, tag: 'forge:nether_stars' },
                    { index: 4, tag: 'forge:nether_stars' },
                    { index: 6, tag: 'forge:nether_stars' }
                ],
                time: 50,
                id: `${id_prefix}star_infused_netherite_ingot`
            },
            {
                input: 'minecraft:end_stone',
                output: 'betterendforge:amber_moss',
                catalysts: [
                    { index: 0, item: 'betterendforge:amber_grass' },
                    { index: 2, item: 'betterendforge:amber_grass' },
                    { index: 4, item: 'betterendforge:amber_grass' },
                    { index: 6, item: 'betterendforge:amber_grass' }
                ],
                time: 50,
                id: `${id_prefix}amber_moss`
            },
            {
                input: 'minecraft:end_stone',
                output: 'betterendforge:cave_moss',
                catalysts: [
                    { index: 0, item: 'betterendforge:cave_grass' },
                    { index: 2, item: 'betterendforge:cave_grass' },
                    { index: 4, item: 'betterendforge:cave_grass' },
                    { index: 6, item: 'betterendforge:cave_grass' }
                ],
                time: 50,
                id: `${id_prefix}cave_moss`
            },
            {
                input: 'minecraft:end_stone',
                output: 'betterendforge:chorus_nylium',
                catalysts: [
                    { index: 0, item: 'betterendforge:chorus_grass' },
                    { index: 2, item: 'betterendforge:chorus_grass' },
                    { index: 4, item: 'betterendforge:chorus_grass' },
                    { index: 6, item: 'betterendforge:chorus_grass' }
                ],
                time: 50,
                id: `${id_prefix}chorus_nylium`
            },
            {
                input: 'minecraft:end_stone',
                output: 'betterendforge:crystal_moss',
                catalysts: [
                    { index: 0, item: 'betterendforge:crystal_grass' },
                    { index: 2, item: 'betterendforge:crystal_grass' },
                    { index: 4, item: 'betterendforge:crystal_grass' },
                    { index: 6, item: 'betterendforge:crystal_grass' }
                ],
                time: 50,
                id: `${id_prefix}crystal_moss`
            },
            {
                input: 'minecraft:end_stone',
                output: 'betterendforge:end_moss',
                catalysts: [
                    { index: 0, item: 'betterendforge:creeping_moss' },
                    { index: 2, item: 'betterendforge:creeping_moss' },
                    { index: 4, item: 'betterendforge:creeping_moss' },
                    { index: 6, item: 'betterendforge:creeping_moss' }
                ],
                time: 50,
                id: `${id_prefix}end_moss`
            },
            {
                input: 'minecraft:end_stone',
                output: 'betterendforge:end_mycelium',
                catalysts: [
                    { index: 0, item: 'betterendforge:dense_vine' },
                    { index: 2, item: 'betterendforge:dense_vine' },
                    { index: 4, item: 'betterendforge:dense_vine' },
                    { index: 6, item: 'betterendforge:dense_vine' }
                ],
                time: 50,
                id: `${id_prefix}end_mycelium`
            },
            {
                input: 'minecraft:end_stone',
                output: 'betterendforge:jungle_moss',
                catalysts: [
                    { index: 0, item: 'betterendforge:jungle_grass' },
                    { index: 2, item: 'betterendforge:jungle_grass' },
                    { index: 4, item: 'betterendforge:jungle_grass' },
                    { index: 6, item: 'betterendforge:jungle_grass' }
                ],
                time: 50,
                id: `${id_prefix}jungle_moss`
            },
            {
                input: 'minecraft:end_stone',
                output: 'betterendforge:pink_moss',
                catalysts: [
                    { index: 0, item: 'betterendforge:bushy_grass' },
                    { index: 2, item: 'betterendforge:bushy_grass' },
                    { index: 4, item: 'betterendforge:bushy_grass' },
                    { index: 6, item: 'betterendforge:bushy_grass' }
                ],
                time: 50,
                id: `${id_prefix}pink_moss`
            },
            {
                input: 'minecraft:end_stone',
                output: 'betterendforge:rutiscus',
                catalysts: [
                    { index: 0, item: 'betterendforge:orango' },
                    { index: 2, item: 'betterendforge:orango' },
                    { index: 4, item: 'betterendforge:orango' },
                    { index: 6, item: 'betterendforge:orango' }
                ],
                time: 50,
                id: `${id_prefix}rutiscus`
            },
            {
                input: 'minecraft:end_stone',
                output: 'betterendforge:sangnum',
                catalysts: [
                    { index: 0, item: 'betterendforge:globulagus' },
                    { index: 2, item: 'betterendforge:globulagus' },
                    { index: 4, item: 'betterendforge:globulagus' },
                    { index: 6, item: 'betterendforge:globulagus' }
                ],
                time: 50,
                id: `${id_prefix}sangnum`
            },
            {
                input: 'minecraft:end_stone',
                output: 'betterendforge:shadow_grass',
                catalysts: [
                    { index: 0, item: 'betterendforge:shadow_plant' },
                    { index: 2, item: 'betterendforge:shadow_plant' },
                    { index: 4, item: 'betterendforge:shadow_plant' },
                    { index: 6, item: 'betterendforge:shadow_plant' }
                ],
                time: 50,
                id: `${id_prefix}shadow_grass`
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'betterendforge:infusion',
                input: Ingredient.of(recipe.input).toJson(),
                output: recipe.output,
                time: recipe.time,
                catalysts: recipe.catalysts
            })
            .id(recipe.id);
    });
});
