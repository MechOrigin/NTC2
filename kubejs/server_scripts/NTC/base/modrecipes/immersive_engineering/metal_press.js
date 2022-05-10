onEvent('recipes', e => {
  
    removeRecipeByID(e, [
      'immersiveengineering:metalpress/electrode'
    ])

    const recipes = [
        { output: 'mekanism:hdpe_sheet', input: '3x mekanism:hdpe_pellet', mold: '#thermal:crafting/dies/plate' },
        { output: 'immersiveengineering:graphite_electrode', input: '4x immersiveengineering:ingot_hop_graphite', mold: '#thermal:crafting/dies/rod' }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? e.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).id(recipe.id)
            : e.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold);
    });

  })
  