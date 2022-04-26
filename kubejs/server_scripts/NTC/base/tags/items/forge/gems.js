onEvent('item.tags', (event) => {
    var gems = 'forge:gems';
    var gems_ender = gems + '/ender';
    var gems_coal = gems + '/coal';

    event.remove('forge:gems', 'thermal:ruby')
    event.remove('forge:gems/ruby', 'thermal:ruby')
    event.remove('forge:gems', 'thermal:sapphire')
    event.remove('forge:gems/sapphire', 'thermal:sapphire')
    event.remove('forge:gems', 'thermal:apatite')
    event.remove('forge:gems/apatite', 'thermal:apatite')

    event.remove('forge:gems/fluorite', 'mekanism:fluorite_gem')

    event.add(gems, [
        'rftoolsbase:dimensionalshard',
        'minecraft:ender_pearl',
        'minecraft:coal',
        'immersivepetroleum:bitumen',
        'thermal:bitumen',
        'betterendforge:sulphur_crystal',
        'betterendforge:amber_gem',
        'betterendforge:crystal_shards'
    ]);

    event.add(gems + '/coal_coke', [
        'emendatusenigmatica:coke_gem',
        'immersiveengineering:coal_coke',
        'thermal:coal_coke'
    ]);
    event.get(gems_ender).add('minecraft:ender_pearl');
    event.get(gems_coal).add('minecraft:coal');
    event.get('forge:gems/dimensional').add('rftoolsbase:dimensionalshard');
    event.get('forge:gems/charcoal').add('minecraft:charcoal');
    event.add('forge:gems/bitumen', ['immersivepetroleum:bitumen', 'thermal:bitumen']);
    event.get('forge:gems/sulfur').add('betterendforge:crystalline_sulphur');
    event.get('forge:gems/amber').add('betterendforge:amber_gem');
    event.get('forge:gems/crystal').add('betterendforge:crystal_shards');
});
