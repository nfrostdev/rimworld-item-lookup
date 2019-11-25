export default [
    {
        name: 'Bearskin',
        description: 'The strong furry leather of a bear. Compared to most leather, it is quite a bit tougher, and a bit better at all kinds of temperature regulation.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 3.4,
        mass: 0.03,
        multipliers: {
            hp: 1.3,
            armor: {
                sharp: 1.12,
                blunt: 0.24,
                heat: 1.5,
            },
            insulation: {
                cold: 36,
                heat: 36
            },
        },
    },
    {
        name: 'Birdskin',
        description: 'Tanned, dried, and scraped bird skin. It is quite delicate. Without its feathers, it provides little protection from heat or cold.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 1.8,
        mass: 0.03,
        multipliers: {
            hp: 1,
            armor: {
                sharp: 0.67,
                blunt: 0.14,
                heat: 1.5,
            },
            insulation: {
                cold: 18,
                heat: 18
            },
        },
    },
    {
        name: 'Bluefur',
        description: 'The furry pelt of a muffalo. Recognizable by its distinctive blue tint. Good at temperature regulation in cold climates.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 2.3,
        mass: 0.03,
        multipliers: {
            hp: 1.3,
            armor: {
                sharp: 0.81,
                blunt: 0.24,
                heat: 1.5,
            },
            insulation: {
                cold: 36,
                heat: 28.8
            },
        },
    },
    {
        name: 'Camelhide',
        description: 'Tanned, dried, and scraped camel skin. Good at temperature regulation in hot climates.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 2.3,
        mass: 0.03,
        multipliers: {
            hp: 1.3,
            armor: {
                sharp: 0.81,
                blunt: 0.24,
                heat: 1.5,
            },
            insulation: {
                cold: 28.8,
                heat: 43.2
            },
        },
    },
    {
        name: 'Chinchilla Fur',
        description: 'Tanned, dried, and scraped chinchilla skin. Known as an extremely luxurious and insulating fur, it is exceptionally valuable.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 6.5,
        mass: 0.03,
        multipliers: {
            hp: 1,
            armor: {
                sharp: 0.67,
                blunt: 0.14,
                heat: 1.5,
            },
            insulation: {
                cold: 54,
                heat: 28.8
            },
        },
    },
    {
        name: 'Dog Leather',
        description: 'Tanned, dried, and scraped skin. A good traditional material for making clothes and bags.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 2,
        mass: 0.03,
        multipliers: {
            hp: 1.3,
            armor: {
                sharp: 0.81,
                blunt: 0.24,
                heat: 1.5,
            },
            insulation: {
                cold: 25.2,
                heat: 28.8
            },
        },
    },
    {
        name: 'Elephant Leather',
        description: 'Tanned, dried, and scraped elephant skin. While quite tough, it is a poor insulator.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 3,
        mass: 0.03,
        multipliers: {
            hp: 1.5,
            armor: {
                sharp: 1.12,
                blunt: 0.24,
                heat: 1.5,
            },
            insulation: {
                cold: 25.2,
                heat: 21.6
            },
        },
    },
    {
        name: 'Foxfur',
        description: 'The pelt of a fox. It protects well from the cold and is quite luxurious, fetching a high price.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 3.5,
        mass: 0.03,
        multipliers: {
            hp: 1,
            armor: {
                sharp: 0.81,
                blunt: 0.21,
                heat: 1.5,
            },
            insulation: {
                cold: 36,
                heat: 28.8
            },
        },
    },
    {
        name: 'Heavy Fur',
        description: 'Thick leather covered in a long, rugged mat of fur. Harvested from a large, hardy animal. This thick skin insulates and protects very well.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 3.3,
        mass: 0.03,
        multipliers: {
            hp: 1.5,
            armor: {
                sharp: 1.24,
                blunt: 0.24,
                heat: 1.5,
            },
            insulation: {
                cold: 54,
                heat: 25.2
            },
        },
    },
    {
        name: 'Human Leather',
        description: 'Tanned, drid, and scraped human skin. Most people find this material horrifying. Some find it fascinating. While a decent leather, it neither protects nor insulated particularly well.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 4.2,
        mass: 0.03,
        multipliers: {
            hp: 1.3,
            armor: {
                sharp: 0.64,
                blunt: 0.24,
                heat: 1.5,
            },
            insulation: {
                cold: 21.6,
                heat: 21.6
            },
        },
    },
    {
        name: 'Lightleather',
        description: 'Lightweight, thin leather; probably harvested from a small animal. Not as protective as thicker leathers.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 1.9,
        mass: 0.03,
        multipliers: {
            hp: 1,
            armor: {
                sharp: 0.54,
                blunt: 0.14,
                heat: 1.5,
            },
            insulation: {
                cold: 21.6,
                heat: 21.6
            },
        },
    },
    {
        name: 'Lizardskin',
        description: 'The tanned skin of a cold-blooded reptile. Lizardskin is reasonably touch, but does not insulate well.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 2.1,
        mass: 0.03,
        multipliers: {
            hp: 1,
            armor: {
                sharp: 0.81,
                blunt: 0.27,
                heat: 1.5,
            },
            insulation: {
                cold: 21.6,
                heat: 21.6
            },
        },
    },
    {
        name: 'Panthera Fur',
        description: 'A soft furry pelt harvested from a big cat. It is difficult to pierce and insulates well against heat.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 3,
        mass: 0.03,
        multipliers: {
            hp: 1.3,
            armor: {
                sharp: 0.93,
                blunt: 0.24,
                heat: 1.5,
            },
            insulation: {
                cold: 28.8,
                heat: 43.2
            },
        },
    },
    {
        name: 'Patchleather',
        description: 'A weak textile created by cutting up and sewing together various types of leathers. Regardless of what kind of leather is used to created it, patchleather\'s irregular seams make it less tough and less insulating than any intact leather.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 1.5,
        mass: 0.03,
        multipliers: {
            hp: 1,
            armor: {
                sharp: 0.45,
                blunt: 0.19,
                heat: 0.9,
            },
            insulation: {
                cold: 16.2,
                heat: 16.2
            },
        },
    },
    {
        name: 'Pigskin',
        description: 'Tanned, dried, and scraped pig skin. While a decent leather, it neither protects nor insulates well.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 1.9,
        mass: 0.03,
        multipliers: {
            hp: 1.3,
            armor: {
                sharp: 0.64,
                blunt: 0.24,
                heat: 1.5,
            },
            insulation: {
                cold: 21.6,
                heat: 21.6
            },
        },
    },
    {
        name: 'Plainleather',
        description: 'Tanned, dried, and scraped skin. A good traditional material for making clothes and bags.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 2.1,
        mass: 0.03,
        multipliers: {
            hp: 1.3,
            armor: {
                sharp: 0.81,
                blunt: 0.24,
                heat: 1.5,
            },
            insulation: {
                cold: 28.8,
                heat: 28.8
            },
        },
    },
    {
        name: 'Rhinoceros Leather',
        description: 'Tanned, dried, and scraped rhinoceros skin. It is exceptionally durable in combat, but provides little protection from weather.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 4.2,
        mass: 0.03,
        multipliers: {
            hp: 1.5,
            armor: {
                sharp: 1.29,
                blunt: 0.24,
                heat: 1.5,
            },
            insulation: {
                cold: 25.2,
                heat: 25.2
            },
        },
    },
    {
        name: 'Thrumbofur',
        description: 'The furry pelt of a thrumbo; luxurious and extraordinarily durable. Used for the highest quality crafts for its insulation and strength.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 14,
        mass: 0.03,
        multipliers: {
            hp: 2,
            armor: {
                sharp: 2.08,
                blunt: 0.36,
                heat: 1.5,
            },
            insulation: {
                cold: 61.2,
                heat: 39.6
            },
        },
    },
    {
        name: 'Wolfskin',
        description: 'A soft furry pelt harvested from a wolf-like creature. It is difficult to pierce and insulates well against cold.',
        beauty: -4,
        deterioration_rate: 2,
        flammability: 1,
        hp: 60,
        value: 3,
        mass: 0.03,
        multipliers: {
            hp: 1.3,
            armor: {
                sharp: 1.02,
                blunt: 0.24,
                heat: 1.5,
            },
            insulation: {
                cold: 43.2,
                heat: 28.8
            },
        },
    }
]
