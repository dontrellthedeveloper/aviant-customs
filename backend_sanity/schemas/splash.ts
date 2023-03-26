import {orderRankField, orderRankOrdering} from "@sanity/orderable-document-list";

export default {
    name: 'splash',
    type: 'document',
    title: 'Splash Page',
    orderings: [orderRankOrdering],
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Button Text'
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
        orderRankField({ type: 'splash' }),
    ]
}
