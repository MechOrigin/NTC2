onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/crucible/';
    const recipes = [
        {
            output: Fluid.of('kubejs:molten_blitz', 250),
            input: 'thermal:blitz_powder',
            energy: 5000,
            id: `${id_prefix}blitz_powder`
        },
        {
            output: Fluid.of('kubejs:molten_blizz', 250),
            input: 'thermal:blizz_powder',
            energy: 5000,
            id: `${id_prefix}blizz_powder`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.crucible(recipe.output, recipe.input).energy(recipe.energy).id(recipe.id);
    });
});
