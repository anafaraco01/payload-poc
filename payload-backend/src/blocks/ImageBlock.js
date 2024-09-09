export const ImageBlock = {
    slug: 'imageBlock',
    labels: {
        singular: 'Image Block',
        plural: 'Image Blocks',
    },
    fields: [
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'imageAlignment',
            label: 'Image Alignment',
            type: 'select',
            required: true,
            options: [
                {
                    label: 'Left',
                    value: 'left'
                },
                {
                    label: 'Right',
                    value: 'right'
                },
                {
                    label: 'Full Width',
                    value: 'fullWidth'
                },
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
                },
                {
                    label: 'Top Dark & Rest White',
                    value: 'oneThird'
                },
                {
                    label: 'Half Dark & Half White',
                    value: 'half'
                },
                {
                    label: 'Two Thirds Dark and Bottom White',
                    value: 'twoThirds'
                },
            ]
        }
    ],
}