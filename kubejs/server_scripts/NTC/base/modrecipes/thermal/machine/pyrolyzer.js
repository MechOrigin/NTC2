onEvent('recipes', (event) => {
    const recipes = [
        {
            input: '#minecraft:logs',
            outputs: [Item.of('minecraft:charcoal').toJson(), Fluid.of('immersiveengineering:creosote', 125).toJson()],
            experience: 0.15,
            energy: 200,
            id: 'thermal:machine/pyrolyzer/pyrolyzer_logs'
        },
        {
            input: '#forge:gems/bitumen',
            outputs: [
                Item.of('emendatusenigmatica:coke_gem').toJson(),
                Item.of('thermal:tar').withChance(0.5).toJson(),
                Fluid.of('thermal:heavy_oil', 50).toJson()
            ],
            experience: 0.15,
            energy: 400,
            id: 'thermal:machine/pyrolyzer/pyrolyzer_bitumen'
        },
        {
            input: '#forge:gems/coal',
            outputs: [
                Item.of('emendatusenigmatica:coke_gem').toJson(),
                Item.of('thermal:tar').withChance(0.25).toJson(),
                Fluid.of('immersiveengineering:creosote', 250).toJson()
            ],
            experience: 0.15,
            energy: 400,
            id: 'thermal:machine/pyrolyzer/pyrolyzer_coal'
        },
        {
            input: '#forge:storage_blocks/coal',
            outputs: [
                Item.of('emendatusenigmatica:coke_block').toJson(),
                Item.of('thermal:tar_block').withChance(0.25).toJson(),
                Fluid.of('immersiveengineering:creosote', 2250).toJson()
            ],
            experience: 0.15,
            energy: 3600,
            id: 'thermal:machine/pyrolyzer/pyrolyzer_coal_block'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'thermal:pyrolyzer',
            ingredient: Ingredient.of(recipe.input).toJson(),
            result: recipe.outputs,
            experience: recipe.experience,
            energy: recipe.energy
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
