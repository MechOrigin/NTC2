onEvent('item.tags', (event) => {
    var storageBlocks = 'forge:storage_blocks';
    event.add(storageBlocks, [
        'minecraft:glowstone',
        'immersiveengineering:storage_aluminum',
        'immersiveengineering:storage_lead',
        'immersiveengineering:storage_silver',
        'immersiveengineering:storage_nickel',
        'immersiveengineering:storage_uranium',
        'immersiveengineering:storage_constantan',
        'immersiveengineering:storage_electrum',
        'immersiveengineering:coke',

        'betterendforge:aeternium_block',
        'betterendforge:terminite_block',
        'betterendforge:ender_block',
        'betterendforge:aurora_crystal',
        'betterendforge:amber_block',
        'betterendforge:thallasium_block'
    ]);

    event.get(storageBlocks + '/glowstone').add('minecraft:glowstone');

    event.add(storageBlocks + '/aeternium', ['betterendforge:aeternium_block']);
    event.add(storageBlocks + '/terminite', ['betterendforge:terminite_block']);
    event.add(storageBlocks + '/thallasium', ['betterendforge:thallasium_block']);
    event.add(storageBlocks + '/ender', ['betterendforge:ender_block']);
    event.add(storageBlocks + '/aurora', ['betterendforge:aurora_crystal']);
    event.add(storageBlocks + '/amber', ['betterendforge:amber_block']);

    event.add(storageBlocks + '/tinkers_bronze', ['tconstruct:tinkers_bronze_block']);

    event.add('chisel:basalt', ['minecraft:basalt']);
    event.add('chisel:marble', ['quark:marble']);

    event.add('chisel:charcoal', ['morecharcoal:charcoal_block']);

    event.add('chisel:glass', ['tconstruct:clear_glass']);

    event.add('chisel:coralstone', ['upgrade_aquatic:coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:bubble_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:horn_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:tube_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:brain_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:fire_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:acan_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:finger_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:star_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:moss_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:petal_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:branch_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:rock_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:pillow_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:silk_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:chrome_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:prismarine_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:elder_prismarine_coralstone']);
    event.add('chisel:coralstone', ['upgrade_aquatic:dead_coralstone']);
});
