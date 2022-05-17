//priority: 1010

// Used to determine which materials to unify
const materialsToUnify = [
    'iron',
    'gold',
    'copper',
    'silver',
    'zinc',
    'brass',
    'lead',
    'tin',
    'nickel',
    'aluminum',
    'uranium',
    'bronze',
    'electrum',
    'constantan',
    'steel',
    'osmium',
    'diamond',
    'lapis',
    'emerald',
    'quartz',
    'obsidian',
    'fluix',
    'fluorite',
    'invar',
    'signalum',
    'lumium',
    'enderium',
    'sulfur',
    'cinnabar',
    'potassium_nitrate',
    'apatite',
    'redstone',
    'glowstone',
    'certus_quartz',
    'dimensional',
    'cobalt',
    'queens_slime',
    'rose_gold',
    'tinkers_bronze',
    'knightslime',
    'slimesteel',
    'manyullyn',
    'hepatizon',
    'thallasium',
    'bitumen',
    'coal',
    'terminite',
    'aeternium',
    'coal_coke'
];

// Used to determine which material types to unify
const typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod', 'wire'];

// Used for creating tags on custom ore processing materials
const metals = [
    'aluminum',
    'cobalt',
    'copper',
    'gold',
    'iron',
    'lead',
    'nickel',
    'osmium',
    'silver',
    'thallasium',
    'tin',
    'uranium',
    'zinc'
];

// Used for custom 8x, 16x, 32x ore processing
const metalsProcessing = [
    'aluminum',
    'cobalt',
    'copper',
    'gold',
    'iron',
    'lead',
    'nickel',
    'osmium',
    'silver',
    'thallasium',
    'tin',
    'uranium',
    'zinc'
];

// Used for creating tags on custom ore processing materials
const fluidHoney = 'cofh_core:honey';
const combs = [
    'iron',
    'gold',
    'copper',
    'silver',
    'zinc',
    'brazen',
    'leaden',
    'tin',
    'nickel',
    'bauxite',
    'radioactive',
    'bronze',
    'electrum',
    'constantan',
    'steel',
    'osmium',
    'diamond',
    'lapis',
    'emerald',
    'quartz',
    'obsidian',
    'fluix',
    'fluorite',
    'invar',
    'signalum',
    'lumium',
    'enderium',
    'sulfur',
    'cinnabar',
    'niter',
    'apatite',
    'redstone',
    'glowing',
    'spacial',
//    'dimensional',
    'cobalt',
    'queens_slime',
    'rose_gold',
    'tinkers_bronze',
//    'knightslime',
    'slimesteel',
    'manyullyn',
    'hepatizon',
//    'thallasium',
//    'bitumen',
    'fossilised',
//    'terminite',
//    'aeternium',
//    'coal_coke'
    'amber',
    'basalz',
//    'bismuth',
    'blazing',
    'blitz',
    'blizz',
//    'bloody',
    'bone',
    'draconic',
    'ender',
    'ender_biotite',
    'experience',
    'frosty',
    'ghostly',
    'imperium',
    'inferium',
    'insanium',
    'magmatic',
    'menril',
    'milky',
    'netherite',
    'plastic',
    'platinum',
    'powdery',
    'prosperity',
    'prudentium',
    'rotten',
    'refined_glowstone',
    'refined_obsidian',
    'silicon',
    'silky',
    'slimy',
    'soulium',
    'supremium',
    'tertium',
    'titanium',
    'tungsten',
    'withered',
    'ruby',
    'sapphire',
    'pig_iron',
    'soulsteel',
    'sky_slimy',
    'ender_slimy',
    'ichor_slimy'
];

// Defines melting point of various materials
const meltingPoints = {
    thallasium: { temp: 800 },
    signalum: { temp: 1272 },
    lumium: { temp: 1354 },
    enderium: { temp: 1450 },
    sulfur: { temp: 115 },
    redstone: { temp: 660 },
    potassium_nitrate: { temp: 334 },
    lapis: { temp: 3400 },
    fluorite: { temp: 1418 },
    dimensional: { temp: 1450 },
    coal: { temp: 1149 },
    cinnabar: { temp: 580 },
    bitumen: { temp: 115 },
    tin: { temp: 232 },
    lead: { temp: 328 },
    aluminum: { temp: 660 },
    silver: { temp: 961 },
    bronze: { temp: 913 },
    gold: { temp: 1063 },
    copper: { temp: 1000 },
    iron: { temp: 1149 },
    nickel: { temp: 1453 },
    cobalt: { temp: 1495 },
    steel: { temp: 1510 },
    platinum: { temp: 1770 },
    tungsten: { temp: 3400 },
    netherite_scrap: { temp: 3400 }
};

// Defines the secondary metal each metal type will produce.
const oreProcessingSecondaries = {
    iron: {
        secondary: 'nickel',
        createProcessingTime: 400
    },
    nickel: {
        secondary: 'iron',
        createProcessingTime: 350
    },
    gold: {
        secondary: 'zinc',
        createProcessingTime: 300
    },
    copper: {
        secondary: 'gold',
        createProcessingTime: 350
    },
    aluminum: {
        secondary: 'iron',
        createProcessingTime: 300
    },
    lead: {
        secondary: 'silver',
        createProcessingTime: 300
    },
    silver: {
        secondary: 'lead',
        createProcessingTime: 300
    },
    uranium: {
        secondary: 'lead',
        createProcessingTime: 400
    },
    osmium: {
        secondary: 'tin',
        createProcessingTime: 400
    },
    tin: {
        secondary: 'osmium',
        createProcessingTime: 350
    },
    zinc: {
        secondary: 'gold',
        createProcessingTime: 350
    },
    cobalt: {
        secondary: 'iron',
        createProcessingTime: 400
    },
    thallasium: {
        secondary: 'thallasium',
        createProcessingTime: 300
    }
};

// Used to drive Unify_Materials outputs for gem processing.
const gemProcessingProperties = {
    redstone: {
        output: 'dust',
        stoneOutput: 'minecraft:cobblestone',
        thermal: {
            primaryCount: 8,
            secondaryCount: 6,
            secondaryChance: 0.25
        },
        immersiveengineering: {
            count: 6
        },
        mekanism: {
            count: 6
        }
    },
    coal: {
        output: 'gem',
        stoneOutput: 'minecraft:cobblestone',
        secondary: 'emendatusenigmatica:sulfur_dust',
        thermal: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.5
        },
        immersiveengineering: {
            count: 4,
            secondaryChance: 0.15
        },
        mekanism: {
            count: 2
        }
    },
    diamond: {
        output: 'gem',
        stoneOutput: 'minecraft:cobblestone',
        thermal: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25
        },
        immersiveengineering: {
            count: 2
        },
        mekanism: {
            count: 2
        }
    },
    emerald: {
        output: 'gem',
        stoneOutput: 'minecraft:cobblestone',
        thermal: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25
        },
        immersiveengineering: {
            count: 4
        },
        mekanism: {
            count: 2
        }
    },
    lapis: {
        output: 'gem',
        stoneOutput: 'minecraft:cobblestone',
        secondary: 'emendatusenigmatica:sulfur_dust',
        thermal: {
            primaryCount: 8,
            secondaryCount: 4,
            secondaryChance: 0.5
        },
        immersiveengineering: {
            count: 9,
            secondaryChance: 0.2
        },
        mekanism: {
            count: 9
        }
    },
    quartz: {
        output: 'gem',
        stoneOutput: 'minecraft:netherrack',
        secondary: 'emendatusenigmatica:sulfur_dust',
        thermal: {
            primaryCount: 2,
            secondaryCount: 4,
            secondaryChance: 0.5
        },
        immersiveengineering: {
            count: 3,
            secondaryChance: 0.25
        },
        mekanism: {
            count: 3
        }
    },
    sulfur: {
        output: 'gem',
        stoneOutput: 'minecraft:cobblestone',
        thermal: {
            primaryCount: 6,
            secondaryCount: 2,
            secondaryChance: 0.25
        },
        immersiveengineering: {
            count: 6
        },
        mekanism: {
            count: 6
        }
    },
    apatite: {
        output: 'gem',
        stoneOutput: 'minecraft:cobblestone',
        thermal: {
            primaryCount: 8,
            secondaryCount: 4,
            secondaryChance: 0.25
        },
        immersiveengineering: {
            count: 12
        },
        mekanism: {
            count: 12
        }
    },
    fluorite: {
        output: 'gem',
        stoneOutput: 'minecraft:cobblestone',
        thermal: {
            primaryCount: 6,
            secondaryCount: 3,
            secondaryChance: 0.25
        },
        immersiveengineering: {
            count: 6
        },
        mekanism: {
            count: 6
        }
    },
    dimensional: {
        output: 'gem',
        stoneOutput: 'minecraft:cobblestone',
        thermal: {
            primaryCount: 6,
            secondaryCount: 3,
            secondaryChance: 0.25
        },
        immersiveengineering: {
            count: 8
        },
        mekanism: {
            count: 8
        }
    },
    ender: {
        output: 'shard',
        stoneOutput: 'betterendforge:endstone_dust',
        thermal: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25
        },
        immersiveengineering: {
            count: 3
        },
        mekanism: {
            count: 3
        }
    },
    amber: {
        output: 'shard',
        stoneOutput: 'betterendforge:endstone_dust',
        thermal: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25
        },
        immersiveengineering: {
            count: 3
        },
        mekanism: {
            count: 3
        }
    },
    potassium_nitrate: {
        output: 'gem',
        stoneOutput: 'minecraft:cobblestone',
        thermal: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25
        },
        immersiveengineering: {
            count: 3
        },
        mekanism: {
            count: 3
        }
    },
    bitumen: {
        output: 'gem',
        stoneOutput: 'minecraft:cobblestone',
        thermal: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.5
        },
        immersiveengineering: {
            count: 4
        },
        mekanism: {
            count: 4
        }
    },
    cinnabar: {
        output: 'gem',
        stoneOutput: 'minecraft:cobblestone',
        thermal: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.5
        },
        immersiveengineering: {
            count: 4
        },
        mekanism: {
            count: 4
        }
    }
};

let modifyShaped = (e, result, count, pattern, ingredients) => {
    e.remove({ output: result, type: 'minecraft:crafting_shaped' })
    e.shaped(item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}

let modifyShapeless = (e, result, count, ingredients) => {
e.remove({ output: result, type: 'minecraft:crafting_shapeless' })
e.shapeless(item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}

let modifySmelt = (e, result, ingredients) => {
e.remove({ output: result, type: 'minecraft:smelting' })
e.smelting(result, ingredients).id(`kubejs:smelting/${result.replace(':', '/')}`)
}

let removeRecipeByID = (e, recipes) => {
recipes.forEach(recipe => {
    e.remove({ id: recipe })
})
}

let removeRecipeByOutput = (e, recipes) => {
recipes.forEach(recipe => {
    if (Array.isArray(recipe)) {
    e.remove({ type: recipe[1], output: recipe[0] })
    } else {
    e.remove({ output: recipe })
    }
})
}

let woodcutting = (e, recipes) => {
    recipes.forEach(([input, output, count]) => {
      e.custom({
        type: "corail_woodcutter:woodcutting",
        ingredient: { item: input },
        result: output,
        count: count
      }).id(`kubejs:woodcutting/${input.replace(':', '/')}`)
    })
  }