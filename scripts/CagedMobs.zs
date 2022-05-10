import mods.cagedmobs.EntitiesManager;

    // To remove specific drop: removeLoot(itemToRemove);
    // cow.removeLoot(<item:minecraft:leather>);

    // To clear all existing drops: clearLoot();
    // cow.clearLoot();

    // To add a new drop, you have several options:
    // addLoot(item, chance) - 40% chance for dropping 1 gold ingot.
    // cow.addLoot(<item:minecraft:gold_ingot>, 0.4);

    // addLoot(item, chance, minDrop, maxDrop) - 20% chance for dropping from 1 to 3 pistons
    // cow.addLoot(<item:minecraft:piston>, 0.2, 1, 3);

    // Using cooking upgrade:
    // addLoot(item, cooked_item, chance, minDrop, maxDrop) - 30% chance for dropping 1 porkchop (cooked porkchop when cooking upgrade is applied)
    // cow.addLoot(<item:minecraft:porkchop>,<item:minecraft:cooked_porkchop>, 0.3, 1, 1);

    // Using lightning or/and arrow upgrades
    // addLoot(item, chance, minDrop, maxDrop, ifLightning, ifArrow) - 10% chance for dropping 1 creeper head, when lightning upgrade is applied
    // cow.addLoot(<item:minecraft:creeper_head>, 0.1, 1, 1, true, false);

    // Using all upgrades + color
    // To disable cooking upgrade use <item:minecraft:air> instead of a normal item.
    // Color argument is used for mobs that use "Color" nbt tag, currently only sheep use it. Set it to -1 for other mobs.
    // addLoot(item, cooked_item, chance, minDrop, maxDrop, ifLightning, ifArrow, color) - 80% chance for dropping from 1 to 3 papers, without any upgrades
    // cow.addLoot(<item:minecraft:paper>,<item:minecraft:air>, 0.8, 1, 3, false, false, -1);


val entities = <recipetype:cagedmobs:mob_data>;

    val cow = entities.getEntity( "cagedmobs:mobs/cow");
    cow.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    cow.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val blaze = entities.getEntity( "cagedmobs:mobs/blaze");
    blaze.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    blaze.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);
    blaze.addLoot(<item:tconstruct:blaze_head>, 0.05, 1, 3, true, false);

    val cave_spider = entities.getEntity( "cagedmobs:mobs/cave_spider");
    cave_spider.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    cave_spider.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);
    cave_spider.addLoot(<item:tconstruct:cave_spider_head>, 0.05, 1, 3, true, false);

    val chicken = entities.getEntity( "cagedmobs:mobs/chicken");
    chicken.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    chicken.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val creeper = entities.getEntity( "cagedmobs:mobs/creeper");
    creeper.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    creeper.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val drowned = entities.getEntity( "cagedmobs:mobs/drowned");
    drowned.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    drowned.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);
    drowned.addLoot(<item:tconstruct:drowned_head>, 0.05, 1, 3, true, false);

    val enderman = entities.getEntity( "cagedmobs:mobs/enderman");
    enderman.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    enderman.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);
    enderman.addLoot(<item:tconstruct:enderman_head>, 0.05, 1, 3, true, false);

    val evoker = entities.getEntity( "cagedmobs:mobs/evoker");
    evoker.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    evoker.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val ghast = entities.getEntity( "cagedmobs:mobs/ghast");
    ghast.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    ghast.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val guardian = entities.getEntity( "cagedmobs:mobs/guardian");
    guardian.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    guardian.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val hoglin = entities.getEntity( "cagedmobs:mobs/hoglin");
    hoglin.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    hoglin.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val husk = entities.getEntity( "cagedmobs:mobs/husk");
    husk.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    husk.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);
    husk.addLoot(<item:tconstruct:husk_head>, 0.05, 1, 3, true, false);

    val iron_golem = entities.getEntity( "cagedmobs:mobs/iron_golem");
    iron_golem.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    iron_golem.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val llama = entities.getEntity( "cagedmobs:mobs/llama");
    llama.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    llama.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val magma_cube = entities.getEntity( "cagedmobs:mobs/magma_cube");
    magma_cube.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    magma_cube.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val mooshroom = entities.getEntity( "cagedmobs:mobs/mooshroom");
    mooshroom.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    mooshroom.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val mule = entities.getEntity( "cagedmobs:mobs/mule");
    mule.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    mule.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val phantom = entities.getEntity( "cagedmobs:mobs/phantom");
    phantom.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    phantom.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val pig = entities.getEntity( "cagedmobs:mobs/pig");
    pig.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    pig.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val polar_bear = entities.getEntity( "cagedmobs:mobs/polar_bear");
    polar_bear.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    polar_bear.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val ravager = entities.getEntity( "cagedmobs:mobs/ravager");
    ravager.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    ravager.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val shulker = entities.getEntity( "cagedmobs:mobs/shulker");
    shulker.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    shulker.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val skeleton = entities.getEntity( "cagedmobs:mobs/skeleton");
    skeleton.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    skeleton.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);
    skeleton.addLoot(<item:tconstruct:skeleton_head>, 0.05, 1, 3, true, false);

    val skeleton_horse = entities.getEntity( "cagedmobs:mobs/skeleton_horse");
    skeleton_horse.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    skeleton_horse.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val slime = entities.getEntity( "cagedmobs:mobs/slime");
    slime.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    slime.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val spider = entities.getEntity( "cagedmobs:mobs/spider");
    spider.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    spider.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);
    spider.addLoot(<item:tconstruct:spider_head>, 0.05, 1, 3, true, false);

    val squid = entities.getEntity( "cagedmobs:mobs/squid");
    squid.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    squid.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val stray = entities.getEntity( "cagedmobs:mobs/stray");
    stray.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    stray.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);
    stray.addLoot(<item:tconstruct:stray_head>, 0.05, 1, 3, true, false);

    val strider = entities.getEntity( "cagedmobs:mobs/strider");
    strider.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    strider.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val turtle = entities.getEntity( "cagedmobs:mobs/turtle");
    turtle.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    turtle.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val vindicator = entities.getEntity( "cagedmobs:mobs/vindicator");
    vindicator.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    vindicator.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val witch = entities.getEntity( "cagedmobs:mobs/witch");
    witch.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    witch.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val wither_skeleton = entities.getEntity( "cagedmobs:mobs/wither_skeleton");
    wither_skeleton.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    wither_skeleton.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);
    wither_skeleton.addLoot(<item:tconstruct:necrotic_bone>, 0.20, 1, 3);
    wither_skeleton.addLoot(<item:minecraft:wither_skeleton_skull>, 0.05, 1, 3, true, false);
   
    val zoglin = entities.getEntity( "cagedmobs:mobs/zoglin");
    zoglin.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    zoglin.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val zombie = entities.getEntity( "cagedmobs:mobs/zombie");
    zombie.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    zombie.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);
    zombie.addLoot(<item:minecraft:zombie_head>, 0.05, 1, 3, true, false);

    val zombie_villager = entities.getEntity( "cagedmobs:mobs/zombie_villager");
    zombie_villager.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    zombie_villager.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val zombified_piglin = entities.getEntity( "cagedmobs:mobs/zombified_piglin");
    zombified_piglin.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    zombified_piglin.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val bazalz = entities.getEntity( "thermal:mobs/basalz");
    bazalz.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    bazalz.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val blitz = entities.getEntity( "thermal:mobs/blitz");
    blitz.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    blitz.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val blizz = entities.getEntity( "thermal:mobs/blizz");
    blizz.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    blizz.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val lantern = entities.getEntity( "mowziesmobs:mobs/lantern");
    lantern.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    lantern.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    val foliaath = entities.getEntity( "mowziesmobs:mobs/foliaath");
    foliaath.addLoot(<item:miniutilities:experience_pearl>, 0.2, 1, 3);
    foliaath.addLoot(<item:mysticalagriculture:inferium_essence>, 0.25, 1, 3);

    /* Bosses */

    val frostmaw = entities.getEntity( "mowziesmobs:bosses/frostmaw");
    frostmaw.addLoot(<item:miniutilities:experience_pearl>, 1.0, 1, 16);
    frostmaw.addLoot(<item:mysticalagradditions:insanium_essence>, 1.0, 1, 10);

    val wither = entities.getEntity( "cagedmobs:bosses/wither");
    wither.addLoot(<item:miniutilities:experience_pearl>, 1.0, 1, 16);
    wither.addLoot(<item:mysticalagradditions:insanium_essence>, 1.0, 1, 10);
    wither.addLoot(<item:mysticalagradditions:withering_soul>, 0.35, 1, 4);

    val ender_dragon = entities.getEntity( "cagedmobs:bosses/ender_dragon");
    ender_dragon.addLoot(<item:miniutilities:experience_pearl>, 1.0, 1, 16);
    ender_dragon.addLoot(<item:mysticalagradditions:insanium_essence>, 1.0, 1, 10);
    ender_dragon.addLoot(<item:mysticalagradditions:dragon_scale>, 1.0, 4, 8);
    ender_dragon.addLoot(<item:tconstruct:dragon_scale>, 0.05, 1, 6, true, false);
    ender_dragon.addLoot(<item:cagedmobs:dragon_scale>, 0.05, 1, 6, true, false);

    val elder_guardian = entities.getEntity( "cagedmobs:bosses/elder_guardian");
    elder_guardian.addLoot(<item:miniutilities:experience_pearl>, 1.0, 1, 16);
    elder_guardian.addLoot(<item:mysticalagradditions:insanium_essence>, 1.0, 1, 10);

    
    