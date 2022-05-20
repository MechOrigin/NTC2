onEvent('recipes', event => {

    removeRecipeByID(event, [
      ''
    ])

    dataTags = {
      recipes: [
          {
              time: 80,
              energy: 1500,
              item: 'appliedenergistics2:1k_cell_component',
              input1: 'forge:storage_blocks/charged_certus_quartz',
              input2: 'mekanism:enriched/redstone',
              input3: 'appliedenergistics2:logic_processor'
          }
      ]
    };

    dataItems = {
      recipes: [
          {
            time: 80,
            energy: 1500,
            item: 'lazierae2:speculative_printed',
            input1: 'emendatusenigmatica:silicon_gem',
            input2: 'lazierae2:speculation_core_64',
            input3: 'lazierae2:universal_press'
          }
      ]
    };

    dataTags.recipes.forEach((recipe) => {

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
                  tag: recipe.input1
                }
              },
              {
                input: {
                  tag: recipe.input2
                }
              },
              {
                input: {
                  item: recipe.input3
                }
              }
            ]
        });
    });

    dataItems.recipes.forEach((recipe) => {

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
              }
            },
            {
              input: {
                item: recipe.input2
              }
            },
            {
              input: {
                item: recipe.input3
              }
            }
          ]
      });
  });

})
