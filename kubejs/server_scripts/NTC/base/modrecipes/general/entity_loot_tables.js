onEvent('entity.loot_tables', event => {
    
    mobEntities.forEach((entity) => {
        AddLootToEntities(event, entity);
    });

    function AddLootToEntities(event, entity) {
        event.modifyEntity(entity, table => {
            table.addPool(pool => {
              pool.addItem('miniutilities:experience_pearl')
            })
          });
    }

  })