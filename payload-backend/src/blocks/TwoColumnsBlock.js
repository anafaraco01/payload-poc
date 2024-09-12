export const TwoColumnsBlock = {
    slug: 'twoColumnsBlock',
    labels: {
        singular: 'Two Column Block',
        plural: 'Two Column Blocks',
    },
    fields: [
        {
            name: 'lightHeading',
            label: 'Light Heading',
            type: 'text',
            localized: true,
        },
        {
            name: 'boldHeading',
            label: 'Bold Heading',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'paragraph1',
            label: 'Paragraph 1',
            type: 'textarea',
            required: true,
            localized: true,
        },
        {
            name: 'paragraph2',
            label: 'Paragraph 2',
            type: 'textarea',
            localized: true,
        },
        {
            name: 'buttonLabel',
            label: 'Button Label',
            type: 'text',
            localized: true,
        },
        {
            name: 'buttonLink',
            label: 'Button Link (Page Slug)',
            type: 'text',
        },
        {
            name: 'icon',
            label: 'Icon',
            type: 'select',
            options: [
                {
                    label: 'None',
                    value: 'none'
                },
                {
                    label: 'Arrow Right',
                    value: 'arrow-head-right'
                },
            ]
        },
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'direction',
            label: 'Direction',
            type: 'select',
            required: true,
            options: [
                {
                    label: 'Default',
                    value: 'default'
                },
                {
                    label: 'Reverse',
                    value: 'reverse'
                }
            ]
        },
        {
            name: 'theme',
            label: 'Theme',
            type: 'select',
            required: true,
            options: [
                {
                    label: 'Dark',
                    value: 'dark'
                },
                {
                    label: 'Light',
                    value: 'light'
                }
            ]
        }
    ]
}