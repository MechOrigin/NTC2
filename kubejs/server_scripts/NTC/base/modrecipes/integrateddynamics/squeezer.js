onEvent('recipes', function (event) {
    // Item Inputs
    var data = {
        recipes: [
            {
                input: 'atmospheric:arid_sandstone',
                output: 'atmospheric:arid_sand',
                count: 2,
                duration: 10
            },
            {
                input: 'atmospheric:red_arid_sandstone',
                output: 'atmospheric:red_arid_sand',
                count: 2,
                duration: 10
            },
            {
                input: 'buildinggadgets:construction_block_dense',
                output: 'buildinggadgets:construction_paste',
                count: 3,
                duration: 20
            },
            {
                input: 'minecraft:obsidian',
                output: 'emendatusenigmatica:obsidian_dust',
                count: 4,
                duration: 60
            },
            {
                input: 'betterendforge:aurora_crystal',
                output: 'betterendforge:crystal_shards',
                count: 4,
                duration: 30
            },
            {
                input: 'minecraft:red_sandstone',
                output: 'minecraft:red_sand',
                count: 2,
                duration: 10
            },
            {
                input: 'biomesoplenty:white_sandstone',
                output: 'biomesoplenty:white_sand',
                count: 2,
                duration: 10
            },
            {
                input: 'biomesoplenty:orange_sandstone',
                output: 'biomesoplenty:orange_sand',
                count: 2,
                duration: 10
            },
            {
                input: 'biomesoplenty:black_sandstone',
                output: 'biomesoplenty:black_sand',
                count: 2,
                duration: 10
            },
            {
                input: 'emendatusenigmatica:redstone_chunk',
                output: 'minecraft:redstone',
                count: 6,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:coal_chunk',
                output: 'minecraft:coal',
                count: 4,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:coke_gem',
                output: 'emendatusenigmatica:coke_dust',
                count: 1,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:iron_chunk',
                output: 'emendatusenigmatica:iron_dust',
                count: 2,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:gold_chunk',
                output: 'emendatusenigmatica:gold_dust',
                count: 2,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:lapis_chunk',
                output: 'minecraft:lapis_lazuli',
                count: 9,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:quartz_chunk',
                output: 'minecraft:quartz',
                count: 3,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:copper_chunk',
                output: 'emendatusenigmatica:copper_dust',
                count: 2,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:aluminum_chunk',
                output: 'emendatusenigmatica:aluminum_dust',
                count: 2,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:silver_chunk',
                output: 'emendatusenigmatica:silver_dust',
                count: 2,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:lead_chunk',
                output: 'emendatusenigmatica:lead_dust',
                count: 2,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:nickel_chunk',
                output: 'emendatusenigmatica:nickel_dust',
                count: 2,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:uranium_chunk',
                output: 'emendatusenigmatica:uranium_dust',
                count: 2,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:osmium_chunk',
                output: 'emendatusenigmatica:osmium_dust',
                count: 2,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:tin_chunk',
                output: 'emendatusenigmatica:tin_dust',
                count: 2,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:zinc_chunk',
                output: 'emendatusenigmatica:zinc_dust',
                count: 2,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:cobalt_chunk',
                output: 'emendatusenigmatica:cobalt_dust',
                count: 2,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:certus_quartz_chunk',
                output: 'emendatusenigmatica:certus_quartz_gem',
                count: 3,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:fluorite_chunk',
                output: 'emendatusenigmatica:fluorite_gem',
                count: 6,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:bitumen_chunk',
                output: 'emendatusenigmatica:bitumen_gem',
                count: 4,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:cinnabar_chunk',
                output: 'emendatusenigmatica:cinnabar_gem',
                count: 4,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:apatite_chunk',
                output: 'emendatusenigmatica:apatite_gem',
                count: 12,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:dimensional_chunk',
                output: 'emendatusenigmatica:dimensional_gem',
                count: 8,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:sulfur_chunk',
                output: 'emendatusenigmatica:sulfur_gem',
                count: 6,
                duration: 60
            },
            {
                input: 'emendatusenigmatica:potassium_nitrate_chunk',
                output: 'emendatusenigmatica:potassium_nitrate_gem',
                count: 6,
                duration: 60
            },
            {
                input: 'minecraft:ender_pearl',
                output: 'emendatusenigmatica:ender_dust',
                count: 1,
                duration: 60
            },
            {
                input: 'minecraft:blaze_rod',
                output: 'minecraft:blaze_powder',
                count: 3,
                duration: 60
            },
            {
                input: 'minecraft:honey_bottle',
                output: 'minecraft:sugar',
                count: 4,
                duration: 60
            },
            {
                input: '#forge:glass',
                output: 'minecraft:sand',
                count: 1,
                duration: 60
            },
            {
                input: 'minecraft:sugar_cane',
                output: 'minecraft:sugar',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:wither_rose',
                output: 'minecraft:black_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:cornflower',
                output: 'minecraft:blue_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:blue_orchid',
                output: 'minecraft:light_blue_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:azure_bluet',
                output: 'minecraft:light_gray_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:oxeye_daisy',
                output: 'minecraft:light_gray_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:allium',
                output: 'minecraft:magenta_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:lilac',
                output: 'minecraft:magenta_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:orange_tulip',
                output: 'minecraft:orange_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:pink_tulip',
                output: 'minecraft:pink_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:peony',
                output: 'minecraft:pink_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:red_tulip',
                output: 'minecraft:red_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:rose_bush',
                output: 'minecraft:red_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:poppy',
                output: 'minecraft:red_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:lily_of_the_valley',
                output: 'minecraft:white_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:white_tulip',
                output: 'minecraft:white_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:bone',
                output: 'minecraft:white_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'minecraft:sunflower',
                output: 'minecraft:yellow_dye',
                count: 4,
                duration: 60
            },
            {
                input: 'exnihilosequentia:crushed_end_stone',
                output: 'betterendforge:endstone_dust',
                count: 1,
                duration: 60
            },
            {
                input: 'minecraft:andesite',
                output: 'exnihilosequentia:crushed_andesite',
                count: 1,
                duration: 60
            },
            {
                input: 'minecraft:diorite',
                output: 'exnihilosequentia:crushed_diorite',
                count: 1,
                duration: 60
            },
            {
                input: 'minecraft:sand',
                output: 'exnihilosequentia:dust',
                count: 2,
                duration: 60
            },
            {
                input: 'minecraft:end_stone',
                output: 'exnihilosequentia:crushed_end_stone',
                count: 1,
                duration: 60
            },
            {
                input: 'minecraft:granite',
                output: 'exnihilosequentia:crushed_granite',
                count: 1,
                duration: 60
            },
            {
                input: 'minecraft:netherrack',
                output: 'exnihilosequentia:crushed_netherrack',
                count: 1,
                duration: 60
            },
            {
                input: 'minecraft:gravel',
                output: 'minecraft:flint',
                count: 2,
                duration: 60
            },
            {
                input: 'minecraft:sandstone',
                output: 'minecraft:sand',
                count: 2,
                duration: 60
            },
            {
                input: 'appliedenergistics2:sky_stone_block',
                output: 'exnihiloae:crushed_skystone',
                count: 1,
                duration: 60
            },
            {
                input: 'enderioalloys:item_material_pulsating_crystal',
                output: 'enderioalloys:item_material_pulsating_powder',
                count: 1,
                duration: 40
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'integrateddynamics:squeezer',
            item: recipe.input,
            result: {
                items: [
                    {
                        item: {
                            item: recipe.output,
                            count: recipe.count
                        }
                    }
                ]
            }
        });

        event.custom({
            type: 'integrateddynamics:mechanical_squeezer',
            item: recipe.input,
            result: {
                fluid: {
                    fluid: recipe.fluid,
                    amount: recipe.amount
                },
                items: [
                    {
                        item: {
                            item: recipe.output,
                            count: recipe.count
                        }
                    }
                ]
            },
            duration: recipe.duration
        });

    });

    // Tag Inputs
    data = {
        recipes: [
            {
                input: 'forge:stone',
                output: 'minecraft:cobblestone',
                count: 1,
                duration: 20
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'integrateddynamics:squeezer',
            item: {
                tag: recipe.input
            },
            result: {
                items: [
                    {
                        item: {
                            item: recipe.output,
                            count: recipe.count
                        }
                    }
                ]
            }
        });

        event.custom({
            type: 'integrateddynamics:mechanical_squeezer',
            item: {
                tag: recipe.input
            },
            result: {
                items: [
                    {
                        item: {
                            item: recipe.output,
                            count: recipe.count
                        }
                    }
                ]
            },
            duration: recipe.duration
        });
    });

});
