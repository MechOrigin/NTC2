onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/';
    const recipes = [
        {
            output: Item.of('#forge:shards/ender'),
            inputs: ['#forge:ores/ender', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('#forge:shards/amber'),
            inputs: ['#forge:ores/amber', '#forge:tools/crafting_hammer']
        },

        { output: Item.of('#forge:shards/ender'), inputs: ['#forge:ores/ender', 'thermal:earth_charge'] },
        { output: Item.of('#forge:shards/amber'), inputs: ['#forge:ores/amber', 'thermal:earth_charge'] },

        { output: 'emendatusenigmatica:fluorite_dust', inputs: ['thermal:earth_charge', '#forge:ores/fluorite'] },

        {
            output: 'emendatusenigmatica:potassium_nitrate_dust',
            inputs: ['thermal:earth_charge', '#forge:ores/potassium_nitrate']
        },
        {
            output: 'betterendforge:endstone_dust',
            inputs: [
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone'
            ]
        },

        { output: Item.of('betterendforge:lumecorn_seed', 6), inputs: ['betterendforge:lumecorn_rod'] },
        { output: Item.of('betterendforge:bulb_vine_seed', 4), inputs: ['betterendforge:glowing_bulb'] },
        { output: Item.of('betterendforge:end_lily_seed', 1), inputs: ['betterendforge:end_lily_leaf'] },
        { output: Item.of('betterendforge:blue_vine_seed', 4), inputs: ['betterendforge:blue_vine_lantern'] },
        {
            output: Item.of('betterendforge:glowing_pillar_seed', 4),
            inputs: ['betterendforge:glowing_pillar_luminophor']
        },
        {
            output: Item.of('projectvibrantjourneys:twigs', 4),
            inputs: ['#minecraft:leaves', '#forge:shears']
        },
        {
            output: Item.of('projectvibrantjourneys:pinecones', 6),
            inputs: [
                '#minecraft:leaves/coniferous',
                '#minecraft:leaves/coniferous',
                '#minecraft:leaves/coniferous',
                '#forge:shears'
            ]
        },
        {
            output: Item.of('projectvibrantjourneys:fallen_leaves', 1),
            inputs: ['quark:oak_leaf_carpet']
        },
        {
            output: Item.of('projectvibrantjourneys:rocks', 4),
            inputs: ['minecraft:cobblestone', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('projectvibrantjourneys:mossy_rocks', 4),
            inputs: ['minecraft:mossy_cobblestone', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('projectvibrantjourneys:sandstone_rocks', 4),
            inputs: ['minecraft:sandstone', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('projectvibrantjourneys:red_sandstone_rocks', 4),
            inputs: ['minecraft:red_sandstone', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('projectvibrantjourneys:ice_chunks', 4),
            inputs: ['minecraft:ice', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('projectvibrantjourneys:glowcap'),
            inputs: ['minecraft:glowstone_dust', ['minecraft:brown_mushroom', 'minecraft:red_mushroom']]
        },
        {
            output: Item.of('botanypots:botany_pot'),
            inputs: ['#enigmatica:washables/simplebotanypots', 'minecraft:water_bucket']
        },
        {
            output: Item.of('botanypots:hopper_botany_pot'),
            inputs: ['#enigmatica:washables/hopperbotanypots', 'minecraft:water_bucket']
        },
        {
            output: Item.of('minecraft:terracotta'),
            inputs: ['#enigmatica:washables/terracotta', 'minecraft:water_bucket']
        },
        {
            output: Item.of('minecraft:string', 3),
            inputs: ['#forge:crops/kenaf', '#forge:crops/kenaf', '#forge:crops/kenaf'],
            id: 'simplefarming:string'
        },
        {
            output: Item.of('minecraft:string', 3),
            inputs: ['#forge:crops/flax', '#forge:crops/flax', '#forge:crops/flax']
        },
        {
            output: Item.of('minecraft:green_dye', 2),
            inputs: ['#forge:dyes/blue', '#forge:dyes/yellow']
        },
        {
            output: Item.of('minecraft:brown_dye', 2),
            inputs: ['#forge:dyes/red', '#forge:dyes/green']
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });

    colors.forEach(function (color) {
        let otherColors = colors.filter((filterColor) => filterColor !== color);

        let otherSimplePots = otherColors.map((otherColor) => `botanypots:${otherColor}_botany_pot`),
            otherHopperPots = otherColors.map((otherColor) => `botanypots:hopper_${otherColor}_botany_pot`);

        otherSimplePots.push('botanypots:botany_pot');
        otherHopperPots.push('botanypots:hopper_botany_pot');

        event.shapeless(`botanypots:${color}_botany_pot`, [Ingredient.of(otherSimplePots), `#forge:dyes/${color}`]);

        event.shapeless(`botanypots:hopper_${color}_botany_pot`, [
            Ingredient.of(otherHopperPots),
            `#forge:dyes/${color}`
        ]);
    });

    materialsToUnify.forEach((material) => {
        var ore = Item.of(`emendatusenigmatica:${material}_ore`);
        if (ore.exists) {
            event.shapeless(ore, `#forge:ores/${material}`);
        }
    });
});
