onEvent('item.tags', (event) => {
    var pellets = 'forge:pellets';
    var plutonium = 'forge:pellets/plutonium';

    event.remove('forge:pellets', 'mekanism:pellet_plutonium')
    event.remove('forge:pellets/plutonium', 'mekanism:pellet_plutonium')

    event.add(pellets, [
        'kubejs:242_plutonium'
    ]);
    event.add(plutonium, [
        'kubejs:242_plutonium'
    ]);

    //event.get('forge:gems/crystal').add('betterendforge:crystal_shards');
});
