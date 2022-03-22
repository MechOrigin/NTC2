onEvent('recipes', function (event) {

    //fluid and item outputs
    data = {
        recipes: [
            {
                time: 1,
                energy: 512,
                output: 'immersivepetroleum:diesel',
                output_amount: 7,
                input: 'forge:diesel_sulfur',
                input_amount: 7,
                secondary_input: 'minecraft:water',
                secondary_amount: 7,
                secondary_result: 'emendatusenigmatica:sulfur_dust',
                chance: 0.02
            }
        ]
    };

data.recipes.forEach((recipe) => {

    event.custom({
        type: 'immersivepetroleum:hydrotreater',
        time: recipe.time,
        energy: recipe.energy,
        result: {
            fluid: recipe.output,
            amount: recipe.output_amount
        },
        input: {
            tag: recipe.input,
            amount: recipe.input_amount
        },
        secondary_input: {
            tag: recipe.secondary_input,
            amount: recipe.secondary_amount
        },
        secondary_result: {
            item: recipe.secondary_result,
            chance: recipe.chance
        }
    });

});

});
