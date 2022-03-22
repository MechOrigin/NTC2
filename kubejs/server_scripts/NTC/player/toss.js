onEvent('item.toss', (event) => {
    const player = event.player;
    if (!player.isPlayer() || player.isFake()) {
        return;
    }

    if (!event.item.hasTag('ntc2:dense')) {
        return;
    }

    if (!playerHas('#ntc2:dense', player)) {
        if (global.setVeryHeavy) {
            //player.extinguish();
            event.server.scheduleInTicks(1, event.server, function (callback) {
                callback.data.runCommand('/effect clear @p immersiveengineering:sticky')
            })
            global.setVeryHeavy = false;
        }
    }
});
