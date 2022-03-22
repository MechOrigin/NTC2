//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//ORE DROP LOOT TABLE SCRIPT
//BY ANOKKA & NEEPNOOP / 2021
//
//Makes vanilla and modded ores drop Emendatus Enigmatica chunks and clusters
//

onEvent('block.loot_tables', event => {
	
//
//
//-----OVERWORLD-----
//
//
	//IRON
	event.addSimpleBlock('#forge:ores/iron', 'emendatusenigmatica:iron_chunk')
	//GOLD
	event.addSimpleBlock('#forge:ores/gold', 'emendatusenigmatica:gold_chunk')
	//COPPER
	event.addSimpleBlock('#forge:ores/copper', 'emendatusenigmatica:copper_chunk')
	//ALUMINUM
	event.addSimpleBlock('#forge:ores/aluminum', 'emendatusenigmatica:aluminum_chunk')
	//SILVER
	event.addSimpleBlock('#forge:ores/silver', 'emendatusenigmatica:silver_chunk')
	//LEAD
	event.addSimpleBlock('#forge:ores/lead', 'emendatusenigmatica:lead_chunk')
	//NICKEL
	event.addSimpleBlock('#forge:ores/nickel', 'emendatusenigmatica:nickel_chunk')
	//URANIUM
	event.addSimpleBlock('#forge:ores/uranium', 'emendatusenigmatica:uranium_chunk')
	//OSMIUM
	event.addSimpleBlock('#forge:ores/osmium', 'emendatusenigmatica:osmium_chunk')
	//TIN
	event.addSimpleBlock('#forge:ores/tin', 'emendatusenigmatica:tin_chunk')
	//ZINC
	event.addSimpleBlock('#forge:ores/zinc', 'emendatusenigmatica:zinc_chunk')
	
//
//
//-----NETHER ORES-----
//
//
	//IRON
	event.addBlock('emendatusenigmatica:iron_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:iron_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:iron_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:iron_chunk'})
			})
		})
	//GOLD
	event.addBlock('emendatusenigmatica:gold_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:gold_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:gold_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:gold_chunk'})
			})
		})
	//COPPER
	event.addBlock('emendatusenigmatica:copper_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:copper_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:copper_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:copper_chunk'})
			})
		})
	//ALUMINUM
	event.addBlock('emendatusenigmatica:aluminum_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:aluminum_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:aluminum_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:aluminum_chunk'})
			})
		})
	//SILVER
	event.addBlock('emendatusenigmatica:silver_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:silver_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:silver_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:silver_chunk'})
			})
		})
	//LEAD
	event.addBlock('emendatusenigmatica:lead_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lead_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:lead_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:lead_chunk'})
			})
		})
	//NICKEL
	event.addBlock('emendatusenigmatica:nickel_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:nickel_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:nickel_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:nickel_chunk'})
			})
		})
	//URANIUM
	event.addBlock('emendatusenigmatica:uranium_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:uranium_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:uranium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:uranium_chunk'})
			})
		})
	//OSMIUM
	event.addBlock('emendatusenigmatica:osmium_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:osmium_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:osmium_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:osmium_chunk'})
			})
		})
	//TIN
	event.addBlock('emendatusenigmatica:tin_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:tin_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:tin_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:tin_chunk'})
			})
		})
	//ZINC
	event.addBlock('emendatusenigmatica:zinc_netherrack_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:zinc_chunk'})
			})
		})
	event.addBlock('emendatusenigmatica:zinc_soul_soil_ore', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:zinc_chunk'})
			})
		})
    //COBALT
	event.addBlock('#forge:ores/cobalt', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:cobalt_chunk'})
			}) 
		}) 
//
//
//-----END ORES-----
//
//
	//IRON
	event.addSimpleBlock('emendatusenigmatica:iron_end_stone_ore', 'emendatusenigmatica:iron_cluster')
	//GOLD
	event.addSimpleBlock('emendatusenigmatica:gold_end_stone_ore', 'emendatusenigmatica:gold_cluster')
	//COPPER
	event.addSimpleBlock('emendatusenigmatica:copper_end_stone_ore', 'emendatusenigmatica:copper_cluster')
	//ALUMINUM
	event.addSimpleBlock('emendatusenigmatica:aluminum_end_stone_ore', 'emendatusenigmatica:aluminum_cluster')
	//SILVER
	event.addSimpleBlock('emendatusenigmatica:silver_end_stone_ore', 'emendatusenigmatica:silver_cluster')
	//LEAD
	event.addSimpleBlock('emendatusenigmatica:lead_end_stone_ore', 'emendatusenigmatica:lead_cluster')
	//NICKEL
	event.addSimpleBlock('emendatusenigmatica:nickel_end_stone_ore', 'emendatusenigmatica:nickel_cluster')
	//URANIUM
	event.addSimpleBlock('emendatusenigmatica:uranium_end_stone_ore', 'emendatusenigmatica:uranium_cluster')
	//OSMIUM
	event.addSimpleBlock('emendatusenigmatica:osmium_end_stone_ore', 'emendatusenigmatica:osmium_cluster')
	//TIN
	event.addSimpleBlock('emendatusenigmatica:tin_end_stone_ore', 'emendatusenigmatica:tin_cluster')
	//ZINC
	event.addSimpleBlock('emendatusenigmatica:zinc_end_stone_ore', 'emendatusenigmatica:zinc_cluster')
//
//fin
//
})