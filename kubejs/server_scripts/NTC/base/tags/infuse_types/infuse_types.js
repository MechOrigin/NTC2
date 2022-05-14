onEvent('infuse_type.tags', (event) => {
    event.get('kubejs:certus').add(['kubejs:certus']);
    event.get('kubejs:ender').add(['kubejs:ender']);
});
