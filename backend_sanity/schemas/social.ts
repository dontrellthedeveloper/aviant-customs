import {orderRankField, orderRankOrdering} from "@sanity/orderable-document-list";

export default {
    name: 'social',
    type: 'document',
    title: 'Social Media Links',
    orderings: [orderRankOrdering],
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Links Title (ignore this field)',
        },
        {
            name: 'instagram',
            type: 'string',
            title: 'Instagram Link'
        },
        {
            name: 'facebook',
            title: 'Facebook Link',
            type: 'string',
        },
        {
            name: 'youtube',
            type: 'string',
            title: 'Youtube Link'
        },
        {
            name: 'tiktok',
            type: 'string',
            title: 'TikTok Link'
        },
        {
            name: 'twitter',
            type: 'string',
            title: 'Twitter Link'
        },
        orderRankField({ type: 'social' }),
    ]
}
