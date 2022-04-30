onEvent('recipes', (event) => {

    var data = {
        recipes: [
            {
                fluidInput: { amount: 1, fluid: 'kubejs:liquid_proton' },
                gasOutput: { amount: 1, gas: 'kubejs:proton_gas' },
                gasInput: { amount: 1, gas: 'kubejs:proton_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:liquid_proton' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:liquid_anti_hydrogen' },
                gasOutput: { amount: 1, gas: 'kubejs:anti_hydrogen_gas' },
                gasInput: { amount: 1, gas: 'kubejs:anti_hydrogen_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:liquid_anti_hydrogen' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:liquid_anti_positron' },
                gasOutput: { amount: 1, gas: 'kubejs:anti_positron_gas' },
                gasInput: { amount: 1, gas: 'kubejs:anti_positron_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:liquid_anti_positron' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:liquid_secret_spices' },
                gasOutput: { amount: 1, gas: 'kubejs:secret_spices_gas' },
                gasInput: { amount: 1, gas: 'kubejs:secret_spices_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:liquid_secret_spices' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:liquid_universal_mass' },
                gasOutput: { amount: 1, gas: 'kubejs:universal_mass_gas' },
                gasInput: { amount: 1, gas: 'kubejs:universal_mass_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:liquid_universal_mass' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:liquid_dip' },
                gasOutput: { amount: 1, gas: 'kubejs:dip_gas' },
                gasInput: { amount: 1, gas: 'kubejs:dip_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:liquid_dip' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:bubbly_aluminum' },
                gasOutput: { amount: 1, gas: 'kubejs:bubbly_aluminum_gas' },
                gasInput: { amount: 1, gas: 'kubejs:bubbly_aluminum_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:bubbly_aluminum' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:bubbly_cobalt' },
                gasOutput: { amount: 1, gas: 'kubejs:bubbly_cobalt_gas' },
                gasInput: { amount: 1, gas: 'kubejs:bubbly_cobalt_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:bubbly_cobalt' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:bubbly_copper' },
                gasOutput: { amount: 1, gas: 'kubejs:bubbly_copper_gas' },
                gasInput: { amount: 1, gas: 'kubejs:bubbly_copper_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:bubbly_copper' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:bubbly_gold' },
                gasOutput: { amount: 1, gas: 'kubejs:bubbly_gold_gas' },
                gasInput: { amount: 1, gas: 'kubejs:bubbly_gold_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:bubbly_gold' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:bubbly_iron' },
                gasOutput: { amount: 1, gas: 'kubejs:bubbly_iron_gas' },
                gasInput: { amount: 1, gas: 'kubejs:bubbly_iron_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:bubbly_iron' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:bubbly_lead' },
                gasOutput: { amount: 1, gas: 'kubejs:bubbly_lead_gas' },
                gasInput: { amount: 1, gas: 'kubejs:bubbly_lead_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:bubbly_lead' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:bubbly_nickel' },
                gasOutput: { amount: 1, gas: 'kubejs:bubbly_nickel_gas' },
                gasInput: { amount: 1, gas: 'kubejs:bubbly_nickel_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:bubbly_nickel' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:bubbly_osmium' },
                gasOutput: { amount: 1, gas: 'kubejs:bubbly_osmium_gas' },
                gasInput: { amount: 1, gas: 'kubejs:bubbly_osmium_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:bubbly_osmium' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:bubbly_silver' },
                gasOutput: { amount: 1, gas: 'kubejs:bubbly_silver_gas' },
                gasInput: { amount: 1, gas: 'kubejs:bubbly_silver_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:bubbly_silver' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:bubbly_thallasium' },
                gasOutput: { amount: 1, gas: 'kubejs:bubbly_thallasium_gas' },
                gasInput: { amount: 1, gas: 'kubejs:bubbly_thallasium_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:bubbly_thallasium' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:bubbly_tin' },
                gasOutput: { amount: 1, gas: 'kubejs:bubbly_tin_gas' },
                gasInput: { amount: 1, gas: 'kubejs:bubbly_tin_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:bubbly_tin' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:bubbly_uranium' },
                gasOutput: { amount: 1, gas: 'kubejs:bubbly_uranium_gas' },
                gasInput: { amount: 1, gas: 'kubejs:bubbly_uranium_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:bubbly_uranium' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:bubbly_zinc' },
                gasOutput: { amount: 1, gas: 'kubejs:bubbly_zinc_gas' },
                gasInput: { amount: 1, gas: 'kubejs:bubbly_zinc_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:bubbly_zinc' }
            },

            {
                fluidInput: { amount: 1, fluid: 'kubejs:disintegrated_aluminum' },
                gasOutput: { amount: 1, gas: 'kubejs:disintegrated_aluminum_gas' },
                gasInput: { amount: 1, gas: 'kubejs:disintegrated_aluminum_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:disintegrated_aluminum' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:disintegrated_cobalt' },
                gasOutput: { amount: 1, gas: 'kubejs:disintegrated_cobalt_gas' },
                gasInput: { amount: 1, gas: 'kubejs:disintegrated_cobalt_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:disintegrated_cobalt' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:disintegrated_copper' },
                gasOutput: { amount: 1, gas: 'kubejs:disintegrated_copper_gas' },
                gasInput: { amount: 1, gas: 'kubejs:disintegrated_copper_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:disintegrated_copper' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:disintegrated_gold' },
                gasOutput: { amount: 1, gas: 'kubejs:disintegrated_gold_gas' },
                gasInput: { amount: 1, gas: 'kubejs:disintegrated_gold_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:disintegrated_gold' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:disintegrated_iron' },
                gasOutput: { amount: 1, gas: 'kubejs:disintegrated_iron_gas' },
                gasInput: { amount: 1, gas: 'kubejs:disintegrated_iron_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:disintegrated_iron' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:disintegrated_lead' },
                gasOutput: { amount: 1, gas: 'kubejs:disintegrated_lead_gas' },
                gasInput: { amount: 1, gas: 'kubejs:disintegrated_lead_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:disintegrated_lead' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:disintegrated_nickel' },
                gasOutput: { amount: 1, gas: 'kubejs:disintegrated_nickel_gas' },
                gasInput: { amount: 1, gas: 'kubejs:disintegrated_nickel_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:disintegrated_nickel' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:disintegrated_osmium' },
                gasOutput: { amount: 1, gas: 'kubejs:disintegrated_osmium_gas' },
                gasInput: { amount: 1, gas: 'kubejs:disintegrated_osmium_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:disintegrated_osmium' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:disintegrated_silver' },
                gasOutput: { amount: 1, gas: 'kubejs:disintegrated_silver_gas' },
                gasInput: { amount: 1, gas: 'kubejs:disintegrated_silver_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:disintegrated_silver' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:disintegrated_thallasium' },
                gasOutput: { amount: 1, gas: 'kubejs:disintegrated_thallasium_gas' },
                gasInput: { amount: 1, gas: 'kubejs:disintegrated_thallasium_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:disintegrated_thallasium' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:disintegrated_tin' },
                gasOutput: { amount: 1, gas: 'kubejs:disintegrated_tin_gas' },
                gasInput: { amount: 1, gas: 'kubejs:disintegrated_tin_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:disintegrated_tin' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:disintegrated_uranium' },
                gasOutput: { amount: 1, gas: 'kubejs:disintegrated_uranium_gas' },
                gasInput: { amount: 1, gas: 'kubejs:disintegrated_uranium_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:disintegrated_uranium' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:disintegrated_zinc' },
                gasOutput: { amount: 1, gas: 'kubejs:disintegrated_zinc_gas' },
                gasInput: { amount: 1, gas: 'kubejs:disintegrated_zinc_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:disintegrated_zinc' }
            },

            {
                fluidInput: { amount: 1, fluid: 'kubejs:spicy_aluminum' },
                gasOutput: { amount: 1, gas: 'kubejs:spicy_aluminum_gas' },
                gasInput: { amount: 1, gas: 'kubejs:spicy_aluminum_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:spicy_aluminum' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:spicy_cobalt' },
                gasOutput: { amount: 1, gas: 'kubejs:spicy_cobalt_gas' },
                gasInput: { amount: 1, gas: 'kubejs:spicy_cobalt_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:spicy_cobalt' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:spicy_copper' },
                gasOutput: { amount: 1, gas: 'kubejs:spicy_copper_gas' },
                gasInput: { amount: 1, gas: 'kubejs:spicy_copper_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:spicy_copper' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:spicy_gold' },
                gasOutput: { amount: 1, gas: 'kubejs:spicy_gold_gas' },
                gasInput: { amount: 1, gas: 'kubejs:spicy_gold_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:spicy_gold' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:spicy_iron' },
                gasOutput: { amount: 1, gas: 'kubejs:spicy_iron_gas' },
                gasInput: { amount: 1, gas: 'kubejs:spicy_iron_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:spicy_iron' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:spicy_lead' },
                gasOutput: { amount: 1, gas: 'kubejs:spicy_lead_gas' },
                gasInput: { amount: 1, gas: 'kubejs:spicy_lead_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:spicy_lead' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:spicy_nickel' },
                gasOutput: { amount: 1, gas: 'kubejs:spicy_nickel_gas' },
                gasInput: { amount: 1, gas: 'kubejs:spicy_nickel_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:spicy_nickel' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:spicy_osmium' },
                gasOutput: { amount: 1, gas: 'kubejs:spicy_osmium_gas' },
                gasInput: { amount: 1, gas: 'kubejs:spicy_osmium_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:spicy_osmium' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:spicy_silver' },
                gasOutput: { amount: 1, gas: 'kubejs:spicy_silver_gas' },
                gasInput: { amount: 1, gas: 'kubejs:spicy_silver_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:spicy_silver' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:spicy_thallasium' },
                gasOutput: { amount: 1, gas: 'kubejs:spicy_thallasium_gas' },
                gasInput: { amount: 1, gas: 'kubejs:spicy_thallasium_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:spicy_thallasium' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:spicy_tin' },
                gasOutput: { amount: 1, gas: 'kubejs:spicy_tin_gas' },
                gasInput: { amount: 1, gas: 'kubejs:spicy_tin_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:spicy_tin' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:spicy_uranium' },
                gasOutput: { amount: 1, gas: 'kubejs:spicy_uranium_gas' },
                gasInput: { amount: 1, gas: 'kubejs:spicy_uranium_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:spicy_uranium' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:spicy_zinc' },
                gasOutput: { amount: 1, gas: 'kubejs:spicy_zinc_gas' },
                gasInput: { amount: 1, gas: 'kubejs:spicy_zinc_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:spicy_zinc' }
            },

            {
                fluidInput: { amount: 1, fluid: 'kubejs:steamed_aluminum' },
                gasOutput: { amount: 1, gas: 'kubejs:steamed_aluminum_gas' },
                gasInput: { amount: 1, gas: 'kubejs:steamed_aluminum_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:steamed_aluminum' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:steamed_cobalt' },
                gasOutput: { amount: 1, gas: 'kubejs:steamed_cobalt_gas' },
                gasInput: { amount: 1, gas: 'kubejs:steamed_cobalt_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:steamed_cobalt' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:steamed_copper' },
                gasOutput: { amount: 1, gas: 'kubejs:steamed_copper_gas' },
                gasInput: { amount: 1, gas: 'kubejs:steamed_copper_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:steamed_copper' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:steamed_gold' },
                gasOutput: { amount: 1, gas: 'kubejs:steamed_gold_gas' },
                gasInput: { amount: 1, gas: 'kubejs:steamed_gold_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:steamed_gold' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:steamed_iron' },
                gasOutput: { amount: 1, gas: 'kubejs:steamed_iron_gas' },
                gasInput: { amount: 1, gas: 'kubejs:steamed_iron_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:steamed_iron' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:steamed_lead' },
                gasOutput: { amount: 1, gas: 'kubejs:steamed_lead_gas' },
                gasInput: { amount: 1, gas: 'kubejs:steamed_lead_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:steamed_lead' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:steamed_nickel' },
                gasOutput: { amount: 1, gas: 'kubejs:steamed_nickel_gas' },
                gasInput: { amount: 1, gas: 'kubejs:steamed_nickel_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:steamed_nickel' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:steamed_osmium' },
                gasOutput: { amount: 1, gas: 'kubejs:steamed_osmium_gas' },
                gasInput: { amount: 1, gas: 'kubejs:steamed_osmium_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:steamed_osmium' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:steamed_silver' },
                gasOutput: { amount: 1, gas: 'kubejs:steamed_silver_gas' },
                gasInput: { amount: 1, gas: 'kubejs:steamed_silver_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:steamed_silver' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:steamed_thallasium' },
                gasOutput: { amount: 1, gas: 'kubejs:steamed_thallasium_gas' },
                gasInput: { amount: 1, gas: 'kubejs:steamed_thallasium_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:steamed_thallasium' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:steamed_tin' },
                gasOutput: { amount: 1, gas: 'kubejs:steamed_tin_gas' },
                gasInput: { amount: 1, gas: 'kubejs:steamed_tin_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:steamed_tin' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:steamed_uranium' },
                gasOutput: { amount: 1, gas: 'kubejs:steamed_uranium_gas' },
                gasInput: { amount: 1, gas: 'kubejs:steamed_uranium_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:steamed_uranium' }
            },
            {
                fluidInput: { amount: 1, fluid: 'kubejs:steamed_zinc' },
                gasOutput: { amount: 1, gas: 'kubejs:steamed_zinc_gas' },
                gasInput: { amount: 1, gas: 'kubejs:steamed_zinc_gas' },
                fluidOutput: { amount: 1, fluid: 'kubejs:steamed_zinc' }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'mekanism:rotary',
            fluidInput: recipe.fluidInput,
            gasOutput: recipe.gasOutput,
            gasInput: recipe.gasInput,
            fluidOutput: recipe.fluidOutput
        });
    });
});
