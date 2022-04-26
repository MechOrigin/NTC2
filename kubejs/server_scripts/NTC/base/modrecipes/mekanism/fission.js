onEvent('recipes', (event) => {

    var data = {
        recipes: [
            {
                input: { amount: 1, gas: 'kubejs:tbu_gas' },
                output: { amount: 1, gas: 'kubejs:tbu_depleted_gas' },
                heat: 1
            },
            {
                input: { amount: 1, gas: 'kubejs:233_leu_gas' },
                output: { amount: 1, gas: 'kubejs:233_leu_depleted_gas' },
                heat: 1
            },
            {
                input: { amount: 1, gas: 'kubejs:235_leu_gas' },
                output: { amount: 1, gas: 'kubejs:235_leu_depleted_gas' },
                heat: 1
            },
            {
                input: { amount: 1, gas: 'kubejs:241_hep_gas' },
                output: { amount: 1, gas: 'kubejs:241_hep_depleted_gas' },
                heat: 1
            },
            {
                input: { amount: 1, gas: 'kubejs:241_mox_gas' },
                output: { amount: 1, gas: 'kubejs:241_mox_depleted_gas' },
                heat: 1
            },
            {
                input: { amount: 1, gas: 'kubejs:239_mox_gas' },
                output: { amount: 1, gas: 'kubejs:239_mox_depleted_gas' },
                heat: 1
            },
            {
                input: { amount: 1, gas: 'kubejs:247_lecm_gas' },
                output: { amount: 1, gas: 'kubejs:247_lecm_depleted_gas' },
                heat: 1
            },
            {
                input: { amount: 1, gas: 'kubejs:243_lecm_gas' },
                output: { amount: 1, gas: 'kubejs:243_lecm_depleted_gas' },
                heat: 1
            },
            {
                input: { amount: 1, gas: 'kubejs:249_hecf_gas' },
                output: { amount: 1, gas: 'kubejs:249_hecf_depleted_gas' },
                heat: 1
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'mekanism:fission',
            input: recipe.input,
            output: recipe.output,
            heat: recipe.heat
        });
    });
});
