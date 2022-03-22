onEvent('recipes', e => {
//  e.remove({ id: 'akashictome:tome' })

  e.shapeless(
    Item.of('akashictome:tome', {
      'akashictome:is_morphing': 1,
      'akashictome:data': {
        industrialforegoing: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'industrialforegoing:industrial_foregoing',
            'akashictome:displayName': {
              text: "IndustrialForegoing'sManual"
            }
          }
        },
        tconstruct: {
          id: 'tconstruct:encyclopedia',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'Encyclopedia'
            }
          }
        },
        productivebees: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'BigBookOfBees'
            },
            'patchouli:book': 'productivebees:guide',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"BigBookOfBees"}]}'
            }
          }
        },
        alchemistry: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'AlchemistryGuidebook'
            },
            'patchouli:book': 'alchemistry:alchemistry_book',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"AlchemistryGuidebook"}]}'
            }
          }
        },
        theoneprobe: {
          id: 'theoneprobe:probenote',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'ProbeSettings'
            },
            'akashictome:is_morphing': 1
          }
        },
        ftbquests: {
          id: 'ftbquests:book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'QuestBook'
            }
          }
        },
        immersiveengineering: {
          id: 'immersiveengineering:manual',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: "Engineer'sManual"
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\\\'sManual"}]}'
            }
          }
        },
        thermal: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'thermal:guidebook',
            'akashictome:displayName': {
              text: 'Thermalpedia'
            }
          }
        },
        rftoolsbase: {
          id: 'rftoolsbase:manual',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'TechnologyGuide'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"TechnologyGuide"}]}'
            }
          }
        },
        integratedtunnels: {
          id: 'integrateddynamics:on_the_dynamics_of_integration',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'OnTheDynamicsOfIntegration'
            }
          }
        },
        engineersdecor: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'engineersdecor:engineersdecor_manual',
            'akashictome:displayName': {
              text: "Engineer'sDecor"
            }
          }
        },
        solcarrot: {
          id: 'solcarrot:food_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'FoodBook'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"FoodBook"}]}'
            }
          }
        },
        mysticalagriculture: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'MysticalAgriculture'
            },
            'patchouli:book': 'mysticalagriculture:guide',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"MysticalAgriculture"}]}'
            }
          }
        },
        alexsmobs: {
          id: 'alexsmobs:animal_dictionary',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'AnimalDictionary'
            }
          }
        }
      }
    }),
    'minecraft:stick'
  ).id(`kubejs:akashik_tome`)
})
