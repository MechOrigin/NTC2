onEvent('recipes', function (event) {

        //fluid and item outputs
        data = {
            recipes: [
                /*
                {
                    input: 'minecraft:dirt',
                    fluid: 'minecraft:water',
                    amount: 100,
                    output: 'minecraft:coarse_dirt',
                    count: 1,
                    duration: 100
                }
                */
            ]
        };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'integrateddynamics:drying_basin',
            item: recipe.input,
            fluid: {
                    fluid: recipe.fluid,
                    amount: recipe.amount
            },
            duration: recipe.duration,
            result: {
                    item: {
                        item: recipe.output
                    }
            }
        });
    
        event.custom({
            type: 'integrateddynamics:mechanical_drying_basin',
            item: recipe.input,
            fluid: {
                    fluid: recipe.fluid,
                    amount: recipe.amount
            },
            duration: recipe.duration,
            result: {
                    item: {
                        item: recipe.output
                    }
            }
        });
    });

});
