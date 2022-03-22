onEvent('recipes', e => {
//  e.remove({ id: 'akashictome:tome' })

  e.shapeless(
    Item.of('morphtool:tool', {
      'morphtool:data': {

        mekanism: {
          id: 'mekanism:configurator',
          Count: 1
        }
          
      }
    }),
    'morphtool:tool'
  ).id(`kubejs:morphtool`)
})
