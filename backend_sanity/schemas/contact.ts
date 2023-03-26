import {orderRankField, orderRankOrdering} from "@sanity/orderable-document-list";

export default {
    name: 'contact',
    type: 'document',
    title: 'Contact',
    orderings: [orderRankOrdering],
    fields: [

        {
            name: 'title',
            type: 'string',
            title: 'Contact Form Title'
        },
        {
            name: 'caption',
            title: 'Contact Form Caption',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Contact Form Description',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Contact Phone Number',
            type: 'string',
        },
        {
            name: 'hours',
            title: 'Contact Hours',
            type: 'string',
        },
        {
            name: 'tag',
            title: 'Footer Tag',
            type: 'string',
        },
        {
            name: 'instagram',
            title: 'Instagram',
            type: 'string',
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'string',
        },

        {
            name: 'logo',
            title: 'Footer Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        orderRankField({ type: 'contact' }),
    ]
}
