onEvent('recipes', (event) => {
    const id_prefix = 'ntc2:base/thermal/centrifuge/';
    const recipes = [
        {
            input: '#forge:ores/bitumen',
            outputs: [
                Item.of('minecraft:gravel').withChance(0.75),
                Item.of('emendatusenigmatica:bitumen_gem').withChance(1.5),
                Item.of('thermal:tar').withCount(1),
                Fluid.of('immersivepetroleum:oil', 100)
            ],
            id: `${id_prefix}tag_bitumen`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.centrifuge(recipe.outputs, recipe.input).id(recipe.id);
    });
});
