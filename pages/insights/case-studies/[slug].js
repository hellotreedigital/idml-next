import axios from "axios";
import { useContext, useEffect, useState } from "react";
import GlobalState from "../../components/GlobalState";
import Layout from "../../components/layout";
import SideButton from "../../components/SideButton";


// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";

export default function caseStudies(props) {

    const insightsSettings = props.insightsCaseStudiesSingleData.page_items.insights_settings;
    const singleCase = props.insightsCaseStudiesSingleData.page_items.single_case_study;
    const menuItems = props.insightsCaseStudiesSingleData.fixed_titles;
    const socialMedia = props.insightsCaseStudiesSingleData.social_media;
    const footerLogos = props.insightsCaseStudiesSingleData.footer_logos;
    const footerContactIcons = props.insightsCaseStudiesSingleData.footer_contact_icons;
    const serviceTitles = props.insightsCaseStudiesSingleData.services_titles;
    const industriesTitles = props.insightsCaseStudiesSingleData.industries_titles;

    const [loading, setLoading] = useState(true);
    const { triggerScroll } = useContext(GlobalState);

    useEffect(() => {
        triggerScroll();
        setLoading(false);
    }, [loading]);


    return loading ? null : (
        <Layout activePage="insights" fixedNav={true} menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>
            <SideButton />
            {
                insightsSettings && (
                    <div className="pt-lg-5">
                        <div className="pt-5">
                            <div className="container pt-5" animate="left">
                                <div className="row align-items-center  pt-5 mb-4">
                                    <div className="col-xxl-auto col-lg-1 col-auto add-absolute">
                                        <div className=" d-none d-sm-block">
                                            <button onClick={() => window.history.back()} className="button back-button d-flex align-items-center shadow">
                                                <svg className="arrow-back" xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                                    <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                                </svg>
                                                <p className="mb-0 ms-2">{insightsSettings.back_text}</p>
                                            </button>
                                        </div>
                                        <div className=" d-block d-sm-none">
                                            <button onClick={() => window.history.back()} className="back-button-border">
                                                <svg className="arrow-back" xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                                    <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex text-center justify-content-center">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h2 className="mb-0 service-title-page">{singleCase?.title}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1  d-sm-block d-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {
                singleCase && (
                    <div className="container single-study">
                        <div className="row" animate="left">
                            <div className="col-12">
                                <div dangerouslySetInnerHTML={{ __html: singleCase.small_text }} />

                                <div dangerouslySetInnerHTML={{ __html: singleCase.subtitle }} />
                            </div>
                        </div>
                        <div className="row pt-sm-4 pt-4" animate="right">
                            <h2 className="mb-4 title-inside-page">{singleCase.section_title}</h2>
                            <div className="col-lg-7 col-md-7 oder-lg-2 order-1">
                               
                            <div dangerouslySetInnerHTML={{ __html: singleCase.section_text }} />

                            <div dangerouslySetInnerHTML={{ __html: singleCase.last_text }} />
                            </div>

                            <div className="col-lg-5 col-md-5 oder-lg-1 order-2 pb-4">
                                <div className="ratio single-news">
                                    <img src={singleCase.image} alt="news" />
                                </div>
                            </div>
                        </div>
                        <div className="row pb-lg-5" animate="left">
                            <div className="col-12 pb-5">
                                {/* <p className="mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.</p> */}
                            </div>
                        </div>
                    </div>
                )
            }

        </Layout>
    )
}

export async function getStaticPaths() {
    let insights = await axios.get("/insights/case-studies");
    const paths = [];
    // Get the paths we want to pre-render based on posts

    insights.data.page_items.paginated_case_studies.data.forEach((insight) => {
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
    const insightsCaseStudiesSingleData = await axios.get("/insights/case-studies/" + slug);

    return {
        props: {
            insightsCaseStudiesSingleData: insightsCaseStudiesSingleData.data,
        },
    };
}