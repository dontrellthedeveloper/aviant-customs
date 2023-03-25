import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool, StructureBuilder} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'Aviant Customs',

  projectId: 'on7llfig',
  dataset: 'production',

  plugins: [deskTool({
    structure: (S, context) => {
      return  S.list()
          .title('Content')
          .items([
              // ({type: 'about', S, context}),
            // Minimum required configuration
            orderableDocumentListDeskItem({type: 'jewelry', S, context, title: 'Jewelry Client'}),

            orderableDocumentListDeskItem({type: 'about', S, context}),

          ])
    },
  }), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  // plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

