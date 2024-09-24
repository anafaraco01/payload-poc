export const ContentBlock = {
    slug: 'contentBlock',
    imageURL: '/../media/contentBlock.png',
    labels: {
        singular: 'Content Block',
        plural: 'Content Blocks',
    },
    fields: [
        {
            name: 'lightHeading',
            label: 'Light Heading',
            type: 'text',
            required: true,
        },
        {
            name: 'boldHeading',
            label: 'Bold Heading',
            type: 'text',
            localized: true,
            required: true,
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
            name: 'paragraphAlignment',
            label: 'Paragraph Alignment',
            type: 'select',
            required: true,
            options: [
                {
                    label: 'Left',
                    value: 'left'
                },
                {
                    label: 'Justified',
                    value: 'justified'
                },
                {
                    label: 'Right',
                    value: 'right'
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
    ],
}