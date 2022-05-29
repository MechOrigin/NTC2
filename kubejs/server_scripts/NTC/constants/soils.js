//priority: 1001
// Registry of soils for use in botany pots
const soilRegistry = [
   {
      block: 'minecraft:coarse_dirt',
      categories: [ 'dirt', 'coarse_dirt' ],
      growthModifier: 0.05
   },
   {
      block: 'minecraft:crimson_nylium',
      categories: [ 'dirt', 'crimson_nylium', 'nylium', 'mushroom' ],
      growthModifier: 0.05
   },
   {
      block: 'thermal:phytosoil',
      categories: [ 'dirt', 'phytosoil' ],
      growthModifier: 0.25
   },
   {
      block: 'minecraft:farmland',
      categories: [ 'dirt', 'farmland' ],
      growthModifier: 0.15
   },
   {
      block: 'quark:glowcelium',
      categories: [ 'dirt', 'glowcelium', 'mushroom' ],
      growthModifier: 0.05
   },
   {
      block: 'minecraft:podzol',
      categories: [ 'dirt', 'grass', 'podzol', 'mushroom' ],
      growthModifier: 0.05
   },
   {
      block: 'minecraft:grass_block',
      categories: [ 'dirt', 'grass' ],
      growthModifier: 0.05
   },
   {
      block: 'minecraft:mycelium',
      categories: [ 'dirt', 'mushroom' ],
      growthModifier: 0.05
   },
   {
      block: 'minecraft:warped_nylium',
      categories: [ 'dirt', 'warped_nylium', 'nylium', 'mushroom' ],
      growthModifier: 0.05
   },
   {
      block: 'minecraft:dirt',
      categories: [ 'dirt' ],
      growthModifier: 0
   },
   {
      block: 'minecraft:end_stone',
      categories: [ 'end_stone' ],
      growthModifier: -0.5
   },
   {
      block: 'minecraft:lava_bucket',
      categories: [ 'fluid', 'liquid', 'lava' ],
      growthModifier: 0
   },
   {
      block: 'minecraft:water_bucket',
      categories: [ 'fluid', 'liquid', 'water' ],
      growthModifier: 0
   },
   {
      block: 'minecraft:netherrack',
      categories: [ 'nether', 'netherrack' ],
      growthModifier: 0
   },
   {
      block: 'minecraft:red_sand',
      categories: [ 'sand', 'red_sand' ],
      growthModifier: 0
   },
   {
      block: 'minecraft:sand',
      categories: [ 'sand', 'red_sand' ],
      growthModifier: 0
   },
   {
      block: 'minecraft:soul_sand',
      categories: [ 'soul_sand', 'nether' ],
      growthModifier: -0.3
   },
   {
      block: 'minecraft:soul_soil',
      categories: [ 'soul_sand', 'nether', 'soul_soil' ],
      growthModifier: 0
   },
   {
      block: 'minecraft:basalt',
      categories: [ 'basalt', 'nether' ],
      growthModifier: 0
   },
   {
      block: 'betterendforge:crystal_moss',
      categories: [ 'end_stone', 'crystal_moss' ],
      growthModifier: 0.5
   },
   {
      block: 'betterendforge:amber_moss',
      categories: [ 'end_stone', 'amber_moss' ],
      growthModifier: 0.5
   },
   {
      block: 'betterendforge:rutiscus',
      categories: [ 'end_stone', 'rutiscus' ],
      growthModifier: 0.5
   },
   {
      block: 'betterendforge:sangnum',
      categories: [ 'end_stone', 'sangnum' ],
      growthModifier: 0.5
   },
   {
      block: 'betterendforge:chorus_nylium',
      categories: [ 'end_stone', 'chorus_nylium' ],
      growthModifier: 0.5
   },
   {
      block: 'betterendforge:jungle_moss',
      categories: [ 'end_stone', 'jungle_moss' ],
      growthModifier: 0.5
   },
   {
      block: 'betterendforge:end_moss',
      categories: [ 'end_stone', 'end_moss' ],
      growthModifier: 0.5
   },
   {
      block: 'betterendforge:shadow_grass',
      categories: [ 'end_stone', 'shadow_grass' ],
      growthModifier: 0.5
   },
   {
      block: 'betterendforge:pink_moss',
      categories: [ 'end_stone', 'pink_moss' ],
      growthModifier: 0.5
   },
   {
      block: 'betterendforge:end_mycelium',
      categories: [ 'end_stone', 'end_mycelium', 'mushroom' ],
      growthModifier: 0.5
   },
   {
      block: 'atmospheric:arid_sand',
      categories: [ 'sand', 'arid_sand' ],
      growthModifier: 0
   },
   {
      block: 'atmospheric:red_arid_sand',
      categories: [ 'sand', 'arid_sand', 'red_arid_sand' ],
      growthModifier: 0
   },
   {
      block: 'inspirations:plain_mulch',
      categories: [ 'dirt' ],
      growthModifier: 0.1
   },
   {
      block: 'inspirations:brown_mulch',
      categories: [ 'dirt' ],
      growthModifier: 0.2
   },
   {
      block: 'inspirations:red_mulch',
      categories: [ 'dirt' ],
      growthModifier: 0.3
   },
   {
      block: 'inspirations:black_mulch',
      categories: [ 'dirt' ],
      growthModifier: 0.4
   },
   {
      block: 'inspirations:blue_mulch',
      categories: [ 'dirt' ],
      growthModifier: 0.5
   },
   {
      block: 'enderioalloys:block_alloy_vibrant_alloy',
      categories: [ 'vibrantCrux' ],
      growthModifier: 0.25
   },
   {
      block: 'appliedenergistics2:64k_crafting_storage',
      categories: [ '64kCrux' ],
      growthModifier: 0.25
   },
   {
      block: 'enderioalloys:block_alloy_crystalline_pink_slime',
      categories: [ 'CrystallinePinkCrux' ],
      growthModifier: 0.25
   },
   {
      block: 'enderioalloys:block_alloy_dark_steel',
      categories: [ 'DarkSteelCrux' ],
      growthModifier: 0.25
   },
   {
      block: 'enderioalloys:block_alloy_end_steel',
      categories: [ 'EndSteelCrux' ],
      growthModifier: 0.25
   },
   {
      block: 'enderioalloys:block_alloy_energetic_alloy',
      categories: [ 'EnergeticCrux' ],
      growthModifier: 0.25
   },
   {
      block: 'enderioalloys:block_alloy_melodic_alloy',
      categories: [ 'MelodicCrux' ],
      growthModifier: 0.25
   },
   {
      block: 'avaritia:neutronium_block',
      categories: [ 'NeutroniumCrux' ],
      growthModifier: 0.25
   },
   {
      block: 'industrialforegoing:dissolution_chamber',
      categories: [ 'DissolutionCrux' ],
      growthModifier: 0.25
   },
   {
      block: 'enderioalloys:block_alloy_stellar_alloy',
      categories: [ 'StellarCrux' ],
      growthModifier: 0.25
   }
];

const dirt_types = [ 'blood', 'earth', 'ender', 'sky' ];
const grass_types = [ 'earth', 'ender', 'ichor', 'sky', 'vanilla' ];

dirt_types.forEach(dirt_type => {
   if (dirt_type != 'blood') {
      soilRegistry.push({
         block: `tconstruct:${dirt_type}_slime_dirt`,
         categories: [ 'slimy_dirt' ],
         growthModifier: 0.0
      });
   }

   grass_types.forEach(grass_type => {
      soilRegistry.push({
         block: `tconstruct:${dirt_type}_${grass_type}_slime_grass`,
         categories: [ 'slimy_dirt' ],
         growthModifier: 0.05
      });
   });
});
