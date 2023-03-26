import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool, StructureBuilder} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {images} from '../src/constants';
import {DropIcon} from '@sanity/icons'
import {PlugIcon} from '@sanity/icons'
import {HomeIcon} from '@sanity/icons'
import {UserIcon} from '@sanity/icons'
import {EditIcon} from '@sanity/icons'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'Aviant Customs',

  projectId: 'on7llfig',
  dataset: 'production',

  plugins: [deskTool({
    structure: (S, context) => {
        console.log(context)
      return  S.list()
          .title('Content')
          .items([
              // ({type: 'about', S, context}),
            // Minimum required configuration
              orderableDocumentListDeskItem({
                  type: 'jewelry',
                  S,
                  context,
                  title: 'Jewelry Clients',
                  icon: PlugIcon
              }),
            orderableDocumentListDeskItem({
                type: 'splash',
                S,
                context,
                title: 'Splash Page',
                icon: DropIcon
            }),
              orderableDocumentListDeskItem({
                  type: 'header',
                  S,
                  context,
                  title: 'Header',
                  icon: HomeIcon
              }),


            orderableDocumentListDeskItem({
                type: 'about',
                S,
                context,
                title: 'About Page',
                icon: UserIcon
            }),

              orderableDocumentListDeskItem({
                  type: 'contact',
                  S,
                  context,
                  title: 'Contact',
                  icon: EditIcon
              }),

          ])
    },
  }), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  // plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

