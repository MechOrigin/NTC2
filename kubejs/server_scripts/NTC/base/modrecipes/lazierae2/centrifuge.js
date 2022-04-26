onEvent('recipes', event => {

    removeRecipeByID(event, [
      'appliedenergistics2:centrifuge/purified_certus_quartz_crystal',
      'appliedenergistics2:centrifuge/ender_dust',
      'appliedenergistics2:centrifuge/purified_fluix_crystal',
      ''
    ])

    data = {
      recipes: [
          {
              time: 180,
              energy: 2000,
              item: 'appliedenergistics2:purified_certus_quartz_crystal',
              count: 2,
              input: 'emendatusenigmatica:certus_quartz_gem'
          },
          {
            time: 180,
            energy: 2000,
            item: 'appliedenergistics2:purified_fluix_crystal',
            count: 2,
            input: 'appliedenergistics2:fluix_crystal'
          },
          {
            time: 80,
            energy: 800,
            item: 'emendatusenigmatica:ender_dust',
            count: 2,
            input: 'minecraft:ender_pearl'
          }
      ]
    };

    data.recipes.forEach((recipe) => {

        event.custom({
            type: 'lazierae2:centrifuge',
            process_time: recipe.time,
            energy_cost: recipe.energy,
            output: {
                item: recipe.item,
                count: recipe.count
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