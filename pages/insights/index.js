import { useContext, useEffect, useState } from "react";

import Banner from "../../components/Banner";
import Layout from "../../components/layout";
import NewsSection from "../../components/NewsSection";
import SideButton from "../../components/SideButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import GlobalState from "../../GlobalState";
import axios from "axios";
import Link from "next/link";
import SeoTags from "../../components/SeoTags";
import AnimatedCursor from "react-animated-cursor"

export default function Insights(props) {

    const [loading, setLoading] = useState(true);
    const { triggerScroll } = useContext(GlobalState);
    const insights = props.insightsData.page_items.insights_settings;
    const insightsNews = props.insightsData.page_items.insights_news;
    const insightsCaseStudies = props.insightsData.page_items.insights_case_studies;

    const productSetting = props.insightsData.product_settings;
    const favIcon = props.insightsData.fav_icon_settings;
    const menuItems = props.insightsData.fixed_titles;
    const socialMedia = props.insightsData.social_media;
    const footerLogos = props.insightsData.footer_logos;
    const footerContactIcons = props.insightsData.footer_contact_icons;
    const serviceTitles = props.insightsData.services_titles;
    const industriesTitles = props.insightsData.industries_titles;

    useEffect(() => {
        triggerScroll();
        setLoading(false);
    }, [insights, loading]); // eslint-disable-line react-hooks/exhaustive-deps

    return loading ? null : (
        <Layout activePage="insights" favIcon={favIcon} productSetting={productSetting} menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>

            <SeoTags
                title={props.insightsData.page_items.seo.title}
                description={props.insightsData.page_items.seo.description}
                image={props.insightsData.page_items.seo.image}
            />
            {/* <AnimatedCursor
                innerSize={10}
                outerSize={10}
                color='54, 80, 100'
                outerAlpha={0.2}
                innerScale={0.7}
                inner
                outerScale={0}
            /> */}

            {
                insights ?
                    <>
                        <Banner
                            banner={insights.image}
                            title={insights.title}
                            video={insights.banner_video}
                        />

                        <SideButton
                            title={menuItems['book-a-consultation']}
                        />

                        <div className="container-md py-lg-5"  >
                            <div className="row justify-content-center text-center pt-5">
                                <div className="col-lg-8 pb-4">
                                    <h2 className="mb-0">{insights.news_title}</h2>
                                </div>
                            </div>
                            <div className="">

                                <Swiper
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    modules={[Pagination]}
                                    spaceBetween={10}
                                    centeredSlides={true}
                                    loop={true}
                                    slidesPerView={1.5}
                                    className="news-swiper"
                                    breakpoints={{
                                        1199.98: {
                                            slidesPerView: 3,
                                            pagination: 'false',
                                            allowTouchMove: false,
                                        },

                                        991.98: {
                                            slidesPerView: 3,
                                            pagination: 'false',
                                            allowTouchMove: false,
                                        },

                                        // when window width is >= 767.98px
                                        767.98: {
                                            slidesPerView: 2.5,
                                            pagination: 'true',
                                        },
                                        575.98: {
                                            slidesPerView: 2,
                                            pagination: 'true',
                                        },
                                    }}
                                >
                                    {
                                        insightsNews ?
                                            insightsNews.map((insightNews, index) =>

                                                <SwiperSlide key={index}>
                                                    <div>
                                                        <Link href={"/insights/news/" + insightNews.slug}>
                                                            <a>
                                                                <NewsSection
                                                                    title={insightNews.title}
                                                                    date={insightNews.date_formatted}
                                                                    image={insightNews.first_image}
                                                                    description={insightNews.small_description}
                                                                    button={insights.read_more}
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                            :
                                            null
                                    }

                                </Swiper>
                                <div className=" text-center">
                                    <Link href="/insights/news/">
                                        <a>
                                            <button className="button blue-button shadow cursor-opposite">
                                                {insights.news_button}
                                            </button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="container-md py-lg-5"  >
                            <div className="row justify-content-center text-center pt-5">
                                <div className="col-lg-8 pb-4">
                                    <h2 className="mb-0">{insights.case_studies_title}</h2>
                                </div>
                            </div>
                            <div className="">

                                <Swiper
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    modules={[Pagination]}
                                    spaceBetween={10}
                                    centeredSlides={true}
                                    loop={true}
                                    slidesPerView={1.5}
                                    className="case-study-swiper"
                                    breakpoints={{
                                        1199.98: {
                                            slidesPerView: 3,
                                            pagination: 'false',
                                            allowTouchMove: false,
                                        },

                                        991.98: {
                                            slidesPerView: 3,
                                            pagination: 'false',
                                            allowTouchMove: false,
                                        },

                                        // when window width is >= 767.98px
                                        767.98: {
                                            slidesPerView: 2.5,
                                            pagination: 'true',
                                        },
                                        575.98: {
                                            slidesPerView: 2,
                                            pagination: 'true',
                                        },
                                    }}
                                >

                                    {
                                        insightsCaseStudies ?
                                            insightsCaseStudies.map((insightCaseStudies, index) =>

                                                <SwiperSlide key={index}>
                                                    <Link href={"/insights/case-studies/" + insightCaseStudies.slug}>
                                                        <a>
                                                            <NewsSection
                                                                title={insightCaseStudies.title}
                                                                image={insightCaseStudies.image}
                                                                description={insightCaseStudies.small_text}
                                                                button={insights.read_more}
                                                            />
                                                        </a>
                                                    </Link>
                                                </SwiperSlide>
                                            )
                                            :
                                            null
                                    }

                                </Swiper>
                                <div className="pb-5 text-center">
                                    <Link href="/insights/case-studies/">
                                        <a>
                                            <button className="button blue-button shadow cursor-opposite">
                                                {insights.case_studies_button}
                                            </button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    null
            }
        </Layout>
    )
}

export async function getStaticProps() {
    const insightsData = await axios.get("/insights");
    return {
        props: {
            insightsData: insightsData.data,
        },
        revalidate: 10,
    };
}