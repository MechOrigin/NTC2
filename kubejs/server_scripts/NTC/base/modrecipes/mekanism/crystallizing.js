onEvent('recipes', (event) => {
    const recipes = [
        {
            gas: 'mekanism:lithium',
            amount: 100,
            output: 'emendatusenigmatica:lithium_dust',
            id: 'mekanism:crystallizing/lithium'
        },
        {
            gas: 'mekanism:sulfuric_acid',
            amount: 100,
            output: 'chemlib:compound_sulfuric_acid',
            id: 'mekanism:crystallizing/chemlib_sulfuric_acid'
        },
        {
            gas: 'kubejs:neutron_gas',
            amount: 100,
            output: 'avaritia:pileof_neutrons',
            id: 'mekanism:crystallizing/neutrons'
        },
        {
            gas: 'kubejs:anti_hydrogen_gas',
            amount: 500,
            output: 'mekanism:pellet_antimatter',
            id: 'mekanism:crystallizing/antihydrogen_antimatter'
        },
        {
            gas: 'kubejs:anti_positron_gas',
            amount: 1000,
            output: 'mekanism:pellet_antimatter',
            id: 'mekanism:crystallizing/antipositron_antimatter'
        },
        
        {
            gas: 'kubejs:bubbly_aluminum_gas',
            amount: 100,
            output: 'kubejs:soda_aluminum',
            id: 'mekanism:crystallizing/soda_aluminum'
        },
        {
            gas: 'kubejs:bubbly_cobalt_gas',
            amount: 100,
            output: 'kubejs:soda_cobalt',
            id: 'mekanism:crystallizing/soda_cobalt'
        },
        {
            gas: 'kubejs:bubbly_copper_gas',
            amount: 100,
            output: 'kubejs:soda_copper',
            id: 'mekanism:crystallizing/soda_copper'
        },
        {
            gas: 'kubejs:bubbly_gold_gas',
            amount: 100,
            output: 'kubejs:soda_gold',
            id: 'mekanism:crystallizing/soda_gold'
        },
        {
            gas: 'kubejs:bubbly_iron_gas',
            amount: 100,
            output: 'kubejs:soda_iron',
            id: 'mekanism:crystallizing/soda_iron'
        },
        {
            gas: 'kubejs:bubbly_lead_gas',
            amount: 100,
            output: 'kubejs:soda_lead',
            id: 'mekanism:crystallizing/soda_lead'
        },
        {
            gas: 'kubejs:bubbly_nickel_gas',
            amount: 100,
            output: 'kubejs:soda_nickel',
            id: 'mekanism:crystallizing/soda_nickel'
        },
        {
            gas: 'kubejs:bubbly_osmium_gas',
            amount: 100,
            output: 'kubejs:soda_osmium',
            id: 'mekanism:crystallizing/soda_osmium'
        },
        {
            gas: 'kubejs:bubbly_silver_gas',
            amount: 100,
            output: 'kubejs:soda_silver',
            id: 'mekanism:crystallizing/soda_silver'
        },
        {
            gas: 'kubejs:bubbly_thallasium_gas',
            amount: 100,
            output: 'kubejs:soda_thallasium',
            id: 'mekanism:crystallizing/soda_thallasium'
        },
        {
            gas: 'kubejs:bubbly_tin_gas',
            amount: 100,
            output: 'kubejs:soda_tin',
            id: 'mekanism:crystallizing/soda_tin'
        },
        {
            gas: 'kubejs:bubbly_uranium_gas',
            amount: 100,
            output: 'kubejs:soda_uranium',
            id: 'mekanism:crystallizing/soda_uranium'
        },
        {
            gas: 'kubejs:bubbly_zinc_gas',
            amount: 100,
            output: 'kubejs:soda_zinc',
            id: 'mekanism:crystallizing/soda_zinc'
        },

        {
            gas: 'kubejs:steamed_aluminum_gas',
            amount: 200,
            output: 'kubejs:precipitate_aluminum',
            id: 'mekanism:crystallizing/precipitate_aluminum'
        },
        {
            gas: 'kubejs:steamed_cobalt_gas',
            amount: 200,
            output: 'kubejs:precipitate_cobalt',
            id: 'mekanism:crystallizing/precipitate_cobalt'
        },
        {
            gas: 'kubejs:steamed_copper_gas',
            amount: 200,
            output: 'kubejs:precipitate_copper',
            id: 'mekanism:crystallizing/precipitate_copper'
        },
        {
            gas: 'kubejs:steamed_gold_gas',
            amount: 200,
            output: 'kubejs:precipitate_gold',
            id: 'mekanism:crystallizing/precipitate_gold'
        },
        {
            gas: 'kubejs:steamed_iron_gas',
            amount: 200,
            output: 'kubejs:precipitate_iron',
            id: 'mekanism:crystallizing/precipitate_iron'
        },
        {
            gas: 'kubejs:steamed_lead_gas',
            amount: 200,
            output: 'kubejs:precipitate_lead',
            id: 'mekanism:crystallizing/precipitate_lead'
        },
        {
            gas: 'kubejs:steamed_nickel_gas',
            amount: 200,
            output: 'kubejs:precipitate_nickel',
            id: 'mekanism:crystallizing/precipitate_nickel'
        },
        {
            gas: 'kubejs:steamed_osmium_gas',
            amount: 200,
            output: 'kubejs:precipitate_osmium',
            id: 'mekanism:crystallizing/precipitate_osmium'
        },
        {
            gas: 'kubejs:steamed_silver_gas',
            amount: 200,
            output: 'kubejs:precipitate_silver',
            id: 'mekanism:crystallizing/precipitate_silver'
        },
        {
            gas: 'kubejs:steamed_thallasium_gas',
            amount: 200,
            output: 'kubejs:precipitate_thallasium',
            id: 'mekanism:crystallizing/precipitate_thallasium'
        },
        {
            gas: 'kubejs:steamed_tin_gas',
            amount: 200,
            output: 'kubejs:precipitate_tin',
            id: 'mekanism:crystallizing/precipitate_tin'
        },
        {
            gas: 'kubejs:steamed_uranium_gas',
            amount: 200,
            output: 'kubejs:precipitate_uranium',
            id: 'mekanism:crystallizing/precipitate_uranium'
        },
        {
            gas: 'kubejs:steamed_zinc_gas',
            amount: 200,
            output: 'kubejs:precipitate_zinc',
            id: 'mekanism:crystallizing/precipitate_zinc'
        },

        {
            gas: 'kubejs:filtered_aluminum_gas',
            amount: 100,
            output: 'kubejs:dirty_lump_aluminum',
            id: 'mekanism:crystallizing/dirty_lump_aluminum'
        },
        {
            gas: 'kubejs:filtered_cobalt_gas',
            amount: 100,
            output: 'kubejs:dirty_lump_cobalt',
            id: 'mekanism:crystallizing/dirty_lump_cobalt'
        },
        {
            gas: 'kubejs:filtered_copper_gas',
            amount: 100,
            output: 'kubejs:dirty_lump_copper',
            id: 'mekanism:crystallizing/dirty_lump_copper'
        },
        {
            gas: 'kubejs:filtered_gold_gas',
            amount: 100,
            output: 'kubejs:dirty_lump_gold',
            id: 'mekanism:crystallizing/dirty_lump_gold'
        },
        {
            gas: 'kubejs:filtered_iron_gas',
            amount: 100,
            output: 'kubejs:dirty_lump_iron',
            id: 'mekanism:crystallizing/dirty_lump_iron'
        },
        {
            gas: 'kubejs:filtered_lead_gas',
            amount: 100,
            output: 'kubejs:dirty_lump_lead',
            id: 'mekanism:crystallizing/dirty_lump_lead'
        },
        {
            gas: 'kubejs:filtered_nickel_gas',
            amount: 100,
            output: 'kubejs:dirty_lump_nickel',
            id: 'mekanism:crystallizing/dirty_lump_nickel'
        },
        {
            gas: 'kubejs:filtered_osmium_gas',
            amount: 100,
            output: 'kubejs:dirty_lump_osmium',
            id: 'mekanism:crystallizing/dirty_lump_osmium'
        },
        {
            gas: 'kubejs:filtered_silver_gas',
            amount: 100,
            output: 'kubejs:dirty_lump_silver',
            id: 'mekanism:crystallizing/dirty_lump_silver'
        },
        {
            gas: 'kubejs:filtered_thallasium_gas',
            amount: 100,
            output: 'kubejs:dirty_lump_thallasium',
            id: 'mekanism:crystallizing/dirty_lump_thallasium'
        },
        {
            gas: 'kubejs:filtered_tin_gas',
            amount: 100,
            output: 'kubejs:dirty_lump_tin',
            id: 'mekanism:crystallizing/dirty_lump_tin'
        },
        {
            gas: 'kubejs:filtered_uranium_gas',
            amount: 100,
            output: 'kubejs:dirty_lump_uranium',
            id: 'mekanism:crystallizing/dirty_lump_uranium'
        },
        {
            gas: 'kubejs:filtered_zinc_gas',
            amount: 100,
            output: 'kubejs:dirty_lump_zinc',
            id: 'mekanism:crystallizing/dirty_lump_zinc'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'mekanism:crystallizing',
            chemicalType: 'gas',
            input: { amount: recipe.amount, gas: recipe.gas },
            output: item.of(recipe.output).toJson()
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
