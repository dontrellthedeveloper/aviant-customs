import {orderRankField, orderRankOrdering} from "@sanity/orderable-document-list";

export default {
    name: 'about',
    type: 'document',
    title: 'About Us',
    orderings: [orderRankOrdering],
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Name of Client'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name of Jewelry Piece'
        },

        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            title: 'Check this Box if the video should be after text',
            name: 'vidReverse',
            type: 'boolean',
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
            title: 'Check this Box if the video is Portrait (iPhone) Size.',
            name: 'vidPortrait',
            type: 'boolean',
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            },
        },


        {
            name: 'galleryTitle',
            type: 'string',
            title: 'Gallery Title'
        },
        {
            name: 'galleryDesc',
            type: 'string',
            title: 'Gallery Description'
        },
        {
            name: 'galleryCaption',
            type: 'string',
            title: 'Gallery Caption'
        },
        {
            title: 'Check this Box if the Gallery should be after text',
            name: 'galleryReverse',
            type: 'boolean',
        },
        {
            name: 'galleryImg',
            title: 'Gallery Image 1',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'galleryImg2',
            title: 'Gallery Image 2',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'galleryImg3',
            title: 'Gallery Image 3',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'galleryImg4',
            title: 'Gallery Image 4',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        orderRankField({ type: 'jewelry' }),
    ]
}
