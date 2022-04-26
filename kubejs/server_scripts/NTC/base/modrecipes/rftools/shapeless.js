onEvent('recipes', (event) => {
    const id_prefix = 'ntc2:base/';
    const recipes = [
        { output: 'emendatusenigmatica:dimensional_gem', inputs: ['rftoolsbase:dimensionalshard'] },
        { output: 'rftoolsbase:dimensionalshard', inputs: ['emendatusenigmatica:dimensional_gem'] },

        { output: 'emendatusenigmatica:dimensional_dust', inputs: ['thermal:earth_charge', '#forge:ores/dimensional'] }

    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
});
