export const Media = {
    slug: 'media',
    labels: {
        singular: 'Media',
        plural: 'Media',
    },
    access: {
        read: () => true,
    },
    upload: true,
    fields: [
        {
            name: 'alt',
            label: 'Alt Text',
            type: 'text',
            required: true
        }
    ]
}