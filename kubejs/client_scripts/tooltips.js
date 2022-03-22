onEvent('item.tooltip', (event) => {
    const recipes = [
        {
            items: ['minecraft:clay_ball', 'minecraft:clay'],
            text: [Text.of('(Al₂O₃)(SiO₂)₂(H₂O)₂').color("#A460D9")]
        },
        {
            items: ['mekanism:hdpe_sheet', 'mekanism:hdpe_rod', 'mekanism:hdpe_pellet', 'mekanism:hdpe_stick'],
            text: [Text.of('High-density Polyethylene').color("#A460D9")]
        },
        {
            items: ['kubejs:overworld_portal'],
            text: [Text.of('Right click to Teleport to the Overworld').color("#A460D9")]
        },
        {
            items: ['kubejs:ntc_portal'],
            text: [Text.of('Right click to Teleport to the Void').color("#A460D9")]
        },
        {
            items: ['minecraft:redstone', 'minecraft:redstone_block'],
            text: [Text.of('(Fe₂O₃)(Sr(CO₃))').color("#A460D9")]
        },
        {
            items: ['minecraft:stick'],
            text: [Text.of('(C₆H₁₀O₅)').color("#A460D9")]
        },
        {
            items: ['minecraft:cocoa_beans'],
            text: [Text.of('(C₈H₁₀N₄O₂)(C₆H₁₀O₅)').color("#A460D9")]
        },
        {
            items: ['minecraft:string'],
            text: [Text.of('(C₃H₇NO₂S)').color("#A460D9")]
        },
        {
            items: ['minecraft:emerald'],
            text: [Text.of('(Be₃Al₂Si₆O₁₈)(Cr)(V)').color("#A460D9")]
        },
        {
            items: ['minecraft:netherite_scrap'],
            text: [Text.of('(W)').color("#A460D9")]
        },
        {
            items: ['minecraft:diamond'],
            text: [Text.of('(C)').color("#A460D9")]
        },
        {
            items: ['minecraft:ghast_tear'],
            text: [Text.of('(Po)').color("#A460D9")]
        },
        {
            items: ['minecraft:gunpowder'],
            text: [Text.of('(K(NO₃))(S)(C)').color("#A460D9")]
        },
        {
            items: ['minecraft:coal'],
            text: [Text.of('(C)').color("#A460D9")]
        },
        {
            items: ['minecraft:glowstone_dust'],
            text: [Text.of('(P)').color("#A460D9")]
        },
        {
            items: ['minecraft:gold_ingot'],
            text: [Text.of('(Au)').color("#A460D9")]
        },
        {
            items: ['minecraft:shulker_shell'],
            text: [Text.of('(Ca(CO₃))(Lu)').color("#A460D9")]
        },
        {
            items: ['minecraft:nautilus_shell'],
            text: [Text.of('(Ca(CO₃))').color("#A460D9")]
        },
        {
            items: ['emendatusenigmatica:uranium_ingot'],
            text: [Text.of('(U)').color("#A460D9")]
        },
        {
            items: ['minecraft:chorus_flower'],
            text: [Text.of('(C₈H₁₀N₄O₂)(Lu)').color("#A460D9")]
        },
        {
            items: ['minecraft:ender_pearl'],
            text: [Text.of('(Si)(Hg)(Nd)').color("#A460D9")]
        },
        {
            items: ['minecraft:iron_ingot'],
            text: [Text.of('(Fe)').color("#A460D9")]
        },
        {
            items: ['thermal:light_oil_bucket'],
            text: [Text.of('Light Naphtha').color("#FF4B6A")]
        },
        {
            items: ['thermal:heavy_oil_bucket'],
            text: [Text.of('Heavy Naphtha').color("#FF4B6A")]
        },
        {
            items: ['thermal:refined_fuel_bucket'],
            text: [Text.of('High Octane Gasoline (91)').color("#FF4B6A")]
        }
    ];
/*
    refinedStorageItems.forEach((item) => {
        recipes.push({
            items: ['refinedstorage:' + item],
            text: ['Can be dyed through crafting or by right clicking it with dye in-world.']
        });
    });
*/
    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
