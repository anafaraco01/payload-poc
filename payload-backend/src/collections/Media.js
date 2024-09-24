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
    hooks: {
        beforeChange: [
            async ({ req, operation, data }) => {
                if (operation === 'create') {
                    data.lastUpdatedBy = req.user.id;
                } else if (operation === 'update') {
                    data.lastUpdatedBy = req.user.id;
                }
            },
        ]
    },
    fields: [
        {
            name: 'lastUpdatedBy',
            type: 'relationship',
            relationTo: 'users',
            admin: {
                hidden: true,
                readOnly: true,
            },
        },
        {
            name: 'alt',
            label: 'Alt Text',
            type: 'text',
            required: true
        }
    ],
    admin: {
        defaultColumns: [
            'filename',
            'filesize',
            'mimeType',
            'updatedAt',
            'lastUpdatedBy',
        ],
    },
}