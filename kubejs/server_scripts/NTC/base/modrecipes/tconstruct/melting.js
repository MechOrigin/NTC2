onEvent('recipes', (event) => {
    const id_prefix = 'ntc2:base/tconstruct/melting/';
    const recipes = [
        // {
        //     ingredient: {
        //         tag: 'forge:plates/emerald'
        //     },
        //     result: {
        //         fluid: 'tconstruct:molten_emerald',
        //         amount: 144
        //     },
        //     temperature: 934,
        //     time: 64,
        //     id: `${id_prefix}molten_emerald_from_plate`
        // },
        // {
        //     ingredient: {
        //         tag: 'forge:plates/diamond'
        //     },
        //     result: {
        //         fluid: 'tconstruct:molten_diamond',
        //         amount: 144
        //     },
        //     temperature: 1450,
        //     time: 79,
        //     id: `${id_prefix}molten_diamond_from_plate`
        // },
        // {
        //     ingredient: {
        //         tag: 'forge:rods/emerald'
        //     },
        //     result: {
        //         fluid: 'tconstruct:molten_emerald',
        //         amount: 144
        //     },
        //     temperature: 934,
        //     time: 64,
        //     id: `${id_prefix}molten_emerald_from_rod`
        // },
        // {
        //     ingredient: {
        //         tag: 'forge:rods/diamond'
        //     },
        //     result: {
        //         fluid: 'tconstruct:molten_diamond',
        //         amount: 144
        //     },
        //     temperature: 1450,
        //     time: 79,
        //     id: `${id_prefix}molten_diamond_from_rod`
        // },
        // {
        //     ingredient: {
        //         tag: 'forge:gears/emerald'
        //     },
        //     result: {
        //         fluid: 'tconstruct:molten_emerald',
        //         amount: 576
        //     },
        //     temperature: 934,
        //     time: 256,
        //     id: `${id_prefix}molten_emerald_from_gear`
        // },
        // {
        //     ingredient: {
        //         tag: 'forge:gears/diamond'
        //     },
        //     result: {
        //         fluid: 'tconstruct:molten_diamond',
        //         amount: 576
        //     },
        //     temperature: 1450,
        //     time: 316,
        //     id: `${id_prefix}molten_diamond_from_gear`
        // },
        {
            ingredient: {
                item: 'minecraft:creeper_head'
            },
            result: {
                fluid: 'tconstruct:molten_glass',
                amount: 250
            },
            temperature: 1710,
            time: 316,
            id: `${id_prefix}molten_glass_from_creeper_head`
        },
        {
            ingredient: {
                item: 'minecraft:glowstone_dust'
            },
            result: {
                fluid: 'thermal:glowstone',
                amount: 250
            },
            temperature: 1710,
            time: 316,
            id: `${id_prefix}thermal_glowstone_from_dust`
        },
        {
            ingredient: {
                item: 'minecraft:glowstone'
            },
            result: {
                fluid: 'thermal:glowstone',
                amount: 1000
            },
            temperature: 1710,
            time: 316,
            id: `${id_prefix}thermal_glowstone_from_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:melting';
        event.custom(recipe).id(recipe.id);
    });
});
