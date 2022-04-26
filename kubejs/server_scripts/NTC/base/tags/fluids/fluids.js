onEvent('fluid.tags', (event) => {
    event.get('forge:crude_oil').add(['immersivepetroleum:oil', 'thermal:crude_oil']);
    event.get('forge:diesel_sulfur').add(['immersivepetroleum:diesel_sulfur']);

    event.get('forge:latex').add(['thermal:latex']);
    event.get('forge:latex').add(['industrialforegoing:latex']);

    event.add('forge:latex', 'thermal:latex')
    event.add('forge:latex', 'industrialforegoing:latex')
});
