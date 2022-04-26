onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                'atmospheric:ivory_travertine'
            ],
            output0: 'chemlib:element_boron',
            count0: 2,
            output1: 'chemlib:compound_calcium_carbonate',
            count1: 16
        },
        {
            inputs: [
                'atmospheric:peach_travertine'
            ],
            output0: 'chemlib:element_boron',
            count0: 4,
            output1: 'chemlib:compound_calcium_carbonate',
            count1: 16
        },
        {
            inputs: [
                'atmospheric:persimmon_travertine'
            ],
            output0: 'chemlib:element_boron',
            count0: 8,
            output1: 'chemlib:compound_calcium_carbonate',
            count1: 16
        },
        {
            inputs: [
                'atmospheric:saffron_travertine'
            ],
            output0: 'chemlib:element_boron',
            count0: 16,
            output1: 'chemlib:compound_calcium_carbonate',
            count1: 16
        },
        {
            inputs: [
                'emendatusenigmatica:zinc_dust'
            ],
            output0: 'chemlib:element_zinc',
            count0: 10,
            output1: 'chemlib:element_gallium',
            count1: 6
        },
        {
            inputs: [
                'emendatusenigmatica:aluminum_dust'
            ],
            output0: 'chemlib:element_aluminum',
            count0: 12,
            output1: 'chemlib:element_gallium',
            count1: 4
        }
    ];

    recipes.forEach((input) => {
        input.inputs.forEach((process) => {
            event.custom({
                type: 'alchemistry:dissolver',
                group: 'minecraft:misc',
                input: {
                    item: process
                },
                output: {
                    rolls: 1,
                    relativeProbability: true,
                    groups: [
                        {
                            probability: 1.0,
                            stacks: [
                                {
                                    item: input.output0,
                                    count: input.count0
                                },
                                {
                                    item: input.output1,
                                    count: input.count1
                                }
                            ]
                        }
                    ]

                }
            });
        });
    });
});
