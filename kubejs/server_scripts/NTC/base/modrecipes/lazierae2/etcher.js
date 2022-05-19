onEvent('recipes', event => {

    removeRecipeByID(event, [
      ''
    ])

    data = {
      recipes: [
          {
              time: 80,
              energy: 1500,
              item: 'appliedenergistics2:1k_cell_component',
              input1: 'emendatusenigmatica:charged_certus_quartz_block',
              input2: 'mekanism:enriched_redstone',
              input3: 'appliedenergistics2:logic_processor'
          }
      ]
    };

    data.recipes.forEach((recipe) => {

        event.custom({
            type: 'lazierae2:etcher',
            process_time: recipe.time,
            energy_cost: recipe.energy,
            output: {
                item: recipe.item
            },
            input: [
              {
                input: {
                  item: recipe.input1
                },
                input: {
                  item: recipe.input2
                },
                input: {
                  item: recipe.input3
                }
              }
            ]
        });
    });

})
