onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/reaction';

    metalsProcessing.forEach((material) => {
        let ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id;

        mekanism_metal_ore_processing_reaction(
            event,
            material,
            ore
        );
    });

    function mekanism_metal_ore_processing_reaction(
        event,
        material,
        ore
    ) {
        if (ore == air) {
            return;
        }

        let mek_dipped = `kubejs:dipped_${material}_gas`,
            mek_filtered = `kubejs:filtered_${material}_gas`;

        // Reaction Chamber
        //activated carbon + dipped -> filtered
        event
        .custom({
            type: 'mekanism:reaction',
            itemInput: { ingredient: { item: `kubejs:activated_carbon` } },
            fluidInput: { amount: 250, fluid: 'minecraft:water' },
            gasInput: { amount: 100, gas: mek_dipped },
            duration: 100,
            gasOutput: { gas: mek_filtered, amount: 100 },
        })
        .id(`mekanism:reaction/${material}/mek_filtered`);
        
    }

    const recipes = [
        {
            itemInput: [
                { ingredient: { tag: 'forge:storage_blocks/coal' } },
                { ingredient: { tag: 'forge:storage_blocks/charcoal' } }
            ],
            fluidInput: { amount: 1000, tag: 'minecraft:water' },
            gasInput: { amount: 1000, gas: 'mekanism:oxygen' },
            duration: 900,
            itemOutput: { item: 'emendatusenigmatica:sulfur_dust', count: 9 },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 1000 },
            id: 'mekanism:reaction/coal_gasification/blocks_coals'
        },
        {
            itemInput: { ingredient: { tag: 'minecraft:coals' } },
            fluidInput: { amount: 100, tag: 'minecraft:water' },
            gasInput: { amount: 100, gas: 'mekanism:oxygen' },
            duration: 100,
            itemOutput: { item: 'emendatusenigmatica:sulfur_dust' },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 100 },
            id: 'mekanism:reaction/coal_gasification/coals'
        },
        {
            itemInput: [{ ingredient: { tag: 'forge:dusts/coal' } }, { ingredient: { tag: 'forge:dusts/charcoal' } }],
            fluidInput: { amount: 100, tag: 'minecraft:water' },
            gasInput: { amount: 100, gas: 'mekanism:oxygen' },
            duration: 100,
            itemOutput: { item: 'emendatusenigmatica:sulfur_dust' },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 100 },
            id: 'mekanism:reaction/coal_gasification/dusts_coals'
        },
        {
            itemInput: { amount: 4, ingredient: { tag: 'minecraft:logs' } },
            fluidInput: { amount: 400, tag: 'minecraft:water' },
            gasInput: { amount: 400, gas: 'mekanism:oxygen' },
            duration: 600,
            itemOutput: { item: 'emendatusenigmatica:charcoal_dust' },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 400 },
            id: 'mekanism:reaction/wood_gasification/logs'
        },
        {
            itemInput: { amount: 20, ingredient: { tag: 'minecraft:planks' } },
            fluidInput: { amount: 400, tag: 'minecraft:water' },
            gasInput: { amount: 400, gas: 'mekanism:oxygen' },
            duration: 600,
            itemOutput: { item: 'emendatusenigmatica:charcoal_dust' },
            gasOutput: { gas: 'mekanism:hydrogen', amount: 400 },
            id: 'mekanism:reaction/wood_gasification/planks'
        },
        {
            itemInput: { amount: 1, ingredient: { tag: 'forge:dusts/fluorite' } },
            fluidInput: { amount: 1000, tag: 'minecraft:water' },
            gasInput: { amount: 1000, gas: 'kubejs:tbu_depleted_gas' },
            duration: 600,
            itemOutput: { item: 'kubejs:tbu_depleted' },
            gasOutput: { gas: 'mekanism:spent_nuclear_waste', amount: 1000 },
            id: 'mekanism:reaction/tbu_depleted'
        },
        {
            itemInput: { amount: 1, ingredient: { tag: 'forge:dusts/fluorite' } },
            fluidInput: { amount: 1000, tag: 'minecraft:water' },
            gasInput: { amount: 1000, gas: 'kubejs:233_leu_depleted_gas' },
            duration: 600,
            itemOutput: { item: 'kubejs:233_leu_depleted' },
            gasOutput: { gas: 'mekanism:spent_nuclear_waste', amount: 1000 },
            id: 'mekanism:reaction/233_leu_depleted'
        },
        {
            itemInput: { amount: 1, ingredient: { tag: 'forge:dusts/fluorite' } },
            fluidInput: { amount: 1000, tag: 'minecraft:water' },
            gasInput: { amount: 1000, gas: 'kubejs:235_leu_depleted_gas' },
            duration: 600,
            itemOutput: { item: 'kubejs:235_leu_depleted' },
            gasOutput: { gas: 'mekanism:spent_nuclear_waste', amount: 1000 },
            id: 'mekanism:reaction/235_leu_depleted'
        },
        {
            itemInput: { amount: 1, ingredient: { tag: 'forge:dusts/fluorite' } },
            fluidInput: { amount: 1000, tag: 'minecraft:water' },
            gasInput: { amount: 1000, gas: 'kubejs:241_hep_depleted_gas' },
            duration: 600,
            itemOutput: { item: 'kubejs:241_hep_depleted' },
            gasOutput: { gas: 'mekanism:spent_nuclear_waste', amount: 1000 },
            id: 'mekanism:reaction/241_hep_depleted'
        },
        {
            itemInput: { amount: 1, ingredient: { tag: 'forge:dusts/fluorite' } },
            fluidInput: { amount: 1000, tag: 'minecraft:water' },
            gasInput: { amount: 1000, gas: 'kubejs:241_mox_depleted_gas' },
            duration: 600,
            itemOutput: { item: 'kubejs:241_mox_depleted' },
            gasOutput: { gas: 'mekanism:spent_nuclear_waste', amount: 1000 },
            id: 'mekanism:reaction/241_mox_depleted'
        },
        {
            itemInput: { amount: 1, ingredient: { tag: 'forge:dusts/fluorite' } },
            fluidInput: { amount: 1000, tag: 'minecraft:water' },
            gasInput: { amount: 1000, gas: 'kubejs:239_mox_depleted_gas' },
            duration: 600,
            itemOutput: { item: 'kubejs:239_mox_depleted' },
            gasOutput: { gas: 'mekanism:spent_nuclear_waste', amount: 1000 },
            id: 'mekanism:reaction/239_mox_depleted'
        },
        {
            itemInput: { amount: 1, ingredient: { tag: 'forge:dusts/fluorite' } },
            fluidInput: { amount: 1000, tag: 'minecraft:water' },
            gasInput: { amount: 1000, gas: 'kubejs:247_lecm_depleted_gas' },
            duration: 600,
            itemOutput: { item: 'kubejs:247_lecm_depleted' },
            gasOutput: { gas: 'mekanism:spent_nuclear_waste', amount: 1000 },
            id: 'mekanism:reaction/247_lecm_depleted'
        },
        {
            itemInput: { amount: 1, ingredient: { tag: 'forge:dusts/fluorite' } },
            fluidInput: { amount: 1000, tag: 'minecraft:water' },
            gasInput: { amount: 1000, gas: 'kubejs:243_lecm_depleted_gas' },
            duration: 600,
            itemOutput: { item: 'kubejs:243_lecm_depleted' },
            gasOutput: { gas: 'mekanism:spent_nuclear_waste', amount: 1000 },
            id: 'mekanism:reaction/243_lecm_depleted'
        },
        {
            itemInput: { amount: 1, ingredient: { tag: 'forge:dusts/fluorite' } },
            fluidInput: { amount: 1000, tag: 'minecraft:water' },
            gasInput: { amount: 1000, gas: 'kubejs:249_hecf_depleted_gas' },
            duration: 600,
            itemOutput: { item: 'kubejs:249_hecf_depleted' },
            gasOutput: { gas: 'mekanism:spent_nuclear_waste', amount: 1000 },
            id: 'mekanism:reaction/249_hecf_depleted'
        }
        // {
        //     itemInput: { amount: 20, ingredient: { item: 'chemlib:compound_sulfuric_acid'} },
        //     fluidInput: { amount: 50, tag: 'minecraft:water' },
        //     gasInput: {},
        //     duration: 600,
        //     itemOutput: {},
        //     gasOutput: { gas: 'mekanism:sulfuric_acid', amount: 150 },
        //     id: 'mekanism:reaction/compound_sulfuric_acid'
        // }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'mekanism:reaction',
            itemInput: recipe.itemInput,
            fluidInput: recipe.fluidInput,
            gasInput: recipe.gasInput,
            duration: recipe.duration,
            itemOutput: recipe.itemOutput,
            gasOutput: recipe.gasOutput
        };
        if (recipe.energyRequired) {
            constructed_recipe.energyRequired = recipe.energyRequired;
        }
        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
