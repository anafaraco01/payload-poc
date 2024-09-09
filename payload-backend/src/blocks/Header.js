export const Header = {
    slug: 'header',
    labels: {
        singular: 'Header',
        plural: 'Headers',
    },
    fields: [
        {
            name: 'headingFirstLine',
            label: 'Heading First Line',
            type: 'text',
            required: true,
        },
        {
            name: 'headingSecondLine',
            label: 'Heading Second Line',
            type: 'text',
        },
        {
            name: 'headingSize',
            label: 'Heading Size',
            type: 'select',
            required: true,
            options: [
                {
                    label: 'Large',
                    value: '90px'
                },
                {
                    label: 'Medium',
                    value: '65px'
                },
            ]
        },
        {
            name: 'svg',
            label: 'SVG',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'background',
            label: 'Background',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ],
}