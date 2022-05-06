onEvent('recipes', event => {

    removeRecipeByID(event, [
      'appliedenergistics2:energizer/charged_certus_quartz_crystal',
    ])

    data = {
      recipes: [
          {
              time: 80,
              energy: 1500,
              item: 'appliedenergistics2:charged_certus_quartz_crystal',
              input: 'appliedenergistics2:certus_quartz_crystal'
          }
      ]
    };

    data.recipes.forEach((recipe) => {

        event.custom({
            type: 'lazierae2:energizer',
            process_time: recipe.time,
            energy_cost: recipe.energy,
            output: {
                item: recipe.item
            },
            input: [
              {
                input: {
                  item: recipe.input
                }
              }
            ]
        });
    });

})
