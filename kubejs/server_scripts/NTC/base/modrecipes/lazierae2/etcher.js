onEvent('recipes', event => {

    removeRecipeByID(event, [

    ])

    data = {
      recipes: [
          {
              time: 25,
              energy: 250,
              item: 'lazierae2:speculative_printed',
              input1: 'lazierae2:universal_press',
              input2: 'lazierae2:speculation_core_64'
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
