onEvent('item.tags', (event) => {
    var exceptions = [];

    var tags = ['forge:tools', 'forge:tools/time_in_a_bottle'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add('tiab:timeinabottle')
            .remove(exceptions);
    });
});
