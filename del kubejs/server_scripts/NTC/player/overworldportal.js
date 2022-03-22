// Listen to a player event, in this case item right-click
events.listen('item.right_click', function (event) {

    var id = event.item.id.toString();

    if(id.contains('kubejs') & id.contains('overworld_portal')) {
        event.server.scheduleInTicks(1, event.server, function (callback) {
        
            callback.data.runCommand('/scoreboard objectives add OverworldPortal minecraft.used:kubejs.overworld_portal')
            callback.data.runCommand('/execute run scoreboard players add @p OverworldPortal 1')
            callback.data.runCommand('/execute as @r at @s if entity @s[scores={OverworldPortal=1..},nbt={SelectedItem:{id:"kubejs:overworld_portal",Count:1b}}] in ntc_dimension:ntc_dimension as @p run tp 1.5 127 1.5')
            callback.data.runCommand('/scoreboard players reset @a OverworldPortal')
          })
    }


})