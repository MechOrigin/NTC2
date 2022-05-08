onEvent('server.datapack.low_priority', (event) => {
  var data = [
    //tier 1
    {
      identifier: 'treated_wood',
      recipes: [{
          craftable: true,
          tier: 1,
          sortOrder: 0,
          textColor: '#5c2d19'
        },
        {
          stats: {
            'tconstruct:extra': {},
            'tconstruct:handle': {
              durability: 0.9,
              miningSpeed: 1.1,
              attackSpeed: 1.0,
              attackDamage: 1.0
            },
            'tconstruct:head': {
              durability: 60,
              miningSpeed: 2.5,
              harvestLevel: 0,
              attack: 0.0
            }
          }
        },
        {
          default: [{
            name: 'tconstruct:cultivated',
            level: 1
          }]
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:treated_wood'
          },
          value: 1,
          needed: 1,
          material: 'enigmatica:treated_wood'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:rods/treated_wood'
          },
          value: 1,
          needed: 2,
          material: 'enigmatica:treated_wood'
        }
      ]
    },
    //tier 2
    {
      identifier: 'thallasium',
      recipes: [{
          craftable: false,
          tier: 2,
          sortOrder: 2,
          textColor: '#87dad2'
        },
        {
          stats: {
            'tconstruct:extra': {},
            'tconstruct:handle': {
              durability: 1.0,
              miningSpeed: 1.0,
              attackSpeed: 1.05,
              attackDamage: 1.0
            },
            'tconstruct:head': {
              durability: 320,
              miningSpeed: 7.0,
              harvestLevel: 2,
              attack: 1.5
            }
          }
        },
        {
          default: [{
            name: 'tconstruct:sturdy',
            level: 1
          }]
        },
        {
          type: 'tconstruct:material_fluid',
          fluid: {
            name: 'emendatusenigmatica:molten_thallasium',
            amount: 144
          },
          temperature: 825,
          output: 'enigmatica:thallasium'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:ingots/thallasium'
          },
          value: 1,
          needed: 1,
          material: 'enigmatica:thallasium'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:storage_blocks/thallasium'
          },
          value: 9,
          needed: 1,
          material: 'enigmatica:thallasium',
          leftover: {
            tag: 'forge:ingots/thallasium'
          }
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:nuggets/thallasium'
          },
          value: 1,
          needed: 9,
          material: 'enigmatica:thallasium'
        }
      ]
    },
    {
      identifier: 'tin',
      recipes: [{
          craftable: false,
          tier: 2,
          sortOrder: 1,
          textColor: '#8eadb1'
        },
        {
          stats: {
            'tconstruct:extra': {},
            'tconstruct:handle': {
              durability: 0.8,
              miningSpeed: 1.05,
              attackSpeed: 1.0,
              attackDamage: 1.0
            },
            'tconstruct:head': {
              durability: 150,
              miningSpeed: 6.0,
              harvestLevel: 2,
              attack: 1.0
            }
          }
        },
        {
          default: [{
            name: 'tconstruct:stonebound',
            level: 1
          }]
        },
        {
          type: 'tconstruct:material_fluid',
          fluid: {
            tag: 'tconstruct:molten_tin',
            amount: 144
          },
          temperature: 225,
          output: 'enigmatica:tin'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:ingots/tin'
          },
          value: 1,
          needed: 1,
          material: 'enigmatica:tin'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:storage_blocks/tin'
          },
          value: 9,
          needed: 1,
          material: 'enigmatica:tin',
          leftover: {
            tag: 'forge:ingots/tin'
          }
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:nuggets/tin'
          },
          value: 1,
          needed: 9,
          material: 'enigmatica:tin'
        }
      ]
    },
    {
      identifier: 'zinc',
      recipes: [{
          craftable: false,
          tier: 2,
          sortOrder: 1,
          textColor: '#b8bd89'
        },
        {
          stats: {
            'tconstruct:extra': {},
            'tconstruct:handle': {
              durability: 0.8,
              miningSpeed: 1.05,
              attackSpeed: 1.0,
              attackDamage: 1.0
            },
            'tconstruct:head': {
              durability: 200,
              miningSpeed: 6.0,
              harvestLevel: 2,
              attack: 1.0
            }
          }
        },
        {
          default: [{
            name: 'tconstruct:stonebound',
            level: 1
          }]
        },
        {
          type: 'tconstruct:material_fluid',
          fluid: {
            tag: 'tconstruct:molten_zinc',
            amount: 144
          },
          temperature: 420,
          output: 'enigmatica:zinc'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:storage_blocks/zinc'
          },
          value: 9,
          needed: 1,
          material: 'enigmatica:zinc',
          leftover: {
            tag: 'forge:ingots/zinc'
          }
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:ingots/zinc'
          },
          value: 1,
          needed: 1,
          material: 'enigmatica:zinc'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:nuggets/zinc'
          },
          value: 1,
          needed: 9,
          material: 'enigmatica:zinc'
        }
      ]
    },
    //tier 3
    /* Add this as enderioalloy
      {
        identifier: 'energized_steel',
        recipes: [
            {
                "craftable": false,
                "tier": 3,
                "sortOrder": 0,
                "textColor": '#b89365'
            },
            {
                stats: {
                  "tconstruct:extra": {},
                  "tconstruct:handle": {
                    "durability": 1.0,
                    "miningSpeed": 1.05,
                    "attackSpeed": 1.05,
                    "attackDamage": 1.0
                  },
                  "tconstruct:head": {
                    "durability": 500,
                    "miningSpeed": 7.0,
                    "harvestLevel": 3,
                    "attack": 2.5
                  }
                }
            },
            {
                "default": [
                  {
                    "name": "tconstruct:magnetic",
                    "level": 1
                  }
                ]
            },
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                  "name": "kubejs:molten_energized_steel",
                  "amount": 144
                },
                "temperature": 875,
                "output": "tconstruct:energized_steel"
            },
            {
                "type": "tconstruct:material",
                "ingredient": {
                  "tag": "forge:ingots/energized_steel"
                },
                "value": 1,
                "needed": 1,
                "material": "tconstruct:energized_steel"
            },
            {
                "type": "tconstruct:material",
                "ingredient": {
                  "tag": "forge:storage_blocks/energized_steel"
                },
                "value": 9,
                "needed": 1,
                "material": "tconstruct:energized_steel",
                "leftover": {
                  "tag": "forge:ingots/energized_steel"
                }
            }
        ]
      },*/
    {
      identifier: 'terminite',
      recipes: [{
          craftable: false,
          tier: 3,
          sortOrder: 2,
          textColor: '#74f3e3'
        },
        {
          stats: {
            'tconstruct:extra': {},
            'tconstruct:handle': {
              durability: 1.0,
              miningSpeed: 1.0,
              attackSpeed: 1.05,
              attackDamage: 1.05
            },
            'tconstruct:head': {
              durability: 1230,
              miningSpeed: 8.5,
              harvestLevel: 3,
              attack: 3.0
            }
          }
        },
        {
          default: [{
            name: 'tconstruct:severing',
            level: 1
          }]
        },
        {
          type: 'tconstruct:material_fluid',
          fluid: {
            name: 'kubejs:molten_terminite',
            amount: 144
          },
          temperature: 840,
          output: 'enigmatica:terminite'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:ingots/terminite'
          },
          value: 1,
          needed: 1,
          material: 'enigmatica:terminite'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:storage_blocks/terminite'
          },
          value: 9,
          needed: 1,
          material: 'enigmatica:terminite',
          leftover: {
            tag: 'forge:ingots/terminite'
          }
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:nuggets/terminite'
          },
          value: 1,
          needed: 9,
          material: 'enigmatica:terminite'
        }
      ]
    },
    //tier 4
    {
      identifier: 'aeternium',
      recipes: [{
          craftable: false,
          tier: 4,
          sortOrder: 0,
          textColor: '#2e847c'
        },
        {
          stats: {
            'tconstruct:extra': {},
            'tconstruct:handle': {
              durability: 0.95,
              miningSpeed: 1.1,
              attackSpeed: 1.1,
              attackDamage: 1.0
            },
            'tconstruct:head': {
              durability: 2196,
              miningSpeed: 10.0,
              harvestLevel: 4,
              attack: 4.5
            }
          }
        },
        {
          default: [{
            name: 'tconstruct:ductile',
            level: 1
          }]
        },
        {
          type: 'tconstruct:material_fluid',
          fluid: {
            name: 'kubejs:molten_aeternium',
            amount: 144
          },
          temperature: 1250,
          output: 'enigmatica:aeternium'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:ingots/aeternium'
          },
          value: 1,
          needed: 1,
          material: 'enigmatica:aeternium'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:storage_blocks/aeternium'
          },
          value: 9,
          needed: 1,
          material: 'enigmatica:aeternium',
          leftover: {
            tag: 'forge:ingots/aeternium'
          }
        }
      ]
    },
    {
      identifier: 'enderium',
      recipes: [{
          craftable: false,
          tier: 4,
          sortOrder: 2,
          textColor: '#2c8c9c'
        },
        {
          stats: {
            'tconstruct:extra': {},
            'tconstruct:handle': {
              durability: 0.9,
              miningSpeed: 1.0,
              attackSpeed: 1.05,
              attackDamage: 1.2
            },
            'tconstruct:head': {
              durability: 1800,
              miningSpeed: 7.0,
              harvestLevel: 4,
              attack: 4.0
            }
          }
        },
        {
          default: [{
            name: 'tconstruct:experienced',
            level: 1
          }]
        },
        {
          type: 'tconstruct:material_fluid',
          fluid: {
            name: 'emendatusenigmatica:molten_enderium',
            amount: 144
          },
          temperature: 1450,
          output: 'enigmatica:enderium'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:ingots/enderium'
          },
          value: 1,
          needed: 1,
          material: 'enigmatica:enderium'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:storage_blocks/enderium'
          },
          value: 9,
          needed: 1,
          material: 'enigmatica:enderium',
          leftover: {
            tag: 'forge:ingots/enderium'
          }
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:nuggets/enderium'
          },
          value: 1,
          needed: 9,
          material: 'enigmatica:enderium'
        }
      ]
    },
    {
      identifier: 'lumium',
      recipes: [{
          craftable: false,
          tier: 4,
          sortOrder: 1,
          textColor: '#fceea8'
        },
        {
          stats: {
            'tconstruct:extra': {},
            'tconstruct:handle': {
              durability: 0.95,
              miningSpeed: 1.25,
              attackSpeed: 1.0,
              attackDamage: 1.0
            },
            'tconstruct:head': {
              durability: 300,
              miningSpeed: 11.0,
              harvestLevel: 3,
              attack: 2.0
            }
          }
        },
        {
          default: [{
            name: 'tconstruct:lightspeed',
            level: 1
          }]
        },
        {
          type: 'tconstruct:material_fluid',
          fluid: {
            name: 'emendatusenigmatica:molten_lumium',
            amount: 144
          },
          temperature: 1354,
          output: 'enigmatica:lumium'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:ingots/lumium'
          },
          value: 1,
          needed: 1,
          material: 'enigmatica:lumium'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:storage_blocks/lumium'
          },
          value: 9,
          needed: 1,
          material: 'enigmatica:lumium',
          leftover: {
            tag: 'forge:ingots/lumium'
          }
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:nuggets/lumium'
          },
          value: 1,
          needed: 9,
          material: 'enigmatica:lumium'
        }
      ]
    },
    {
      identifier: 'signalum',
      recipes: [{
          craftable: false,
          tier: 4,
          sortOrder: 1,
          textColor: '#ec3606'
        },
        {
          stats: {
            'tconstruct:extra': {},
            'tconstruct:handle': {
              durability: 0.85,
              miningSpeed: 1.2,
              attackSpeed: 1.05,
              attackDamage: 1.0
            },
            'tconstruct:head': {
              durability: 350,
              miningSpeed: 11.0,
              harvestLevel: 3,
              attack: 2.0
            }
          }
        },
        {
          default: [{
            name: 'tconstruct:lightweight',
            level: 1
          }]
        },
        {
          type: 'tconstruct:material_fluid',
          fluid: {
            name: 'emendatusenigmatica:molten_signalum',
            amount: 144
          },
          temperature: 1272,
          output: 'enigmatica:signalum'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:ingots/signalum'
          },
          value: 1,
          needed: 1,
          material: 'enigmatica:signalum'
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:storage_blocks/signalum'
          },
          value: 9,
          needed: 1,
          material: 'enigmatica:signalum',
          leftover: {
            tag: 'forge:ingots/signalum'
          }
        },
        {
          type: 'tconstruct:material',
          ingredient: {
            tag: 'forge:nuggets/signalum'
          },
          value: 1,
          needed: 9,
          material: 'enigmatica:signalum'
        }
      ]
    }
  ];

  data.forEach((recipeType) => {
    event.addJson(`tconstruct:materials/definition/${recipeType.identifier}.json`, {
      redirect: [{
        id: `ntc2:${recipeType.identifier}`
      }]
    });

    event.addJson(`ntc2:materials/definition/${recipeType.identifier}.json`, recipeType.recipes[0]);
    event.addJson(`ntc2:materials/stats/${recipeType.identifier}.json`, recipeType.recipes[1]);
    event.addJson(`ntc2:materials/traits/${recipeType.identifier}.json`, recipeType.recipes[2]);
    for (let i = 3; i < recipeType.recipes.length; i++) {
      event.addJson(
        `ntc2:recipes/tools/materials/${recipeType.identifier}/${recipeType.identifier}${i}.json`,
        recipeType.recipes[i]
      );
    }
  });
});