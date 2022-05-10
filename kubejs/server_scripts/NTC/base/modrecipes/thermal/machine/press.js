onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/press/';
    const recipes = [
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:plates/steel')],
            outputs: [Item.of('immersiveengineering:mold_plate', 1)],
            energy: 2400,
            id: `${id_prefix}mold_plate`
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:wires/steel')],
            outputs: [Item.of('immersiveengineering:mold_wire', 1)],
            energy: 2400,
            id: `${id_prefix}mold_wire`
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:gears/steel')],
            outputs: [Item.of('immersiveengineering:mold_gear', 1)],
            energy: 2400,
            id: `${id_prefix}mold_gear`
        },
        {
            inputs: [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:rods/steel')],
            outputs: [Item.of('immersiveengineering:mold_rod', 1)],
            energy: 2400,
            id: `${id_prefix}mold_rod`
        },
        {
            inputs: [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#thermal:crafting/dies/bullet_casing')],
            outputs: [Item.of('immersiveengineering:empty_casing', 2)],
            energy: 2400,
            id: `${id_prefix}empty_casing`
        },
        {
            inputs: [Item.of('atmospheric:arid_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('atmospheric:arid_sand', 4)],
            energy: 2400,
            id: `${id_prefix}arid_sand`
        },
        {
            inputs: [Item.of('atmospheric:red_arid_sandstone', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('atmospheric:red_arid_sand', 4)],
            energy: 2400,
            id: `${id_prefix}red_arid_sand`
        },
        {
            inputs: [Item.of('betterendforge:dense_snow', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('minecraft:snow_block', 9)],
            energy: 2400,
            id: `${id_prefix}snow_block`
        },
        {
            inputs: [Item.of('minecraft:snow_block', 9), Ingredient.of('#thermal:crafting/dies/packing_3x3')],
            outputs: [Item.of('betterendforge:dense_snow', 1)],
            energy: 2400,
            id: `${id_prefix}dense_snow`
        },
        {
            id: 'thermal:machine/press/packing2x2/press_honeycomb_packing',
            inputs: [Item.of('minecraft:honeycomb', 9), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('minecraft:honeycomb_block', 1)],
            energy: 2400,
            id: `${id_prefix}honeycomb_block`
        },
        {
            id: 'thermal:machine/press/unpacking/press_honeycomb_unpacking',
            inputs: [Item.of('minecraft:honeycomb_block', 1), Ingredient.of('#thermal:crafting/dies/unpacking')],
            outputs: [Item.of('minecraft:honeycomb', 9)],
            energy: 2400,
            id: `${id_prefix}honeycomb`
        },
        {
            inputs: [Item.of('mekanism:hdpe_pellet', 3)],
            outputs: [Item.of('mekanism:hdpe_sheet', 1)],
            energy: 2400,
            id: `${id_prefix}hdpe_sheet`
        },
        {
            inputs: [Item.of('minecraft:vine')],
            outputs: [Fluid.of('thermal:latex', 25)],
            energy: 600,
            id: 'thermal:machine/press/press_vine_to_latex'
        },
        {
            inputs: [Item.of('minecraft:dandelion')],
            outputs: [Fluid.of('thermal:latex', 50)],
            energy: 400,
            id: 'thermal:machine/press/press_dandelion_to_latex'
        },
        {
            inputs: [Item.of('emendatusenigmatica:aluminum_ingot')],
            outputs: [Item.of('emendatusenigmatica:aluminum_plate', 1)],
            energy: 2400,
            id: 'thermal:machine/press/press_aluminum_ingot_to_plate'
        },
        {
            inputs: [Item.of('emendatusenigmatica:osmium_ingot')],
            outputs: [Item.of('emendatusenigmatica:osmium_plate', 1)],
            energy: 2400,
            id: 'thermal:machine/press/press_osmium_ingot_to_plate'
        },
        {
            inputs: [Item.of('emendatusenigmatica:cobalt_ingot')],
            outputs: [Item.of('emendatusenigmatica:cobalt_plate', 1)],
            energy: 2400,
            id: 'thermal:machine/press/press_cobalt_ingot_to_plate'
        },
        {
            inputs: [Item.of('emendatusenigmatica:brass_ingot')],
            outputs: [Item.of('emendatusenigmatica:brass_plate', 1)],
            energy: 2400,
            id: 'thermal:machine/press/press_brass_ingot_to_plate'
        },
        {
            inputs: [Item.of('emendatusenigmatica:steel_ingot')],
            outputs: [Item.of('emendatusenigmatica:steel_plate', 1)],
            energy: 2400,
            id: 'thermal:machine/press/press_steel_ingot_to_plate'
        },
        {
            inputs: [Item.of('emendatusenigmatica:signalum_ingot')],
            outputs: [Item.of('emendatusenigmatica:signalum_plate', 1)],
            energy: 2400,
            id: 'thermal:machine/press/press_signalum_ingot_to_plate'
        },
        {
            inputs: [Item.of('emendatusenigmatica:lumium_ingot')],
            outputs: [Item.of('emendatusenigmatica:lumium_plate', 1)],
            energy: 2400,
            id: 'thermal:machine/press/press_lumium_ingot_to_plate'
        },
        {
            inputs: [Item.of('emendatusenigmatica:enderium_ingot')],
            outputs: [Item.of('emendatusenigmatica:enderium_plate', 1)],
            energy: 2400,
            id: 'thermal:machine/press/press_enderium_ingot_to_plate'
        }
    ];

    ['osmium', 'aluminum', 'uranium'].forEach((metal) => {
        recipes.push({
            inputs: [
                Item.of(`emendatusenigmatica:${metal}_ingot`, 9),
                Ingredient.of('#thermal:crafting/dies/packing_3x3')
            ],
            outputs: [Item.of(`emendatusenigmatica:${metal}_block`)],
            energy: 2400,
            id: `${id_prefix}${metal}_block`
        });
    });

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
