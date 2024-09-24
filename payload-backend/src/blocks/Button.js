export const Button = {
    slug: 'button',
    imageURL: '/../media/button.png',
    labels: {
        singular: 'Button',
        plural: 'Buttons',
    },
    fields: [
        {
            name: 'buttonLabel',
            label: 'Button Label',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'buttonLink',
            label: 'Button Link (Page Slug)',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'icon',
            label: 'Icon',
            type: 'select',
            required: true,
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
            name: 'alignment',
            label: 'Alignment',
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