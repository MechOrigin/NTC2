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

//Thermal
    event.replaceInput({ mod: 'thermal' }, '#forge:dusts/ender_pearl', 'emendatusenigmatica:ender_dust');

    event.replaceInput({ mod: 'thermal' }, '#forge:bitumen', 'emendatusenigmatica:bitumen_gem');

//immersive
    event.replaceInput({ mod: 'immersivepetroleum' }, '#forge:bitumen', 'emendatusenigmatica:bitumen_gem');
});
