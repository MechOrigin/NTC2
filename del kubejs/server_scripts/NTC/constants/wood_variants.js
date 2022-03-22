//priority: 1000

// Used to populate the buildWoodVariants constant - Add variants here to enable compat with various cutting mechanics.
// Be aware that you may need to specify exceptions in the loop below for this to work properly.
var woodVariantsToConstruct = [
    'minecraft:acacia',
    'minecraft:birch',
    'minecraft:dark_oak',
    'minecraft:jungle',
    'minecraft:oak',
    'minecraft:spruce',
    'minecraft:warped',
    'minecraft:crimson',

    'betterendforge:mossy_glowshroom',
    'betterendforge:lacugrove',
    'betterendforge:end_lotus',
    'betterendforge:pythadendron',
    'betterendforge:dragon_tree',
    'betterendforge:tenanea',
    'betterendforge:helix_tree',
    'betterendforge:umbrella_tree',
    'betterendforge:jellyshroom',
    'betterendforge:lucernia',

    'integrateddynamics:menril',
    'integrateddynamics:menril_filled',
    'atmospheric:rosewood',
    'atmospheric:morado',
    'atmospheric:yucca',
    'atmospheric:kousa',
    'atmospheric:aspen',
    'atmospheric:watchful_aspen',
    'atmospheric:crustose',
    'atmospheric:grimwood',
    'upgrade_aquatic:driftwood',
    'upgrade_aquatic:river',

    'tconstruct:greenheart',
    'tconstruct:bloodshroom',
    'tconstruct:skyroot',
    'projectvibrantjourneys:joshua',
    'projectvibrantjourneys:sakura',
    'projectvibrantjourneys:maple',
    'projectvibrantjourneys:baobab',
    'projectvibrantjourneys:palm',
    'projectvibrantjourneys:cottonwood',
    'projectvibrantjourneys:aspen',
    'projectvibrantjourneys:juniper',
    'projectvibrantjourneys:mangrove',
    'projectvibrantjourneys:willow',
    'projectvibrantjourneys:redwood',
    'projectvibrantjourneys:pine',
    'projectvibrantjourneys:fir'
    // 'sushigocrafting:avocado'
];

var buildWoodVariants = [];

woodVariantsToConstruct.forEach((variant) => {
    var splitVariant = variant.split(':');
    var modId = splitVariant[0];
    var logType = splitVariant[1];
    var logSuffix, woodSuffix, logBlockStripped, woodBlockStripped, logBlock, woodBlock, plankBlock, slabBlock;

    //suffix exceptions
    switch (logType) {
        case 'warped':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'crimson':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        default:
            logSuffix = '_log';
            woodSuffix = '_wood';
    }

    logBlock = modId + ':' + logType + logSuffix;
    woodBlock = modId + ':' + logType + woodSuffix;
    logBlockStripped = modId + ':stripped_' + logType + logSuffix;
    woodBlockStripped = modId + ':stripped_' + logType + woodSuffix;
    plankBlock = modId + ':' + logType + '_planks';
    slabBlock = modId + ':' + logType + '_slab';

    // Exceptions
    if (modId == 'betterendforge') {
        logSuffix = '_log';
        woodSuffix = '_bark';

        logBlock = modId + ':' + logType + logSuffix;
        woodBlock = modId + ':' + logType + woodSuffix;
        logBlockStripped = modId + ':' + logType + '_stripped' + logSuffix;
        woodBlockStripped = modId + ':' + logType + '_stripped' + woodSuffix;
        plankBlock = modId + ':' + logType + '_planks';
    }

    if (modId == 'tconstruct') {
        slabBlock = modId + ':' + logType + '_planks_slab';
    }

    switch (logType) {
        case 'crustose':
            logBlockStripped = 'atmospheric:stripped_aspen_log';
            woodBlockStripped = 'atmospheric:stripped_aspen_wood';
            plankBlock = 'atmospheric:aspen_planks';
            break;
        case 'watchful_aspen':
            logBlockStripped = 'atmospheric:stripped_aspen_log';
            woodBlockStripped = 'atmospheric:stripped_aspen_wood';
            plankBlock = 'atmospheric:aspen_planks';
            break;
        case 'driftwood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        case 'grimwood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        case 'rosewood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        case 'menril':
            logBlock = 'integrateddynamics:menril_log';
            woodBlock = 'integrateddynamics:menril_wood';
            logBlockStripped = 'integrateddynamics:menril_log_stripped';
            woodBlockStripped = 'integrateddynamics:menril_wood_stripped';
            plankBlock = 'integrateddynamics:menril_planks';
            break;
        case 'menril_filled':
            logBlock = 'integrateddynamics:menril_log_filled';
            woodBlock = 'integrateddynamics:menril_wood';
            logBlockStripped = 'integrateddynamics:menril_log_stripped';
            woodBlockStripped = 'integrateddynamics:menril_wood_stripped';
            plankBlock = 'integrateddynamics:menril_planks';
            break;
        default:
    }

    var woodVariant = {
        modId: modId,
        logType: logType,
        logBlock: logBlock,
        woodBlock: woodBlock,
        logBlockStripped: logBlockStripped,
        woodBlockStripped: woodBlockStripped,
        plankBlock: plankBlock,
        slabBlock: slabBlock
    };

    buildWoodVariants.push(woodVariant);
});
