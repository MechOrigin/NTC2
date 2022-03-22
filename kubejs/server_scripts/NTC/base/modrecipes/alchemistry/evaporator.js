onEvent('recipes', event => {

  const recipes = [
    {
        inputs: [
            'minecraft:milk'
        ],
        amount: 1000,
        output: 'alchemistry:condensed_milk'
    }
  ]

  removeRecipeByID(event, [
    'alchemistry:evaporator/milk',
    'alchemistry:evaporator/lava'
  ])

    recipes.forEach((input) => {
      input.inputs.forEach((process) => {
          event.custom({
              type: 'alchemistry:evaporator',
              group: 'minecraft:misc',
              input: {
                  fluid: process,
                  amount: input.amount
              },
              result: {
                  item: input.output
              }
          });
      });
  });
});
