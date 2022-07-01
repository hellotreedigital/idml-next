const axios = require('axios');
const fs = require('fs')
function addPage(page) {
  const path = page.replace('pages', '').replace('.jsx', '').replace('.mdx', '')
  const route = path === '/index' ? '' : path
  return `  <url>
    <loc>${`https://idmlproducts.com/${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`
}
async function generateSitemap() {
    // excludes Nextjs files and API routes.
    const pages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
        return ![
            "api.js",
            "_app.js",
            "_document.js",
            "404.js",
            "sitemap.xml.js",
            "index.js"
        ].includes(staticPage);
    })
    .map((staticPagePath) => {
        return `${staticPagePath}`;
    });
    const home = ""
    const products = await axios.get("https://admin.idmlproducts.com/api/industries");
    const dynamicPaths = products.data.page_items.all_industries.map(singleProduct => {
        return `industries/${singleProduct.slug}`
    });


    
    const products1 = await axios.get("https://admin.idmlproducts.com/api/insights/case-studies");
    const dynamicPaths2 = products1.data.page_items.paginated_case_studies.data.map(singleProduct => {
        return `insights/case-studies/${singleProduct.slug}`
    })


    const products2 = await axios.get("https://admin.idmlproducts.com/api/insights/news");
    const dynamicPaths3 = products2.data.page_items.paginated_news.data.map(singleProduct => {
        return `insights/news/${singleProduct.slug}`
    })


    
    const products3 = await axios.get("https://admin.idmlproducts.com/api/services");
    const dynamicPaths4 = products3.data.page_items.services_categories.map(singleProduct => {
        return `services/${singleProduct.slug}`
    })


    const allPaths = [home, ...pages, ...dynamicPaths, ...dynamicPaths2, ...dynamicPaths3, ...dynamicPaths4];
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths.map(addPage).join('\n')}
  </urlset>`
    fs.writeFileSync('public/sitemap.xml', sitemap)
  }
  generateSitemap()