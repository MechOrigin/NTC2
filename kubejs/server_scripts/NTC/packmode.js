//priority: 1004

setMode = (player) => {
    // if (global.packmode == 'skyblock') {
    //     player.data.ftbquests.complete('0730261ECE11F375');
    // } else {
    //     player.data.ftbquests.reset('0730261ECE11F375');
    // }

    if (global.packmode == 'overworld') {
        player.data.ftbquests.complete('1318FA1BAF48E3B4'); //completes whole chapter if overworld
    } else {
        player.data.ftbquests.reset('1318FA1BAF48E3B4');
    }
};

onEvent('server.datapack.high_priority', (event) => {
    if (event.server) {
        event.server.players.forEach((player) => {
            console.log('setting mode for player: ' + player);
            setMode(player);
        });
    }
});

const defaultConfig = {
    mode: 'skyblock',
    message: 'Valid modes are skyblock and overworld.'
};
const configName = 'mode.json';
let config = JsonIO.read(configName);
if (!config || !config.mode) {
    JsonIO.write(configName, defaultConfig);
    console.log(`Created new ${configName}`);
    config = defaultConfig;
}
if (config.mode == 'none') {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.log(`Overwrote ${configName}, because the mode 'none' was found. Valid modes are 'skyblock' and 'overworld'.`);
}

let packMode = config.mode;

global.packmode = packMode;
global.isNormalMode = packMode == 'skyblock';
global.isExpertMode = packMode == 'overworld';
const isNormalMode = packMode == 'skyblock';
const isExpertMode = packMode == 'overworld';

console.log(`Current packmode is: ${global.packmode}`);
