onEvent('item.tags', (event) => {

    event.add('ntc2:burning_hot', [
        //nothing yet
    ]);

    event.add('ntc2:dense', [
        'avaritia:pileof_neutrons',
        'avaritia:neutronium_nugget',
        'avaritia:neutronium_ingot',
        'avaritia:neutronium_block'
    ]);

    event.add('ntc2:freezing', [
        'thermal:blizz_powder',
        'thermal:blizz_rod'
    ]);

    event.add('ntc2:shocking', [
        'thermal:blitz_powder',
        'thermal:blitz_rod'
    ]);

    event.add('ntc2:fatiguing', [
        'thermal:basalz_powder',
        'thermal:basalz_rod'
    ]);

    event.add('ntc2:radioactive', [
        'chemlib:element_plutonium',
        'chemlib:ingot_plutonium',
        'chemlib:element_uranium',
        'emendatusenigmatica:uranium_ingot'
    ]);

});
