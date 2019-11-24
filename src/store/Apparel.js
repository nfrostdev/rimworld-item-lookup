export default [
    {
        name: 'Pants',
        hp: 100,
        armor: {
            sharp: 0.2,
            blunt: 0.2,
            heat: 0.2,
        },
        insulation: {
            cold: 0.2,
            heat: 0.08,
        },
        layers: [
            'Lower Body',
            'On Skin'
        ]
    },
    {
        name: 'T-Shirt',
        description: 'A simple T-Shirt.',
        hp: 100,
        armor: {
            sharp: 0.2,
            blunt: 0.2,
            heat: 0.2,
        },
        insulation: {
            cold: 0.22,
            heat: 0.08,
        },
        layers: [
            'Upper Body',
            'On Skin'
        ]
    },
    {
        name: 'Tribalwear',
        description: 'A full-body garment crafted using neolithic tools. While it may look primitive, it is effective at insulating the wearer.',
        hp: 100,
        armor: {
            sharp: 0.2,
            blunt: 0.2,
            heat: 0.2,
        },
        insulation: {
            cold: 0.55,
            heat: 0.55,
        },
        layers: [
            'Upper Body',
            'Lower Body',
            'On Skin'
        ]
    },
    {
        name: 'Parka',
        description: 'A parka for staying warm in even the coldest of temperatures.',
        hp: 180,
        armor: {
            sharp: 0.2,
            blunt: 0.2,
            heat: 0.2,
        },
        insulation: {
            cold: 2,
            heat: 0,
        },
        layers: [
            'Upper Body',
            'Shell'
        ]
    },
    {
        name: 'Button-down Shirt',
        description: 'A nice-looking collared shirt with buttons.',
        hp: 100,
        armor: {
            sharp: 0.2,
            blunt: 0.2,
            heat: 0.2,
        },
        insulation: {
            cold: 0.26,
            heat: 0.1,
        },
        layers: [
            'Upper Body',
            'On Skin'
        ]
    },
    {
        name: 'Duster',
        description: 'A long duster coat for blocking the sun and grid of the outdoor.',
        hp: 200,
        armor: {
            sharp: 0.3,
            blunt: 0.3,
            heat: 0.3,
        },
        insulation: {
            cold: 0.6,
            heat: 0.85,
        },
        layers: [
            'Upper Body',
            'Lower Body',
            'Shell'
        ]
    }
]
