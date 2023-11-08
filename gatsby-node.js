const axios = require('axios')
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

// const baseUrl = 'https://manage.ellipshaircare.id/api/v1';
const baseUrl = `${process.env.GATSBY_API_URL}/api/v1`

const defaultLanguage = 'en'
const supportedLanguages = ['en', 'id', 'ja', 'zh']

axios.defaults.headers.get['Content-Type'] = 'application/json'
axios.defaults.headers.get['Accept'] = 'application/json'
// axios.defaults.headers.get['Accept-Language'] = i18Next.language;

const get = (endpoint, lang) => {
    return axios.get(`${baseUrl}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Accept-Language': lang,
        },
    })
}

const getVideoList = () =>
    Promise.all(
        supportedLanguages.map(async (lang) => {
            const { data } = await get(`/media/videos`, lang)

            return { [lang]: data }
        })
    )

const getArticleList = () =>
    Promise.all(
        supportedLanguages.map(async (lang) => {
            const { data } = await get(`/articles`, lang)

            const { data: detailTop } = await get(
                `/articles/${data.top_article.slug}`,
                lang
            )
            const detailFeatured = await Promise.all(
                data.featured_articles.map(async (article) => {
                    const { data } = await get(
                        `/articles/${article.slug}`,
                        lang
                    )
                    return data
                })
            )
            const detailArticles = await Promise.all(
                data.articles.map(async (article) => {
                    const { data } = await get(
                        `/articles/${article.slug}`,
                        lang
                    )
                    return data
                })
            )

            const allDetails = [detailTop]
                .concat(detailFeatured)
                .concat(detailArticles)

            const addDetails = { ...data, details: allDetails }
            return { [lang]: addDetails }
        })
    )

const getHomeSlider = () =>
    Promise.all(
        supportedLanguages.map(async (lang) => {
            const { data } = await get(`/media/banners`, lang)

            return { [lang]: data }
        })
    )

const getHomeCategory = () =>
    Promise.all(
        supportedLanguages.map(async (lang) => {
            const { data } = await get(`/categories`, lang)

            const subcategories = await Promise.all(
                data.map(async (category) => {
                    const { data: subcategories } = await get(
                        `/categories/${category.slug}`,
                        lang
                    )

                    const products = await Promise.all(
                        subcategories.children
                            .map(async (child) => {
                                const productDetail = await Promise.all(
                                    child.products.map(async (product) => {
                                        const { data: products } = await get(
                                            `/products/${product.slug}`,
                                            lang
                                        )
                                        return products
                                    })
                                )
                                return productDetail
                            })
                            .flat()
                    )
                    return { ...subcategories, products }
                })
            )
            return { [lang]: { category: data, subcategories } }
        })
    )

const getHomeArticle = () =>
    Promise.all(
        supportedLanguages.map(async (lang) => {
            const { data } = await get(`/articles/home`, lang)

            return { [lang]: data }
        })
    )

const getHomeReview = () =>
    Promise.all(
        supportedLanguages.map(async (lang) => {
            const { data } = await get(`/products/reviews`, lang)

            return { [lang]: data }
        })
    )

const getHomeGallery = () =>
    Promise.all(
        supportedLanguages.map(async (lang) => {
            const { data } = await get(`/media/ig_posts`, lang)

            return { [lang]: data }
        })
    )

const flatData = (dataset) =>
    dataset.reduce((acc, data) => {
        return { ...acc, ...data }
    }, {})

exports.createPages = async ({ actions }) => {
    const { createPage, createRedirect } = actions

    const allVideoData = flatData(await getVideoList())

    const allArticleData = flatData(await getArticleList())

    const allHomeSliders = flatData(await getHomeSlider())

    const allHomeCategories = flatData(await getHomeCategory())
    // console.log("AAA", allHomeCategories.en.subcategories);

    const allHomeArticles = flatData(await getHomeArticle())

    const allHomeReviews = flatData(await getHomeReview())

    const allHomeGalleries = flatData(await getHomeGallery())

    // index
    createRedirect({
        fromPath: `/`,
        toPath: `/${defaultLanguage}`,
        redirectInBrowser: true,
        isPermanent: true,
    })

    supportedLanguages.forEach((lang) => {
        const homeSliderData = allHomeSliders[lang]
        const { category: homeCategoryData, subcategories: subCategoryData } =
            allHomeCategories[lang]
        const homeArticleData = allHomeArticles[lang]
        const homeReviewData = allHomeReviews[lang]
        const homeGalleryData = allHomeGalleries[lang]
        createPage({
            path: `/${lang}`,
            component: require.resolve('./src/components/Home'),
            context: {
                lang,
                homeSliderData,
                homeCategoryData,
                homeArticleData,
                homeReviewData,
                homeGalleryData,
            },
        })

        createPage({
            path: `/${lang}/about-ellips`,
            component: require.resolve('./src/components/About'),
            context: { lang },
        })

        const articleData = allArticleData[lang]
        createPage({
            path: `/${lang}/articles`,
            component: require.resolve('./src/components/Article'),
            context: {
                lang,
                articleData,
            },
        })

        articleData.details.forEach((detail) => {
            createPage({
                path: `/${lang}/articles/${detail.article.slug}`,
                component: require.resolve('./src/components/ArticleDetail'),
                context: {
                    lang,
                    detail,
                },
            })
        })

        createPage({
            path: `/${lang}/contact-us`,
            component: require.resolve('./src/components/ContactPage'),
            context: { lang },
        })

        createPage({
            path: `/${lang}/hairpedia`,
            component: require.resolve('./src/components/Hairpedia'),
            context: { lang },
        })

        createPage({
            path: `/${lang}/privacy-policy`,
            component: require.resolve('./src/components/Privacy'),
            context: { lang },
        })

        createPage({
            path: `/${lang}/search`,
            component: require.resolve('./src/components/SearchResult'),
            context: { lang },
        })

        createPage({
            path: `/${lang}/terms-and-conditions`,
            component: require.resolve('./src/components/TnC'),
            context: { lang },
        })

        const videoData = allVideoData[lang]
        createPage({
            path: `/${lang}/videos`,
            component: require.resolve('./src/components/Videos'),
            context: { lang, videoData },
        })

        subCategoryData.forEach((categoryData) => {
            const [activeSub] = categoryData.children
            createPage({
                path: `/${lang}/${categoryData.slug}`,
                component: require.resolve('./src/components/ProductSubcat'),
                context: { lang, categoryData, activeSub },
            })

            const allChildren = categoryData.children.flat()
            allChildren.forEach((childrenData) => {
                const allProductData = categoryData.products.flat()
                allProductData.forEach((productData) => {
                    createPage({
                        path: `/${lang}/${categoryData.slug}/${productData.product.slug}`,
                        component: require.resolve('./src/components/Product'),
                        context: { lang, productData },
                    })

                    createPage({
                        path: `/${lang}/${childrenData.slug}/${productData.product.slug}`,
                        component: require.resolve('./src/components/Product'),
                        context: { lang, productData },
                    })
                })
            })
        })
    })
}
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}
