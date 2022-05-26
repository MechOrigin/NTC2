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
            item: 'kubejs:logic_processor_wafer',
            count: 1,
            input1: 'minecraft:gold_block',
            input2: 'minecraft:redstone_block',
            input3: 'kubejs:silicon_sheet'
          },
          {
            time: 80,
            energy: 1500,
            item: 'kubejs:calculation_processor_wafer',
            count: 1,
            input1: 'appliedenergistics2:quartz_block',
            input2: 'minecraft:redstone_block',
            input3: 'kubejs:silicon_sheet'
          },
          {
            time: 80,
            energy: 1500,
            item: 'kubejs:engineering_processor_wafer',
            count: 1,
            input1: 'minecraft:diamond_block',
            input2: 'minecraft:redstone_block',
            input3: 'kubejs:silicon_sheet'
          },
          {
            time: 80,
            energy: 1500,
            item: 'kubejs:4k_component_wafer',
            count: 1,
            input1: 'kubejs:calculation_processor_wafer',
            input2: 'kubejs:1k_component_wafer',
            input3: 'kubejs:glassy_redstone_sheet'
          },
          {
            time: 80,
            energy: 1500,
            item: 'kubejs:16k_component_wafer',
            count: 1,
            input1: 'kubejs:calculation_processor_wafer',
            input2: 'kubejs:4k_component_wafer',
            input3: 'kubejs:glassy_glowstone_sheet'
          },
          {
            time: 80,
            energy: 1500,
            item: 'kubejs:64k_component_wafer',
            count: 1,
            input1: 'kubejs:calculation_processor_wafer',
            input2: 'kubejs:16k_component_wafer',
            input3: 'kubejs:glassy_glowstone_sheet'
          },
          {
            time: 80,
            energy: 1500,
            item: 'kubejs:256k_component_wafer',
            count: 1,
            input1: 'kubejs:calculation_processor_wafer',
            input2: 'kubejs:64k_component_wafer',
            input3: 'kubejs:glassy_redstone_sheet'
          },
          {
            time: 80,
            energy: 1500,
            item: 'kubejs:1m_component_wafer',
            count: 1,
            input1: 'kubejs:calculation_processor_wafer',
            input2: 'kubejs:256k_component_wafer',
            input3: 'kubejs:glassy_redstone_sheet'
          },
          {
            time: 80,
            energy: 1500,
            item: 'kubejs:4m_component_wafer',
            count: 1,
            input1: 'kubejs:calculation_processor_wafer',
            input2: 'kubejs:1m_component_wafer',
            input3: 'kubejs:glassy_glowstone_sheet'
          },
          {
            time: 80,
            energy: 1500,
            item: 'kubejs:16m_component_wafer',
            count: 1,
            input1: 'kubejs:calculation_processor_wafer',
            input2: 'kubejs:4m_component_wafer',
            input3: 'kubejs:glassy_glowstone_sheet'
          }
      ]
    };

    dataItemsTwoItems = {
      recipes: [
          {
            time: 80,
            energy: 1500,
            item: 'kubejs:1k_component_wafer',
            count: 1,
            input1: 'kubejs:logic_processor_wafer',
            input2: 'kubejs:charged_redstone_sheet'
          },
          {
            time: 80,
            energy: 1500,
            item: 'lazierae2:speculative_printed',
            input1: 'lazierae2:universal_press',
            input2: 'lazierae2:speculation_core_64'
          },
          {
            time: 80,
            energy: 1500,
            item: 'kubejs:charged_redstone_sheet',
            input1: 'minecraft:redstone_block',
            input2: 'emendatusenigmatica:charged_certus_quartz_block'
          },
          {
            time: 80,
            energy: 1500,
            item: 'kubejs:glassy_redstone_sheet',
            input1: 'minecraft:redstone_block',
            input2: 'appliedenergistics2:quartz_glass'
          },
          {
            time: 80,
            energy: 1500,
            item: 'kubejs:glassy_glowstone_sheet',
            input1: 'minecraft:glowstone',
            input2: 'appliedenergistics2:quartz_glass'
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
              item: recipe.item,
              count: recipe.count
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

  dataItemsTwoItems.recipes.forEach((recipe) => {

    event.custom({
        type: 'lazierae2:etcher',
        process_time: recipe.time,
        energy_cost: recipe.energy,
        output: {
            item: recipe.item,
            count: recipe.count
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
          }
        ]
    });
});

})
