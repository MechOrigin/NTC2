onEvent('recipes', (event) => {
    const recipes = [
        {
            input: { tag: 'forge:cobblestone' },
            output: { item: 'minecraft:gravel' },
            id: 'industrialforegoing:crusher/cobble_gravel'
        },
        {
            input: { tag: 'forge:gravel' },
            output: { item: 'minecraft:sand' },
            id: 'industrialforegoing:crusher/gravel_sand'
        },
        {
            input: { item: 'biomesoplenty:white_sandstone' },
            output: { item: 'biomesoplenty:white_sand' },
            id: 'ntc2:industrialforegoing/crusher/white_sandstone_sand'
        },
        {
            input: { item: 'biomesoplenty:black_sandstone' },
            output: { item: 'biomesoplenty:black_sand' },
            id: 'ntc2:industrialforegoing/crusher/black_sandstone_sand'
        },
        {
            input: { item: 'biomesoplenty:orange_sandstone' },
            output: { item: 'biomesoplenty:orange_sand' },
            id: 'ntc2:industrialforegoing/crusher/orange_sandstone_sand'
        },
        {
            input: { item: 'minecraft:end_stone' },
            output: { item: 'exnihilosequentia:crushed_end_stone' },
            id: 'ntc2:industrialforegoing/crusher/end_stone_crushed'
        },
        {
            input: { item: 'exnihilosequentia:crushed_end_stone' },
            output: { item: 'betterendforge:endstone_dust' },
            id: 'ntc2:industrialforegoing/crusher/end_stone_dust'
        },
        {
            input: { item: 'minecraft:red_sandstone' },
            output: { item: 'minecraft:red_sand' },
            id: 'ntc2:industrialforegoing/crusher/red_sandstone_sand'
        },
        {
            input: { item: 'minecraft:sandstone' },
            output: { item: 'minecraft:sand' },
            id: 'ntc2:industrialforegoing/crusher/sandstone_sand'
        },
        {
            input: { item: 'atmospheric:arid_sandstone' },
            output: { item: 'atmospheric:arid_sand' },
            id: 'ntc2:industrialforegoing/crusher/arid_sandstone_sand'
        },
        {
            input: { tag: 'forge:sand' },
            output: { tag: 'forge:silicon' },
            id: 'ntc2:industrialforegoing/crusher/sand_silicon_gem'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'industrialforegoing:crusher',
                input: recipe.input,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
