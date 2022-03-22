onEvent('recipes', event => {

    removeRecipeByID(event, [
      'lazierae2:fluix_aggregator/resonating_gem',
      'appliedenergistics2:fluix_aggregator/fluix_crystal',
      'lazierae2:fluix_aggregator/carb_fluix_dust',
      'lazierae2:fluix_aggregator/fluix_steel_ingot'
    ])

    data = {
      recipes: [
          {
              time: 80,
              item: 'emendatusenigmatica:fluix_gem',
              count: 2,
              input1: 'forge:gems/quartz',
              input2: 'forge:dusts/redstone',
              input3: 'emendatusenigmatica:charged_certus_quartz_gem'
          },
          {
            time: 80,
            item: 'lazierae2:resonating_gem',
            count: 1,
            input1: 'forge:dusts/ender',
            input2: 'forge:gems/diamond',
            input3: 'appliedenergistics2:sky_dust'
          },
          {
            time: 80,
            item: 'lazierae2:carb_fluix_dust',
            count: 1,
            input1: 'forge:dusts/coal',
            input2: 'forge:silicon',
            input3: 'emendatusenigmatica:fluix_dust'
          },
          {
            time: 80,
            item: 'lazierae2:fluix_steel_ingot',
            count: 1,
            input1: 'forge:dusts/coal',
            input2: 'forge:ingots/iron',
            input3: 'emendatusenigmatica:fluix_dust'
          }
      ]
    };

    data.recipes.forEach((recipe) => {

        event.custom({
            type: 'lazierae2:fluix_aggregator',
            processing_time: recipe.time,
            output: {
                item: recipe.item,
                count: recipe.count
            },
            inputs: [
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

})
