onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/bottler/';
    const recipes = [
        {
            input: 'minecraft:glass_bottle',
            fluid: Fluid.of('minecraft:milk', 250),
            output: 'productivebees:milk_bottle',
            id: `${id_prefix}milk_bottle`
        },
        {
            input: 'buildinggadgets:construction_block_powder',
            fluid: Fluid.of('minecraft:water', 1000),
            output: 'buildinggadgets:construction_block_dense',
            id: `${id_prefix}construction_block_dense`
        },
        {
            input: 'minecraft:iron_block',
            fluid: Fluid.of('tconstruct:blazing_blood', 1125),
            output: 'extendedcrafting:black_iron_block',
            id: `${id_prefix}black_iron_block`
        },
        {
            input: 'quark:clear_shard',
            fluid: Fluid.of('cofh_core:experience', 250),
            output: 'miniutilities:experience_pearl',
            id: `${id_prefix}experience_pearl`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).id(recipe.id);
    });
});
