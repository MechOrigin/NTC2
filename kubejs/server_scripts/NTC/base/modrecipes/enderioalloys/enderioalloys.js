//priority: 900

const enderioAlloys = [
    {
        nugget: 'enderioalloys:item_alloy_nugget_stellar_alloy',
        ingot: 'enderioalloys:item_alloy_ingot_stellar_alloy',
        block: 'enderioalloys:block_alloy_stellar_alloy'
    },
    {
        nugget: 'enderioalloys:item_alloy_nugget_dark_steel',
        ingot: 'enderioalloys:item_alloy_ingot_dark_steel',
        block: 'enderioalloys:block_alloy_dark_steel'
    },
    {
        nugget: 'enderioalloys:item_alloy_nugget_end_steel',
        ingot: 'enderioalloys:item_alloy_ingot_end_steel',
        block: 'enderioalloys:block_alloy_end_steel'
    },
    {
        nugget: 'enderioalloys:item_alloy_nugget_melodic_alloy',
        ingot: 'enderioalloys:item_alloy_ingot_melodic_alloy',
        block: 'enderioalloys:block_alloy_melodic_alloy'
    },
    {
        nugget: 'enderioalloys:item_alloy_nugget_crystalline_pink_slime',
        ingot: 'enderioalloys:item_alloy_ingot_crystalline_pink_slime',
        block: 'enderioalloys:block_alloy_crystalline_pink_slime'
    },
    {
        nugget: 'enderioalloys:item_alloy_nugget_vibrant_alloy',
        ingot: 'enderioalloys:item_alloy_ingot_vibrant_alloy',
        block: 'enderioalloys:block_alloy_vibrant_alloy'
    },
    {
        nugget: 'enderioalloys:item_alloy_nugget_energetic_alloy',
        ingot: 'enderioalloys:item_alloy_ingot_energetic_alloy',
        block: 'enderioalloys:block_alloy_energetic_alloy'
    }
];

onEvent('recipes', (event) => {
    enderioAlloys.forEach((recipe) => {
        shapeless_enderio_crafting(event, recipe);
    });
});


function shapeless_enderio_crafting(event, recipe) {
    //nugget to ingot & ingot to nugget
    var output_nug = Item.of(recipe.nugget, 9),
        inputs_ing = [recipe.ingot];

    var output_ing_from_nug = Item.of(recipe.ingot),
        inputs_nug = [Item.of(recipe.nugget, 9)];

    //ingot to block & block to ingot
    var output_ing = Item.of(recipe.ingot, 9),
        inputs_block = [recipe.block];

    var output_block_from_ingot = Item.of(recipe.block),
        inputs_ingot = [Item.of(recipe.ingot, 9)];

    event.shapeless(output_nug, inputs_ing);
    event.shapeless(output_ing_from_nug, inputs_nug);

    event.shapeless(output_ing, inputs_block);
    event.shapeless(output_block_from_ingot, inputs_ingot);
}
