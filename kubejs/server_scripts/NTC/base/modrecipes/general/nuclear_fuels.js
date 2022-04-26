onEvent('recipes', event => {

    //Thorium
    event.shapeless('kubejs:tbu', [ '9x kubejs:232_thorium' ])

    //233
    event.shapeless('kubejs:233_uranium', [ '9x kubejs:clumps_uranium' ])

    //leu (233+238)
    event.shapeless('kubejs:233_leu', [ '8x kubejs:238_uranium', '1x kubejs:233_uranium' ])

    //235
    event.shapeless('kubejs:235_leu', [ '8x kubejs:235_uranium', '1x kubejs:238_uranium' ])

    //242
    event.shapeless('kubejs:242_plutonium', [ '9x kubejs:clumps_plutonium' ])

    //241
    event.shapeless('kubejs:241_hep', [ '5x kubejs:242_plutonium', '4x kubejs:241_plutonium' ])

    //mox-241
    event.shapeless('kubejs:241_mox', [ '8x kubejs:242_plutonium', '1x kubejs:238_uranium' ])

    //mox-239
    event.shapeless('kubejs:239_mox', [ '8x kubejs:238_uranium', '1x kubejs:239_plutonium' ])
    
    //247
    event.shapeless('kubejs:247_curium', [ '9x kubejs:clumps_curium' ])

    //lecm-247
    event.shapeless('kubejs:247_lecm', [ '8x kubejs:246_curium', '1x kubejs:247_curium' ])

    //lecm-243
    event.shapeless('kubejs:243_lecm', [ '8x kubejs:246_curium', '1x kubejs:243_curium' ])

    //252
    event.shapeless('kubejs:252_californium', [ '9x kubejs:clumps_californium' ])

    //hecf-249
    event.shapeless('kubejs:249_hecf', [ '5x kubejs:252_californium', '4x kubejs:249_californium' ])


})