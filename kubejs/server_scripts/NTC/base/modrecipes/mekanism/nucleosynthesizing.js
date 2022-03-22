onEvent('recipes', (event) => {
    /* 
        Recipes use about 40k rf per point of duration. 
        Duration is not a fixed speed, as the machine runs at 10000% speed when the energy buffer is full.  
           
    */
    var data = {
        recipes: [
            {
                itemInput: { ingredient: { tag: 'forge:ores/aluminum' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_aluminum', 16),
                duration: 500
            },
            {
                itemInput: { ingredient: { tag: 'forge:ores/cobalt' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_cobalt', 16),
                duration: 500
            },
            {
                itemInput: { ingredient: { tag: 'forge:ores/copper' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_copper', 16),
                duration: 500
            },
            {
                itemInput: { ingredient: { tag: 'forge:ores/gold' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_gold', 16),
                duration: 500
            },
            {
                itemInput: { ingredient: { tag: 'forge:ores/iron' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_iron', 16),
                duration: 500
            },
            {
                itemInput: { ingredient: { tag: 'forge:ores/lead' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_lead', 16),
                duration: 500
            },
            {
                itemInput: { ingredient: { tag: 'forge:ores/nickel' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_nickel', 16),
                duration: 500
            },
            {
                itemInput: { ingredient: { tag: 'forge:ores/osmium' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_osmium', 16),
                duration: 500
            },
            {
                itemInput: { ingredient: { tag: 'forge:ores/silver' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_silver', 16),
                duration: 500
            },
            {
                itemInput: { ingredient: { tag: 'forge:ores/thallasium' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_thallasium', 16),
                duration: 500
            },
            {
                itemInput: { ingredient: { tag: 'forge:ores/tin' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_tin', 16),
                duration: 500
            },
            {
                itemInput: { ingredient: { tag: 'forge:ores/uranium' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_uranium', 16),
                duration: 500
            },
            {
                itemInput: { ingredient: { tag: 'forge:ores/zinc' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_zinc', 16),
                duration: 500
            },

            {
                itemInput: { ingredient: { item: 'kubejs:clean_pressed_aluminum' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_aluminum', 1),
                duration: 500
            },
            {
                itemInput: { ingredient: { item: 'kubejs:clean_pressed_cobalt' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_cobalt', 1),
                duration: 500
            },
            {
                itemInput: { ingredient: { item: 'kubejs:clean_pressed_copper' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_copper', 1),
                duration: 500
            },
            {
                itemInput: { ingredient: { item: 'kubejs:clean_pressed_gold' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_gold', 1),
                duration: 500
            },
            {
                itemInput: { ingredient: { item: 'kubejs:clean_pressed_iron' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_iron', 1),
                duration: 500
            },
            {
                itemInput: { ingredient: { item: 'kubejs:clean_pressed_lead' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_lead', 1),
                duration: 500
            },
            {
                itemInput: { ingredient: { item: 'kubejs:clean_pressed_nickel' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_nickel', 1),
                duration: 500
            },
            {
                itemInput: { ingredient: { item: 'kubejs:clean_pressed_osmium' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_osmium', 1),
                duration: 500
            },
            {
                itemInput: { ingredient: { item: 'kubejs:clean_pressed_silver' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_silver', 1),
                duration: 500
            },
            {
                itemInput: { ingredient: { item: 'kubejs:clean_pressed_thallasium' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_thallasium', 1),
                duration: 500
            },
            {
                itemInput: { ingredient: { item: 'kubejs:clean_pressed_tin' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_tin', 1),
                duration: 500
            },
            {
                itemInput: { ingredient: { item: 'kubejs:clean_pressed_uranium' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_uranium', 1),
                duration: 500
            },
            {
                itemInput: { ingredient: { item: 'kubejs:clean_pressed_zinc' } },
                gasInput: { amount: 100, gas: 'kubejs:proton_gas' },
                output: Item.of('kubejs:destabilized_zinc', 1),
                duration: 500
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'mekanism:nucleosynthesizing',
            itemInput: recipe.itemInput,
            gasInput: recipe.gasInput,
            output: recipe.output,
            duration: recipe.duration
        });
    });
});
