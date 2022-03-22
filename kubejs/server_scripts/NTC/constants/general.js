//priority: 1001

const air = 'minecraft:air';

// priority of which mod output should come from, if applicable
const modPriorities = [
    'emendatusenigmatica',
    'minecraft',
    'immersiveengineering',
    'thermal',
    'mekanism',
    'kubejs',
    'industrialforegoing',
    'quark',
    'titanium',
    'betterendforge',
    'chemlib',
    'exnihilosequentia',
    'tconstruct',
    'appliedenergistics2',
    'miniutilities',
    'immersivepetroleum',
    'productivebees',
    'mysticalagriculture'
];

// Used for recipes/tags that use colors
const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];

// Quark Crystal Cluster Colors

const quark_crystal_colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];

// Used for tag generation
const createStoneTypes = [
    'limestone',
    'jasper',
    'slate',
    'deepslate'
];

const normalMode = global.packmode == 'skyblock';
const expertMode = global.packmode == 'overworld';
