
onEvent('block.registry', (event) => {
  /*
  const blocks = [{ 
    name: 'bauxite_ore_sample', material: 'rock', hardness: 2 
}];

  blocks.forEach((block) => {
      event.create(block.name).material(block.material).hardness(block.hardness);
  });
*/
  event.create('ancient_debris_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Ancient Debris Ore Sample');//ab
  event.create('anthracite_coal_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Anthracite Coal Ore Sample');//coal
  event.create('autunite_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Autunite Ore Sample');//uranium
  event.create('azurite_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Azurite Ore Sample');//copper carbonate
  event.create('bauxite_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Bauxite Ore Sample');//aluminum hydroxide
  event.create('beryl_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Beryl Ore Sample');//emerald
  event.create('bituminous_coal_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Bituminous Coal Ore Sample');//coal
  event.create('cassiterite_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Cassiterite Ore Sample');//tin dioxide
  event.create('cinnabar_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Cinnabar Ore Sample');//redstone
  event.create('coal_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Coal Ore Sample');//coal
  event.create('galena_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Galena Ore Sample');//lead sulfide, silver
  event.create('gold_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Gold Ore Sample');//gold
  event.create('hematite_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Hematite Ore Sample');//ferric oxide
  event.create('kimberlite_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Kimberlite Ore Sample');//diamond
  event.create('lapis_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Lapis Ore Sample');//lapis
  event.create('lignite_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Lignite Ore Sample');//coal
  event.create('limonite_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Limonite Ore Sample');//iron oxide, nickel
  event.create('malachite_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Malachite Ore Sample');//copper carbonate hydroxide
  event.create('nether_gold_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Nether Gold Ore Sample');//poor gold (4 nuggets)
  event.create('platinum_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Osmium Ore Sample');//osmium (end)
  event.create('quartz_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Quartz Ore Sample');//quartz
  event.create('sphalerite_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Sphalerite Ore Sample');//zinc sulfide
  event.create('teallite_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Teallite Ore Sample');//tin lead sulfide

  event.create('cobalt_ore_sample').material('rock').hardness('2').renderType('cutout').notSolid().fullBlock(false).shapeCube(0, 0, 0, 16, 6, 16).noDrops().displayName('Cobalt Ore Sample');//cobalt (nether)

});

/*
air
wood
rock
iron
organic
earth
water
lava
leaves
plants
sponge
wool
sand
glass
tnt
coral
ice
snow
clay
groud
dragon_egg
portal
cake
web
slime
honey
berry_bush
lantern
*/
/*

    material('material')
    hardness(float) // >= 0.0
    resistance(float) // >= 0.0
    unbreakable()
    lightLevel(int) // 0.0 - 1.0
    harvestTool('tool', level) // Available tools: pickaxe, axe, hoe, shovel, level >= 0
    opaque(boolean)
    fullBlock(boolean)
    requiresTool(boolean)
    renderType('type') // solid, cutout, translucent, cutout required for blocks with texture like glass, translucent required for blocks like stained glass
    color(tintindex, color)
    texture('texturepath')
    texture('side', 'texturepath')
    model('modelpath')
    noItem()
    shapeCube(x0, y0, z0, x1, y1, z1) // 0.0 - 16.0, default is (0,0,0,16,16,16)
    notSolid()
    waterlogged()
    noDrops()
    slipperiness(float) // 
    speedFactor(float)
    jumpFactor(float)
    randomTick(randomTickEvent => {}) // see below
    item(itemBuilder => {})
    setLootTableJson(json)
    setBlockstateJson(json)
    setModelJson(json)

*/