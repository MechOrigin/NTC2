onEvent('fluid.registry', event => {
    // Basic "thick" (looks like lava) fluid with red tint
//    event.create('thick_fluid').textureThick(0xFF0000).bucketColor(0xFF0000).displayName('Thick Fluid')
    // Basic "thin" (looks like water) fluid with cyan tint
//    event.create('thin_fluid').textureThin(0x00FFFF).bucketColor(0x00FFFF).displayName('Thin Fluid')
    
    event.create('molten_basalz').textureThick(0x543c34).bucketColor(0x543c34).displayName('Molten Basalz')
    event.create('molten_blitz').textureThick(0xfcd324).bucketColor(0xfcd324).displayName('Molten Blitz')
    event.create('molten_blizz').textureThick(0x2cb4fc).bucketColor(0x2cb4fc).displayName('Molten Blizz')

    event.create('molten_ender_iron').textureThick(0x1b7a6a).bucketColor(0x1b7a6a).displayName('Molten Ender Iron')

    //better end fluids
    event.create('liquid_amber_root').displayName('Amber Root Resin').textureStill('kubejs:block/liquid_amber_root_still').textureFlowing('kubejs:block/liquid_amber_root_flow').bucketColor(0xf2ab4a)

    event.create('liquid_blossom_berry').displayName('Blossom Berry Resin').textureStill('kubejs:block/liquid_blossom_berry_still').textureFlowing('kubejs:block/liquid_blossom_berry_flow').bucketColor(0xff6ee5)

    event.create('liquid_blue_vine').displayName('Blue Lantern Resin').textureStill('kubejs:block/liquid_blue_vine_still').textureFlowing('kubejs:block/liquid_blue_vine_flow').bucketColor(0x2288f6)

    event.create('liquid_bulb_vine').displayName('Glowing Bulb Resin').textureStill('kubejs:block/liquid_bulb_vine_still').textureFlowing('kubejs:block/liquid_bulb_vine_flow').bucketColor(0x642b59)

    event.create('liquid_chorus_mushroom').displayName('Chorus Mushroom Resin').textureStill('kubejs:block/liquid_chorus_mushroom_still').textureFlowing('kubejs:block/liquid_chorus_mushroom_flow').bucketColor(0xf1d3f1)

    event.create('liquid_end_lily').displayName('End Lily Resin').textureStill('kubejs:block/liquid_end_lily_still').textureFlowing('kubejs:block/liquid_end_lily_flow').bucketColor(0x7db9b3)

    event.create('liquid_end_lotus').displayName('End Lotus Resin').textureStill('kubejs:block/liquid_end_lotus_still').textureFlowing('kubejs:block/liquid_end_lotus_flow').bucketColor(0x38e1b0)

    event.create('liquid_glowing_pillar').displayName('Glowing Luminophor Resin').textureStill('kubejs:block/liquid_glowing_pillar_still').textureFlowing('kubejs:block/liquid_glowing_pillar_flow').bucketColor(0xf4943f)

    event.create('liquid_lumecorn').displayName('Lumecorn Resin').textureStill('kubejs:block/liquid_lumecorn_still').textureFlowing('kubejs:block/liquid_lumecorn_flow').bucketColor(0xa6e0be)

    event.create('liquid_shadow_berry').displayName('Shadow Berry Resin').textureStill('kubejs:block/liquid_shadow_berry_still').textureFlowing('kubejs:block/liquid_shadow_berry_flow').bucketColor(0x28438e)

    //Oil Stuff
    event.create('liquid_propane').textureThin(0xb67c8b).bucketColor(0xb67c8b).displayName('Propane')
    event.create('liquid_ethane').textureThin(0xba7b78).bucketColor(0xba7b78).displayName('Ethane')
    event.create('liquid_propylene').textureThin(0xbaa578).bucketColor(0xbaa578).displayName('Propylene')

    //Circuit stuff
    event.create('liquid_refined_glue').textureThin(0xfff1d9).bucketColor(0xfff1d9).displayName('Refined Glue')

    //aeternium (better end)
    event.create('molten_aeternium').textureThin(0x2b5f47).bucketColor(0x2b5f47).displayName('Molten Aeternium')
    event.create('molten_terminite').textureThin(0x42d7c5).bucketColor(0x42d7c5).displayName('Molten Terminite')

  })