onEvent('recipes', e => {

  removeRecipeByID(e, [
    'betternether:quartz_glass'
  ])

  modifyShaped(e, 'betternether:quartz_glass', 2, [' G ', 'GDG', ' G '], {
    G: 'emendatusenigmatica:quartz_dust',
    D: 'minecraft:glass'
  })

})
