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
    'charged_certus_quartz',
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
    'bitumen'
];

// Used to determine which material types to unify
const typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod'];

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

// Defines melting point of various materials
const meltingPoints = {
    thallasium: { temp: 800 },
    signalum: { temp: 1272 },
    lumium: { temp: 1354 },
    enderium: { temp: 1450 },
    sulfur: { temp: 115 },
    redstone: { temp: 660 },
    potassium_nitrate: { temp: 334 },
    lapis: { temp: 115 },
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
