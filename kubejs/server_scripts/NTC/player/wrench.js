
onEvent('block.right_click', (event) => {
    const thermalWrench = 'thermal:wrench';
    const problemBlock = 'miniutilities:mechanical_placer';

    if (event.item.id != thermalWrench) return;

    let targetBlock = event.block.offset(event.facing);
    if (targetBlock.id == problemBlock || (targetBlock.id == problemBlock && event.player.isCrouching())) {
        targetBlock.set(problemBlock);
        if (!event.player.isCreativeMode()) {
            event.item.count--;
        }
        event.cancel();
    }
});