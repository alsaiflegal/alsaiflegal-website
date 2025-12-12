export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/blogs',
            }
        ],
        sitemap: 'https://alsaiflegal.com/sitemap.xml',
    }
}
