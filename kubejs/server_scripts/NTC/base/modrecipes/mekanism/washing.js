onEvent('recipes', (event) => {

    metalsProcessing.forEach((material) => {
        let ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id;

        mekanism_metal_ore_processing_washing(
            event,
            material,
            ore
        );
    });

    function mekanism_metal_ore_processing_washing(
        event,
        material,
        ore
    ) {
        if (ore == air) {
            return;
        }

        blacklistedMaterials = ['copper', 'gold', 'iron', 'lead', 'osmium', 'tin', 'uranium'];
        for (var i = 0; i < blacklistedMaterials.length; i++) {
            if (blacklistedMaterials[i] == material) {
                return;
            }
        }

        let mek_dirty_slurry = `emendatusenigmatica:dirty_${material}`,
            mek_clean_slurry = `emendatusenigmatica:clean_${material}`;

        // Washing
        event
        .custom({
            type: 'mekanism:washing',
            fluidInput: { amount: 5, tag: 'minecraft:water' },
            slurryInput: { amount: 1, slurry: mek_dirty_slurry },
            output: { slurry: mek_clean_slurry, amount: 1 }
        })
        .id(`mekanism:processing/${material}/slurry/clean`);
    
        }

});