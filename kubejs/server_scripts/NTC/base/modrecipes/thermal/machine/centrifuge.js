onEvent('recipes', (event) => {
    const id_prefix = 'ntc2:base/thermal/centrifuge/';
    const recipes = [
        {
            input: '#forge:ores/bitumen',
            outputs: [
                Item.of('minecraft:gravel').withChance(0.75),
                Item.of('emendatusenigmatica:bitumen_gem').withChance(1.5),
                Item.of('thermal:tar').withCount(1),
                Fluid.of('immersivepetroleum:oil', 100)
            ],
            id: `${id_prefix}tag_bitumen`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.centrifuge(recipe.outputs, recipe.input).id(recipe.id);
    });

    combs.forEach((combMaterial) => {
        const recipesCombs = [];

        let honeyCombs = getPreferredItemInTag(Ingredient.of(`#forge:honeycombs/${combMaterial}`)).id;

        if (combMaterial == 'fluix') {
            honeyCombs = Item.of(`productivebees:configurable_honeycomb`, `{EntityTag:{type:"productivebees:fluix"}}`).toJson()
        }
        if (combMaterial == 'tinkers_bronze') {
            honeyCombs = Item.of('productivebees:honeycomb_tinkers_bronze')
        }
        //Handle weird names... wtf productive bees, why?!
        if (combMaterial == 'brazen') {
            combMaterial = 'bronze'
        }
        if (combMaterial == 'leaden') {
            combMaterial = 'lead'
        }
        if (combMaterial == 'bauxite') {
            combMaterial = 'aluminum'
        }
        if (combMaterial == 'radioactive') {
            combMaterial = 'uranium'
        }
        if (combMaterial == 'niter') {
            combMaterial = 'potassium_nitrate'
        }
        if (combMaterial == 'spacial') {
            combMaterial = 'certus_quartz'
        }
        if (combMaterial == 'fossilised') {
            combMaterial = 'coal'
        }
        if (combMaterial == '') {
            combMaterial = ''
        }
        

        console.log(`Created new ${combMaterial} and ${honeyCombs}`);
        recipesCombs.push({
                type: 'combs',
                input: honeyCombs,
                outputs: [
                    Item.of(`#forge:dusts/${combMaterial}`).withCount(1),
                    Fluid.of('cofh_core:honey', 50)
                ], 
                energy: 4000
            });
        recipesCombs.forEach((comb) => {
            event.recipes.thermal
                .centrifuge(comb.outputs, comb.input)
                .energy(comb.energy)
                .id(`ntc2:base/thermal/centrifuge/${combMaterial}_${comb.type}`);
        });
    });
});
