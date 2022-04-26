onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'kubejs:irradiated_aluminum',
            input: 'kubejs:soda_aluminum',
            gas: { gas: 'mekanism:uranium_oxide', amount: 1 },
            id: 'mekanism:injecting/irradiated_aluminum'
        },
        {
            output: 'kubejs:irradiated_cobalt',
            input: 'kubejs:soda_cobalt',
            gas: { gas: 'mekanism:uranium_oxide', amount: 1 },
            id: 'mekanism:injecting/irradiated_cobalt'
        },
        {
            output: 'kubejs:irradiated_copper',
            input: 'kubejs:soda_copper',
            gas: { gas: 'mekanism:uranium_oxide', amount: 1 },
            id: 'mekanism:injecting/irradiated_copper'
        },
        {
            output: 'kubejs:irradiated_gold',
            input: 'kubejs:soda_gold',
            gas: { gas: 'mekanism:uranium_oxide', amount: 1 },
            id: 'mekanism:injecting/irradiated_gold'
        },
        {
            output: 'kubejs:irradiated_iron',
            input: 'kubejs:soda_iron',
            gas: { gas: 'mekanism:uranium_oxide', amount: 1 },
            id: 'mekanism:injecting/irradiated_iron'
        },
        {
            output: 'kubejs:irradiated_lead',
            input: 'kubejs:soda_lead',
            gas: { gas: 'mekanism:uranium_oxide', amount: 1 },
            id: 'mekanism:injecting/irradiated_lead'
        },
        {
            output: 'kubejs:irradiated_nickel',
            input: 'kubejs:soda_nickel',
            gas: { gas: 'mekanism:uranium_oxide', amount: 1 },
            id: 'mekanism:injecting/irradiated_nickel'
        },
        {
            output: 'kubejs:irradiated_osmium',
            input: 'kubejs:soda_osmium',
            gas: { gas: 'mekanism:uranium_oxide', amount: 1 },
            id: 'mekanism:injecting/irradiated_osmium'
        },
        {
            output: 'kubejs:irradiated_silver',
            input: 'kubejs:soda_silver',
            gas: { gas: 'mekanism:uranium_oxide', amount: 1 },
            id: 'mekanism:injecting/irradiated_silver'
        },
        {
            output: 'kubejs:irradiated_thallasium',
            input: 'kubejs:soda_thallasium',
            gas: { gas: 'mekanism:uranium_oxide', amount: 1 },
            id: 'mekanism:injecting/irradiated_thallasium'
        },
        {
            output: 'kubejs:irradiated_tin',
            input: 'kubejs:soda_tin',
            gas: { gas: 'mekanism:uranium_oxide', amount: 1 },
            id: 'mekanism:injecting/irradiated_tin'
        },
        {
            output: 'kubejs:irradiated_uranium',
            input: 'kubejs:soda_uranium',
            gas: { gas: 'mekanism:uranium_oxide', amount: 1 },
            id: 'mekanism:injecting/irradiated_uranium'
        },
        {
            output: 'kubejs:irradiated_zinc',
            input: 'kubejs:soda_zinc',
            gas: { gas: 'mekanism:uranium_oxide', amount: 1 },
            id: 'mekanism:injecting/irradiated_zinc'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.mekanism.injecting(recipe.output, recipe.input, recipe.gas);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
