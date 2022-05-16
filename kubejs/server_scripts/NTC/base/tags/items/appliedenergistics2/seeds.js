//priority: 200

// Listen to item tag event
onEvent('item.tags', event => {
    event.add('ntc2:seeds/monazite', 'kubejs:monazite_gem_seed')
    event.add('ntc2:seeds/crystal_shard', 'kubejs:crystal_shard_seed')
    event.add('ntc2:seeds/ender_shard', 'kubejs:ender_shard_seed')
    event.add('ntc2:seeds/amber', 'kubejs:amber_gem_seed')
  })