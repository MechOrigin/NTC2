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
