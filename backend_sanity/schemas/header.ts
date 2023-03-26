import {orderRankField, orderRankOrdering} from "@sanity/orderable-document-list";

export default {
    name: 'header',
    type: 'document',
    title: 'Header',
    orderings: [orderRankOrdering],
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Header Title'
        },
        {
            name: 'caption',
            title: 'Header Caption',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Website Description Or Tagline',
            type: 'string',
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        orderRankField({ type: 'header' }),
    ]
}
