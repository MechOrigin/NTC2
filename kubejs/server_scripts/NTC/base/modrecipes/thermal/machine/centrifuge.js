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
        if (combMaterial == 'glowing') {
            combMaterial = 'glowstone'
        }
        if (combMaterial == 'spacial') {
            combMaterial = 'certus_quartz'
        }
        if (combMaterial == 'fossilised') {
            combMaterial = 'coal'
        }
        // if (combMaterial == 'queens_slime') {
        //     return;
        // }
        // if (combMaterial == 'rose_gold') {
        //     return;
        // }
        // if (combMaterial == 'tinkers_bronze') {
        //     return;
        // }
        // if (combMaterial == 'slimesteel') {
        //     return;
        // }
        // if (combMaterial == 'manyullyn') {
        //     return;
        // }
        // if (combMaterial == 'hepatizon') {
        //     return;
        // }
        // if (combMaterial == 'amber') {
        //     return;
        // }
        // if (combMaterial == 'basalz') {
        //     return;
        // }
        // if (combMaterial == 'blazing') {
        //     return;
        // }
        // if (combMaterial == 'blitz') {
        //     return;
        // }
        // if (combMaterial == 'blizz') {
        //     return;
        // }
        // if (combMaterial == 'bone') {
        //     return;
        // }
        // if (combMaterial == 'draconic') {
        //     return;
        // }
        // if (combMaterial == 'ender') {
        //     return;
        // }
        // if (combMaterial == 'ender_biotite') {
        //     return;
        // }
        // if (combMaterial == 'experience') {
        //     return;
        // }
        // if (combMaterial == 'frosty') {
        //     return;
        // }
        // if (combMaterial == 'ghostly') {
        //     return;
        // }
        // if (combMaterial == 'imperium') {
        //     return;
        // }
        // if (combMaterial == 'inferium') {
        //     return;
        // }
        // if (combMaterial == 'insanium') {
        //     return;
        // }
        // if (combMaterial == 'magmatic') {
        //     return;
        // }
        // if (combMaterial == 'menril') {
        //     return;
        // }
        // if (combMaterial == 'milky') {
        //     return;
        // }
        // if (combMaterial == 'netherite') {
        //     return;
        // }
        // if (combMaterial == 'plastic') {
        //     return;
        // }
        // if (combMaterial == 'platinum') {
        //     return;
        // }
        // if (combMaterial == 'powdery') {
        //     return;
        // }
        // if (combMaterial == 'prosperity') {
        //     return;
        // }
        // if (combMaterial == 'prudentium') {
        //     return;
        // }
        // if (combMaterial == 'rotten') {
        //     return;
        // }
        // if (combMaterial == 'refined_glowstone') {
        //     return;
        // }
        // if (combMaterial == 'refined_obsidian') {
        //     return;
        // }
        // if (combMaterial == 'silicon') {
        //     return;
        // }
        // if (combMaterial == 'silky') {
        //     return;
        // }
        // if (combMaterial == 'slimy') {
        //     return;
        // }
        // if (combMaterial == 'soulium') {
        //     return;
        // }
        // if (combMaterial == 'supremium') {
        //     return;
        // }
        // if (combMaterial == 'tertium') {
        //     return;
        // }
        // if (combMaterial == 'titanium') {
        //     return;
        // }
        // if (combMaterial == 'tungsten') {
        //     return;
        // }
        // if (combMaterial == 'withered') {
        //     return;
        // }
        // if (combMaterial == 'ruby') {
        //     return;
        // }
        // if (combMaterial == 'sapphire') {
        //     return;
        // }
        // if (combMaterial == 'pig_iron') {
        //     return;
        // }
        // if (combMaterial == 'soulsteel') {
        //     return;
        // }
        // if (combMaterial == 'sky_slimy') {
        //     return;
        // }
        // if (combMaterial == 'ender_slimy') {
        //     return;
        // }
        // if (combMaterial == 'ichor_slimy') {
        //     return;
        // }

        
        if (combMaterial != air) {
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
        } else {
            console.log(`Created new ${combMaterial} and ${honeyCombs}`);
            recipesCombs.push({
                type: 'combs',
                input: honeyCombs,
                outputs: [
                    Item.of(`#forge:nuggets/${combMaterial}`).withCount(1),
                    Fluid.of('cofh_core:honey', 50)
                ], 
                energy: 4000
            });
        }

        recipesCombs.forEach((comb) => {
            event.recipes.thermal
                .centrifuge(comb.outputs, comb.input)
                .energy(comb.energy)
                .id(`ntc2:base/thermal/centrifuge/${combMaterial}_${comb.type}`);
        });
    });
});
