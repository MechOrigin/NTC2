//priority: 900
onEvent('recipes', (event) => {
    buildWoodVariants.forEach((variant) => {
        var sawDust = 'emendatusenigmatica:wood_dust',
        secondary = 'emendatusenigmatica:wood_dust';

        immersiveengineering_sawing(event, variant, sawDust, secondary);
        mekanism_sawing(event, variant, sawDust);
        thermal_sawing(event, variant, sawDust);
    });
});

function immersiveengineering_sawing(event, variant, sawDust, secondary) {
    event.recipes.immersiveengineering
        .sawmill(Item.of(variant.plankBlock, 6), variant.logBlockStripped, [
            {
                stripping: false,
                output: sawDust
            }
        ])
        .energy(800);

    event.recipes.immersiveengineering
        .sawmill(
            Item.of(variant.plankBlock, 6),
            [variant.logBlock, variant.woodBlock],
            [
                {
                    stripping: true,
                    output: secondary
                },
                {
                    stripping: false,
                    output: sawDust
                }
            ],
            variant.logBlockStripped
        )
        .energy(1600);
}

function mekanism_sawing(event, variant, sawDust) {
    if (variant.modId == 'minecraft') {
        event.remove({
            output: variant.plankBlock,
            mod: 'mekanism',
            type: 'mekanism:sawing'
        });
    }

    var data = {
        recipes: [
            {
                input: variant.logBlock,
                output: variant.plankBlock
            },
            {
                input: variant.woodBlock,
                output: variant.plankBlock
            },
            {
                input: variant.logBlockStripped,
                output: variant.plankBlock
            },
            {
                input: variant.woodBlockStripped,
                output: variant.plankBlock
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.mekanism.sawing(Item.of(recipe.output, 6), recipe.input, Item.of(sawDust).chance(0.25));
    });
}

function thermal_sawing(event, variant, sawDust) {
    // mod blacklist
    if (
        variant.modId == 'minecraft' ||
        variant.modId == 'atmospheric' ||
        variant.modId == 'upgrade_aquatic'
    ) {
        return;
    }

    var data = {
        recipes: [
            {
                input: variant.logBlock,
                output: variant.plankBlock
            },
            {
                input: variant.woodBlock,
                output: variant.plankBlock
            },
            {
                input: variant.logBlockStripped,
                output: variant.plankBlock
            },
            {
                input: variant.woodBlockStripped,
                output: variant.plankBlock
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.thermal
            .sawmill([Item.of(recipe.output, 6), Item.of(sawDust).chance(1.25)], recipe.input)
            .energy(1000);
    });
}
