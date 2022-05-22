onEvent('item.registry', event => {

    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json

    event.create('basic_circuit_board').displayName('Basic Circuit Board')
    event.create('printed_basic_circuit_board').displayName('Printed Basic Circuit Board')
    event.create('printed_final_basic_circuit_board').displayName('Populated Basic PCB')

    event.create('advanced_circuit_board').displayName('Advanced Circuit Board')
    event.create('printed_advanced_circuit_board').displayName('Printed Advanced Circuit Board')
    event.create('printed_final_advanced_circuit_board').displayName('Populated Advanced PCB')

    event.create('elite_circuit_board').displayName('Elite Circuit Board')
    event.create('printed_elite_circuit_board').displayName('Printed Elite Circuit Board')
    event.create('printed_final_elite_circuit_board').displayName('Populated Elite PCB')

    event.create('ultimate_circuit_board').displayName('Ultimate Circuit Board')
    event.create('printed_ultimate_circuit_board').displayName('Printed Ultimate Circuit Board')
    event.create('printed_final_ultimate_circuit_board').displayName('Populated Ultimate PCB')

    event.create('basic_smd').displayName('Basic SMD Chip')
    event.create('advanced_smd').displayName('Advanced SMD Chip')
    event.create('elite_smd').displayName('Elite SMD Chip')
    event.create('ultimate_smd').displayName('Ultimate SMD Chip')

    event.create('silicon_sheet').displayName('Silicon Sheet')

    event.create('1k_component_wafer').displayName('1k ME Storage Component Wafer')
    event.create('4k_component_wafer').displayName('4k ME Storage Component Wafer')
    event.create('16k_component_wafer').displayName('16k ME Storage Component Wafer')
    event.create('64k_component_wafer').displayName('64k ME Storage Component Wafer')

    event.create('256k_component_wafer').displayName('246k ME Storage Component Wafer')
    event.create('1m_component_wafer').displayName('1M ME Storage Component Wafer')
    event.create('4m_component_wafer').displayName('4M ME Storage Component Wafer')
    event.create('16m_component_wafer').displayName('16M ME Storage Component Wafer')

    event.create('titanium_rod').displayName('Titanium Rod')
    event.create('iridium_rod').displayName('Iridium Rod')

    event.create('overworld_portal').displayName('Overworld Portal')

    event.create('ultimate_conglomerate').displayName('Ultimate Conglomerate')

    event.create('ntc_portal').displayName('NTC Portal')

    event.create('tier_1_kit').displayName('Tier 1 Kit')
    event.create('tier_2_kit').displayName('Tier 2 Kit')
    event.create('tier_3_kit').displayName('Tier 3 Kit')
    event.create('tier_4_kit').displayName('Tier 4 Kit')
    event.create('tier_5_kit').displayName('Tier 5 Kit')

    event.create('filters1').displayName('Advanced Filter')
    event.create('sludge_dust').displayName('Ball of Sludge')

    event.create('transistor').displayName('Transistor')
    event.create('screw').displayName('Screw')

    event.create('upgrade_basic').displayName('Basic Machine Upgrade')

    event.create('activated_carbon').displayName('Activated Carbon')
    //event.create('calcium_carbonate').displayName('Calcium Carbonate')
    event.create('calcium_acetate').displayName('Calcium Acetate')

    event.create('monazite_gem').displayName('Monazite Crystal')

    event.create('monazite_gem_seed').displayName('Monazite Crystal Seed')
    event.create('crystal_shard_seed').displayName('Crystal Shard Seed')
    event.create('ender_shard_seed').displayName('Ender Shard Seed')
    event.create('amber_gem_seed').displayName('Amber Crystal Seed')

    //Custom built mekanism matter stuff
    event.create('uu_matter_2').displayName('Universal Mass')
    event.create('scrap_2').displayName('Scrap') //not going to use--use matter ball instead
    event.create('scrap_box_2').displayName('Scrapbox') //not going to use--use singularity instead

    const generalItems = [];

    // Used for custom 8x, 16x, 32x ore processing
    let metalsProcessing = [
        'aluminum',
        'cobalt',
        'copper',
        'gold',
        'iron',
        'lead',
        'nickel',
        'osmium',
        'silver',
        'thallasium',
        'tin',
        'uranium',
        'zinc'
    ];

    let metalTypes = ['soda', 'irradiated', 'dry_cleaned', 'clean_pressed', 'destabilized', 'precipitate', 'dirty_lump', 'clean_lump'];

    metalTypes.forEach((metalType) => {
        metalsProcessing.forEach((metal) => {
            generalItems.push({id: `${metalType}_${metal}`, display: capitalizeFirstLetter(changeUnderscoreToDash(`${metalType}`)) + ' ' + capitalizeFirstLetter(`${metal}`), folder: `${metal}` });
        });
    });

    generalItems.forEach((item) => {
        event.create(item.id).group('KubeJS').texture(`kubejs:item/oreprocessing/${item.folder}/${item.id}`).displayName(`${item.display}`);
    });



    // "nuclearcraft" esque additions
    const nuclearItems = [ {id: `232_thorium`, display: `Thorium` + '-' + `232`, folder: `thorium` },
    {id: `tbu`, display: `Thorium` + '-' + `Fuel`, folder: `thorium` },
    {id: `tbu_depleted`, display: 'Depleted' + ' ' + `TBU`, folder: `thorium` },
    {id: `233_uranium`, display: `Uranium` + '-' + `233`, folder: `uranium` },
    {id: `235_uranium`, display: `Uranium` + '-' + `235`, folder: `uranium` },
    {id: `238_uranium`, display: `Uranium` + '-' + `238`, folder: `uranium` },
    {id: `233_leu`, display: `LEU` + '-' + `233`, folder: `uranium` },
    {id: `233_leu_depleted`, display: 'Depleted' + ' ' + `LEU` + '-' + `233`, folder: `uranium` },
    {id: `235_leu`, display: `LEU` + '-' + `235`, folder: `uranium` },
    {id: `235_leu_depleted`, display: 'Depleted' + ' ' + `LEU` + '-' + `235`, folder: `uranium` },
    {id: `242_plutonium`, display: `Plutonium` + '-' + `242`, folder: `plutonium` },
    {id: `241_plutonium`, display: `Plutonium` + '-' + `241`, folder: `plutonium` },
    {id: `239_plutonium`, display: `Plutonium` + '-' + `239`, folder: `plutonium` },
    {id: `241_hep`, display: `HEP` + '-' + `241`, folder: `plutonium` },
    {id: `241_hep_depleted`, display: 'Depleted' + ' ' + `HEP` + '-' + `241`, folder: `plutonium` },
    {id: `241_mox`, display: `MOX` + '-' + `241`, folder: `plutonium` },
    {id: `241_mox_depleted`, display: 'Depleted' + ' ' + `MOX` + '-' + `241`, folder: `plutonium` },
    {id: `239_mox`, display: `MOX` + '-' + `239`, folder: `plutonium` },
    {id: `239_mox_depleted`, display: 'Depleted' + ' ' + `MOX` + '-' + `239`, folder: `plutonium` },
    {id: `247_curium`, display: `Curium` + '-' + `247`, folder: `curium` },
    {id: `246_curium`, display: `Curium` + '-' + `246`, folder: `curium` },
    {id: `243_curium`, display: `Curium` + '-' + `243`, folder: `curium` },
    {id: `247_lecm`, display: `LECm` + '-' + `247`, folder: `curium` },
    {id: `247_lecm_depleted`, display: 'Depleted' + ' ' + `LECm` + '-' + `247`, folder: `curium` },
    {id: `243_lecm`, display: `LECm` + '-' + `243`, folder: `curium` },
    {id: `243_lecm_depleted`, display: 'Depleted' + ' ' + `LECm` + '-' + `243`, folder: `curium` },
    {id: `252_californium`, display: `Californium` + '-' + `252`, folder: `californium` },
    {id: `249_californium`, display: `Californium` + '-' + `249`, folder: `californium` },
    {id: `249_hecf`, display: `HECf` + '-' + `249`, folder: `californium` },
    {id: `249_hecf_depleted`, display: 'Depleted' + ' ' + `HECf` + '-' + `249`, folder: `californium` },
    {id: `250_californium`, display: `Californium` + '-' + `250`, folder: `californium` }
    ];
    
    // 
    let nuclearProcessing = [
        'thorium',
        'uranium',
        // 'neptunium',
        'plutonium',
        'curium',
        'californium'
    ];

    let nuclearTypes = ['clumps'];

    let isotopesTypes = ['232', '233', '238', '239', '235', '242', '241', '247', '246', '243', '252', '249', '250'];

        // ingots in isotope separator, clumps from fuel re-processor, fuels from crafting, depleted from fission, isotopes from isotope separator, process depleted in fuel re-processor to get different clumps
        // in between fuel and depleted: mek oxidizer(fuel item -> fuel gas) -> fission reactor -> depleted gas -> reaction chamber -> depleted item
    // Thorium ingot -> thorium clumps -> thorium-232 -> need9 for thorium fuel -> depleted thorium -> uranium clumps
    // Uranium ingot -> uranium clumps -> uranium-238, 235, 233 -> LEU-233, 235 -> depleted 233, 235 -> plutonium clumps
    // Plutonium ingot -> plutonium clumps -> plutonium-242, 241, 239 -> HEP-241, MOX-241, MOX-239 -> depleted 241, 239 -> curium clumps
    // Curium ingot -> curium clumps -> curium-247, 246, 243 -> LECm-247, 243 -> depleted 247, 243 -> californium clumps
    // Californium ingot -> californium clumps -> californium-252, 249 -> HECf-249 -> depleted 249 -> californium-250

    nuclearTypes.forEach((nuclearType) => {
        nuclearProcessing.forEach((nuclear) => {
            nuclearItems.push({id: `${nuclearType}_${nuclear}`, display: capitalizeFirstLetter(`${nuclear}`) + ' ' + capitalizeFirstLetter(changeUnderscoreToDash(`${nuclearType}`)), folder: `${nuclear}` });
        });
    });

    nuclearItems.forEach((item) => {
        event.create(item.id).group('KubeJS').texture(`kubejs:item/nuclearprocessing/${item.folder}/${item.id}`).displayName(`${item.display}`);
    });



    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function changeUnderscoreToDash(string) {
        return string.replace(/_/g, "-");
    }

  })