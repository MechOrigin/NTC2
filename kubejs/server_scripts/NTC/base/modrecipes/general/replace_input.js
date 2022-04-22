events.listen('recipes', (event) => {
    const recipes = [{ replaceTarget: {}, toReplace: '', replaceWith: '' }];

    event.replaceInput({ mod: 'corail_woodcutter' }, '#forge:ingots/iron', 'thermal:saw_blade');
/*
    event.replaceInput({ mod: 'libvulpes' }, '#forge:sticks/iron', '#forge:rods/iron');
    event.replaceInput({ mod: 'libvulpes' }, '#forge:sticks/copper', '#forge:rods/copper');
    event.replaceInput({ mod: 'libvulpes' }, '#forge:sticks/steel', '#forge:rods/steel');
    event.replaceInput({ mod: 'libvulpes' }, '#forge:sticks/iridium', '#forge:rods/iridium');
    event.replaceInput({ mod: 'libvulpes' }, '#forge:sticks/titanium', '#forge:rods/titanium');

    event.replaceInput({ mod: 'advancedrocketry' }, '#forge:sticks/iron', '#forge:rods/iron');
    event.replaceInput({ mod: 'advancedrocketry' }, '#forge:sticks/copper', '#forge:rods/copper');
    event.replaceInput({ mod: 'advancedrocketry' }, '#forge:sticks/steel', '#forge:rods/steel');
    event.replaceInput({ mod: 'advancedrocketry' }, '#forge:sticks/iridium', '#forge:rods/iridium');
    event.replaceInput({ mod: 'advancedrocketry' }, '#forge:sticks/titanium', '#forge:rods/titanium');
*/
/*
    event.replaceInput({ mod: 'mekanism' }, '#mekanism:basic_control_circuit', 'kubejs:printed_final_basic_circuit_board');
    event.replaceInput({ mod: 'mekanism' }, '#mekanism:advanced_control_circuit', 'kubejs:printed_final_advanced_circuit_board');
    event.replaceInput({ mod: 'mekanism' }, '#mekanism:elite_control_circuit', 'kubejs:printed_final_elite_circuit_board');
    event.replaceInput({ mod: 'mekanism' }, '#mekanism:ultimate_control_circuit', 'kubejs:printed_final_ultimate_circuit_board');
    event.replaceInput({ mod: 'mekanismmatter' }, '#mekanism:basic_control_circuit', 'kubejs:printed_final_basic_circuit_board');
    event.replaceInput({ mod: 'mekanismmatter' }, '#mekanism:advanced_control_circuit', 'kubejs:printed_final_advanced_circuit_board');
    event.replaceInput({ mod: 'mekanismmatter' }, '#mekanism:elite_control_circuit', 'kubejs:printed_final_elite_circuit_board');
    event.replaceInput({ mod: 'mekanismmatter' }, '#mekanism:ultimate_control_circuit', 'kubejs:printed_final_ultimate_circuit_board');
*/

//electrodynamics
//    event.replaceInput({ mod: 'electrodynamics' }, 'electrodynamics:ingotcopper', 'emendatusenigmatica:copper_ingot');

//Applied Energistics 2
    event.replaceInput({ mod: 'appliedenergistics2' }, 'appliedenergistics2:fluix_block', 'emendatusenigmatica:fluix_block');
    event.replaceInput({ mod: 'appliedenergistics2' }, '#appliedenergistics2:dusts/ender', 'emendatusenigmatica:ender_dust');

    event.replaceInput({ mod: 'appliedenergistics2' }, 'appliedenergistics2:charged_certus_quartz_crystal', 'emendatusenigmatica:charged_certus_quartz_gem');
    event.replaceInput({ mod: 'appliedenergistics2' }, 'appliedenergistics2:certus_quartz_crystal', 'emendatusenigmatica:certus_quartz_gem');
    event.replaceInput({ mod: 'appliedenergistics2' }, 'appliedenergistics2:fluix_crystal', 'emendatusenigmatica:fluix_gem');

    event.replaceInput({ mod: 'appliedenergistics2' }, 'appliedenergistics2:silicon', 'emendatusenigmatica:silicon_gem');
    event.replaceInput({ mod: 'appliedenergistics2' }, 'appliedenergistics2:flour', 'pamhc2foodcore:flouritem');

    event.replaceInput({ mod: 'appliedenergistics2' }, 'appliedenergistics2:charged_certus_quartz_crystal', 'emendatusenigmatica:charged_certus_quartz_gem');
    event.replaceInput({ mod: 'appliedenergistics2' }, 'appliedenergistics2:ender_dust', 'emendatusenigmatica:ender_dust');
    event.replaceInput({ mod: 'appliedenergistics2' }, 'mekanism:dust_dust', 'emendatusenigmatica:coal_dust');
    event.replaceInput({ mod: 'appliedenergistics2' }, 'appliedenergistics2:fluix_dust', 'emendatusenigmatica:fluix_dust');

//Lazy AE2
    event.replaceInput({ mod: 'lazierae2' }, 'appliedenergistics2:charged_certus_quartz_crystal', 'emendatusenigmatica:charged_certus_quartz_gem');
    event.replaceInput({ mod: 'lazierae2' }, 'appliedenergistics2:ender_dust', 'emendatusenigmatica:ender_dust');
    event.replaceInput({ mod: 'lazierae2' }, 'mekanism:dust_dust', 'emendatusenigmatica:coal_dust');
    event.replaceInput({ mod: 'lazierae2' }, 'appliedenergistics2:fluix_dust', 'emendatusenigmatica:fluix_dust');

//Thermal
    event.replaceInput({ mod: 'thermal' }, '#forge:dusts/ender_pearl', 'emendatusenigmatica:ender_dust');

    event.replaceInput({ mod: 'thermal' }, 'thermal:bitumen', 'emendatusenigmatica:bitumen_gem');

    event.replaceInput({ mod: 'thermal' }, 'thermal:niter_dust', 'emendatusenigmatica:potassium_nitrate_dust');

//immersive
    event.replaceInput({ mod: 'immersivepetroleum' }, 'immersivepetroleum:bitumen', 'emendatusenigmatica:bitumen_gem');

    event.replaceInput({ mod: 'immersiveengineering' }, 'immersiveengineering:slag', 'thermal:slag');
    event.replaceInput({ mod: 'engineersdecor' }, 'immersiveengineering:slag', 'thermal:slag');
    event.replaceInput({ mod: 'immersivepetroleum' }, 'immersiveengineering:slag', 'thermal:slag');

//Mekanism
    event.replaceInput({ mod: 'mekanism' }, 'mekanism:pellet_plutonium', 'kubejs:242_plutonium');

//General
event.replaceInput({}, 'appliedenergistics2:charged_certus_quartz_crystal', 'emendatusenigmatica:charged_certus_quartz_gem');
event.replaceInput({}, 'appliedenergistics2:fluix_dust', 'emendatusenigmatica:fluix_dust');
event.replaceInput({}, 'thermal:niter_dust', 'emendatusenigmatica:potassium_nitrate_dust');
event.replaceInput({}, 'exnihilosequentia:dust_obsidian', 'emendatusenigmatica:obsidian_dust');
event.replaceInput({}, 'mekanism:dust_obsidian', 'emendatusenigmatica:obsidian_dust');
event.replaceInput({}, 'mekanism:dust_refined_obsidian', 'emendatusenigmatica:obsidian_dust');

event.replaceInput({}, 'mekanism:dust_sulfur', 'emendatusenigmatica:sulfur_dust');
event.replaceInput({}, 'immersiveengineering:dust_sulfur', 'emendatusenigmatica:sulfur_dust');
event.replaceInput({}, 'thermal:sulfur_dust', 'emendatusenigmatica:sulfur_dust');

event.replaceInput({}, 'rftoolsbase:dimensionalshard', '#forge:gems/dimensional');

});
