onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'betterendforge:end_mycelium',
            input: 'minecraft:end_stone',
            infusionInput: 'mekanism:fungi',
            infusionAmount: 10
        },
        {
            output: 'minecraft:crimson_nylium',
            input: 'minecraft:netherrack',
            infusionInput: 'mekanism:fungi',
            infusionAmount: 10,
            id: 'mekanism:metallurgic_infusing/netherrack_to_crimson_nylium'
        },
        {
            output: 'extendedcrafting:redstone_ingot',
            input: '#forge:gems/silicon',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 10,
            id: 'mekanism:metallurgic_infusing/redstone_ingot'
        },
        {
            output: 'extendedcrafting:ender_ingot',
            input: 'minecraft:iron_ingot',
            infusionInput: 'kubejs:ender',
            infusionAmount: 10,
            id: 'mekanism:metallurgic_infusing/ender_ingot'
        },
        {
            output: 'appliedenergistics2:charged_certus_quartz_crystal',
            input: 'thermal:lightning_charge',
            infusionInput: 'kubejs:certus',
            infusionAmount: 10,
            id: 'mekanism:metallurgic_infusing/charged_certus_quartz_crystal'
        },
        {
            output: 'extendedcrafting:black_iron_ingot',
            input: 'minecraft:iron_ingot',
            infusionInput: 'kubejs:blazing',
            infusionAmount: 10,
            id: 'mekanism:metallurgic_infusing/black_iron_ingot'
        },
        {
            output: 'appliedenergistics2:quartz_glass',
            input: 'minecraft:sand',
            infusionInput: 'kubejs:certus',
            infusionAmount: 10,
            id: 'mekanism:metallurgic_infusing/quartz_glass'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.mekanism
                  .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
                  .id(recipe.id)
            : event.recipes.mekanism.metallurgic_infusing(
                  recipe.output,
                  recipe.input,
                  recipe.infusionInput,
                  recipe.infusionAmount
              );
    });
});
