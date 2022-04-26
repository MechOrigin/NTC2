onEvent('recipes', event => {

    removeRecipeByID(event, [
      'lazierae2:aggregator/resonating_gem',
      'appliedenergistics2:aggregator/fluix_crystal',
      'lazierae2:aggregator/carbonic_fluix_dust',
      'lazierae2:aggregator/fluix_steel_ingot',
      'lazierae2:aggregator/speculation_core_1'
    ])

    data = {
      recipes: [
          {
              time: 25,
              energy: 250,
              item: 'emendatusenigmatica:fluix_gem',
              count: 2,
              input1: 'forge:gems/quartz',
              input2: 'forge:dusts/redstone',
              input3: 'emendatusenigmatica:charged_certus_quartz_gem'
          },
          {
            time: 120,
            energy: 2000,
            item: 'lazierae2:resonating_gem',
            count: 1,
            input1: 'forge:dusts/ender',
            input2: 'forge:gems/diamond',
            input3: 'appliedenergistics2:sky_dust'
          },
          {
            time: 30,
            energy: 300,
            item: 'lazierae2:carbonic_fluix_dust',
            count: 1,
            input1: 'forge:dusts/coal',
            input2: 'forge:silicon',
            input3: 'emendatusenigmatica:fluix_dust'
          },
          {
            time: 80,
            energy: 1500,
            item: 'lazierae2:fluix_steel_ingot',
            count: 1,
            input1: 'forge:dusts/coal',
            input2: 'forge:ingots/iron',
            input3: 'emendatusenigmatica:fluix_dust'
          },
          {
            time: 60,
            energy: 600,
            item: 'lazierae2:speculation_core_1',
            count: 1,
            input1: 'forge:dusts/carbonic_fluix',
            input2: 'forge:dusts/sky',
            input3: 'appliedenergistics2:matter_ball'
          }
      ]
    };

    data.recipes.forEach((recipe) => {

        event.custom({
            type: 'lazierae2:aggregator',
            process_time: recipe.time,
            energy_cost: recipe.energy,
            output: {
                item: recipe.item,
                count: recipe.count
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

})
