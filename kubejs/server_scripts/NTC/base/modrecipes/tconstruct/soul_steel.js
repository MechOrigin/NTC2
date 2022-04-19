//priority: 900

const soulSteel = [
    {
        nugget: 'tconstruct:soulsteel_nugget',
        ingot: 'tconstruct:soulsteel_ingot',
        block: 'tconstruct:soulsteel_block'
    }
];

onEvent('recipes', (event) => {
    soulSteel.forEach((recipe) => {
        shapeless_soulsteel_crafting(event, recipe);
    });
});


function shapeless_soulsteel_crafting(event, recipe) {
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
