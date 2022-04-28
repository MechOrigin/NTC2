onEvent('fluid.registry', event => {
    // Basic "thick" (looks like lava) fluid with red tint
//    event.create('thick_fluid').textureThick(0xFF0000).bucketColor(0xFF0000).displayName('Thick Fluid')
    // Basic "thin" (looks like water) fluid with cyan tint
//    event.create('thin_fluid').textureThin(0x00FFFF).bucketColor(0x00FFFF).displayName('Thin Fluid')
    
    event.create('molten_basalz').textureThick(0x543c34).bucketColor(0x543c34).displayName('Molten Basalz')
    event.create('molten_blitz').textureThick(0xfcd324).bucketColor(0xfcd324).displayName('Molten Blitz')
    event.create('molten_blizz').textureThick(0x2cb4fc).bucketColor(0x2cb4fc).displayName('Molten Blizz')

    event.create('molten_ender_iron').textureThick(0x1b7a6a).bucketColor(0x1b7a6a).displayName('Molten Ender Iron')

    event.create('molten_energetic_alloy').textureThick(0xff8000).bucketColor(0xff8000).displayName('Molten Energetic Alloy')
    event.create('molten_vibrant_alloy').textureThick(0x80ff00).bucketColor(0x80ff00).displayName('Molten Vibrant Alloy')

    //better end fluids
    event.create('liquid_amber_root').displayName('Liquid Amber Root Resin').textureStill('kubejs:block/liquid_amber_root_still').textureFlowing('kubejs:block/liquid_amber_root_flow').bucketColor(0xf2ab4a)

    event.create('liquid_blossom_berry').displayName('Liquid Blossom Berry Resin').textureStill('kubejs:block/liquid_blossom_berry_still').textureFlowing('kubejs:block/liquid_blossom_berry_flow').bucketColor(0xff6ee5)

    event.create('liquid_blue_vine').displayName('Liquid Blue Lantern Resin').textureStill('kubejs:block/liquid_blue_vine_still').textureFlowing('kubejs:block/liquid_blue_vine_flow').bucketColor(0x2288f6)

    event.create('liquid_bulb_vine').displayName('Liquid Glowing Bulb Resin').textureStill('kubejs:block/liquid_bulb_vine_still').textureFlowing('kubejs:block/liquid_bulb_vine_flow').bucketColor(0x642b59)

    event.create('liquid_chorus_mushroom').displayName('Liquid Chorus Mushroom Resin').textureStill('kubejs:block/liquid_chorus_mushroom_still').textureFlowing('kubejs:block/liquid_chorus_mushroom_flow').bucketColor(0xf1d3f1)

    event.create('liquid_end_lily').displayName('Liquid End Lily Resin').textureStill('kubejs:block/liquid_end_lily_still').textureFlowing('kubejs:block/liquid_end_lily_flow').bucketColor(0x7db9b3)

    event.create('liquid_end_lotus').displayName('Liquid End Lotus Resin').textureStill('kubejs:block/liquid_end_lotus_still').textureFlowing('kubejs:block/liquid_end_lotus_flow').bucketColor(0x38e1b0)

    event.create('liquid_glowing_pillar').displayName('Liquid Glowing Luminophor Resin').textureStill('kubejs:block/liquid_glowing_pillar_still').textureFlowing('kubejs:block/liquid_glowing_pillar_flow').bucketColor(0xf4943f)

    event.create('liquid_lumecorn').displayName('Liquid Lumecorn Resin').textureStill('kubejs:block/liquid_lumecorn_still').textureFlowing('kubejs:block/liquid_lumecorn_flow').bucketColor(0xa6e0be)

    event.create('liquid_shadow_berry').displayName('Liquid Shadow Berry Resin').textureStill('kubejs:block/liquid_shadow_berry_still').textureFlowing('kubejs:block/liquid_shadow_berry_flow').bucketColor(0x28438e)

    //Oil Stuff
    event.create('liquid_propane').textureThin(0xb67c8b).bucketColor(0xb67c8b).displayName('Liquid Propane')
    event.create('liquid_ethane').textureThin(0xba7b78).bucketColor(0xba7b78).displayName('Liquid Ethane')
    event.create('liquid_propylene').textureThin(0xbaa578).bucketColor(0xbaa578).displayName('Liquid Propylene')
    /* -=-=-=-=-=-=-=-=- 6, 7, 8 x ore processing stuff -=-=-=-=-=-=-=-=- */
    event.create('liquid_methane').textureThin(0xf2f2f2).bucketColor(0xf2f2f2).displayName('Liquid Methane')
    event.create('liquid_chloroethane').textureThin(0xf2ffe6).bucketColor(0xf2ffe6).displayName('Liquid Chloroethane')
    event.create('liquid_chloromethane').textureThin(0xe5ffcc).bucketColor(0xe5ffcc).displayName('Liquid Chloromethane')

    event.create('liquid_dichloroethane').textureThin(0xe5ffcc).bucketColor(0xe5ffcc).displayName('Liquid Dichloroethane')
    event.create('liquid_tetraethyllead').textureThin(0xffffcc).bucketColor(0xffffcc).displayName('Liquid Tetraethyllead')
    event.create('liquid_diluted_sulfuric_acid').textureThin(0xe6e600).bucketColor(0xe6e600).displayName('Liquid Diluted Sulfuric Acid')
    event.create('liquid_perchloroethylene').textureThin(0xe5ffcc).bucketColor(0xe5ffcc).displayName('Liquid Perchloroethylene')
    event.create('liquid_carbonated_water').textureThin(0x66a3ff).bucketColor(0x66a3ff).displayName('Liquid Carbonated Water')
    event.create('liquid_carbonic_acid').textureThin(0x80d4ff).bucketColor(0x80d4ff).displayName('Liquid Carbonic Acid')
    event.create('liquid_aqua_regia').textureThin(0xffaa00).bucketColor(0xffaa00).displayName('Liquid Royal Water (Aqua Regia)')
    event.create('liquid_fluorosulfuric_acid').textureThin(0xffff80).bucketColor(0xffff80).displayName('Liquid Fluorosulfuric Acid')
    event.create('liquid_vinegar').textureThin(0xb3d9ff).bucketColor(0xb3d9ff).displayName('Liquid Vinegar')
    event.create('liquid_acetone').textureThin(0xffe6ff).bucketColor(0xffe6ff).displayName('Liquid Acetone')
    event.create('liquid_benzene').textureThin(0x999999).bucketColor(0x999999).displayName('Liquid Benzene')
    event.create('liquid_ab_mixture').textureThin(0xe6ffe6).bucketColor(0xe6ffe6).displayName('Liquid Acetone Benzene Mixture')
    event.create('liquid_turpentine').textureThin(0xffb366).bucketColor(0xffb366).displayName('Liquid Turpentine')
    event.create('liquid_dip').textureThin(0x33ff33).bucketColor(0x33ff33).displayName('Liquid Diindenoperylene (DIP)')
    event.create('liquid_toluene').textureThin(0xffb3b3).bucketColor(0xffb3b3).displayName('Liquid Toluene')
    event.create('liquid_nitrating_mix').textureThin(0x00e6ac).bucketColor(0x00e6ac).displayName('Liquid Nitrating Mixture')
    event.create('liquid_nitrotoluene').textureThin(0xff6666).bucketColor(0xff6666).displayName('Liquid Nitrotoluene')
    event.create('liquid_dinitrotoluene').textureThin(0xff4d4d).bucketColor(0xff4d4d).displayName('Liquid Dinitrotoluene')
    event.create('liquid_trinitrotoluene').textureThin(0xff3300).bucketColor(0xff3300).displayName('Liquid Trinitrotoluene')
    event.create('liquid_chlorobenzene').textureThin(0xe6fff2).bucketColor(0xe6fff2).displayName('Liquid Chlorobenzene')
    event.create('liquid_phenol').textureThin(0xf2f2f2).bucketColor(0xf2f2f2).displayName('Liquid Phenol')
    event.create('liquid_sodium_phenolate').textureThin(0xf2f2f2).bucketColor(0xf2f2f2).displayName('Liquid Sodium Phenolate')
    event.create('liquid_sodium_salicylate').textureThin(0xf2f2f2).bucketColor(0xf2f2f2).displayName('Liquid Sodium Salicylate')
    event.create('liquid_salicylic_acid').textureThin(0xffffe6).bucketColor(0xffffe6).displayName('Liquid Salicylic Acid')
    event.create('liquid_methyl_acetate').textureThin(0xb3b3ff).bucketColor(0xb3b3ff).displayName('Liquid Methyl Acetate')
    event.create('liquid_acetic_anhydride').textureThin(0xe6ccff).bucketColor(0xe6ccff).displayName('Liquid Acetic Anhydride')
    event.create('liquid_aspirin').textureThin(0xff99ff).bucketColor(0xff99ff).displayName('Liquid Aspirin')
    event.create('liquid_painkiller_mix').textureThin(0xff66cc).bucketColor(0xff66cc).displayName('Liquid Painkiller Mixture')
    event.create('liquid_acetaminophen').textureThin(0xff80d5).bucketColor(0xff80d5).displayName('Liquid Acetaminophen')
    event.create('liquid_hydroxybenzaldehyde_oxime').textureThin(0xffb3d9).bucketColor(0xffb3d9).displayName('Liquid Hydroxybenzaldehyde Oxime')
    event.create('liquid_hydroxylamine').textureThin(0xd9d9d9).bucketColor(0xd9d9d9).displayName('Liquid Hydroxylamine')
    event.create('liquid_hydroxybenzoic_acid').textureThin(0xffb3ff).bucketColor(0xffb3ff).displayName('Liquid Hydroxybenzoic Acid')
    event.create('liquid_xylene').textureThin(0x666666).bucketColor(0x666666).displayName('Liquid Xylene')
    event.create('liquid_ethylbenzene').textureThin(0x404040).bucketColor(0x404040).displayName('Liquid Ethylbenzene')
    event.create('liquid_sulfur_dichloride').textureThin(0xff1a1a).bucketColor(0xff1a1a).displayName('Liquid Sulfur Dichloride')
    event.create('liquid_thionyl_chloride').textureThin(0xffff99).bucketColor(0xffff99).displayName('Liquid Thionyl Chloride')
    event.create('liquid_mustard_gas').textureThin(0xcccc00).bucketColor(0xcccc00).displayName('Liquid Dichlorodiethyl Sulfide (Mustard Gas)')
    event.create('liquid_acetylaldehyde').textureThin(0xecd9c6).bucketColor(0xecd9c6).displayName('Liquid Acetylaldehyde')
    event.create('liquid_chloral').textureThin(0xd9ffcc).bucketColor(0xd9ffcc).displayName('Liquid Trichloroacetaldehyde')
    event.create('liquid_ddt').textureThin(0xd9ffcc).bucketColor(0xd9ffcc).displayName('Liquid Dichlorodiphenyltrichloroethane (DDT)')
    event.create('liquid_secret_spices').textureThin(0xd9ffcc).bucketColor(0xd9ffcc).displayName('Liquid Secret Spices (DDT + Mustard Gas)')
    event.create('liquid_methanol').textureThin(0xf2f2f2).bucketColor(0xf2f2f2).displayName('Liquid Methanol')
    event.create('liquid_carbon_monoxide').textureThin(0xbfa64c).bucketColor(0xbfa64c).displayName('Liquid Carbon Monoxide')
    event.create('liquid_hydrochloric_acid').textureThin(0xf1f1f1).bucketColor(0xf1f1f1).displayName('Liquid Hydrochloric Acid')
    event.create('liquid_carbon_dioxide').textureThin(0xbfa64c).bucketColor(0xbfa64c).displayName('Liquid Carbon Dioxide')
    event.create('liquid_sodium_hydroxide').textureThin(0xbfa64c).bucketColor(0xbfa64c).displayName('Liquid Sodium Hydroxide')
    event.create('liquid_nitric_acid').textureThin(0xe3a02b).bucketColor(0xe3a02b).displayName('Liquid Nitric Acid')
    event.create('liquid_nitrogen').textureThin(0xa4d2ac).bucketColor(0xa4d2ac).displayName('Liquid Nitrogen')
    event.create('liquid_nitric_oxide').textureThin(0x83b44b).bucketColor(0x83b44b).displayName('Liquid Nitric Oxide')
    event.create('liquid_nitric_dioxide').textureThin(0x7bad56).bucketColor(0x7bad56).displayName('Liquid Nitric Dioxide')

    // particle physics (without all the physics?)
    event.create('liquid_anti_hydrogen').textureThin(0xffffff).bucketColor(0xffffff).displayName('Anti-Hydrogen Fluid')
    event.create('liquid_proton').textureThin(0xE3256B).bucketColor(0xE3256B).displayName('Proton Fluid')
    event.create('liquid_anti_positron').textureThin(0x8835fd).bucketColor(0x8835fd).displayName('Anti-Positron Fluid')
    event.create('liquid_positron').textureThin(0x1e80c7).bucketColor(0x1e80c7).displayName('Positron Fluid')
    event.create('liquid_electron_neutrino').textureThin(0x819293).bucketColor(0x819293).displayName('Electron Neutrino Fluid')
    event.create('liquid_tau').textureThin(0xbf6e1d).bucketColor(0xbf6e1d).displayName('Tau Fluid')

    //terpentine from pine
    event.create('liquid_pine_resin').textureThin(0xFFBF00).bucketColor(0xFFBF00).displayName('Liquid Pine Resin')

    //Circuit stuff
    event.create('liquid_refined_glue').textureThin(0xfff1d9).bucketColor(0xfff1d9).displayName('Liquid Refined Glue')

    //aeternium (better end)
    event.create('molten_aeternium').textureThin(0x2b5f47).bucketColor(0x2b5f47).displayName('Molten Aeternium')
    event.create('molten_terminite').textureThin(0x42d7c5).bucketColor(0x42d7c5).displayName('Molten Terminite')

    //sugar
    event.create('molten_sugar').textureThick(0xf6d193).bucketColor(0xf6d193).displayName('Molten Sugar')


    const generalFluids = [];

    let metals_fluid = [
        {metal: 'aluminum', color: '0xe2e3e1'},
        {metal: 'cobalt', color: '0x0264ae'},
        {metal: 'copper', color: '0xdf8e50'},
        {metal: 'gold', color: '0xffff7a'},
        {metal: 'iron', color: '0xd3d3d3'},
        {metal: 'lead', color: '0x7d8ea3'},
        {metal: 'nickel', color: '0xc1bcaf'},
        {metal: 'osmium', color: '0xa5defc'},
        {metal: 'silver', color: '0xe6e6e6'},
        {metal: 'thallasium', color: '0x7ddbc7'},
        {metal: 'tin', color: '0xcfd3d9'},
        {metal: 'uranium', color: '0x547852'},
        {metal: 'zinc', color: '0x91898c'}
    ];

                    // disintegrated->gas, royal no gas, pain-free no gas, bubbly->gas, spicy->gas, treated no gas, steamed->gas, dipped dont need fluid->gas, filtered dont need fluid->gas
    let fluidTypes = ['disintegrated', 'royal', 'pain_free', 'bubbly', 'spicy', 'treated', 'steamed'];

    fluidTypes.forEach((fluidType) => {
        metals_fluid.forEach((metal) => {
                //console.log(`Created new ${metal} as ${fluidType} with ${metal.metal} and ${metal.color}`);
                generalFluids.push({id: `${fluidType}_${metal.metal}`, texture: `${metal.color}`, display: 'Liquid' + ' ' + capitalizeFirstLetter(changeUnderscoreToDash(`${fluidType}`)) + ' ' + capitalizeFirstLetter(`${metal.metal}`)});
            });
    });

    generalFluids.forEach((fluid) => {
        //console.log(`Created new ID as ${fluid.id} with color: ${fluid.texture}`);
        event.create(fluid.id).textureThin(fluid.texture).bucketColor(fluid.texture).displayName(`${fluid.display}`);
        //console.log(capitalizeFirstLetter(`${fluid.display}`));
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function changeUnderscoreToDash(string) {
        return string.replace(/_/g, "-");
    }

  })