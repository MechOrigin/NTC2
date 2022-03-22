events.listen('player.logged_in', (event) => {

    if (global.isExpertMode == false) {
        return;
    }

    if (global.packmode == 'overworld' && !event.hasGameStage('start_in_overworld')) {

        event.server.scheduleInTicks(1, event.server, function (callback) {
            callback.data.runCommand('/execute in ntc_dimension:ntc_dimension as @p run tp 1.5 127 1.5')
            event.addGameStage('start_in_overworld');
            //event.addGameStage('start_in_overworld');
            //event.removeGameStage('start_in_overworld');
          })
    }
});
