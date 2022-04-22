onEvent('recipes', event => {

    removeRecipeByID(event, [
      'appliedenergistics2:centrifuge/purified_certus_quartz_crystal',
    ])

    data = {
      recipes: [
          {
              time: 180,
              energy: 2000,
              item: 'appliedenergistics2:purified_certus_quartz_crystal',
              count: 2,
              input: 'emendatusenigmatica:certus_quartz_gem'
          }
      ]
    };

    data.recipes.forEach((recipe) => {

        event.custom({
            type: 'lazierae2:centrifuge',
            processing_time: recipe.time,
            energy_cost: recipe.energy,
            output: {
                item: recipe.item,
                amount: recipe.count
            },
            inputs: [
              {
                input: {
                  item: recipe.input
                }
              }
            ]
        });
    });

})
