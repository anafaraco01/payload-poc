import RenderBlocks from '@/utils/RenderBlocks'
import React from 'react'
import axios from 'axios'
import Navigation from '@/blocks/Navigation'

export default function Page({ page }) {
    if (!page) {
        return (
            <div>You have not created any page yet, get started to see your page here :))</div>
        )
    }
    return (
        <div>
            <Navigation />
            <RenderBlocks layout={page.layout} />
        </div>
    )
}

// Generates a list of slugs
export const getStaticPaths = async () => {
    const pageReq = await axios('/api/pages?limit=100');
    const pageData = pageReq.data;

    const paths = pageData.docs.flatMap(({ slug }) => {
        if (slug === 'index') {
            return [
                { params: { slug: [] }, locale: 'en' },  // Adjusted to empty array for root
                { params: { slug: [] }, locale: 'de' },
            ];
        } else {
            const slugParts = slug.split('/');
            return [
                { params: { slug: slugParts }, locale: 'en' },
                { params: { slug: slugParts }, locale: 'de' },
            ];
        }
    });

    return {
        paths,
        fallback: false, // Disable fallback
    };
};

// Searches for the specific data per page
export const getStaticProps = async (ctx) => {
    const slug = ctx.params?.slug || 'index';
    const locale = ctx.locale || "en";

    // Fetch page
    const pageReq = await axios(`/api/pages?where[slug][equals]=${slug}&locale=${locale}`)
    let pageData = pageReq.data.docs[0]

    return {
        props: {
            page: pageData,
            locale: locale
        },
    };
};