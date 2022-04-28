onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                {
                    name: "tconstruct:molten_gold",
                    amount: 144
                },
                {
                    name: "emendatusenigmatica:molten_redstone",
                    amount: 144
                },
                {
                    name: "thermal:glowstone",
                    amount: 1000
                }
            ],
            result: {
                fluid: "kubejs:molten_energetic_alloy",
                amount: 144
            },
            temperature: 1400
        },
        {
            inputs: [
                {
                    name: "kubejs:molten_energetic_alloy",
                    amount: 144
                },
                {
                    name: "thermal:ender",
                    amount: 250
                }
            ],
            result: {
                fluid: "kubejs:molten_vibrant_alloy",
                amount: 144
            },
            temperature: 4095
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'tconstruct:alloy',
            inputs: recipe.inputs,
            result: recipe.result,
            temperature: recipe.temperature
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
