onEvent('fluid.tags', (event) => {
    event.get('forge:crude_oil').add(['immersivepetroleum:oil', 'thermal:crude_oil']);
    event.get('forge:diesel_sulfur').add(['immersivepetroleum:diesel_sulfur']);
});
