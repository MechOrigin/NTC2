onEvent('recipes', (event) => {
    const recipes = [
        /*
        {
            inputs: [
                '', // top left
                '', // top 
                '', // top right
                '', // left
                '', // right
                '', // bottom left
                '', // bottom
                ''  // bottom right
            ],
            inputFluid: '', // optional
            inputFluidAmount: 0, // leave at 0 for no fluid
            processingTime: 50,
            outputItem: { item: '', count: 1 },
            outputFluid: '', // optional
            outputFluidAmount: 0, // leave at 0 for no fluid
            id: ''
        }
*/
        {
            inputs: ['minecraft:glass_pane'],
            inputFluid: 'industrialforegoing:essence',
            inputFluidAmount: 1000,
            processingTime: 50,
            outputItem: { item: 'minecraft:glass_pane', count: 1 },
            outputFluid: 'cofh_core:experience',
            outputFluidAmount: 1000
        },
        {
            inputs: ['minecraft:glass_pane'],
            inputFluid: 'cofh_core:experience',
            inputFluidAmount: 1000,
            processingTime: 50,
            outputItem: { item: 'minecraft:glass_pane', count: 1 },
            outputFluid: 'industrialforegoing:essence',
            outputFluidAmount: 1000
        },

        {
            inputs: [
                'minecraft:soul_sand', // top left
                'minecraft:soul_sand', // top 
                'minecraft:soul_sand', // top right
                'minecraft:soul_sand', // left
                'minecraft:soul_sand', // right
                'minecraft:soul_sand', // bottom left
                'minecraft:soul_sand', // bottom
                'minecraft:soul_sand'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 100,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:dark_glass', count: 8 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                '#forge:gears/gold', // right
                '#forge:gears/gold', // bottom left
                'minecraft:blaze_rod', // bottom
                'minecraft:blaze_rod'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:efficiency_addon_1', '{TitaniumAugment:{Efficiency:0.9f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                '#forge:gears/diamond', // right
                '#forge:gears/diamond', // bottom left
                'minecraft:blaze_rod', // bottom
                'minecraft:blaze_rod'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:efficiency_addon_2', '{TitaniumAugment:{Efficiency:0.8f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/white', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens0', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/orange', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens1', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/magenta', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens2', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/light_blue', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens3', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/yellow', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens4', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/lime', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens5', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/pink', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens6', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/grey', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens7', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/light_grey', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens8', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/cyan', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens9', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/purple', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens10', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/blue', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens11', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/brown', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens12', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/green', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens13', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/red', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens14', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:glass_panes', // top left
                '#forge:glass_panes', // top 
                '#forge:glass_panes', // top right
                '#forge:glass_panes', // left
                '#forge:dyes/black', // right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:laser_lens15', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                '#forge:gears/gold', // right
                '#forge:gears/gold', // bottom left
                'minecraft:furnace', // bottom
                'minecraft:crafting_table'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:processing_addon_1', '{TitaniumAugment:{Processing:2.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                '#forge:gears/diamond', // right
                '#forge:gears/diamond', // bottom left
                'minecraft:furnace', // bottom
                'minecraft:crafting_table'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:processing_addon_2', '{TitaniumAugment:{Processing:3.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                'minecraft:cobblestone', // right
                'minecraft:cobblestone', // bottom left
                'minecraft:cobblestone', // bottom
                'minecraft:cobblestone'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:range_addon0', '{TitaniumAugment:{Range:0.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                'minecraft:lapis_lazuli', // right
                'minecraft:lapis_lazuli', // bottom left
                'minecraft:lapis_lazuli', // bottom
                'minecraft:lapis_lazuli'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:range_addon1', '{TitaniumAugment:{Range:1.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                'minecraft:bone_meal', // right
                'minecraft:bone_meal', // bottom left
                'minecraft:bone_meal', // bottom
                'minecraft:bone_meal'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:range_addon2', '{TitaniumAugment:{Range:2.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                'minecraft:iron_nugget', // right
                'minecraft:iron_nugget', // bottom left
                'minecraft:iron_nugget', // bottom
                'minecraft:iron_nugget'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:range_addon3', '{TitaniumAugment:{Range:3.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                'minecraft:blaze_powder', // right
                'minecraft:blaze_powder', // bottom left
                'minecraft:blaze_powder', // bottom
                'minecraft:blaze_powder'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:range_addon4', '{TitaniumAugment:{Range:4.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                'minecraft:gold_nugget', // right
                'minecraft:gold_nugget', // bottom left
                'minecraft:gold_nugget', // bottom
                'minecraft:gold_nugget'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:range_addon5', '{TitaniumAugment:{Range:5.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                'minecraft:iron_ingot', // right
                'minecraft:iron_ingot', // bottom left
                'minecraft:iron_ingot', // bottom
                'minecraft:iron_ingot'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:range_addon6', '{TitaniumAugment:{Range:6.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                'minecraft:gold_ingot', // right
                'minecraft:gold_ingot', // bottom left
                'minecraft:gold_ingot', // bottom
                'minecraft:gold_ingot'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:range_addon7', '{TitaniumAugment:{Range:7.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                'minecraft:quartz', // right
                'minecraft:quartz', // bottom left
                'minecraft:quartz', // bottom
                'minecraft:quartz'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:range_addon8', '{TitaniumAugment:{Range:8.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                'minecraft:diamond', // right
                'minecraft:diamond', // bottom left
                'minecraft:diamond', // bottom
                'minecraft:diamond'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:range_addon9', '{TitaniumAugment:{Range:9.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                'minecraft:popped_chorus_fruit', // right
                'minecraft:popped_chorus_fruit', // bottom left
                'minecraft:popped_chorus_fruit', // bottom
                'minecraft:popped_chorus_fruit'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:range_addon10', '{TitaniumAugment:{Range:10.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                'minecraft:emerald', // right
                'minecraft:emerald', // bottom left
                'minecraft:emerald', // bottom
                'minecraft:emerald'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:range_addon11', '{TitaniumAugment:{Range:11.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                '#forge:plastic', // top left
                '#industrialforegoing:machine_frame/pity', // top 
                '#forge:plastic', // top right
                'minecraft:nether_brick', // left
                'minecraft:nether_brick', // right
                '#forge:ingots/iron', // bottom left
                '#forge:gears/gold', // bottom
                '#forge:ingots/iron'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 250,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:machine_frame_simple', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                '#forge:gears/gold', // right
                '#forge:gears/gold', // bottom left
                'minecraft:sugar', // bottom
                'minecraft:sugar'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:speed_addon_1', '{TitaniumAugment:{Speed:2.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        },
        {
            inputs: [
                'minecraft:redstone', // top left
                'minecraft:redstone', // top 
                'minecraft:glass_pane', // top right
                'minecraft:glass_pane', // left
                '#forge:gears/diamond', // right
                '#forge:gears/diamond', // bottom left
                'minecraft:sugar', // bottom
                'minecraft:sugar'  // bottom right
            ],
            inputFluid: 'thermal:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: Item.of('industrialforegoing:speed_addon_2', '{TitaniumAugment:{Speed:3.0f}}').toJson(),
            outputFluid: '',
            outputFluidAmount: 0
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        const re = event.custom({
            type: 'industrialforegoing:dissolution_chamber',
            input: ingredients,
            inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
            processingTime: recipe.processingTime,
            output: recipe.outputItem,
            outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
        });

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
