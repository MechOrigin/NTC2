
//priority: 999
events.listen('recipes', e => {
    var idRemove = [
        'emendatusenigmatica:rod_from_ingot/silver',
        'alchemistry:evaporator/lava',
        'immersiveengineering:recycling/hammer',
        'tconstruct:smeltery/entity_melting/heads/creeper',
/*
        'electrodynamics:geariron',
        'electrodynamics:gearcopper',
        'electrodynamics:geartin',
        'electrodynamics:gearsteel',
        'electrodynamics:gearbronze',
*/
        'thermal:iron_gear',
        'thermal:gold_gear',
//        'thermal:lapis_gear',
//        'thermal:diamond_gear',
//        'thermal:emerald_gear',
//        'thermal:quartz_gear',
        'thermal:copper_gear',
        'thermal:tin_gear',
        'thermal:lead_gear',
        'thermal:silver_gear',
        'thermal:nickel_gear',
        /*
//        'thermal:bronze_gear',
//        'thermal:electrum_gear',
//        'thermal:invar_gear',
//        'thermal:constantan_gear',
//        'thermal:signalum_gear',
//        'thermal:lumium_gear',
//        'thermal:enderium_gear',
*/
//        'libvulpes:gearsteel',
//        'libvulpes:gearsteel',
/*
        'electrodynamics:plateiron',
        'electrodynamics:platesteel',
        'electrodynamics:platelead',
        'electrodynamics:platebronze',
*/
/*        'advancedrocketry:autogen/unblockcopper',
        'advancedrocketry:autogen/unnugget_copper',
        'advancedrocketry:autogen/nugget_copper',
        'advancedrocketry:autogen/block_copper',
        'advancedrocketry:autogen/unblockaluminum',
        'advancedrocketry:autogen/unnugget_aluminum',
        'advancedrocketry:autogen/nugget_aluminum',
        'advancedrocketry:autogen/block_aluminum',
        'advancedrocketry:autogen/unblocktin',
        'advancedrocketry:autogen/unnugget_tin',
        'advancedrocketry:autogen/nugget_tin',
        'advancedrocketry:autogen/block_tin',
        'advancedrocketry:autogen/unblocksteel',
        'advancedrocketry:autogen/unnugget_steel',
        'advancedrocketry:autogen/nugget_steel',
        'advancedrocketry:autogen/block_steel',

        'advancedrocketry:autogen/rolling_silicon',
*/
        'thermal:storage/copper_block',
        'thermal:storage/tin_block',
        'thermal:storage/lead_block',
        'thermal:storage/silver_block',
        'thermal:storage/nickel_block',
        'thermal:storage/bronze_block',
        'thermal:storage/electrum_block',
        'thermal:storage/invar_block',
        'thermal:storage/constantan_block',
        'thermal:storage/signalum_block',
        'thermal:storage/lumium_block',
        'thermal:storage/enderium_block',
        'thermal:storage/apatite_block',
        'thermal:storage/cinnabar_block',
        'thermal:storage/niter_block',
        'thermal:storage/sulfur_block',
        'thermal:storage/bitumen_block',
        'thermal:storage/coal_coke_block',
        'thermal:storage/copper_nugget_from_ingot',
        'thermal:storage/tin_nugget_from_ingot',
        'thermal:storage/lead_nugget_from_ingot',
        'thermal:storage/silver_nugget_from_ingot',
        'thermal:storage/nickel_nugget_from_ingot',
        'thermal:storage/bronze_nugget_from_ingot',
        'thermal:storage/electrum_nugget_from_ingot',
        'thermal:storage/invar_nugget_from_ingot',
        'thermal:storage/constantan_nugget_from_ingot',
        'thermal:storage/signalum_nugget_from_ingot',
        'thermal:storage/lumium_nugget_from_ingot',
        'thermal:storage/enderium_nugget_from_ingot',
        'thermal:storage/apatite_from_block',
        'thermal:storage/cinnabar_from_block',
        'thermal:storage/niter_from_block',
        'thermal:storage/sulfur_from_block',
        'thermal:storage/bitumen_from_block',
        'thermal:storage/coal_coke_from_block',

        'thermal:parts/iron_gear',
        'thermal:parts/gold_gear',
        'thermal:parts/copper_gear',
        'thermal:parts/silver_gear',
        'thermal:parts/lead_gear',
        'thermal:parts/nickel_gear',
        'thermal:parts/tin_gear',

        'thermal:bronze_dust_4',
        'thermal:constantan_dust_2',
        'thermal:electrum_dust_2',
        'thermal:invar_dust_3',
        'thermal:signalum_dust_4',
        'thermal:lumium_dust_4',
        'thermal:enderium_dust_2',

        'immersiveengineering:crafting/ingot_copper_to_storage_copper',
        'immersiveengineering:crafting/ingot_aluminum_to_storage_aluminum',
        'immersiveengineering:crafting/ingot_lead_to_storage_lead',
        'immersiveengineering:crafting/ingot_silver_to_storage_silver',
        'immersiveengineering:crafting/ingot_nickel_to_storage_nickel',
        'immersiveengineering:crafting/ingot_uranium_to_storage_uranium',
        'immersiveengineering:crafting/ingot_constantan_to_storage_constantan',
        'immersiveengineering:crafting/ingot_electrum_to_storage_electrum',
        'immersiveengineering:crafting/coal_coke_to_coke',
        'immersiveengineering:crafting/ingot_copper_to_nugget_copper',
        'immersiveengineering:crafting/ingot_aluminum_to_nugget_aluminum',
        'immersiveengineering:crafting/ingot_lead_to_nugget_lead',
        'immersiveengineering:crafting/ingot_silver_to_nugget_silver',
        'immersiveengineering:crafting/ingot_nickel_to_nugget_nickel',
        'immersiveengineering:crafting/ingot_uranium_to_nugget_uranium',
        'immersiveengineering:crafting/ingot_constantan_to_nugget_constantan',
        'immersiveengineering:crafting/ingot_electrum_to_nugget_electrum',
        'immersiveengineering:crafting/ingot_steel_to_nugget_steel',
        'immersiveengineering:crafting/coke_to_coal_coke',
        'immersiveengineering:crafting/stick_aluminum',
        'immersiveengineering:crafting/stick_steel',

        'tconstruct:common/materials/copper_block_from_ingots',
        'tconstruct:common/materials/cobalt_block_from_ingots',
        'tconstruct:common/materials/copper_nugget_from_ingot',
        'tconstruct:common/materials/cobalt_nugget_from_ingot',

        'mekanism:processing/osmium/storage_blocks/from_ingots',
        'mekanism:processing/copper/storage_blocks/from_ingots',
        'mekanism:processing/tin/storage_blocks/from_ingots',
        'mekanism:processing/lead/storage_blocks/from_ingots',
        'mekanism:processing/uranium/storage_blocks/from_ingots',
        'mekanism:processing/bronze/storage_blocks/from_ingots',
        'mekanism:processing/charcoal/storage_blocks/from_ingots',
        'mekanism:processing/steel/storage_blocks/from_ingots',
        'mekanism:storage_blocks/bronze',
        'mekanism:processing/osmium/nugget/from_ingot',
        'mekanism:processing/copper/nugget/from_ingot',
        'mekanism:processing/tin/nugget/from_ingot',
        'mekanism:processing/lead/nugget/from_ingot',
        'mekanism:processing/uranium/nugget/from_ingot',
        'mekanism:processing/bronze/nugget/from_ingot',
        'mekanism:processing/charcoal/nugget/from_ingot',
        'mekanism:processing/steel/nugget/from_ingot',
        'mekanism:nuggets/bronze',
        'mekanism:nuggets/steel',

        'appliedenergistics2:misc/deconstruction_certus_quartz_block',
        'appliedenergistics2:misc/deconstruction_fluix_block',
        'appliedenergistics2:decorative/certus_quartz_block',
        'appliedenergistics2:decorative/fluix_block',

        'mekanism:paper',
        'immersiveengineering:crafting/paper_from_sawdust',
        'pamhc2crops:paper_x2_paper_plants',
        'thermal:machine/centrifuge/centrifuge_oil_red_sand',
        'thermal:machine/centrifuge/centrifuge_oil_sand',
        'thermal:rubber_from_vine',
        'thermal:rubber_from_dandelion',
        'thermal:machine/refinery/refinery_resin',
/*
        'mekanism:basic_control_circuit',
        'mekanism:advanced_control_circuit',
        'mekanism:elite_control_circuit',
        'mekanism:ultimate_control_circuit',
*/
/*
        'electrodynamics:circuitbasic',
        'electrodynamics:circuitadvanced',
        'electrodynamics:circuitelite',
        'electrodynamics:circuitultimate'
*/        
        'mysticalagriculture:essence/common/sulfur',
        'mysticalagriculture:essence/common/copper_ingot',
        'mysticalagriculture:essence/common/saltpeter',
        'mysticalagriculture:essence/common/tin_ingot',
        'mysticalagriculture:essence/common/bronze_ingot',
        'mysticalagriculture:essence/common/steel_ingot',
        'mysticalagriculture:essence/mekanism/osmium_ingot',
        'mysticalagriculture:essence/mekanism/refined_glowstone_ingot',
        'mysticalagriculture:essence/mekanism/refined_obsidian_ingot',

        'chisel:charcoal/raw',
        'mekanism:storage_blocks/charcoal',
        'thermal:storage/charcoal_block',
        'quark:building/crafting/compressed/charcoal_block',
        'morecharcoal:charcoal_block',
        'minecraft:bone_meal',
        /*
        'mysticalagriculture:essence/thermal/basalz_rod',
        'mysticalagriculture:essence/thermal/blitz_rod',
        'mysticalagriculture:essence/thermal/blizz_rod',
        'mysticalagriculture:essence/thermal/enderium_ingot',
        'mysticalagriculture:essence/thermal/lumium_ingot',
        'mysticalagriculture:essence/thermal/signalum_ingot',

        'mysticalagriculture:essence/quark/ender_biotite',

        'mysticalagriculture:essence/common/brass_ingot',
        'mysticalagriculture:essence/common/bronze_ingot',
        'mysticalagriculture:essence/common/constantan_ingot',
        'mysticalagriculture:essence/common/electrum_ingot',
        'mysticalagriculture:essence/common/graphite_ingot',
        'mysticalagriculture:essence/common/invar_ingot',
        'mysticalagriculture:essence/common/silicon',
        'mysticalagriculture:essence/common/steel_ingot',
        'mysticalagriculture:essence/common/sulfur',

        'mysticalagriculture:essence/immersiveengineering/hop_graphite_ingot',

        'mysticalagriculture:essence/appliedenergistics2/fluix',
        'mysticalagriculture:essence/appliedenergistics2/sky_stone',

        'mysticalagriculture:essence/mekanism/refined_glowstone_ingot',
        'mysticalagriculture:essence/mekanism/refined_obsidian_ingot',

        'mysticalagriculture:seed/infusion/basalz',
        'mysticalagriculture:seed/infusion/blazing_crystal',
        'mysticalagriculture:seed/infusion/blitz',
        'mysticalagriculture:seed/infusion/blizz',
        'mysticalagriculture:seed/infusion/brass',
        'mysticalagriculture:seed/infusion/bronze',
        'mysticalagriculture:seed/infusion/compressed_iron',
        'mysticalagriculture:seed/infusion/constantan',
        'mysticalagriculture:crimson_steel_seeds_infusion',
        'mysticalagriculture:seed/infusion/electrum',
        'mysticalagriculture:seed/infusion/elementium',
        'mysticalagriculture:seed/infusion/enderium',
        'mysticalagriculture:seed/infusion/ender_biotite',
        'mysticalagriculture:seed/infusion/energized_steel',
        'mysticalagriculture:seed/infusion/fluix',
        'mysticalagriculture:seed/infusion/graphite',
        'mysticalagriculture:seed/infusion/hop_graphite',
        'mysticalagriculture:seed/infusion/invar',
        'mysticalagriculture:seed/infusion/lumium',
        'mysticalagriculture:seed/infusion/manasteel',
        'mysticalagriculture:seed/infusion/niotic_crystal',
        'mysticalagriculture:nitro_crystal_seeds_infusion',
        'mysticalagriculture:oratchalcum_seeds_infusion',
        'mysticalagriculture:seed/infusion/quartz_enriched_iron',
        'mysticalagriculture:seed/infusion/refined_glowstone',
        'mysticalagriculture:seed/infusion/refined_obsidian',
        'mysticalagriculture:seed/infusion/rock_crystal',
        'mysticalagriculture:seed/infusion/signalum',
        'mysticalagriculture:seed/infusion/silicon',
        'mysticalagriculture:seed/infusion/sky_stone',
        'mysticalagriculture:seed/infusion/spirited_crystal',
        'mysticalagriculture:seed/infusion/starmetal',
        'mysticalagriculture:seed/infusion/steel',
        'mysticalagriculture:seed/infusion/sulfur',
        'mysticalagriculture:seed/infusion/terrasteel',

        'quarryplus:solidquarry',
        'quarryplus:workbenchplus',
        'mininggadgets:upgrade_empty',
        'mekanism:digital_miner',
        'mekanism:atomic_disassembler',
        'mekanismgenerators:wind_generator',
        'pamhc2foodcore:fruitpunchitem',
        'pamhc2foodcore:applejuiceitem',
        'pamhc2foodcore:melonjuiceitem',
        'pamhc2foodcore:sweetberryjuiceitem',
        'pamhc2foodcore:p8juiceitem',
        'thermal:machine/pyrolyzer/pyrolyzer_coal',
        'thermal:machine/pyrolyzer/pyrolyzer_logs'
*/
    ];
    idRemove.forEach(iR => {
        e.remove({
            id: iR
        });
    });

    /*
    //Recipe removals
    e.remove({
        output: [
            'appliedenergistics2:silicon',

            'quark:apple_crate',
            'quark:potato_crate',
            'quark:carrot_crate',
            'quark:beetroot_crate',
            'quark:charcoal_block',
            'quark:gunpowder_sack',

            'mekanism:block_charcoal',

            'titanium:iron_gear',
            'titanium:gold_gear',
            'titanium:diamond_gear',
        ]
    });
    //Remove via mod name
    var modRemove = [
        ``,
    ];
    modRemove.forEach(mR => {
        e.remove({
            mod: mR
        });
    });
    e.remove({
        input: [
            'appliedenergistics2:flour'
        ]
    });
//    e.remove({
//        type: 'xreliquary:alkahestry_charging'
//    });
    e.remove({
        id: 'appliedenergistics2:grinder/flour'
    })
    e.remove({
        output: 'mekanism:bio_fuel'
    })
*/

e.remove({ type: 'immersiveengineering:sawmill', input: '#minecraft:logs' });

//e.remove({ type: 'mekanism:combining' });
e.remove({ type: 'minecraft:smelting', output: 'minecraft:obsidian' });
e.remove({ type: 'minecraft:blasting', output: 'minecraft:obsidian' });

e.remove({ type: 'minecraft:smelting', input: '#forge:ores' });
e.remove({ type: 'minecraft:blasting', input: '#forge:ores' });

e.remove({ type: 'minecraft:smelting', input: '#forge:dusts' });
e.remove({ type: 'minecraft:blasting', input: '#forge:dusts' });

e.remove({ type: 'industrialforegoing:fluid_extractor' });
e.remove({ type: 'thermal:tree_extractor' });

//e.remove({ mod: 'ironjetpacks' });
e.remove({ mod: 'theoneprobe' });

var outputRemovals = [
//    'akashictome:tome',

    'mekanism:combiner',
    'mekanism:basic_combining_factory',
    'mekanism:advanced_combining_factory',
    'mekanism:elite_combining_factory',
    'mekanism:ultimate_combining_factory',

//    'minecraft:sticky_piston',

    'thermal:bamboo_block'
];

var idRemovals = [
    /*
    'aquaculture:brown_mushroom_from_fish',
    'aquaculture:gold_nugget_from_blasting',
    'aquaculture:gold_nugget_from_gold_fish',
    'aquaculture:gold_nugget_from_smelting',
    'aquaculture:iron_nugget_from_blasting',
    'aquaculture:iron_nugget_from_smelting',
    'aquaculture:neptunium_ingot_from_blasting',
    'aquaculture:neptinium_ingot_from_blasting',
//    'aquaculture:planks_from_driftwood',
    'aquaculture:red_mushroom_from_red_shrooma',

    'betterendforge:gunpowder_from_sulphur',

    'botanypots:crafting/compact_hopper_botany_pot',

    'compactmachines:wall',
*/
    'appliedenergistics2:network/blocks/controller',
    'appliedenergistics2:misc/meteors_sky_compass',
    'appliedenergistics2:misc/grindstone',

    'compactcrafting:field_projector',
    'thermal:machine_frame',
    'thermal:energy_cell_frame',
    'thermal:fluid_cell_frame',
    'thermal:machine/centrifuge/centrifuge_oil_red_sand',
    'thermal:machine/centrifuge/centrifuge_oil_sand',
    'thermal:rubber_from_vine',
    'thermal:rubber_from_dandelion',
    'mysticalagriculture:machine_frame',
    'rftoolsbase:machine_frame',
    'industrialforegoing:machine_frame/pity',
    'mekanism:steel_casing',

    'industrialforegoing:laser_drill_ore/niter',
    'industrialforegoing:laser_drill_ore/sapphire',
    'industrialforegoing:laser_drill_ore/ruby',
    'industrialforegoing:laser_drill_ore/ancient_debris',
    'industrialforegoing:laser_drill_ore/arcane',
    'industrialforegoing:laser_drill_ore/mana',
    'industrialforegoing:laser_drill_ore/bitumen',
    'industrialforegoing:laser_drill_ore/fluorite',
    'industrialforegoing:laser_drill_ore/osmium',
    'industrialforegoing:laser_drill_ore/iron',
    'industrialforegoing:laser_drill_ore/gold',
    'industrialforegoing:laser_drill_ore/glowstone',
    'industrialforegoing:laser_drill_ore/emerald',
    'industrialforegoing:laser_drill_ore/uranium',
    'industrialforegoing:laser_drill_ore/tin',
    'industrialforegoing:laser_drill_ore/sulfur',
    'industrialforegoing:laser_drill_ore/silver',
    'industrialforegoing:laser_drill_ore/redstone',
    'industrialforegoing:laser_drill_ore/quartz',
    'industrialforegoing:laser_drill_ore/nickel',
    'industrialforegoing:laser_drill_ore/zinc',
    'industrialforegoing:laser_drill_ore/lead',
    'industrialforegoing:laser_drill_ore/lapis',
    'industrialforegoing:laser_drill_ore/cinnabar',
    'industrialforegoing:laser_drill_ore/diamond',
    'industrialforegoing:laser_drill_ore/copper',
    'industrialforegoing:laser_drill_ore/aluminum',
    'industrialforegoing:laser_drill_ore/coal',
    'industrialforegoing:stonework_generate/andesite',
    'industrialforegoing:stonework_generate/diorite',
    'industrialforegoing:stonework_generate/granite',

    'industrialforegoing:dissolution_chamber/laser_lens0',
    'industrialforegoing:dissolution_chamber/laser_lens1',
    'industrialforegoing:dissolution_chamber/laser_lens2',
    'industrialforegoing:dissolution_chamber/laser_lens3',
    'industrialforegoing:dissolution_chamber/laser_lens4',
    'industrialforegoing:dissolution_chamber/laser_lens5',
    'industrialforegoing:dissolution_chamber/laser_lens6',
    'industrialforegoing:dissolution_chamber/laser_lens7',
    'industrialforegoing:dissolution_chamber/laser_lens8',
    'industrialforegoing:dissolution_chamber/laser_lens9',
    'industrialforegoing:dissolution_chamber/laser_lens10',
    'industrialforegoing:dissolution_chamber/laser_lens11',
    'industrialforegoing:dissolution_chamber/laser_lens12',
    'industrialforegoing:dissolution_chamber/laser_lens13',
    'industrialforegoing:dissolution_chamber/laser_lens14',
    'industrialforegoing:dissolution_chamber/laser_lens15',
    'industrialforegoing:dissolution_chamber/dark_glass',
    'industrialforegoing:dissolution_chamber/efficiency_addon_1',
    'industrialforegoing:dissolution_chamber/efficiency_addon_2',
    'industrialforegoing:dissolution_chamber/processing_addon_1',
    'industrialforegoing:dissolution_chamber/processing_addon_2',
    'industrialforegoing:dissolution_chamber/speed_addon_1',
    'industrialforegoing:dissolution_chamber/speed_addon_2',
    'industrialforegoing:dissolution_chamber/simple_machine_frame',
    'industrialforegoing:dissolution_chamber/range_addon0',
    'industrialforegoing:dissolution_chamber/range_addon1',
    'industrialforegoing:dissolution_chamber/range_addon2',
    'industrialforegoing:dissolution_chamber/range_addon3',
    'industrialforegoing:dissolution_chamber/range_addon4',
    'industrialforegoing:dissolution_chamber/range_addon5',
    'industrialforegoing:dissolution_chamber/range_addon6',
    'industrialforegoing:dissolution_chamber/range_addon7',
    'industrialforegoing:dissolution_chamber/range_addon8',
    'industrialforegoing:dissolution_chamber/range_addon9',
    'industrialforegoing:dissolution_chamber/range_addon10',
    'industrialforegoing:dissolution_chamber/range_addon11',
    'industrialforegoing:dissolution_chamber/range_addon12',
    'industrialforegoing:dissolution_chamber/range_addon13',
    'industrialforegoing:dissolution_chamber/range_addon14',
    'industrialforegoing:dissolution_chamber/range_addon15',

    /immersiveengineering:crafting\/hammercrushing/,

    'immersivepetroleum:hydrotreater/sulfur_recovery',
/*
    'immersiveengineering:crusher/bone_meal',
    
//    'immersivepetroleum:distillationtower/oilcracking',

    'mekanism:crushing/stone/to_cobblestone',
    'mekanism:enriching/enriched/tin',
    'mekanism:processing/bronze/dust/from_infusing',
    'mekanism:processing/bronze/ingot/from_infusing',
    'mekanism:processing/lapis_lazuli/from_ore',

    'minecraft:crystal_glass',

    'quark:building/crafting/tallow_from_block',

    'tconstruct:tools/modifiers/wither_bone_conversion',

    'thermal:compat/tconstruct/chiller_tconstruct_molten_debris_ingot',
    'thermal:machine/smelter/smelter_alloy_netherite',
    'thermal:machine/press/packing2x2/press_honeycomb_packing',
//    'thermal:machine/refinery/refinery_crude_oil',
//    'thermal:machine/centrifuge/centrifuge_honeycomb',
//    'thermal:machine/centrifuge/centrifuge_oil_red_sand',
//    'thermal:machine/centrifuge/centrifuge_oil_sand',
    'thermal:machine/plugins/mekanism/pulverizer_mek_osmium_ore',
    'thermal:machine/integrateddynamics/sawmill_integrateddynamics_menril_log',
    'thermal:machine/plugins/integrateddynamics/sawmill_integrateddynamics_menril_log',
    'thermal:machine/integrateddynamics/sawmill_integrateddynamics_menril_log_filled',
    'thermal:machine/plugins/integrateddynamics/sawmill_integrateddynamics_menril_log_filled',
    'thermal:devices/tree_extractor/tree_extractor_jungle',
    'thermal:signalum_dust_4',
    'thermal:rubber_3',
    'thermal:smelting/cured_rubber_from_smelting',
    'thermal:storage/sulfur_block',
    'thermal:gunpowder_4',
*/
    '/integrateddynamics:\\w+/convenience/minecraft_dye/',
    '/integrateddynamics:\\w+/ore/dust/',
    '/integrateddynamics:\\w+/ore/redstone/',
    '/integrateddynamics:\\w+/ore/quartz/',

    '/integrateddynamics:\\w+/convenience/',
    '/integrateddynamics:\\w+/ore/'
];

var regexIdRemovals = [
    /emendatusenigmatica:ore_from_chunk_stonecutting/,
    /emendatusenigmatica:ore_from_chunk_crafting/
    /*
    /thermal:compat\/\w+\/\w+_ore/
    */
];

outputRemovals.forEach((removal) => {
    e.remove({ output: removal });
});

idRemovals.forEach((removal) => {
    e.remove({ id: removal });
});

regexIdRemovals.forEach((removal) => {
    e.remove({ id: removal });
});

disabledItems.forEach((disabledItem) => {
    e.remove({ output: disabledItem });
});
/*
e.remove({
    output: 'mekanism:sawdust',
    mod: 'mekanism',
    type: 'mekanism:sawing'
});

e.remove({
    output: '/\\w+:\\w+_gear$/',
    type: 'minecraft:crafting_shaped'
});

e.remove({
    output: '/emendatusenigmatica:\\w+_rod/',
    mod: 'immersiveengineering',
    type: 'immersiveengineering:metal_press'
});

e.remove({
    output: '/emendatusenigmatica:\\w+_rod/',
    mod: 'immersiveposts'
});

e.remove({
    output: '/emendatusenigmatica:\\w+_gear/',
    mod: 'immersiveengineering'
});
*/
e.remove({
    output: '/emendatusenigmatica:\\w+_gear/',
    mod: 'thermal'
});

e.remove({ type: 'botanypots:crop' });
e.remove({ type: 'botanypots:soil' });
e.remove({ type: 'thermal:insolator' });
e.remove({ type: 'immersiveengineering:cloche' });
/*
e.remove({
    input: '#forge:ores/zinc',
    type: 'thermal:smelter'
});
e.remove({
    input: '#forge:ores/osmium',
    type: 'thermal:smelter'
});
e.remove({
    input: '#forge:ores/uranium',
    type: 'thermal:smelter'
});
e.remove({
    input: '#forge:ores/aluminum',
    type: 'thermal:smelter'
});
e.remove({
    input: '#forge:ores/nickel',
    type: 'thermal:smelter'
});
e.remove({
    id: /emendatusenigmatica:ore_from_chunk_crafting/
});
e.remove({
    input: 'minecraft:fire_charge',
    mod: 'thermal',
    type: 'minecraft:crafting_shapeless'
});
*/
e.remove({ type: 'mekanism:enriching', output: '#forge:dyes' });
e.remove({ type: 'thermal:centrifuge', output: '#forge:dyes' });
e.remove({ type: 'immersiveengineering:crusher', output: '#forge:dyes' });

});