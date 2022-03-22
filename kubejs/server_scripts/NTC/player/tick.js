onEvent('player.tick', (event) => {
    if (!event.player.isPlayer() || event.player.isFake()) {
        return;
    }

    const player = event.player;

    if (!playerHas('#ntc2:dense', player)) {
        if (global.setVeryHeavy) {
            //player.extinguish();
            event.server.scheduleInTicks(1, event.server, function (callback) {
                callback.data.runCommand('/effect clear @p immersiveengineering:sticky')
            })
            global.setVeryHeavy = false;
            player.sendInventoryUpdate();
        }
    }
    
});
