onEvent('recipes', (event) => {
    const recipes = [
        { type: {}, toReplace: 'thermal:cinnabar', replaceWith: '#forge:gems/cinnabar' },
        { type: {}, toReplace: 'thermal:sulfur', replaceWith: '#forge:gems/sulfur' },
        { type: {}, toReplace: 'thermal:apatite', replaceWith: '#forge:gems/apatite' },
        { type: {}, toReplace: 'thermal:niter', replaceWith: '#forge:gems/niter' },
        { type: {}, toReplace: 'thermal:bitumen', replaceWith: '#forge:gems/bitumen' },
        { type: {}, toReplace: 'thermal:coal_coke', replaceWith: '#forge:gems/coal_coke' },
        { type: {}, toReplace: 'thermal:sawdust', replaceWith: 'emendatusenigmatica:wood_dust' },
//        { type: {}, toReplace: 'thermal:rubber', replaceWith: 'industrialforegoing:dryrubber' },
        { type: {}, toReplace: 'immersiveengineering:slag', replaceWith: 'thermal:slag' },
        { type: {}, toReplace: 'appliedenergistics2:flour', replaceWith: 'pamhc2foodcore:flouritem' },

        { type: {}, toReplace: 'thermal:silver_dust', replaceWith: '#forge:dusts/silver' },
        { type: {}, toReplace: 'thermal:lead_dust', replaceWith: '#forge:dusts/lead' },
        { type: {}, toReplace: 'mekanism:dust_obsidian', replaceWith: '#forge:dusts/obsidian' },
        { type: {}, toReplace: 'mekanism:pellet_plutonium', replaceWith: 'kubejs:242_plutonium' },
        { type: {}, toReplace: 'thermal:constantan_dust', replaceWith: '#forge:dusts/constantan' },
        { type: {}, toReplace: 'mekanism:dust_osmium', replaceWith: '#forge:dusts/osmium' },
        { type: {}, toReplace: 'thermal:lumium_dust', replaceWith: '#forge:dusts/lumium' },
        { type: {}, toReplace: 'thermal:diamond_dust', replaceWith: '#forge:dusts/diamond' },
        { type: {}, toReplace: 'thermal:signalum_dust', replaceWith: '#forge:dusts/signalum' },
        { type: {}, toReplace: 'thermal:gold_dust', replaceWith: '#forge:dusts/gold' },
        { type: {}, toReplace: 'thermal:copper_dust', replaceWith: '#forge:dusts/copper' },
        { type: {}, toReplace: 'thermal:niter_dust', replaceWith: '#forge:dusts/niter' },
        { type: {}, toReplace: 'thermal:bronze_dust', replaceWith: '#forge:dusts/bronze' },
        { type: {}, toReplace: 'appliedenergistics2:silicon', replaceWith: '#forge:silicon' },
        { type: {}, toReplace: 'immersiveengineering:dust_steel', replaceWith: '#forge:dusts/steel' },
        { type: {}, toReplace: 'immersiveengineering:dust_uranium', replaceWith: '#forge:dusts/uranium' },
        { type: {}, toReplace: 'thermal:apatite', replaceWith: '#forge:gems/apatite' },
        { type: {}, toReplace: 'tconstruct:cobalt_nugget', replaceWith: '#forge:nuggets/cobalt' },
        { type: {}, toReplace: 'thermal:nickel_dust', replaceWith: '#forge:dusts/nickel' },
        { type: {}, toReplace: 'thermal:emerald_dust', replaceWith: '#forge:dusts/emerald' },
        { type: {}, toReplace: 'mekanism:dust_coal', replaceWith: '#forge:dusts/coal' },
        { type: {}, toReplace: 'thermal:iron_dust', replaceWith: '#forge:dusts/iron' },
        { type: {}, toReplace: 'thermal:tin_dust', replaceWith: '#forge:dusts/tin' },
        { type: {}, toReplace: 'thermal:quartz_dust', replaceWith: '#forge:dusts/quartz' },
        { type: {}, toReplace: 'thermal:electrum_dust', replaceWith: '#forge:dusts/electrum' },
        { type: {}, toReplace: 'immersiveengineering:dust_aluminum', replaceWith: '#forge:dusts/aluminum' },
        { type: {}, toReplace: 'thermal:cinnabar', replaceWith: '#forge:gems/cinnabar' },
        { type: {}, toReplace: 'thermal:sulfur_dust', replaceWith: '#forge:dusts/sulfur' },
        { type: {}, toReplace: 'mekanism:dust_sulfur', replaceWith: '#forge:dusts/sulfur' },
        { type: {}, toReplace: 'immersiveengineering:dust_sulfur', replaceWith: '#forge:dusts/sulfur' },
        { type: {}, toReplace: 'thermal:enderium_dust', replaceWith: '#forge:dusts/enderium' },
        { type: {}, toReplace: 'thermal:invar_dust', replaceWith: '#forge:dusts/invar' },

        { type: {}, toReplace: 'lazierae2:coal_dust', replaceWith: '#forge:dusts/coal' },
        { type: {}, toReplace: 'appliedenergistics2:certus_quartz_dust', replaceWith: 'emendatusenigmatica:certus_quartz_dust' },
        { type: {}, toReplace: 'emendatusenigmatica:certus_quartz', replaceWith: 'appliedenergistics2:certus_quartz' },
        
        { type: {}, toReplace: 'rftoolsbase:dimensionalshard', replaceWith: 'emendatusenigmatica:dimensional_gem' }
    ];

    recipes.forEach((recipe) => {
        event.replaceOutput(recipe.type, recipe.toReplace, recipe.replaceWith);
    });
});
