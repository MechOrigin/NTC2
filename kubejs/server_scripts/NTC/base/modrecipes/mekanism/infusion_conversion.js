onEvent('recipes', (event) => {

    var data = {
        recipes: [
            {
                input: { amount: 1, item: 'minecraft:ender_pearl' },
                output: { amount: 10, infuse_type: 'kubejs:ender' }
            },
            {
                input: { amount: 1, item: 'appliedenergistics2:certus_quartz_crystal' },
                output: { amount: 10, infuse_type: 'kubejs:certus' }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'mekanism:infusion_conversion',
            input: recipe.input,
            output: recipe.output
        });
    });
});
