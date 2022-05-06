
onEvent('jei.hide.items', event => {

    materialsToUnify.forEach((material) => {
        if (material == 'graphite' || material == 'hop_graphite') {
            return;
        }
        itemsToHide.push(
            'immersiveengineering:ingot_' + material,
            'immersiveengineering:dust_' + material,
            'immersiveengineering:nugget_' + material,
            'immersiveengineering:stick_' + material,
            'mekanism:nugget_' + material,
            'mekanism:dust_' + material,
            'mekanism:ingot_' + material,
            'mekanism:block_' + material,
            'thermal:' + material + '_block',
            'thermal:' + material + '_dust',
            'exnihilosequentia:' + 'chunk_' + material,
            'exnihilosequentia:' + 'piece_' + material
        );
    });

    /*
    event.hide('libvulpes:stickiridium')
    event.hide('libvulpes:sticktitanium')

    event.hide('libvulpes:platesteel')
    event.hide('libvulpes:platesilicon')

    event.hide('libvulpes:dustsilicon')

    event.hide('libvulpes:ingotsilicon')

    event.hide('libvulpes:nuggetsilicon')

    event.hide('libvulpes:gearsteel')

    event.hide('electrodynamics:orecopper')
    event.hide('electrodynamics:oretin')
    event.hide('electrodynamics:oresilver')
    event.hide('electrodynamics:orelead')
    event.hide('electrodynamics:orethorianite')
    event.hide('electrodynamics:oremonazite')
    event.hide('electrodynamics:oresulfur')
    event.hide('electrodynamics:oreniter')
*/

    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    event.hide([
        'immersiveengineering:ore_copper',
        'immersiveengineering:ore_lead',
        'immersiveengineering:ore_silver',
        'immersiveengineering:ore_nickel',
        'immersiveengineering:ore_uranium',
        'mekanism:copper_ore',
        'mekanism:lead_ore',
        'mekanism:tin_ore',
        'mekanism:block_steel',
        'immersiveengineering:storage_copper',
        'mekanism:block_copper',
        'immersiveengineering:storage_silver',
        'immersiveengineering:storage_nickel',
        'immersiveengineering:storage_uranium',
        'mekanism:block_tin',
        'immersiveengineering:storage_lead',
        'mekanism:block_lead',
        'immersiveengineering:nugget_copper',
        'immersiveengineering:ingot_copper',
        'immersiveengineering:dust_copper',
        'immersiveengineering:plate_copper',
        'immersiveengineering:nugget_silver',
        'immersiveengineering:ingot_silver',
        'immersiveengineering:dust_silver',
        'immersiveengineering:plate_silver',
        'immersiveengineering:nugget_nickel',
        'immersiveengineering:ingot_nickel',
        'immersiveengineering:dust_nickel',
        'immersiveengineering:plate_nickel',
        'immersiveengineering:nugget_lead',
        'immersiveengineering:ingot_lead',
        'immersiveengineering:dust_lead',
        'immersiveengineering:plate_lead',
        'immersiveengineering:dust_iron',
        'immersiveengineering:plate_iron',
        'immersiveengineering:dust_gold',
        'immersiveengineering:plate_gold',
        'immersiveengineering:dust_uranium',
        'immersiveengineering:nugget_uranium',
        'immersiveengineering:ingot_uranium',
        'immersiveengineering:storage_uranium',
        'mekanism:nugget_copper',
        'mekanism:ingot_copper',
        'mekanism:dust_copper',
        'mekanism:nugget_tin',
        'mekanism:ingot_tin',
        'mekanism:dust_tin',
        'mekanism:nugget_lead',
        'mekanism:ingot_lead',
        'mekanism:dust_lead',
        'mekanism:dust_iron',
        'mekanism:dust_gold',
        'mekanism:dust_diamond',
        'mekanism:nugget_steel',
        'mekanism:ingot_steel',
        'mekanism:dust_steel',
        'appliedenergistics2:iron_dust',
        'appliedenergistics2:gold_dust',
        'appliedenergistics2:fluix_dust',
        'emendatusenigmatica:fluix_gem',
        'emendatusenigmatica:certus_quartz_gem',
        'appliedenergistics2:certus_quartz_dust',
        'emendatusenigmatica:charged_certus_quartz_gem',
        'mekanism:nugget_bronze',
        'mekanism:ingot_bronze',
        'mekanism:block_bronze',
        'mekanism:dust_bronze',
        'thermal:quartz_dust',
        'mekanism:dust_quartz',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:plate_constantan',
        'immersiveengineering:dust_constantan',
        'immersiveengineering:nugget_constantan',
        'immersiveengineering:storage_constantan',
        'immersiveengineering:slab_storage_constantan',
        'mekanism:dust_bronze',
        'mekanism:ingot_bronze',
        'mekanism:block_bronze',
        'mekanism:nugget_bronze',
        'mekanism:dust_lapis_lazuli',
        'mekanism:dust_sulfur',
        'immersiveengineering:dust_wood',
        'immersiveengineering:dust_sulfur',
        'mekanism:sawdust',
        'mekanism:dust_emerald',
        'mekanism:dust_lapis_lazuli',
        'immersiveengineering:plate_electrum',
        'tconstruct:copper_ore',
        /compressium:(stone|sand|gravel|netherrack|soulsand|snow|iron|gold|diamond|emerald|clay|netherite|dirt|coal|redsand|endstone|obsidian|lapis|quartz|honey|redstone|andesite|diorite|granite)_[2-8]/,
        'immersiveengineering:storage_copper','mekanism:block_copper','tconstruct:copper_block',
        'mekanism:block_bronze',
        'mekanism:block_steel',
        'mekanism:block_charcoal','quark:charcoal_block',
        'mekanism:block_tin',
        'mekanism:block_lead','immersiveengineering:storage_lead',
        'immersiveengineering:coke',
        'immersiveengineering:storage_constantan',
        'immersiveengineering:storage_electrum',
        'immersiveengineering:storage_nickel',
        'immersiveengineering:storage_silver',
        'immersiveengineering:storage_copper','mekanism:block_copper','tconstruct:copper_block',
        'mekanism:block_bronze',
        'mekanism:block_steel',
        'mekanism:block_charcoal','quark:charcoal_block',
        'mekanism:block_tin',
        'mekanism:block_lead','immersiveengineering:storage_lead',
        'immersiveengineering:coke',
        'immersiveengineering:coal_coke',
        'immersiveengineering:storage_constantan',
        'immersiveengineering:storage_electrum',
        'immersiveengineering:storage_nickel',
        'immersiveengineering:storage_silver',
        'immersiveengineering:ingot_copper','mekanism:ingot_copper','tconstruct:copper_ingot',
        'mekanism:ingot_bronze',
        'mekanism:ingot_steel',
        'mekanism:ingot_tin',

        'avaritia:neutron_collector',
        'avaritia:neutronium_compressor',
        'avaritia:record_fragment',
        'avaritia:\\w+/_singularity/',
        'avaritia:ultimate_stew',
        'avaritia:cosmic_meatballs',
        'avaritia:\\w+/_crafting_table',


        'immersiveengineering:coke',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:ingot_electrum',
        'immersiveengineering:ingot_nickel',
        'immersiveengineering:ingot_silver',

        'tconstruct:copper_nugget',
        /helmet_probe/,
        'thermal:quartz_gear',

        /tconstruct:tough_handle/,
        /tconstruct:tool_handle/,
        /tconstruct:large_plate/,
        /tconstruct:tool_binding/,
        /tconstruct:broad_blade/,
        /tconstruct:small_blade/,
        /tconstruct:broad_axe/,
        /tconstruct:small_axe/,
        /tconstruct:hammer_head/,
        /tconstruct:pickaxe_head/,
        /tconstruct:crafting_station/,
        /tconstruct:tinker_station/,
        /tconstruct:part_builder/,
        /tconstruct:tinkers_anvil/,
        /tconstruct:scorched_anvil/,
        /mekanism:creative_chemical_tank/,
        /mekanism:creative_fluid_tank/,
        /ftblibrary:fluid_container/,

        'lazierae2:coal_dust',
        /crook/,
        /exnihilosequentia:hammer_/,
        /silkworm/,
        'industrialforegoing:latex_bucket',
        'industrialforegoing:latex'
    ]);

  })

  onEvent('jei.add.items', jei => {
    jei.add(Item.of('appliedenergistics2:facade', {item:"minecraft:stone"}))
    jei.add(Item.of('tconstruct:tinkers_anvil', {texture:"emendatusenigmatica:bronze_block"}))
    jei.add('immersiveengineering:metal_press')
    jei.add('immersiveengineering:assembler')
    jei.add('immersiveengineering:squeezer')
    jei.add('immersiveengineering:arc_furnace')
    jei.add('immersiveengineering:silo')
    jei.add('immersiveengineering:crusher')
    jei.add('immersiveengineering:fermenter')
    jei.add('immersiveengineering:mixer')
    jei.add('immersiveengineering:tank')
    jei.add('immersiveengineering:sawmill')
    jei.add('immersiveengineering:refinery')
    jei.add('immersiveengineering:bottling_machine')
    jei.add('immersiveengineering:lightning_rod')
    jei.add('immersiveengineering:diesel_generator')
    jei.add('immersiveengineering:excavator')
    jei.add('immersiveengineering:auto_workbench')
    jei.add('immersivepetroleum:pumpjack')
    jei.add('immersivepetroleum:distillationtower')

    jei.add('theoneprobe:probenote')

    jei.add('tconstruct:soulsteel_nugget')
    jei.add('tconstruct:soulsteel_ingot')
    jei.add('tconstruct:soulsteel_block')
})