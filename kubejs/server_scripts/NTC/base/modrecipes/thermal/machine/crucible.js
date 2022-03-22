onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/crucible/';
    const recipes = [
        //idk
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.crucible(recipe.output, recipe.input).energy(recipe.energy).id(recipe.id);
    });
});
