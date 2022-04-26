events.listen('recipes', function (event) {
//Thanks Dasffion
//Compressed Collectors
  event.shapeless(item.of('projectexpansion:basic_collector', 9), ['projectexpansion:basic_compressed_collector'])
  event.shapeless(item.of('projectexpansion:blue_collector', 9), ['projectexpansion:blue_compressed_collector'])
  event.shapeless(item.of('projectexpansion:cyan_collector', 9), ['projectexpansion:cyan_compressed_collector'])
  event.shapeless(item.of('projectexpansion:dark_collector', 9), ['projectexpansion:dark_compressed_collector'])
  event.shapeless(item.of('projectexpansion:fading_collector', 9), ['projectexpansion:fading_compressed_collector'])
  event.shapeless(item.of('projectexpansion:final_collector', 9), ['projectexpansion:final_compressed_collector'])
  event.shapeless(item.of('projectexpansion:green_collector', 9), ['projectexpansion:green_compressed_collector'])
  event.shapeless(item.of('projectexpansion:lime_collector', 9), ['projectexpansion:lime_compressed_collector'])
  event.shapeless(item.of('projectexpansion:magenta_collector', 9), ['projectexpansion:magenta_compressed_collector'])
  event.shapeless(item.of('projectexpansion:orange_collector', 9), ['projectexpansion:orange_compressed_collector'])
  event.shapeless(item.of('projectexpansion:pink_collector', 9), ['projectexpansion:pink_compressed_collector'])
  event.shapeless(item.of('projectexpansion:purple_collector', 9), ['projectexpansion:purple_compressed_collector'])
  event.shapeless(item.of('projectexpansion:red_collector', 9), ['projectexpansion:red_compressed_collector'])
  event.shapeless(item.of('projectexpansion:violet_collector', 9), ['projectexpansion:violet_compressed_collector'])
  event.shapeless(item.of('projectexpansion:white_collector', 9), ['projectexpansion:white_compressed_collector'])
  event.shapeless(item.of('projectexpansion:yellow_collector', 9), ['projectexpansion:yellow_compressed_collector'])
  // just handled it with thermal.zs
  // event.shapeless(item.of('projecte:collector_mk1', 1), ['projectexpansion:basic_collector'])
  // event.shapeless(item.of('projecte:collector_mk2', 1), ['projectexpansion:dark_collector'])
  // event.shapeless(item.of('projecte:collector_mk3', 1), ['projectexpansion:red_collector'])
  // event.shapeless(item.of('projecte:relay_mk1', 1), ['projectexpansion:basic_relay'])
  // event.shapeless(item.of('projecte:relay_mk2', 1), ['projectexpansion:dark_relay'])
  // event.shapeless(item.of('projecte:relay_mk3', 1), ['projectexpansion:red_relay'])

  removeRecipeByID(event, [
    '/emc_link/basic/',
    '/emc_link/dark/',
    '/emc_link/red/',
    '/emc_link/magenta/',
    '/emc_link/pink/',
    '/emc_link/purple/',
    '/emc_link/violet/',
    '/emc_link/blue/',
    '/emc_link/cyan/',
    '/emc_link/green/',
    '/emc_link/lime/',
    '/emc_link/yellow/',
    '/emc_link/orange/',
    '/emc_link/white/',
    '/emc_link/fading/',
    '/emc_link/final/',
  ])

  //Thanks Kithi
  event.shaped('1x projectexpansion:basic_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projecte:transmutation_tablet',
    C: 'projecte:condenser_mk1'
  }).id(`kubejs:projectexpansion/basic_emc_link`)
  event.shaped('1x projectexpansion:dark_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projecte:dark_matter',
    C: 'projectexpansion:basic_emc_link'
  }).id(`kubejs:projectexpansion/dark_emc_link`)
  event.shaped('1x projectexpansion:red_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projecte:red_matter',
    C: 'projectexpansion:dark_emc_link'
  }).id(`kubejs:projectexpansion/red_emc_link`)
  event.shaped('1x projectexpansion:magenta_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:magenta_matter',
    C: 'projectexpansion:red_emc_link'
  }).id(`kubejs:projectexpansion/magenta_emc_link`)
  event.shaped('1x projectexpansion:purple_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:purple_matter',
    C: 'projectexpansion:magenta_emc_link'
  }).id(`kubejs:projectexpansion/purple_emc_link`)
  event.shaped('1x projectexpansion:pink_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:pink_matter',
    C: 'projectexpansion:purple_emc_link'
  }).id(`kubejs:projectexpansion/pink_emc_link`)
  event.shaped('1x projectexpansion:violet_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:violet_matter',
    C: 'projectexpansion:pink_emc_link'
  }).id(`kubejs:projectexpansion/violet_emc_link`)
  event.shaped('1x projectexpansion:blue_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:blue_matter',
    C: 'projectexpansion:violet_emc_link'
  }).id(`kubejs:projectexpansion/blue_emc_link`)
  event.shaped('1x projectexpansion:cyan_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:cyan_matter',
    C: 'projectexpansion:blue_emc_link'
  }).id(`kubejs:projectexpansion/cyan_emc_link`)
  event.shaped('1x projectexpansion:green_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:green_matter',
    C: 'projectexpansion:cyan_emc_link'
  }).id(`kubejs:projectexpansion/green_emc_link`)
  event.shaped('1x projectexpansion:lime_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:lime_matter',
    C: 'projectexpansion:green_emc_link'
  }).id(`kubejs:projectexpansion/lime_emc_link`)
  event.shaped('1x projectexpansion:yellow_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:yellow_matter',
    C: 'projectexpansion:lime_emc_link'
  }).id(`kubejs:projectexpansion/yellow_emc_link`)
  event.shaped('1x projectexpansion:orange_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:orange_matter',
    C: 'projectexpansion:yellow_emc_link'
  }).id(`kubejs:projectexpansion/orange_emc_link`)
  event.shaped('1x projectexpansion:white_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:white_matter',
    C: 'projectexpansion:orange_emc_link'
  }).id(`kubejs:projectexpansion/white_emc_link`)
  event.shaped('1x projectexpansion:fading_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:fading_matter',
    C: 'projectexpansion:white_emc_link'
  }).id(`kubejs:projectexpansion/fading_emc_link`)
  event.shaped('1x projectexpansion:final_emc_link', ['LMH', 'TCT', 'HML'], {
    L: 'projecte:low_covalence_dust',
    M: 'projecte:medium_covalence_dust',
    H: 'projecte:high_covalence_dust',
    T: 'projectexpansion:final_star_shard',
    C: 'projectexpansion:fading_emc_link'
  }).id(`kubejs:projectexpansion/final_emc_link`)

  event.recipes.extendedcrafting.shaped_table('projecte:watch_of_flowing_time', [
    'GGGGGGGGG',
    'GGGGGGGGG',
    'GGKFFFKGG',
    'GGFOIOFGG',
    'GGFISIFGG',
    'GGFOIOFGG',
    'GGKFFFKGG',
    'GGGGGGGGG',
    'GGGGGGGGG'
  ], {
    G: 'compressium:gold_5',
    F: 'projectexpansion:fading_matter',
    O: 'projectexpansion:magnum_star_omega',
    I: 'projectexpansion:infinite_fuel',
    K: 'projecte:relay_mk3',
    S: Item.of('extendedcrafting:singularity', {Id:"extendedcrafting:time_in_a_bottle"})
  })

})
