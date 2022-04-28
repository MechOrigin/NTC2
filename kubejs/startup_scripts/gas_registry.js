onEvent('gas.registry', event => {
    event.create("neutron_gas").color(00000000).texture("kubejs:gases/neutron_gas.png").displayName('Neutron Gas')

    event.create("chloroethane_gas").color(15925222).displayName('Chloroethane Gas')
    event.create("chloromethane_gas").color(15073228).displayName('Chloromethane Gas')
    event.create("methane_gas").color(15921906).displayName('Methane Gas')

    event.create("proton_gas").color(14886251).displayName('Proton Gas')
    event.create("anti_hydrogen_gas").color(16777215).displayName('Anti Hydrogen Gas')
    event.create("anti_proton_gas").color(8926717).displayName('Anti Proton Gas')

    event.create("anti_deuterium_gas").color(65408).displayName('Anti Deuterium Gas')
    event.create("anti_tritium_gas").color(8454016).displayName('Anti Tritium Gas')
    event.create("anti_helium_3_gas").color(16777088).displayName('Anti Helium-3 Gas')

    event.create("secret_spices_gas").color(14286796).displayName('Secret Spices Gas')

    event.create("dip_gas").color(3407667).displayName('Dip Gas')


    const generalGases = [];

    let metals_gas = [
        {metal: 'aluminum', color: 'e2e3e1'},
        {metal: 'cobalt', color: '0264ae'},
        {metal: 'copper', color: 'df8e50'},
        {metal: 'gold', color: 'ffff7a'},
        {metal: 'iron', color: 'd3d3d3'},
        {metal: 'lead', color: '7d8ea3'},
        {metal: 'nickel', color: 'c1bcaf'},
        {metal: 'osmium', color: 'a5defc'},
        {metal: 'silver', color: 'e6e6e6'},
        {metal: 'thallasium', color: '7ddbc7'},
        {metal: 'tin', color: 'cfd3d9'},
        {metal: 'uranium', color: '547852'},
        {metal: 'zinc', color: '91898c'}
    ];

    let gasTypes = ['disintegrated', 'bubbly', 'spicy', 'steamed', 'dipped', 'filtered'];

    gasTypes.forEach((gasType) => {
        metals_gas.forEach((metal) => {
            generalGases.push({id: `${gasType}_${metal.metal}_gas`, texture: hexToDec(`${metal.color}`), display: capitalizeFirstLetter(`${gasType}`) + ' ' + capitalizeFirstLetter(`${metal.metal}`) + ' ' + 'Gas' });
        });
    });

    generalGases.forEach((gas) => {
        //console.log(`Created new ID as ${gas.id} with color: ${gas.texture}`);
        event.create(gas.id).color(gas.texture).displayName(`${gas.display}`)
    });

    const nuclearGases = [
        {id: `tbu_gas`, texture: hexToDec(`242424`), display: capitalizeFirstLetter(`tbu`) + ' ' + 'Gas' },
        {id: `tbu_depleted_gas`, texture: hexToDec(`121212`), display: capitalizeFirstLetter(`depleted`) + ' ' + capitalizeFirstLetter(`tbu`) + ' ' + 'Gas' },
        {id: `233_leu_gas`, texture: hexToDec(`004000`), display: capitalizeFirstLetter(`leu-233`) + ' ' + 'Gas' },
        {id: `233_leu_depleted_gas`, texture: hexToDec(`003000`), display: capitalizeFirstLetter(`depleted`) + ' ' + capitalizeFirstLetter(`leu-233`) + ' ' + 'Gas' },
        {id: `235_leu_gas`, texture: hexToDec(`336633`), display: capitalizeFirstLetter(`leu-235`) + ' ' + 'Gas' },
        {id: `235_leu_depleted_gas`, texture: hexToDec(`738673`), display: capitalizeFirstLetter(`depleted`) + ' ' + capitalizeFirstLetter(`leu-235`) + ' ' + 'Gas' },
        {id: `241_hep_gas`, texture: hexToDec(`CACACA`), display: capitalizeFirstLetter(`hep-241`) + ' ' + 'Gas' },
        {id: `241_hep_depleted_gas`, texture: hexToDec(`452404`), display: capitalizeFirstLetter(`depleted`) + ' ' + capitalizeFirstLetter(`hep-241`) + ' ' + 'Gas' },
        {id: `241_mox_gas`, texture: hexToDec(`89be9e`), display: capitalizeFirstLetter(`mox-241`) + ' ' + 'Gas' },
        {id: `241_mox_depleted_gas`, texture: hexToDec(`4a8762`), display: capitalizeFirstLetter(`depleted`) + ' ' + capitalizeFirstLetter(`mox-241`) + ' ' + 'Gas' },
        {id: `239_mox_gas`, texture: hexToDec(`40826d`), display: capitalizeFirstLetter(`mox-239`) + ' ' + 'Gas' },
        {id: `239_mox_depleted_gas`, texture: hexToDec(`336857`), display: capitalizeFirstLetter(`depleted`) + ' ' + capitalizeFirstLetter(`mox-239`) + ' ' + 'Gas' },
        {id: `247_lecm_gas`, texture: hexToDec(`5a005a`), display: capitalizeFirstLetter(`lecm-247`) + ' ' + 'Gas' },
        {id: `247_lecm_depleted_gas`, texture: hexToDec(`620021`), display: capitalizeFirstLetter(`depleted`) + ' ' + capitalizeFirstLetter(`lecm-247`) + ' ' + 'Gas' },
        {id: `243_lecm_gas`, texture: hexToDec(`480048`), display: capitalizeFirstLetter(`lecm-243`) + ' ' + 'Gas' },
        {id: `243_lecm_depleted_gas`, texture: hexToDec(`7b0029`), display: capitalizeFirstLetter(`depleted`) + ' ' + capitalizeFirstLetter(`lecm-243`) + ' ' + 'Gas' },
        {id: `249_hecf_gas`, texture: hexToDec(`800020`), display: capitalizeFirstLetter(`hecf-249`) + ' ' + 'Gas' },
        {id: `249_hecf_depleted_gas`, texture: hexToDec(`66001a`), display: capitalizeFirstLetter(`depleted`) + ' ' + capitalizeFirstLetter(`hecf-249`) + ' ' + 'Gas' },
    ];

    nuclearGases.forEach((gas) => {
        //console.log(`Created new ID as ${gas.id} with color: ${gas.texture}`);
        event.create(gas.id).color(gas.texture).displayName(`${gas.display}`)
    });


    function hexToDec(hexString) {
        return parseInt(hexString, 16);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
})