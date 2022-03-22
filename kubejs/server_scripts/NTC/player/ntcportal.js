// Listen to a player event, in this case item right-click
events.listen('item.right_click', function (event) {

    var id = event.item.id.toString();

    if(id.contains('kubejs') & id.contains('ntc_portal')) {
        event.server.scheduleInTicks(1, event.server, function (callback) {
        
            //callback.data.runCommand('/execute in minecraft:overworld as @p run tp 1.5 69 1.5')

            callback.data.runCommand('/scoreboard objectives add NTCPortal minecraft.used:kubejs.ntc_portal')
            callback.data.runCommand('/execute run scoreboard players add @p NTCPortal 1')
            callback.data.runCommand('/execute as @r at @s if entity @s[scores={NTCPortal=1..},nbt={SelectedItem:{id:"kubejs:ntc_portal",Count:1b}}] in minecraft:overworld as @p run tp 1.5 69 1.5')
            callback.data.runCommand('/scoreboard players reset @a NTCPortal')
          })
    }


})