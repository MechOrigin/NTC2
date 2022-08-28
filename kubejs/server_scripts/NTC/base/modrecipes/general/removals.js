
//priority: 999
events.listen('recipes', e => {
    var idRemove = [
        'emendatusenigmatica:rod_from_ingot/silver',
        'alchemistry:evaporator/lava',
        'immersiveengineering:recycling/hammer',
        'tconstruct:smeltery/entity_melting/heads/creeper',
        'fluiddrawerslegacy:fluiddrawer',
        'thermal:iron_gear',
        'thermal:gold_gear',
        'thermal:copper_gear',
        'thermal:tin_gear',
        'thermal:lead_gear',
        'thermal:silver_gear',
        'thermal:nickel_gear',
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
        'thermal:machine/smelter/smelter_alloy_netherite',
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
        'immersiveengineering:blastfurnace/fuel_charcoal',
        'immersiveengineering:blastfurnace/fuel_charcoal_block',
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
        'betternether:blackstone_stalactite_from_blackstone',
        'betternether:basalt_stalactite_from_basalt'
    ];
    idRemove.forEach(iR => {
        e.remove({
            id: iR
        });
    });

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

    // 'mekanism:combiner',
    // 'mekanism:basic_combining_factory',
    // 'mekanism:advanced_combining_factory',
    // 'mekanism:elite_combining_factory',
    // 'mekanism:ultimate_combining_factory',

//    'minecraft:sticky_piston',

    'thermal:bamboo_block'
];

var idRemovals = [
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
    '/integrateddynamics:\\w+/convenience/minecraft_dye/',
    '/integrateddynamics:\\w+/ore/dust/',
    '/integrateddynamics:\\w+/ore/redstone/',
    '/integrateddynamics:\\w+/ore/quartz/',

    '/integrateddynamics:\\w+/convenience/',
    '/integrateddynamics:\\w+/ore/',
];

var regexIdRemovals = [
    /emendatusenigmatica:ore_from_chunk_stonecutting/,
    /emendatusenigmatica:ore_from_chunk_crafting/,
    /mysticalagriculture:essence\/common/,
    /mysticalagriculture:essence\/thermal/
    
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

e.remove({
    output: '/emendatusenigmatica:\\w+_gear/',
    mod: 'thermal'
});

e.remove({ type: 'botanypots:crop' });
e.remove({ type: 'botanypots:soil' });
e.remove({ type: 'thermal:insolator' });
e.remove({ type: 'immersiveengineering:cloche' });
e.remove({ type: 'mekanism:enriching', output: '#forge:dyes' });
e.remove({ type: 'thermal:centrifuge', output: '#forge:dyes' });
e.remove({ type: 'immersiveengineering:crusher', output: '#forge:dyes' });

});