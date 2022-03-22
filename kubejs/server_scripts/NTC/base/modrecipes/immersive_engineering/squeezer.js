onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                'pamhc2crops:cantaloupeseeditem',
                'pamhc2crops:cottonseeditem',
                'pamhc2crops:cucumberseeditem',
                'pamhc2crops:eggplantseeditem',
                'pamhc2crops:gingerseeditem',
                'pamhc2crops:kenafseeditem',
                'pamhc2crops:lettuceseeditem',
                'pamhc2crops:wintersquashseeditem'
            ],
            value: 20
        },

        {
            inputs: [
                'pamhc2crops:broccoliseeditem',
                'pamhc2crops:onionseeditem',
                'pamhc2crops:peasseeditem',
                'pamhc2crops:soybeanseeditem',
                'pamhc2crops:spinachseeditem',
                'pamhc2crops:zucchiniseeditem'
            ],
            value: 40
        },

        {
            inputs: [
                'exnihilosequentia:seed_carrot',
                'pamhc2crops:cassavaseeditem',
                'pamhc2trees:peppercornitem',
                'exnihilosequentia:seed_potato',
                'pamhc2crops:radishseeditem',
                'pamhc2crops:sweetpotatoseeditem',
                'pamhc2crops:tomatoseeditem',
                'pamhc2crops:turnipseeditem'
            ],
            value: 60
        },

        {
            inputs: [
                'pamhc2crops:barleyseeditem',
                'pamhc2crops:cornseeditem',
                'pamhc2crops:oatsseeditem',
                'pamhc2crops:peanutseeditem',
                'pamhc2crops:quinoaseeditem',
                'pamhc2crops:riceseeditem',
                'pamhc2crops:ryeseeditem',
                'pamhc2foodcore:sunflowerseedsitem'
            ],
            value: 80
        },

        { inputs: [
            'pamhc2crops:grapeseeditem',
            'pamhc2crops:greengrapeseeditem',
        ], 
        value: 120 }
    ];

    recipes.forEach((input) => {
        input.inputs.forEach((seed) => {
            event.custom({
                type: 'immersiveengineering:squeezer',
                fluid: {
                    fluid: 'immersiveengineering:plantoil',
                    amount: input.value
                },
                input: {
                    item: seed
                },
                energy: 6400
            });
        });
    });
});
