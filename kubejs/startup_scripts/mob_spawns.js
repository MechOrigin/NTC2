onEvent("worldgen.add", (event) => {
    event.addSpawn((spawn) => {
        spawn.biomes.values = [
            "minecraft:end_highlands",
            "minecraft:end_barrens"
        ];
        spawn.category = "creature";
        spawn.entity = "alexsmobs:enderiophage";
        spawn.weight = 100;
        spawn.minCount = 0;
        spawn.maxCount = 1;
    });
});