//priority: 1000

//Registry containing all crop-like growables.
const cropRegistry = [
    {
        type: 'cactus',
        crops: [
            {
                seed: 'minecraft:cactus',
                render: 'minecraft:cactus',
                plant: 'minecraft:cactus',
                substrate: 'sand'
            },
            {
                seed: 'atmospheric:aloe_kernels',
                render: 'atmospheric:aloe_vera',
                plant: 'atmospheric:aloe_leaves',
                plantSecondary: 'atmospheric:yellow_blossoms',
                plantSecondaryRate: 'high',
                substrate: 'arid_sand'
            },
            {
                seed: 'atmospheric:barrel_cactus',
                render: 'atmospheric:barrel_cactus',
                plant: 'atmospheric:barrel_cactus',
                substrate: 'arid_sand'
            },
            {
                seed: 'pamhc2crops:cactusfruitseeditem',
                render: 'pamhc2crops:pamcactusfruitcrop',
                plant: 'pamhc2crops:cactusfruititem',
                substrate: 'coarse_dirt'
            },
            {
                seed: 'pamhc2crops:agaveseeditem',
                render: 'pamhc2crops:pamagavecrop',
                plant: 'pamhc2crops:agaveitem',
                substrate: 'coarse_dirt'
            }
        ]
    },
    {
        type: 'cane_like',
        crops: [
            {
                seed: 'minecraft:bamboo',
                render: 'minecraft:bamboo',
                plant: 'minecraft:bamboo',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:sugar_cane',
                render: 'minecraft:sugar_cane',
                plant: 'minecraft:sugar_cane',
                substrate: 'sand'
            }
        ]
    },
    {
        type: 'coral',
        crops: [
            {
                seed: 'minecraft:brain_coral',
                render: 'minecraft:brain_coral',
                plant: 'minecraft:brain_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:brain_coral_block',
                render: 'minecraft:brain_coral_block',
                plant: 'minecraft:brain_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:brain_coral_fan',
                render: 'minecraft:brain_coral_fan',
                plant: 'minecraft:brain_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral',
                render: 'minecraft:bubble_coral',
                plant: 'minecraft:bubble_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral_block',
                render: 'minecraft:bubble_coral_block',
                plant: 'minecraft:bubble_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral_fan',
                render: 'minecraft:bubble_coral_fan',
                plant: 'minecraft:bubble_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral',
                render: 'minecraft:fire_coral',
                plant: 'minecraft:fire_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral_block',
                render: 'minecraft:fire_coral_block',
                plant: 'minecraft:fire_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral_fan',
                render: 'minecraft:fire_coral_fan',
                plant: 'minecraft:fire_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral',
                render: 'minecraft:horn_coral',
                plant: 'minecraft:horn_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral_block',
                render: 'minecraft:horn_coral_block',
                plant: 'minecraft:horn_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral_fan',
                render: 'minecraft:horn_coral_fan',
                plant: 'minecraft:horn_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral',
                render: 'minecraft:tube_coral',
                plant: 'minecraft:tube_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral_block',
                render: 'minecraft:tube_coral_block',
                plant: 'minecraft:tube_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral_fan',
                render: 'minecraft:tube_coral_fan',
                plant: 'minecraft:tube_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:tube_worm',
                render: 'betterendforge:tube_worm',
                plant: 'betterendforge:tube_worm',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:hydrothermal_vent',
                render: 'betterendforge:hydrothermal_vent',
                plant: 'betterendforge:hydrothermal_vent',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:bubble_coral',
                render: 'betterendforge:bubble_coral',
                plant: 'betterendforge:bubble_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:acan_coral',
                render: 'upgrade_aquatic:acan_coral',
                plant: 'upgrade_aquatic:acan_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:acan_coral_block',
                render: 'upgrade_aquatic:acan_coral_block',
                plant: 'upgrade_aquatic:acan_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:acan_coral_fan',
                render: 'upgrade_aquatic:acan_coral_fan',
                plant: 'upgrade_aquatic:acan_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:branch_coral',
                render: 'upgrade_aquatic:branch_coral',
                plant: 'upgrade_aquatic:branch_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:branch_coral_block',
                render: 'upgrade_aquatic:branch_coral_block',
                plant: 'upgrade_aquatic:branch_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:branch_coral_fan',
                render: 'upgrade_aquatic:branch_coral_fan',
                plant: 'upgrade_aquatic:branch_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:chrome_coral',
                render: 'upgrade_aquatic:chrome_coral',
                plant: 'upgrade_aquatic:chrome_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:chrome_coral_block',
                render: 'upgrade_aquatic:chrome_coral_block',
                plant: 'upgrade_aquatic:chrome_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:chrome_coral_fan',
                render: 'upgrade_aquatic:chrome_coral_fan',
                plant: 'upgrade_aquatic:chrome_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:elder_prismarine_coral',
                render: 'upgrade_aquatic:elder_prismarine_coral',
                plant: 'upgrade_aquatic:elder_prismarine_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:elder_prismarine_coral_block',
                render: 'upgrade_aquatic:elder_prismarine_coral_block',
                plant: 'upgrade_aquatic:elder_prismarine_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:elder_prismarine_coral_fan',
                render: 'upgrade_aquatic:elder_prismarine_coral_fan',
                plant: 'upgrade_aquatic:elder_prismarine_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:elder_prismarine_coral_shower',
                render: 'upgrade_aquatic:elder_prismarine_coral_shower',
                plant: 'upgrade_aquatic:elder_prismarine_coral_shower',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:finger_coral',
                render: 'upgrade_aquatic:finger_coral',
                plant: 'upgrade_aquatic:finger_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:finger_coral_block',
                render: 'upgrade_aquatic:finger_coral_block',
                plant: 'upgrade_aquatic:finger_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:finger_coral_fan',
                render: 'upgrade_aquatic:finger_coral_fan',
                plant: 'upgrade_aquatic:finger_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:moss_coral',
                render: 'upgrade_aquatic:moss_coral',
                plant: 'upgrade_aquatic:moss_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:moss_coral_block',
                render: 'upgrade_aquatic:moss_coral_block',
                plant: 'upgrade_aquatic:moss_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:moss_coral_fan',
                render: 'upgrade_aquatic:moss_coral_fan',
                plant: 'upgrade_aquatic:moss_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:petal_coral',
                render: 'upgrade_aquatic:petal_coral',
                plant: 'upgrade_aquatic:petal_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:petal_coral_block',
                render: 'upgrade_aquatic:petal_coral_block',
                plant: 'upgrade_aquatic:petal_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:petal_coral_fan',
                render: 'upgrade_aquatic:petal_coral_fan',
                plant: 'upgrade_aquatic:petal_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:pillow_coral',
                render: 'upgrade_aquatic:pillow_coral',
                plant: 'upgrade_aquatic:pillow_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:pillow_coral_block',
                render: 'upgrade_aquatic:pillow_coral_block',
                plant: 'upgrade_aquatic:pillow_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:pillow_coral_fan',
                render: 'upgrade_aquatic:pillow_coral_fan',
                plant: 'upgrade_aquatic:pillow_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:prismarine_coral',
                render: 'upgrade_aquatic:prismarine_coral',
                plant: 'upgrade_aquatic:prismarine_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:prismarine_coral_block',
                render: 'upgrade_aquatic:prismarine_coral_block',
                plant: 'upgrade_aquatic:prismarine_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:prismarine_coral_fan',
                render: 'upgrade_aquatic:prismarine_coral_fan',
                plant: 'upgrade_aquatic:prismarine_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:prismarine_coral_shower',
                render: 'upgrade_aquatic:prismarine_coral_shower',
                plant: 'upgrade_aquatic:prismarine_coral_shower',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:rock_coral',
                render: 'upgrade_aquatic:rock_coral',
                plant: 'upgrade_aquatic:rock_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:rock_coral_block',
                render: 'upgrade_aquatic:rock_coral_block',
                plant: 'upgrade_aquatic:rock_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:rock_coral_fan',
                render: 'upgrade_aquatic:rock_coral_fan',
                plant: 'upgrade_aquatic:rock_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:silk_coral',
                render: 'upgrade_aquatic:silk_coral',
                plant: 'upgrade_aquatic:silk_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:silk_coral_block',
                render: 'upgrade_aquatic:silk_coral_block',
                plant: 'upgrade_aquatic:silk_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:silk_coral_fan',
                render: 'upgrade_aquatic:silk_coral_fan',
                plant: 'upgrade_aquatic:silk_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:star_coral',
                render: 'upgrade_aquatic:star_coral',
                plant: 'upgrade_aquatic:star_coral',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:star_coral_block',
                render: 'upgrade_aquatic:star_coral_block',
                plant: 'upgrade_aquatic:star_coral_block',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:star_coral_fan',
                render: 'upgrade_aquatic:star_coral_fan',
                plant: 'upgrade_aquatic:star_coral_fan',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'crop_fiber',
        crops: [
            {
                seed: 'immersiveengineering:seed',
                render: 'immersiveengineering:hemp',
                plant: 'immersiveengineering:hemp_fiber',
                substrate: 'dirt'
            },
            {
                seed: 'betterendforge:end_lotus_seed',
                render: 'betterendforge:end_lotus_flower',
                plant: 'betterendforge:end_lotus_stem',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:end_lily_seed',
                render: 'betterendforge:end_lily',
                plant: 'betterendforge:end_lily_leaf',
                substrate: 'water'
            },
            {
                seed: 'pamhc2crops:cottonseeditem',
                render: 'pamhc2crops:pamcottoncrop',
                plant: 'pamhc2crops:cottonitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:flaxseeditem',
                render: 'pamhc2crops:pamflaxcrop',
                plant: 'pamhc2crops:flaxitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:kenafseeditem',
                render: 'pamhc2crops:pamkenafcrop',
                plant: 'pamhc2crops:kenafitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:juteitem',
                render: 'pamhc2crops:pamjutecrop',
                plant: 'pamhc2crops:juteitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:sisalitem',
                render: 'pamhc2crops:pamsisalcrop',
                plant: 'pamhc2crops:sisalitem',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_fruit',
        crops: [
            {
                seed: 'betterendforge:shadow_berry',
                render: 'betterendforge:shadow_berry',
                plant: 'betterendforge:shadow_berry_raw',
                substrate: 'shadow_grass'
            },
            {
                seed: 'betterendforge:blossom_berry_seed',
                render: 'betterendforge:blossom_berry_seed',
                plant: 'betterendforge:blossom_berry',
                substrate: 'pink_moss'
            },
            {
                seed: 'minecraft:chorus_flower',
                render: 'minecraft:chorus_flower',
                plant: 'minecraft:chorus_fruit',
                substrate: 'end_stone'
            },
            {
                seed: 'pamhc2crops:strawberryseeditem',
                render: 'pamhc2crops:pamstrawberrycrop',
                plant: 'pamhc2crops:strawberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:raspberryseeditem',
                render: 'pamhc2crops:pamraspberrycrop',
                plant: 'pamhc2crops:raspberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:pineappleseeditem',
                render: 'pamhc2crops:pampineapplecrop',
                plant: 'pamhc2crops:pineappleitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:mulberryseeditem',
                render: 'pamhc2crops:pammulberrycrop',
                plant: 'pamhc2crops:mulberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:kiwiseeditem',
                render: 'pamhc2crops:pamkiwicrop',
                plant: 'pamhc2crops:kiwiitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:juniperberryseeditem',
                render: 'pamhc2crops:pamjuniperberrycrop',
                plant: 'pamhc2crops:juniperberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:huckleberryseeditem',
                render: 'pamhc2crops:pamhuckleberrycrop',
                plant: 'pamhc2crops:huckleberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:greengrapeseeditem',
                render: 'pamhc2crops:pamgreengrapecrop',
                plant: 'pamhc2crops:greengrapeitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:grapeseeditem',
                render: 'pamhc2crops:pamgrapecrop',
                plant: 'pamhc2crops:grapeitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:elderberryseeditem',
                render: 'pamhc2crops:pamelderberrycrop',
                plant: 'pamhc2crops:elderberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:cranberryseeditem',
                render: 'pamhc2crops:pamcranberrycrop',
                plant: 'pamhc2crops:cranberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:candleberryseeditem',
                render: 'pamhc2crops:pamcandleberrycrop',
                plant: 'pamhc2crops:candleberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:blueberryseeditem',
                render: 'pamhc2crops:pamblueberrycrop',
                plant: 'pamhc2crops:blueberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:blackberryseeditem',
                render: 'pamhc2crops:pamblackberrycrop',
                plant: 'pamhc2crops:blackberryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:tomatoseeditem',
                render: 'pamhc2crops:pamtomatocrop',
                plant: 'pamhc2crops:tomatoitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:tomatilloseeditem',
                render: 'pamhc2crops:pamtomatillocrop',
                plant: 'pamhc2crops:tomatilloitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:bellpepperseeditem',
                render: 'pamhc2crops:pambellpeppercrop',
                plant: 'pamhc2crops:bellpepperitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:broccoliseeditem',
                render: 'pamhc2crops:pambroccolicrop',
                plant: 'pamhc2crops:broccoliitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:chilipepperseeditem',
                render: 'pamhc2crops:pamchilipeppercrop',
                plant: 'pamhc2crops:chilipepperitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:wintersquashseeditem',
                render: 'pamhc2crops:pamwintersquashcrop',
                plant: 'pamhc2crops:wintersquashitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:zucchiniseeditem',
                render: 'pamhc2crops:pamzucchinicrop',
                plant: 'pamhc2crops:zucchiniitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:eggplantseeditem',
                render: 'pamhc2crops:pameggplantcrop',
                plant: 'pamhc2crops:eggplantitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:cantaloupeseeditem',
                render: 'pamhc2crops:pamcantaloupecrop',
                plant: 'pamhc2crops:cantaloupeitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:cucumberseeditem',
                render: 'pamhc2crops:pamcucumbercrop',
                plant: 'pamhc2crops:cucumberitem',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_gourd',
        crops: [
            {
                seed: 'minecraft:pumpkin_seeds',
                render: 'minecraft:pumpkin',
                plant: 'minecraft:pumpkin',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_grain',
        crops: [
            {
                seed: 'minecraft:wheat_seeds',
                render: 'minecraft:wheat',
                plant: 'minecraft:wheat',
                substrate: 'dirt'
            },
            {
                seed: 'betterendforge:lumecorn_seed',
                render: 'betterendforge:lumecorn_seed',
                plant: 'betterendforge:lumecorn_rod',
                substrate: 'end_moss'
            },
            {
                seed: 'pamhc2crops:barleyseeditem',
                render: 'pamhc2crops:pambarleycrop',
                plant: 'pamhc2crops:barleyitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:milletseeditem',
                render: 'pamhc2crops:pammilletcrop',
                plant: 'pamhc2crops:milletitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:oatsseeditem',
                render: 'pamhc2crops:pamoatscrop',
                plant: 'pamhc2crops:oatsitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:quinoaseeditem',
                render: 'pamhc2crops:pamquinoacrop',
                plant: 'pamhc2crops:quinoaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:riceseeditem',
                render: 'pamhc2crops:pamricecrop',
                plant: 'pamhc2crops:riceitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:ryeseeditem',
                render: 'pamhc2crops:pamryecrop',
                plant: 'pamhc2crops:ryeitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:amaranthseeditem',
                render: 'pamhc2crops:pamamaranthcrop',
                plant: 'pamhc2crops:amaranthitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:cornseeditem',
                render: 'pamhc2crops:pamcorncrop',
                plant: 'pamhc2crops:cornitem',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_leafy',
        crops: [
            {
                seed: 'pamhc2crops:cabbageseeditem',
                render: 'pamhc2crops:pamcabbagecrop',
                plant: 'pamhc2crops:cabbageitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:kaleseeditem',
                render: 'pamhc2crops:pamkalecrop',
                plant: 'pamhc2crops:kaleitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:lettuceseeditem',
                render: 'pamhc2crops:pamlettucecrop',
                plant: 'pamhc2crops:lettuceitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:spinachseeditem',
                render: 'pamhc2crops:pamspinachcrop',
                plant: 'pamhc2crops:spinachitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:tealeafseeditem',
                render: 'pamhc2crops:pamtealeafcrop',
                plant: 'pamhc2crops:tealeafitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:spiceleafseeditem',
                render: 'pamhc2crops:pamspiceleafcrop',
                plant: 'pamhc2crops:spiceleafitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:kohlrabiseeditem',
                render: 'pamhc2crops:pamkohlrabicrop',
                plant: 'pamhc2crops:kohlrabiitem',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_legume',
        crops: [
            {
                seed: 'betterendforge:amber_root_seed',
                render: 'betterendforge:amber_root_seed',
                plant: 'betterendforge:amber_root_raw',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:beanseeditem',
                render: 'pamhc2crops:pambeancrop',
                plant: 'pamhc2crops:beanitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:chickpeaseeditem',
                render: 'pamhc2crops:pamchickpeacrop',
                plant: 'pamhc2crops:chickpeaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:lentilseeditem',
                render: 'pamhc2crops:pamlentilcrop',
                plant: 'pamhc2crops:lentilitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:soybeanseeditem',
                render: 'pamhc2crops:pamsoybeancrop',
                plant: 'pamhc2crops:soybeanitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:okraseeditem',
                render: 'pamhc2crops:pamokracrop',
                plant: 'pamhc2crops:okraitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:peasseeditem',
                render: 'pamhc2crops:pampeascrop',
                plant: 'pamhc2crops:peasitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:peanutseeditem',
                render: 'pamhc2crops:pampeanutcrop',
                plant: 'pamhc2crops:peanutitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:coffeebeanseeditem',
                render: 'pamhc2crops:pamcoffeebeancrop',
                plant: 'pamhc2crops:coffeebeanitem',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_melon',
        crops: [
            {
                seed: 'minecraft:melon_seeds',
                render: 'minecraft:melon',
                plant: 'minecraft:melon',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_root',
        crops: [
            {
                seed: 'minecraft:beetroot_seeds',
                render: 'minecraft:beetroots',
                plant: 'minecraft:beetroot',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:carrot',
                render: 'minecraft:carrots',
                plant: 'minecraft:carrot',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:potato',
                render: 'minecraft:potatoes',
                plant: 'minecraft:potato',
                plantSecondary: 'minecraft:poisonous_potato',
                plantSecondaryRate: 'low',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:arrowrootseeditem',
                render: 'pamhc2crops:pamarrowrootcrop',
                plant: 'pamhc2crops:arrowrootitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:cassavaseeditem',
                render: 'pamhc2crops:pamcassavacrop',
                plant: 'pamhc2crops:cassavaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:garlicseeditem',
                render: 'pamhc2crops:pamgarliccrop',
                plant: 'pamhc2crops:garlicitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:jicamaseeditem',
                render: 'pamhc2crops:pamjicamacrop',
                plant: 'pamhc2crops:jicamaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:onionseeditem',
                render: 'pamhc2crops:pamonioncrop',
                plant: 'pamhc2crops:onionitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:parsnipseeditem',
                render: 'pamhc2crops:pamparsnipcrop',
                plant: 'pamhc2crops:parsnipitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:radishseeditem',
                render: 'pamhc2crops:pamradishcrop',
                plant: 'pamhc2crops:radishitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:sweetpotatoseeditem',
                render: 'pamhc2crops:pamsweetpotatocrop',
                plant: 'pamhc2crops:sweetpotatoitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:taroseeditem',
                render: 'pamhc2crops:pamtarocrop',
                plant: 'pamhc2crops:taroitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:rutabagaseeditem',
                render: 'pamhc2crops:pamrutabagacrop',
                plant: 'pamhc2crops:rutabagaitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:turnipseeditem',
                render: 'pamhc2crops:pamturnipcrop',
                plant: 'pamhc2crops:turnipitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:waterchestnutseeditem',
                render: 'pamhc2crops:pamwaterchestnutcrop',
                plant: 'pamhc2crops:waterchestnutitem',
                substrate: 'water'
            },
            {
                seed: 'pamhc2crops:celeryseeditem',
                render: 'pamhc2crops:pamcelerycrop',
                plant: 'pamhc2crops:celeryitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:asparagusseeditem',
                render: 'pamhc2crops:pamasparaguscrop',
                plant: 'pamhc2crops:asparagusitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:artichokeseeditem',
                render: 'pamhc2crops:pamartichokecrop',
                plant: 'pamhc2crops:artichokeitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:leekseeditem',
                render: 'pamhc2crops:pamleekcrop',
                plant: 'pamhc2crops:leekitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:scallionseeditem',
                render: 'pamhc2crops:pamscallioncrop',
                plant: 'pamhc2crops:scallionitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:brusselsproutseeditem',
                render: 'pamhc2crops:pambrusselsproutcrop',
                plant: 'pamhc2crops:brusselsproutitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:gingerseeditem',
                render: 'pamhc2crops:pamgingercrop',
                plant: 'pamhc2crops:gingeritem',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_seed',
        crops: [
            {
                seed: 'pamhc2crops:mustardseedsseeditem',
                render: 'pamhc2crops:pammustardseedscrop',
                plant: 'pamhc2crops:mustardseedsitem',
                substrate: 'dirt'
            },
            {
                seed: 'pamhc2crops:sesameseedsseeditem',
                render: 'pamhc2crops:pamsesameseedscrop',
                plant: 'pamhc2crops:sesameseedsitem',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_vine',
        crops: [

        ]
    },
    {
        type: 'flower',
        crops: [
            {
                seed: 'minecraft:allium',
                render: 'minecraft:allium',
                plant: 'minecraft:allium',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:azure_bluet',
                render: 'minecraft:azure_bluet',
                plant: 'minecraft:azure_bluet',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:blue_orchid',
                render: 'minecraft:blue_orchid',
                plant: 'minecraft:blue_orchid',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:cornflower',
                render: 'minecraft:cornflower',
                plant: 'minecraft:cornflower',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:dandelion',
                render: 'minecraft:dandelion',
                plant: 'minecraft:dandelion',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:lilac',
                render: 'minecraft:lilac',
                plant: 'minecraft:lilac',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:lily_of_the_valley',
                render: 'minecraft:lily_of_the_valley',
                plant: 'minecraft:lily_of_the_valley',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:orange_tulip',
                render: 'minecraft:orange_tulip',
                plant: 'minecraft:orange_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:oxeye_daisy',
                render: 'minecraft:oxeye_daisy',
                plant: 'minecraft:oxeye_daisy',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:peony',
                render: 'minecraft:peony',
                plant: 'minecraft:peony',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:pink_tulip',
                render: 'minecraft:pink_tulip',
                plant: 'minecraft:pink_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:poppy',
                render: 'minecraft:poppy',
                plant: 'minecraft:poppy',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:red_tulip',
                render: 'minecraft:red_tulip',
                plant: 'minecraft:red_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:rose_bush',
                render: 'minecraft:rose_bush',
                plant: 'minecraft:rose_bush',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:sunflower',
                render: 'minecraft:sunflower',
                plant: 'minecraft:sunflower',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:white_tulip',
                render: 'minecraft:white_tulip',
                plant: 'minecraft:white_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:wither_rose',
                render: 'minecraft:wither_rose',
                plant: 'minecraft:wither_rose',
                substrate: 'soul_sand'
            },
            {
                seed: 'betterendforge:umbrella_moss_tall',
                render: 'betterendforge:umbrella_moss_tall',
                plant: 'betterendforge:umbrella_moss_tall',
                substrate: 'end_moss'
            },
            {
                seed: 'betterendforge:umbrella_moss',
                render: 'betterendforge:umbrella_moss',
                plant: 'betterendforge:umbrella_moss',
                substrate: 'end_moss'
            },
            {
                seed: 'betterendforge:twisted_umbrella_moss_tall',
                render: 'betterendforge:twisted_umbrella_moss_tall',
                plant: 'betterendforge:twisted_umbrella_moss_tall',
                substrate: 'jungle_moss'
            },
            {
                seed: 'betterendforge:twisted_umbrella_moss',
                render: 'betterendforge:twisted_umbrella_moss',
                plant: 'betterendforge:twisted_umbrella_moss',
                substrate: 'jungle_moss'
            },
            {
                seed: 'atmospheric:tall_yucca_flower',
                render: 'atmospheric:tall_yucca_flower',
                plant: 'atmospheric:tall_yucca_flower',
                substrate: 'dirt'
            },
            {
                seed: 'atmospheric:gilia',
                render: 'atmospheric:gilia',
                plant: 'atmospheric:gilia',
                substrate: 'dirt'
            },
            {
                seed: 'atmospheric:yucca_flower',
                render: 'atmospheric:yucca_flower',
                plant: 'atmospheric:yucca_flower',
                substrate: 'dirt'
            },
            {
                seed: 'atmospheric:scalding_monkey_brush',
                render: 'atmospheric:scalding_monkey_brush',
                plant: 'atmospheric:scalding_monkey_brush',
                substrate: 'dirt'
            },
            {
                seed: 'atmospheric:hot_monkey_brush',
                render: 'atmospheric:hot_monkey_brush',
                plant: 'atmospheric:hot_monkey_brush',
                substrate: 'dirt'
            },
            {
                seed: 'atmospheric:warm_monkey_brush',
                render: 'atmospheric:warm_monkey_brush',
                plant: 'atmospheric:warm_monkey_brush',
                substrate: 'dirt'
            },
            {
                seed: 'atmospheric:water_hyacinth',
                render: 'atmospheric:water_hyacinth',
                plant: 'atmospheric:water_hyacinth',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:flowering_rush',
                render: 'upgrade_aquatic:flowering_rush',
                plant: 'upgrade_aquatic:flowering_rush',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:pink_searocket',
                render: 'upgrade_aquatic:pink_searocket',
                plant: 'upgrade_aquatic:pink_searocket',
                substrate: 'dirt'
            },
            {
                seed: 'upgrade_aquatic:white_searocket',
                render: 'upgrade_aquatic:white_searocket',
                plant: 'upgrade_aquatic:white_searocket',
                substrate: 'dirt'
            },
            {
                seed: 'upgrade_aquatic:purple_pickerelweed',
                render: 'upgrade_aquatic:purple_pickerelweed',
                plant: 'upgrade_aquatic:purple_pickerelweed',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:blue_pickerelweed',
                render: 'upgrade_aquatic:blue_pickerelweed',
                plant: 'upgrade_aquatic:blue_pickerelweed',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'grass_like',
        crops: [
            {
                seed: 'minecraft:crimson_roots',
                render: 'minecraft:crimson_roots',
                plant: 'minecraft:crimson_roots',
                substrate: 'crimson_nylium'
            },
            {
                seed: 'minecraft:fern',
                render: 'minecraft:fern',
                plant: 'minecraft:fern',
                substrate: 'grass'
            },
            {
                seed: 'minecraft:grass',
                render: 'minecraft:grass',
                plant: 'minecraft:grass',
                substrate: 'grass'
            },
            {
                seed: 'minecraft:nether_sprouts',
                render: 'minecraft:nether_sprouts',
                plant: 'minecraft:nether_sprouts',
                substrate: 'nether'
            },
            {
                seed: 'minecraft:seagrass',
                render: 'minecraft:seagrass',
                plant: 'minecraft:seagrass',
                substrate: 'water'
            },
            {
                seed: 'minecraft:warped_roots',
                render: 'minecraft:warped_roots',
                plant: 'minecraft:warped_roots',
                substrate: 'warped_nylium'
            },
            {
                seed: 'betterendforge:shadow_plant',
                render: 'betterendforge:shadow_plant',
                plant: 'betterendforge:shadow_plant',
                substrate: 'shadow_grass'
            },
            {
                seed: 'betterendforge:needlegrass',
                render: 'betterendforge:needlegrass',
                plant: 'betterendforge:needlegrass',
                substrate: 'shadow_grass'
            },
            {
                seed: 'betterendforge:crystal_grass',
                render: 'betterendforge:crystal_grass',
                plant: 'betterendforge:crystal_grass',
                substrate: 'crystal_moss'
            },
            {
                seed: 'betterendforge:creeping_moss',
                render: 'betterendforge:creeping_moss',
                plant: 'betterendforge:creeping_moss',
                substrate: 'end_moss'
            },
            {
                seed: 'betterendforge:chorus_grass',
                render: 'betterendforge:chorus_grass',
                plant: 'betterendforge:chorus_grass',
                substrate: 'chorus_nylium'
            },
            {
                seed: 'betterendforge:charnia_red',
                render: 'betterendforge:charnia_red',
                plant: 'betterendforge:charnia_red',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:charnia_purple',
                render: 'betterendforge:charnia_purple',
                plant: 'betterendforge:charnia_purple',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:charnia_orange',
                render: 'betterendforge:charnia_orange',
                plant: 'betterendforge:charnia_orange',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:charnia_light_blue',
                render: 'betterendforge:charnia_light_blue',
                plant: 'betterendforge:charnia_light_blue',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:charnia_green',
                render: 'betterendforge:charnia_green',
                plant: 'betterendforge:charnia_green',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:charnia_cyan',
                render: 'betterendforge:charnia_cyan',
                plant: 'betterendforge:charnia_cyan',
                substrate: 'water'
            },
            {
                seed: 'betterendforge:bushy_grass',
                render: 'betterendforge:bushy_grass',
                plant: 'betterendforge:bushy_grass',
                substrate: 'pink_moss'
            },
            {
                seed: 'betterendforge:amber_grass',
                render: 'betterendforge:amber_grass',
                plant: 'betterendforge:amber_grass',
                substrate: 'amber_moss'
            },
            {
                seed: 'betterendforge:lutebus',
                render: 'betterendforge:lutebus',
                plant: 'betterendforge:lutebus',
                substrate: 'rutiscus'
            },
            {
                seed: 'betterendforge:lamellarium',
                render: 'betterendforge:lamellarium',
                plant: 'betterendforge:lamellarium',
                substrate: 'rutiscus'
            },
            {
                seed: 'betterendforge:orango',
                render: 'betterendforge:orango',
                plant: 'betterendforge:orango',
                substrate: 'rutiscus'
            },
            {
                seed: 'betterendforge:aeridium',
                render: 'betterendforge:aeridium',
                plant: 'betterendforge:aeridium',
                substrate: 'rutiscus'
            },
            {
                seed: 'betterendforge:globulagus',
                render: 'betterendforge:globulagus',
                plant: 'betterendforge:globulagus',
                substrate: 'sangnum'
            },
            {
                seed: 'betterendforge:clawfern',
                render: 'betterendforge:clawfern',
                plant: 'betterendforge:clawfern',
                substrate: 'sangnum'
            },
            {
                seed: 'upgrade_aquatic:tall_beachgrass',
                render: 'upgrade_aquatic:tall_beachgrass',
                plant: 'upgrade_aquatic:tall_beachgrass',
                substrate: 'dirt'
            },
            {
                seed: 'upgrade_aquatic:beachgrass',
                render: 'upgrade_aquatic:beachgrass',
                plant: 'upgrade_aquatic:beachgrass',
                substrate: 'dirt'
            },
            {
                seed: 'projectvibrantjourneys:beach_grass',
                render: 'projectvibrantjourneys:beach_grass',
                plant: 'projectvibrantjourneys:beach_grass',
                substrate: 'dirt'
            },
            {
                seed: 'projectvibrantjourneys:cattail',
                render: 'projectvibrantjourneys:cattail',
                plant: 'projectvibrantjourneys:cattail',
                substrate: 'water'
            },
            {
                seed: 'projectvibrantjourneys:sea_oats',
                render: 'projectvibrantjourneys:sea_oats',
                plant: 'projectvibrantjourneys:sea_oats',
                substrate: 'dirt'
            },
            {
                seed: 'projectvibrantjourneys:cattail',
                render: 'projectvibrantjourneys:cattail',
                plant: 'projectvibrantjourneys:cattail',
                substrate: 'water'
            },
            {
                seed: 'tconstruct:blood_slime_tall_grass',
                render: 'tconstruct:blood_slime_tall_grass',
                plant: 'tconstruct:blood_slime_tall_grass',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:ender_slime_tall_grass',
                render: 'tconstruct:ender_slime_tall_grass',
                plant: 'tconstruct:ender_slime_tall_grass',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:sky_slime_tall_grass',
                render: 'tconstruct:sky_slime_tall_grass',
                plant: 'tconstruct:sky_slime_tall_grass',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:earth_slime_tall_grass',
                render: 'tconstruct:earth_slime_tall_grass',
                plant: 'tconstruct:earth_slime_tall_grass',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:blood_slime_fern',
                render: 'tconstruct:blood_slime_fern',
                plant: 'tconstruct:blood_slime_fern',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:ender_slime_fern',
                render: 'tconstruct:ender_slime_fern',
                plant: 'tconstruct:ender_slime_fern',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:sky_slime_fern',
                render: 'tconstruct:sky_slime_fern',
                plant: 'tconstruct:sky_slime_fern',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:earth_slime_fern',
                render: 'tconstruct:earth_slime_fern',
                plant: 'tconstruct:earth_slime_fern',
                substrate: 'slimy_dirt'
            }
        ]
    },
    {
        type: 'kelp_like',
        crops: [
            {
                seed: 'minecraft:kelp',
                render: 'minecraft:kelp_plant',
                plant: 'minecraft:kelp',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:polar_kelp',
                render: 'upgrade_aquatic:polar_kelp',
                plant: 'upgrade_aquatic:polar_kelp',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:ochre_kelp',
                render: 'upgrade_aquatic:ochre_kelp',
                plant: 'upgrade_aquatic:ochre_kelp',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:thorny_kelp',
                render: 'upgrade_aquatic:thorny_kelp',
                plant: 'upgrade_aquatic:thorny_kelp',
                substrate: 'water'
            },
            {
                seed: 'upgrade_aquatic:tongue_kelp',
                render: 'upgrade_aquatic:tongue_kelp',
                plant: 'upgrade_aquatic:tongue_kelp',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'lily_like',
        crops: [
            {
                seed: 'minecraft:lily_pad',
                render: 'minecraft:lily_pad',
                plant: 'minecraft:lily_pad',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'shroom',
        crops: [
            {
                seed: 'minecraft:nether_wart',
                render: 'minecraft:nether_wart',
                plant: 'minecraft:nether_wart',
                substrate: 'soul_sand'
            },
            {
                seed: 'minecraft:sea_pickle',
                render: 'minecraft:sea_pickle',
                plant: 'minecraft:sea_pickle',
                substrate: 'water'
            },
            {
                seed: 'projectvibrantjourneys:bark_mushroom',
                render: 'projectvibrantjourneys:bark_mushroom',
                plant: 'projectvibrantjourneys:bark_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'betterendforge:bolux_mushroom',
                render: 'betterendforge:bolux_mushroom',
                plant: 'betterendforge:bolux_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'pamhc2crops:whitemushroomseeditem',
                render: 'pamhc2crops:pamwhitemushroomcrop',
                plant: 'pamhc2crops:whitemushroomitem',
                substrate: 'mushroom'
            },
            {
                seed: 'infernalexp:luminous_fungus',
                render: 'infernalexp:luminous_fungus',
                plant: 'infernalexp:luminous_fungus',
                substrate: 'mushroom'
            },
            {
                seed: 'betterendforge:chorus_mushroom_seed',
                render: 'betterendforge:chorus_mushroom_seed',
                plant: 'betterendforge:chorus_mushroom_raw',
                substrate: 'end_stone'
            }
        ]
    },
    {
        type: 'shrub',
        crops: [
            {
                seed: 'minecraft:sweet_berries',
                render: 'minecraft:sweet_berry_bush',
                plant: 'minecraft:sweet_berries',
                substrate: 'dirt'
            },
            {
                seed: 'betterendforge:blue_vine_seed',
                render: 'betterendforge:blue_vine_lantern',
                plant: 'betterendforge:blue_vine_lantern',
                plantSecondary: 'betterendforge:blue_vine_seed',
                plantSecondaryRate: 'high',
                substrate: 'end_mycelium'
            },
            {
                seed: 'betterendforge:glowing_pillar_seed',
                render: 'betterendforge:glowing_pillar_luminophor',
                plant: 'betterendforge:glowing_pillar_luminophor',
                plantSecondary: 'betterendforge:glowing_pillar_seed',
                plantSecondaryRate: 'high',
                substrate: 'amber_moss'
            },
            {
                seed: 'betterendforge:bulb_vine_seed',
                render: 'betterendforge:bulb_vine',
                plant: 'betterendforge:glowing_bulb',
                plantSecondary: 'betterendforge:bulb_vine_seed',
                plantSecondaryRate: 'high',
                substrate: 'pink_moss'
            },
            {
                seed: 'projectvibrantjourneys:warped_nettle',
                render: 'projectvibrantjourneys:warped_nettle',
                plant: 'projectvibrantjourneys:warped_nettle',
                substrate: 'warped_nylium'
            },
            {
                seed: 'projectvibrantjourneys:crimson_nettle',
                render: 'projectvibrantjourneys:crimson_nettle',
                plant: 'projectvibrantjourneys:crimson_nettle',
                substrate: 'crimson_nylium'
            }
        ]
    },
    {
        type: 'vine',
        crops: [
            {
                seed: 'minecraft:twisting_vines',
                render: 'minecraft:twisting_vines_plant',
                plant: 'minecraft:twisting_vines',
                substrate: 'warped_nylium'
            },
            {
                seed: 'minecraft:vine',
                render: 'minecraft:vine',
                plant: 'minecraft:vine',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:weeping_vines',
                render: 'minecraft:weeping_vines_plant',
                plant: 'minecraft:weeping_vines',
                substrate: 'crimson_nylium'
            },
            {
                seed: 'betterendforge:twisted_vine',
                render: 'betterendforge:twisted_vine',
                plant: 'betterendforge:twisted_vine',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:twisted_moss',
                render: 'betterendforge:twisted_moss',
                plant: 'betterendforge:twisted_moss',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:tenanea_flowers',
                render: 'betterendforge:tenanea_flowers',
                plant: 'betterendforge:tenanea_flowers',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:tail_moss',
                render: 'betterendforge:tail_moss',
                plant: 'betterendforge:tail_moss',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:purple_polypore',
                render: 'betterendforge:purple_polypore',
                plant: 'betterendforge:purple_polypore',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:jungle_vine',
                render: 'betterendforge:jungle_vine',
                plant: 'betterendforge:jungle_vine',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:jungle_fern',
                render: 'betterendforge:jungle_fern',
                plant: 'betterendforge:jungle_fern',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:dense_vine',
                render: 'betterendforge:dense_vine',
                plant: 'betterendforge:dense_vine',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:cyan_moss',
                render: 'betterendforge:cyan_moss',
                plant: 'betterendforge:cyan_moss',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:bulb_moss',
                render: 'betterendforge:bulb_moss',
                plant: 'betterendforge:bulb_moss',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:ruscus',
                render: 'betterendforge:ruscus',
                plant: 'betterendforge:ruscus',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:bulb_vine_seed',
                render: 'betterendforge:bulb_vine',
                plant: 'betterendforge:glowing_bulb',
                substrate: 'end_stone'
            },
            {
                seed: 'betterendforge:hydralux_sapling',
                render: 'betterendforge:hydralux_sapling',
                plant: 'betterendforge:hydralux_petal',
                plantSecondary: 'betterendforge:hydralux_sapling',
                plantSecondaryRate: 'high',
                substrate: 'water'
            },
            {
                seed: 'atmospheric:passion_vine',
                render: 'atmospheric:passion_vine',
                plant: 'atmospheric:passion_vine',
                plantSecondary: 'atmospheric:passionfruit',
                plantSecondaryRate: 'low',
                substrate: 'dirt'
            },
            {
                seed: 'tconstruct:sky_slime_vine',
                render: 'tconstruct:sky_slime_vine',
                plant: 'tconstruct:sky_slime_vine',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:ender_slime_vine',
                render: 'tconstruct:ender_slime_vine',
                plant: 'tconstruct:ender_slime_vine',
                substrate: 'slimy_dirt'
            }
        ]
    }
];
