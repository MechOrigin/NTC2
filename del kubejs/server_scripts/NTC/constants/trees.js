//priority: 1000

const treeRegistry = [
    {
        type: 'tree',
        trees: [
            {
                sapling: 'minecraft:acacia_sapling',
                trunk: 'minecraft:acacia_log',
                leaf: 'minecraft:acacia_leaves',
                fruit: 'alexsmobs:acacia_blossom',
                substrate: 'dirt',
                sap: 'thermal:latex',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'minecraft:birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'minecraft:birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:dark_oak_sapling',
                trunk: 'minecraft:dark_oak_log',
                leaf: 'minecraft:dark_oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:jungle_sapling',
                trunk: 'minecraft:jungle_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'minecraft:cocoa_beans',
                substrate: 'dirt',
                sap: 'thermal:latex',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'minecraft:spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:blue_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:blue_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:lavender_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:lavender_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:orange_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:orange_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:pink_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:pink_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:red_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:red_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:yellow_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:yellow_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'betterendforge:helix_tree_sapling',
                trunk: 'betterendforge:helix_tree_log',
                leaf: 'betterendforge:helix_tree_leaves',
                substrate: 'amber_moss',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'betterendforge:tenanea_sapling',
                trunk: 'betterendforge:tenanea_log',
                leaf: 'betterendforge:tenanea_leaves',
                substrate: 'pink_moss',
                sap: 'integrateddynamics:liquid_chorus',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'betterendforge:pythadendron_sapling',
                trunk: 'betterendforge:pythadendron_log',
                leaf: 'betterendforge:pythadendron_leaves',
                substrate: 'chorus_nylium',
                sap: 'integrateddynamics:liquid_chorus',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'betterendforge:lacugrove_sapling',
                trunk: 'betterendforge:lacugrove_log',
                leaf: 'betterendforge:lacugrove_leaves',
                substrate: 'end_moss',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'betterendforge:dragon_tree_sapling',
                trunk: 'betterendforge:dragon_tree_log',
                leaf: 'betterendforge:dragon_tree_leaves',
                substrate: 'shadow_grass',
                sap: 'integrateddynamics:liquid_chorus',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'betterendforge:lucernia_sapling',
                trunk: 'betterendforge:lucernia_log',
                leaf: 'betterendforge:lucernia_leaves',
                substrate: 'rutiscus',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'integrateddynamics:menril_sapling',
                trunk: 'integrateddynamics:menril_log',
                leaf: 'integrateddynamics:menril_leaves',
                fruit: 'integrateddynamics:menril_berries',
                substrate: 'dirt',
                sap: 'integrateddynamics:menril_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:rosewood_sapling',
                trunk: 'atmospheric:rosewood_log',
                leaf: 'atmospheric:rosewood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:morado_sapling',
                trunk: 'atmospheric:morado_log',
                leaf: 'atmospheric:morado_leaves',
                extraDecoration: 'atmospheric:flowering_morado_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:yucca_sapling',
                trunk: 'atmospheric:yucca_log',
                leaf: 'atmospheric:yucca_leaves',
                fruit: 'atmospheric:yucca_bundle',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:kousa_sapling',
                trunk: 'atmospheric:kousa_log',
                leaf: 'atmospheric:kousa_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'atmospheric:aspen_sapling',
                trunk: 'atmospheric:aspen_log',
                leaf: 'atmospheric:aspen_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'atmospheric:grimwood_sapling',
                trunk: 'atmospheric:grimwood_log',
                leaf: 'atmospheric:grimwood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'upgrade_aquatic:river_sapling',
                trunk: 'upgrade_aquatic:river_log',
                leaf: 'upgrade_aquatic:river_leaves',
                fruit: 'upgrade_aquatic:mulberry',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'tconstruct:earth_slime_sapling',
                trunk: 'tconstruct:greenheart_log',
                leaf: 'tconstruct:earth_slime_leaves',
                fruit: 'minecraft:slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:earth_slime',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'tconstruct:sky_slime_sapling',
                trunk: 'tconstruct:skyroot_log',
                leaf: 'tconstruct:sky_slime_leaves',
                fruit: 'tconstruct:sky_slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:sky_slime',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'tconstruct:ender_slime_sapling',
                trunk: 'tconstruct:greenheart_log',
                leaf: 'tconstruct:ender_slime_leaves',
                fruit: 'tconstruct:ender_slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:ender_slime',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'projectvibrantjourneys:fir_sapling',
                trunk: 'projectvibrantjourneys:fir_log',
                leaf: 'projectvibrantjourneys:fir_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'projectvibrantjourneys:pine_sapling',
                trunk: 'projectvibrantjourneys:pine_log',
                leaf: 'projectvibrantjourneys:pine_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'projectvibrantjourneys:redwood_sapling',
                trunk: 'projectvibrantjourneys:redwood_log',
                leaf: 'projectvibrantjourneys:redwood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'projectvibrantjourneys:willow_sapling',
                trunk: 'projectvibrantjourneys:willow_log',
                leaf: 'projectvibrantjourneys:willow_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'projectvibrantjourneys:mangrove_sapling',
                trunk: 'projectvibrantjourneys:mangrove_log',
                leaf: 'projectvibrantjourneys:mangrove_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'projectvibrantjourneys:palm_sapling',
                trunk: 'projectvibrantjourneys:palm_log',
                leaf: 'projectvibrantjourneys:palm_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'projectvibrantjourneys:cottonwood_sapling',
                trunk: 'projectvibrantjourneys:cottonwood_log',
                leaf: 'projectvibrantjourneys:cottonwood_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'projectvibrantjourneys:aspen_sapling',
                trunk: 'projectvibrantjourneys:aspen_log',
                leaf: 'projectvibrantjourneys:aspen_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'projectvibrantjourneys:juniper_sapling',
                trunk: 'projectvibrantjourneys:juniper_log',
                leaf: 'projectvibrantjourneys:juniper_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'projectvibrantjourneys:baobab_sapling',
                trunk: 'projectvibrantjourneys:baobab_log',
                leaf: 'projectvibrantjourneys:baobab_leaves',
                substrate: 'dirt',
                sap: 'thermal:latex',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'projectvibrantjourneys:red_maple_sapling',
                trunk: 'projectvibrantjourneys:maple_log',
                leaf: 'projectvibrantjourneys:red_maple_leaves',
                substrate: 'dirt',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'projectvibrantjourneys:orange_maple_sapling',
                trunk: 'projectvibrantjourneys:maple_log',
                leaf: 'projectvibrantjourneys:orange_maple_leaves',
                substrate: 'dirt',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'projectvibrantjourneys:purple_maple_sapling',
                trunk: 'projectvibrantjourneys:maple_log',
                leaf: 'projectvibrantjourneys:purple_maple_leaves',
                substrate: 'dirt',
                sap: 'thermal:sap',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'projectvibrantjourneys:pink_sakura_sapling',
                trunk: 'projectvibrantjourneys:sakura_log',
                leaf: 'projectvibrantjourneys:pink_sakura_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'projectvibrantjourneys:white_sakura_sapling',
                trunk: 'projectvibrantjourneys:sakura_log',
                leaf: 'projectvibrantjourneys:white_sakura_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'projectvibrantjourneys:tamarack_sapling',
                trunk: 'projectvibrantjourneys:tamarack_log',
                leaf: 'projectvibrantjourneys:tamarack_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'projectvibrantjourneys:joshua_sapling',
                trunk: 'projectvibrantjourneys:joshua_log',
                leaf: 'projectvibrantjourneys:joshua_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'pamhc2trees:apple_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:avocado_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:avocadoitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:candlenut_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:candlenutitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:cherry_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:cherryitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:chestnut_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:chestnutitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:gooseberry_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:gooseberryitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:lemon_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:lemonitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:nutmeg_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:nutmegitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:orange_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:orangeitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:peach_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:peachitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:pear_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:pearitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:plum_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:plumitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:walnut_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:walnutitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:spiderweb_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:string',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:hazelnut_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:hazelnutitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:pawpaw_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:pawpawitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:soursop_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:soursopitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:almond_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:almonditem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:apricot_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:apricotitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:banana_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:bananaitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:cashew_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:cashewitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:cinnamon_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:cinnamonitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:coconut_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:coconutitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:date_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:dateitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:dragonfruit_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:dragonfruititem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:durian_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:durianitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:fig_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:figitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:grapefruit_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:grapefruititem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:lime_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:limeitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:mango_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:mangoitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:olive_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:oliveitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:papaya_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:papayaitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:paperbark_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:paper',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:pecan_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:pecanitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:peppercorn_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:peppercornitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:persimmon_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:persimmonitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:pistachio_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:pistachioitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:pomegranate_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:pomegranateitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:starfruit_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:starfruititem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:vanillabean_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:vanillabeanitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:breadfruit_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:breadfruititem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:guava_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:guavaitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:jackfruit_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:jackfruititem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:lychee_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:lycheeitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:peppercorn_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:peppercornitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:passionfruit_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:passionfruititem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:rambutan_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:rambutanitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:tamarind_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'pamhc2trees:tamarinditem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:maple_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:spruce_leaves',
                fruit: 'pamhc2trees:maplesyrupitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'pamhc2trees:pinenut_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:spruce_leaves',
                fruit: 'pamhc2trees:pinenutitem',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'nethers_exoticism:jaboticaba_sapling',
                trunk: 'nethers_exoticism:jaboticaba_branch_empty',
                leaf: 'nethers_exoticism:jaboticaba_leaves',
                fruit: 'nethers_exoticism:jaboticaba',
                substrate: 'basalt',
                sap: 'tconstruct:liquid_soul',
                rate: { living: 2, dead: 1 }
            },
            {
                sapling: 'nethers_exoticism:kiwano_sapling',
                trunk: 'minecraft:warped_stem',
                leaf: 'nethers_exoticism:kiwano_leaves',
                fruit: 'nethers_exoticism:kiwano',
                substrate: 'warped_nylium',
                sap: 'tconstruct:liquid_soul',
                rate: { living: 2, dead: 1 }
            },
            {
                sapling: 'nethers_exoticism:ramboutan_sapling',
                trunk: 'nethers_exoticism:ramboutan_log',
                leaf: 'nethers_exoticism:ramboutan_leaves',
                fruit: 'nethers_exoticism:ramboutan',
                substrate: 'netherrack',
                sap: 'tconstruct:liquid_soul',
                rate: { living: 2, dead: 1 }
            },
            {
                sapling: 'nethers_exoticism:bouddha_s_hand_sapling',
                trunk: 'minecraft:bone_block',
                leaf: 'nethers_exoticism:bone_column',
                fruit: 'nethers_exoticism:bouddha_s_hand',
                substrate: 'soul_soil',
                sap: 'tconstruct:liquid_soul',
                rate: { living: 2, dead: 1 }
            },
            {
                sapling: 'nethers_exoticism:pitaya_sapling',
                trunk: 'nethers_exoticism:pitaya_stem',
                leaf: 'nethers_exoticism:pitaya_stem',
                fruit: 'nethers_exoticism:pitaya',
                substrate: 'nether',
                sap: 'tconstruct:liquid_soul',
                rate: { living: 2, dead: 1 }
            }
        ]
    },
    {
        type: 'tree_shroom',
        trees: [
            {
                sapling: 'minecraft:brown_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:brown_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:crimson_fungus',
                trunk: 'minecraft:crimson_stem',
                leaf: 'minecraft:nether_wart_block',
                substrate: 'crimson_nylium'
            },
            {
                sapling: 'minecraft:red_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:red_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:warped_fungus',
                trunk: 'minecraft:warped_stem',
                leaf: 'minecraft:warped_wart_block',
                substrate: 'warped_nylium'
            },
            {
                sapling: 'quark:glowshroom',
                trunk: 'quark:glowshroom_stem',
                leaf: 'quark:glowshroom_block',
                substrate: 'glowcelium'
            },
            {
                sapling: 'betterendforge:umbrella_tree_sapling',
                trunk: 'betterendforge:umbrella_tree_log',
                leaf: 'betterendforge:umbrella_tree_membrane',
                extraDecoration: 'betterendforge:umbrella_tree_cluster',
                substrate: 'jungle_moss'
            },
            {
                sapling: 'betterendforge:mossy_glowshroom_sapling',
                trunk: 'betterendforge:mossy_glowshroom_log',
                leaf: 'betterendforge:mossy_glowshroom_cap',
                extraDecoration: 'betterendforge:mossy_glowshroom_hymenophore',
                substrate: 'end_moss'
            },
            {
                sapling: 'betterendforge:small_amaranita_mushroom',
                trunk: 'betterendforge:amaranita_stem',
                leaf: 'betterendforge:amaranita_cap',
                extraDecoration: 'betterendforge:amaranita_lantern',
                substrate: 'sangnum'
            },
            {
                sapling: 'betterendforge:small_jellyshroom',
                trunk: 'betterendforge:jellyshroom_log',
                leaf: 'betterendforge:jellyshroom_cap_purple',
                substrate: 'jungle_moss'
            },
            {
                sapling: 'tconstruct:blood_slime_sapling',
                trunk: 'tconstruct:bloodshroom_log',
                leaf: 'tconstruct:blood_slime_leaves',
                fruit: 'tconstruct:ichor_slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:blood',
                rate: { living: 25, dead: 4 }
            }
        ]
    }
];
