import axios from "axios";
import { useContext, useEffect, useState } from "react";
import GlobalState from "../../../GlobalState";
import Layout from "../../../components/layout";
import SideButton from "../../../components/SideButton";
import SwiperCore, { Autoplay } from 'swiper';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SeoTags from "../../../components/SeoTags";

export default function News(props) {
    SwiperCore.use([Autoplay])

    const insightsSettings = props.insightsNewsSingleData.page_items.insights_settings
    const singleNew = props.insightsNewsSingleData.page_items.single_news;
    const latestNews = props.insightsNewsSingleData.page_items.latest_news;

    const menuItems = props.insightsNewsSingleData.fixed_titles;
    const socialMedia = props.insightsNewsSingleData.social_media;
    const footerLogos = props.insightsNewsSingleData.footer_logos;
    const footerContactIcons = props.insightsNewsSingleData.footer_contact_icons;
    const serviceTitles = props.insightsNewsSingleData.services_titles;
    const industriesTitles = props.insightsNewsSingleData.industries_titles;

    const [loading, setLoading] = useState(true);
    const { triggerScroll } = useContext(GlobalState);

    useEffect(() => {
        triggerScroll();
        setLoading(false);
    }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps


    return loading ? null : (
        <Layout activePage="insights" fixedNav={true} menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>

            <SeoTags
                title={props.insightsNewsSingleData.page_items.single_news.seo_title}
                description={props.insightsNewsSingleData.page_items.single_news.seo_description}
                image={props.insightsNewsSingleData.page_items.single_news.seo_image}
            />

            <SideButton
                title={menuItems['book-a-consultation']}
            />

                    <>
                        <div className="pt-lg-5">
                            <div className="pt-5">
                                <div className="container pt-5 px-sm-2 px-4"  >
                                    <div className="row  align-items-start  pt-5">
                                        <div className="col-xxl-auto col-lg-1 col-auto add-absolute">
                                            <div className=" d-none d-sm-block">
                                                {
                                                    (history.length > 2) ?
                                                        <button onClick={() => window.history.back()} className="button back-button d-flex align-items-center shadow">
                                                            <svg className="arrow-back" xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                                                <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                                            </svg>
                                                            <p className="mb-0 ms-2">{insightsSettings.back_text}</p>
                                                        </button>
                                                        :
                                                        null
                                                }
                                            </div>
                                            <div className="d-block d-sm-none">
                                                {
                                                    (history.length > 2) ?
                                                        <button onClick={() => window.history.back()} className="back-button-border">
                                                            <svg className="arrow-back " xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                                                <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                                            </svg>
                                                        </button>
                                                        :
                                                        null}
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="d-flex text-center justify-content-center">
                                                <div className="row d-flex align-items-center justify-content-center">
                                                    <div className="col-lg-12 col-md-12 col-sm-12 col-8 justify-content-center">
                                                        <h2 className="mb-0 service-title-page">{singleNew.title}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mb-4 pt-3">
                                                <h4 className="date ">{singleNew.date_formatted}</h4>
                                            </div>
                                        </div>
                                        <div className="col-1  d-sm-block d-none"></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="container single-news-page px-sm-2 px-4">
                            <div className="row  align-items-start"  >
                                <div className="col-lg-5 col-md-6 mb-4 mb-md-0" animate="">
                                    <div className="ratio single-news">
                                        <img src={singleNew.first_image} alt="news" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6">
                                    <div className="mb-3" dangerouslySetInnerHTML={{ __html: singleNew.first_text }} />
                                </div>
                                <div className="col-12">
                                    <div className="py-4 mb-0" dangerouslySetInnerHTML={{ __html: singleNew.text_between }} />
                                </div>
                            </div>
                            <div className="row  align-items-center mb-4"  >
                                <div className="col-lg-6 col-md-6 col-sm-6 pb-4 " animate="">
                                    <div className="ratio single-news-image">
                                        <img src={singleNew.second_image} alt={singleNew.title} title={singleNew.title} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 pb-4" animate="">
                                    <div className="ratio single-news-image">
                                        <img src={singleNew.third_image} alt={singleNew.title} title={singleNew.title} />
                                    </div>
                                </div>
                                <div className="col-12 pb-4">
                                    <div dangerouslySetInnerHTML={{ __html: singleNew.last_text }} />
                                </div>
                            </div>

                            <div className="row  align-items-center mb-4 pb-5"  >
                                <div className="text-center latest">
                                    <h3>{insightsSettings.share_text}</h3>
                                </div>
                                <div className="col">
                                    <hr className="social-line" />
                                </div>
                                <div className="col-auto">
                                    <a target="_blank" rel="noreferrer" href={'https://www.facebook.com/sharer.php?u=' + window.location}>
                                        <img className=" social-icon mx-2" src={insightsSettings.share_facebook} alt={insightsSettings.share_facebook} title={insightsSettings.share_facebook} />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href={'https://www.linkedin.com/sharing/share-offsite/?url=' + window.location}>
                                        <img className=" social-icon mx-2" src={insightsSettings.share_twitter} alt={insightsSettings.share_twitter} title={insightsSettings.share_twitter} />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href={'https://twitter.com/intent/tweet?url=' + window.location}>
                                        <img className=" social-icon mx-2" src={insightsSettings.share_linkedin} alt={insightsSettings.share_linkedin} title={insightsSettings.share_linkedin} />
                                    </a>
                                </div>
                                <div className="col">
                                    <hr className="social-line" />
                                </div>
                            </div>

                            <div className="pb-lg-5"  >
                                <div className="row justify-content-center  align-items-center mb-4 pb-5">
                                    <div className="text-center latest">
                                        <h3 className="mb-4">LATEST NEWS</h3>
                                    </div>
                                    <Swiper
                                        // pagination={{ clickable: true, el: '.js-swiper-pagination-horizontal' }}
                                        pagination={true}
                                        autoplay={{ delay: 3000 }}
                                        modules={[Pagination]}
                                        spaceBetween={15}
                                        loop={true}
                                        slidesPerView={1.5}
                                        centeredSlides={true}
                                        className="mySwiper pb-5"
                                        breakpoints={{
                                            1199.98: {
                                                centeredSlides: false,
                                                slidesPerView: 4,
                                            },

                                            991.98: {
                                                centeredSlides: false,
                                                slidesPerView: 3,
                                            },

                                            // when window width is >= 767.98px
                                            767.98: {
                                                centeredSlides: false,
                                                slidesPerView: 3,
                                            },
                                            575.98: {
                                                slidesPerView: 2.5,
                                            },
                                        }}
                                    >
                                        {
                                            latestNews.map((latestNew, index) =>
                                                <SwiperSlide key={index}>
                                                    <Link href={"/insights/news/" + latestNew.slug}>
                                                        <a>
                                                            <div className="pb-5">
                                                                <div className="latest-news-section position-relative">
                                                                    <div className="ratio ratio-1x1 lastest-news">
                                                                        <img src={latestNew.first_image} alt={latestNew.title} title={latestNew.title} />
                                                                    </div>
                                                                    <div className="overlay"></div>
                                                                    <div className="border-on-overlay"></div>
                                                                    <div className="latest-news-content">
                                                                        <h3>{latestNew.title}</h3>
                                                                        <h4 className="date-latest">{latestNew.date_formatted}</h4>
                                                                    </div>
                                                                    <div className="latest-news-content-hover text-center">
                                                                        <h3>{latestNew.title}</h3>
                                                                        <h4 className="date-latest">{latestNew.date_formatted}</h4>
                                                                        <a href={"/insights/news/" + latestNew.slug} className="underlined-link read-more-news">{insightsSettings.read_more}</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </SwiperSlide>
                                            )
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </>

        </Layout >
    )
}

export async function getStaticPaths() {
    let insights = await axios.get("/insights/news");
    const paths = [];
    // Get the paths we want to pre-render based on posts

    insights.data.page_items.paginated_news.data.forEach((insight) => {
        paths.push({
            params: { slug: insight.slug.toString() },
        });
    });
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}


export async function getStaticProps(context) {
    const { slug } = context.params;
    const insightsNewsSingleData = await axios.get("/insights/news/" + slug);

    return {
        props: {
            insightsNewsSingleData: insightsNewsSingleData.data,
        },
        revalidate: 10,
    };
}