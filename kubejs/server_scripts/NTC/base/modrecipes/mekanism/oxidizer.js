onEvent('recipes', (event) => {

    var data = {
        recipes: [
            {
                input: { amount: 1, ingredient: { item: 'kubejs:tbu' } },
                output: { amount: 2000, gas: 'kubejs:tbu_gas' }
            },
            {
                input: { amount: 1, ingredient: { item: 'kubejs:233_leu' } },
                output: { amount: 2000, gas: 'kubejs:233_leu_gas' }
            },
            {
                input: { amount: 1, ingredient: { item: 'kubejs:235_leu' } },
                output: { amount: 2000, gas: 'kubejs:235_leu_gas' }
            },
            {
                input: { amount: 1, ingredient: { item: 'kubejs:241_hep' } },
                output: { amount: 2000, gas: 'kubejs:241_hep_gas' }
            },
            {
                input: { amount: 1, ingredient: { item: 'kubejs:241_mox' } },
                output: { amount: 2000, gas: 'kubejs:241_mox_gas' }
            },
            {
                input: { amount: 1, ingredient: { item: 'kubejs:239_mox' } },
                output: { amount: 2000, gas: 'kubejs:239_mox_gas' }
            },
            {
                input: { amount: 1, ingredient: { item: 'kubejs:247_lecm' } },
                output: { amount: 2000, gas: 'kubejs:247_lecm_gas' }
            },
            {
                input: { amount: 1, ingredient: { item: 'kubejs:243_lecm' } },
                output: { amount: 2000, gas: 'kubejs:243_lecm_gas' }
            },
            {
                input: { amount: 1, ingredient: { item: 'kubejs:249_hecf' } },
                output: { amount: 2000, gas: 'kubejs:249_hecf_gas' }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'mekanism:oxidizing',
            input: recipe.input,
            output: recipe.output
        });
    });
});
