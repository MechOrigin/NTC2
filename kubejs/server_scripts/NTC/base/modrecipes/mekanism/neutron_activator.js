onEvent('recipes', (event) => {

    var data = {
        recipes: [
            {
                input: { amount: 4, gas: 'mekanism:plutonium' },
                output: { amount: 1, gas: 'kubejs:neutron_gas' }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'mekanism:activating',
            input: recipe.input,
            output: recipe.output
        });
    });
});
