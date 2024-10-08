import { TwoColumnsBlock } from '../blocks/TwoColumnsBlock'
import { SimpleRichText } from '../blocks/SimpleRichText'
import { HeroBlock } from '../blocks/HeroBlock'
import { ContentBlock } from '../blocks/ContentBlock'
import { Button } from '../blocks/Button'
import { ImageBlock } from '../blocks/ImageBlock'

export const Pages = {
    slug: 'pages',
    labels: {
        singular: 'Page',
        plural: 'Pages',
    },
    access: {
        read: ({ req }) => {
            // If there is a user logged in,
            // let them retrieve all documents
            if (req.user) return true

            // If there is no user,
            // restrict the documents that are returned
            // to only those where `_status` is equal to `published`
            return {
                _status: {
                    equals: 'published',
                },
            }
        },
    },
    versions: {
        drafts: true,
    },
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
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,
        },
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks: [
                HeroBlock,
                ContentBlock,
                ImageBlock,
                TwoColumnsBlock,
                Button,
                SimpleRichText,
            ]
        }
    ],
    admin: {
        useAsTitle: 'name', 
        defaultColumns: [
            'name',  
            'updatedAt',
            'lastUpdatedBy',
            '_status',
        ],
    },
}