onEvent("player.inventory.changed", event => {

    const player = event.player;
    if (!player.isPlayer() || player.isFake()) {
        return;
    }

    // if (!event.item.hasTag('ntc2:burning_hot') || !event.item.hasTag('ntc2:dense') || !event.item.hasTag('ntc2:freezing') || !event.item.hasTag('ntc2:shocking') || !event.item.hasTag('ntc2:fatiguing') || !event.item.hasTag('ntc2:radioactive')) {
    //     return;
    // }

    if (!event.item.hasTag('ntc2:dense')) {
        return;
    }

    // if (!player.isInWater() && playerHas('#ntc2:burning_hot', player)) {
    //     event.player.setStatusMessage([Text.of(`A hot item is burning you!`).red()]);
    //     event.player.setOnFire(180);
    //     global.setOnFire = true;
    // }

    if (playerHas('#ntc2:dense', player)) {
        event.player.setStatusMessage([Text.of(`You are carrying a very dense object`).red()]);
            event.server.scheduleInTicks(1, event.server, function (callback) {
                //callback.data.runCommand('/effect give @p minecraft:slowness 9999 50 true')
                callback.data.runCommand('/effect give @p immersiveengineering:sticky 9999 25 true')
            })
        global.setVeryHeavy = true;
    }

});
