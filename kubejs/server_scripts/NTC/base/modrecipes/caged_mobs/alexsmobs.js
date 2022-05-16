onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                'alexsmobs:void_worm'
            ],
            samplerTier: 3,
            growTicks: 3000,
            output0: 'alexsmobs:void_worm_eye',
            output1: 'alexsmobs:void_worm_mandible'
        },
        {
            inputs: [
                'alexsmobs:tarantula_hawk'
            ],
            samplerTier: 3,
            growTicks: 300,
            output0: 'alexsmobs:tarantula_hawk_wing_fragment',
            maxAmount: 3,
            output1: 'miniutilities:experience_pearl'
        }
    ];

    recipes.forEach((input) => {
        input.inputs.forEach((process) => {
            event.custom({
                type: 'cagedmobs:mob_data',
                conditions: [
                    {
                    type: 'forge:mod_loaded',
                    modid: 'alexsmobs'
                    }
                ],
                entity: process,
                samplerTier: input.samplerTier,
                environments: ['end'],
                growTicks: input.growTicks,
                results: [
                    {
                        chance: 0.2,
                        output: {
                            item: input.output0
                        },
                        minAmount: 1,
                        maxAmount: input.maxAmount0
                    },
                    {
                        chance: 0.2,
                        output: {
                            item: input.output1
                        },
                        minAmount: 1,
                        maxAmount: 1
                    }
                ]
            });
        });
    });
});
