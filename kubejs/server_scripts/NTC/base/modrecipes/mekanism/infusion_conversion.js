onEvent('recipes', (event) => {

    var data = {
        recipes: [
            {
                input: { ingredient: { tag: `forge:gems/ender` } },
                output: { amount: 10, infuse_type: 'kubejs:ender' }
            },
            {
                input: { ingredient: { tag: 'forge:storage_blocks/ender' } },
                output: { amount: 40, infuse_type: 'kubejs:ender' }
            },
            {
                input: { ingredient: { tag: `appliedenergistics2:crystals/quartz` } },
                output: { amount: 10, infuse_type: 'kubejs:certus' }
            },
            {
                input: { ingredient: { tag: 'forge:storage_blocks/certus_quartz' } },
                output: { amount: 90, infuse_type: 'kubejs:certus' }
            },
            {
                input: { ingredient: { tag: 'forge:storage_blocks/charged_certus_quartz' } },
                output: { amount: 90, infuse_type: 'kubejs:certus' }
            },
            {
                input: { ingredient: { tag: 'forge:storage_blocks/quartz' } },
                output: { amount: 40, infuse_type: 'kubejs:certus' }
            },
            {
                input: { ingredient: { item: `minecraft:blaze_powder` } },
                output: { amount: 10, infuse_type: 'kubejs:blazing' }
            },
            {
                input: { ingredient: { item: 'minecraft:blaze_rod' } },
                output: { amount: 40, infuse_type: 'kubejs:blazing' }
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
