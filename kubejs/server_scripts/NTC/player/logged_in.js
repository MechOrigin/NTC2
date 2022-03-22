events.listen('player.logged_in', (event) => {
    if (!event.hasGameStage('starting_items')) {
        //event.player.give(Item.of('projecte:tome'));
        event.player.give(Item.of('ftbquests:book'));
        event.player.give(Item.of('projecte:philosophers_stone'));
        event.player.give(Item.of('tiab:timeinabottle'));
        event.addGameStage('starting_items');
    }
});
