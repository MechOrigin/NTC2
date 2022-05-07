onEvent('item.tags', (event) => {
    var exceptions = [];

    var tags = ['cagedmobs:dragon_scales'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add('cagedmobs:dragon_scale').add('quark:dragon_scale').add('tconstruct:dragon_scale').add('mysticalagradditions:dragon_scale')
            .remove(exceptions);
    });
});
