import {orderRankField, orderRankOrdering} from "@sanity/orderable-document-list";

export default {
    name: 'about',
    type: 'document',
    title: 'About Us',
    orderings: [orderRankOrdering],
    fields: [
        {
            title: 'Check this Box for only one section',
            name: 'oneSection',
            type: 'boolean',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title 1'
        },
        {
            name: 'description1',
            title: 'Description 1',
            type: 'string',
        },
        {
            name: 'title2',
            type: 'string',
            title: 'Title 2'
        },
        {
            name: 'description2',
            title: 'Description 2',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        orderRankField({ type: 'about' }),
    ]
}
