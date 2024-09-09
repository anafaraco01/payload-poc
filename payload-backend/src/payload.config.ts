import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { buildConfig } from 'payload/config'

import { Users } from './collections/Users';
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import {seed} from './seed'

export default buildConfig({
  serverURL: 'http://localhost:4000',
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Pages,
    Media,
  ],
  localization: {
    locales: [
      {
        label: {
          en: 'English',
          de: 'Englisch',
        },
        code: 'en',
      },
      {
        label: {
          en: 'German',
          de: 'Deutsch', 
        },
        code: 'de',
      },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  onInit: async (payload) => {
    // If the `env` var `PAYLOAD_SEED` is set, seed the db
    if (process.env.PAYLOAD_SEED) {
      await seed(payload);
    }
  }
})
