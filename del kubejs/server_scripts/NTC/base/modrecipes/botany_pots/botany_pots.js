onEvent(`recipes`, e => {
  //#region FUNCTIONS
  //Soils
  function makeFarmland(input, name, categories, growthModifier) {
    e.recipes.botanypots.soil({
      input: {
        item: input
      },
      display: {
        block: input,
        properties: {
          moisture: 7
        }
      },
      categories: categories,
      growthModifier: growthModifier
    }).id(`kubejs:botany_pots/soil/${name}`)
  }
  function makeSoil(input, name, categories, growthModifier) {
    e.recipes.botanypots.soil({
      input: {
        item: input
      },
      display: {
        block: input
      },
      categories: categories,
      growthModifier: growthModifier
    }).id(`kubejs:botany_pots/soil/${name}`)
  }
  //Crops
  function tier(types, time, soil) {
    types.forEach(type => {
      let rItem = `mysticalagriculture:${type}_essence`
      let inItem = `mysticalagriculture:${type}_seeds`
      let renBlock = `mysticalagriculture:${type}_crop`

      e.remove({
        id: `mysticalagriculture:crops/${type}`
      })

      e.recipes.botanypots.crop({
        seed: Ingredient.of(inItem).toJson(),
        categories: [soil],
        growthTicks: time,
        display: {
          block: renBlock,
          properties: {
            age: 7
          }
        },
        results: [{
          chance: 0.75,
          output: Item.of(rItem).toResultJson(),
          minRolls: 1,
          maxRolls: 3
        },
        {
          chance: 0.05,
          output: Item.of(inItem).toResultJson(),
          minRolls: 1,
          maxRolls: 1
        },
        {
          chance: 0.01,
          output: Item.of(`mysticalagriculture:fertilized_essence`).toResultJson(),
          minRolls: 1,
          maxRolls: 1
        }
        ]
      }).id(`kubejs:botany_pots/crop/mystical_agriculture/${type}`)
    })
  }
  //#endregion

  makeFarmland(`mysticalagradditions:insanium_farmland`, `insanium_farmland`, [`dirt`, `farmland`, `inferium`, `prudentium`, `tertium`, `imperium`, `supremium`, `insanium`], 0.9)
  makeSoil(`mysticalagriculture:inferium_farmland`, `magical_soil`, [`dirt`, `farmland`, `inferium`, `prudentium`, `tertium`, `imperium`, `supremium`, `insanium`, `magical`], 0.16)

  //#region CROPS
  //Tier 1 Crops
  tier([
    `inferium`,
    `air`,
    `earth`,
    `fire`,
    `water`,
    `dirt`,
    `wood`,
    `ice`,
    `stone`
  ], 1000, `inferium`)
  //Tier 2 Crops
  tier([
    `aluminum`,
    `chicken`,
    `coal`,
    `copper`,
    `coral`,
    `cow`,
    `dye`,
    `fish`,
    `honey`,
    `iridium`,
    `nature`,
    `nether`,
    `pig`,
    `rubber`,
    `saltpeter`,
    `sheep`,
    `silicon`,
    `slime`,
    `squid`,
    `sulfur`,
    `turtle`,
    `sky_stone`,
    `apatite`
  ], 1750, `prudentium`)
  //Tier 3 Crops
  tier([
    `brass`,
    `bronze`,
    `certus_quartz`,
    `creeper`,
    `ender_biotite`,
    `glowstone`,
    `graphite`,
    `iron`,
    `lead`,
    `nether_quartz`,
    `obsidian`,
    `prismarine`,
    `quartz_enriched_iron`,
    `rabbit`,
    `redstone`,
    `silver`,
    `skeleton`,
    `spider`,
    `tin`,
    `zinc`,
    `zombie`,
    `lumium`,
    `fluorite`,
    `tinkers_bronze`,
    `slimesteel`,
    `pig_iron`
  ], 2500, `tertium`)
  //Tier 4 Crops
  tier([
    `blaze`,
    `chrome`,
    `constantan`,
    `electrum`,
    `end`,
    `enderman`,
    `experience`,
    `fluix`,
    `ghast`,
    `gold`,
    `invar`,
    `lapis_lazuli`,
    `nickel`,
    `osmium`,
    `refined_glowstone`,
    `refined_obsidian`,
    `steel`,
    `titanium`,
    `tungsten`,
    `enderium`,
    `hop_graphite`,
    `cobalt`,
    `rose_gold`
  ], 3250, `imperium`)
  //Tier 5 Crops
  tier([
    `diamond`,
    `emerald`,
    `netherite`,
    `wither_skeleton`,
    `platinum`,
    `uranium`,
    `manyullyn`,
    `queens_slime`,
    `hepatizon`
  ], 4000, `supremium`)
  //Tier 6 Crops
  tier([
    `dragon_egg`,
    `nether_star`
  ], 4750, `insanium`)
  /*
  //Magical Crops
  tier([
    `test`
  ], 5500, `magical`)
 */
  //#endregion
})
