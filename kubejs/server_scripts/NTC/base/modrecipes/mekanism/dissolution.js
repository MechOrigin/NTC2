onEvent('recipes', (event) => {

    metalsProcessing.forEach((material) => {
        let ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id;

        mekanism_metal_ore_processing_dissolution(event, material, ore);

        mekanism_metal_ore_processing_dissolution_dirty(event, material, ore);

        emendatus_metal_ore_processing_dissolution_dirty(event, material, ore);
    });

    function mekanism_metal_ore_processing_dissolution(
        event,
        material,
        ore
    ) {
        if (ore == air || material == air) {
            return;
        }

        let mek_disintegrated = `kubejs:disintegrated_${material}_gas`,
            mek_spicy_soup = `kubejs:spicy_${material}_gas`,
            mek_dipped = `kubejs:dipped_${material}_gas`;

        // Dissolution
        //Ore to disintegrated
        event
            .custom({
                type: 'mekanism:dissolution',
                itemInput: { ingredient: { tag: `forge:ores/${material}` } },
                gasInput: { amount: 1, gas: 'kubejs:anti_hydrogen_gas' },
                output: {
                    gas: mek_disintegrated,
                    amount: 100,
                    chemicalType: 'gas'
                }
            })
            .id(`mekanism:processing/${material}/mek_disintegrated`);

            //Destabilized to spicy soup
            event
            .custom({
                type: 'mekanism:dissolution',
                itemInput: { ingredient: { item: `kubejs:destabilized_${material}` } },
                gasInput: { amount: 1, gas: 'kubejs:secret_spices_gas' },
                output: {
                    gas: mek_spicy_soup,
                    amount: 100,
                    chemicalType: 'gas'
                }
            })
            .id(`mekanism:processing/${material}/mek_spicy_soup`);

            //6x
            //Dipped
            event
            .custom({
                type: 'mekanism:dissolution',
                itemInput: { ingredient: { tag: `forge:ores/${material}` } },
                gasInput: { amount: 1, gas: 'kubejs:dip_gas' },
                output: {
                    gas: mek_dipped,
                    amount: 800,
                    chemicalType: 'gas'
                }
            })
            .id(`mekanism:processing/${material}/mek_dipped_6x`);

            event
            .custom({
                type: 'mekanism:dissolution',
                itemInput: { ingredient: { item: `kubejs:precipitate_${material}` } },
                gasInput: { amount: 1, gas: 'kubejs:dip_gas' },
                output: {
                    gas: mek_dipped,
                    amount: 100,
                    chemicalType: 'gas'
                }
            })
            .id(`mekanism:processing/${material}/mek_dipped_7x_8x`);
            
        }

    function mekanism_metal_ore_processing_dissolution_dirty(
            event,
            material,
            ore
    ) {
        if (ore == air || material == air) {
            return;
        }

        blacklistedMaterials = ['copper', 'gold', 'iron', 'lead', 'osmium', 'tin', 'uranium'];
        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        let emendatus_dirty_slurry = `emendatusenigmatica:dirty_${material}`;

        //final step -> dirty slurry
        //taking care of all slurrys added by emendatus mod
        event
        .custom({
            type: 'mekanism:dissolution',
            itemInput: { ingredient: { item: `kubejs:clean_lump_${material}` } },
            gasInput: { amount: 1, gas: 'mekanism:sulfuric_acid' },
            output: {
                slurry: emendatus_dirty_slurry,
                amount: 200,
                chemicalType: 'slurry'
            }
        })
        .id(`mekanism:processing/${material}/clean_lump`);
            
        }    

    function emendatus_metal_ore_processing_dissolution_dirty(
            event,
            material,
            ore
    ) {
        if (ore == air || material == air) {
            return;
        }

        blacklistedMaterials = ['aluminum', 'thallasium', 'zinc', 'nickel', 'cobalt', 'silver'];
        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        let mek_dirty_slurry = `mekanism:dirty_${material}`;

        //final step -> dirty slurry
        //taking care of all slurrys added by mekanism mod
        event
        .custom({
            type: 'mekanism:dissolution',
            itemInput: { ingredient: { item: `kubejs:clean_lump_${material}` } },
            gasInput: { amount: 1, gas: 'mekanism:sulfuric_acid' },
            output: {
                slurry: mek_dirty_slurry,
                amount: 200,
                chemicalType: 'slurry'
            }
        })
        .id(`mekanism:processing/${material}/clean_lump`);
            
        }  

});