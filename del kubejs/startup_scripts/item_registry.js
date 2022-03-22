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

    event.create('titanium_rod').displayName('Titanium Rod')
    event.create('iridium_rod').displayName('Iridium Rod')

    event.create('overworld_portal').displayName('Overworld Portal')

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
  })