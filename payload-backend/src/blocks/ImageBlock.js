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
        }
    ],
}