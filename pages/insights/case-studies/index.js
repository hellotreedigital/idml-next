import { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import NewsSection from "../../components/NewsSection";
import SideButton from "../../components/SideButton";
import axios from "axios";
import Link from "next/link";
import GlobalState from "../../components/GlobalState";

export default function CaseStudies(props) {

    const { triggerScroll } = useContext(GlobalState);
    const [loading, setLoading] = useState(true);

    const menuItems = props.insightsCaseStudiesData.fixed_titles;
    const socialMedia = props.insightsCaseStudiesData.social_media;
    const footerLogos = props.insightsCaseStudiesData.footer_logos;
    const footerContactIcons = props.insightsCaseStudiesData.footer_contact_icons;
    const serviceTitles = props.insightsCaseStudiesSingleData.services_titles;
    const industriesTitles = props.insightsCaseStudiesSingleData.industries_titles;

    const insightsSettings = props.insightsCaseStudiesData.page_items.insights_settings;
    const paginatedInsights = props.insightsCaseStudiesData.page_items.paginated_case_studies;

    useEffect(() => {
        triggerScroll();
        setLoading(false);
    }, [loading]);
    

    return loading ? null : (
        <Layout activePage="insights" fixedNav={true} menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons}  serviceTitles={serviceTitles} industriesTitles={industriesTitles}>
            <SideButton />

            {
                insightsSettings && (
                    <div className="pt-lg-5">
                        <div className="pt-5">
                            <div className="container pt-5" animate="up">
                                <div className="row align-items-center mb-4 pt-5">
                                    <div className="col-xxl-auto col-lg-1 col-auto">
                                        <div className=" d-none d-sm-block">
                                            <button onClick={() => window.history.back()} className="button back-button d-flex align-items-center shadow">
                                                <svg className="arrow-back me-3" xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                                    <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                                </svg>
                                                <p className="mb-0">{insightsSettings.back_text}</p>
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
                                            <div className="d-flex align-items-center ">
                                                <h2 className="mb-0 service-title-page">{insightsSettings.case_studies_title}</h2>
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
                paginatedInsights && (
                    <div className="container pt-lg-5" animate="left">
                        <div className="row justify-content-center text-center ">
                        </div>
                        <div className="row justify-content-center gx-5">
                            {
                                paginatedInsights.data.map((paginatedInsight, index) =>
                                    <div className="col-lg-4 col-md-6 col-sm-6 pb-5" key={index}>
                                        <Link href={"/insights/case-studies/" + paginatedInsight.slug}>
                                            <a>
                                                <NewsSection
                                                    title={paginatedInsight.title}
                                                    image={paginatedInsight.image}
                                                    description={paginatedInsight.small_text}
                                                    button={insightsSettings?.read_more}
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                )
                            }

                            <div className=" text-center align-items-center justify-content-center d-flex pb-5">
                                <button className="button pagination-number active mx-1">
                                    1
                                </button>
                                <button className="button pagination-number mx-1">
                                    2
                                </button>
                                <button className="button pagination-number mx-1">
                                    3
                                </button>
                                <button className="button pagination-arrow mx-1">
                                    <img className="my-2" src="../img/images/next.svg" alt="news" />
                                </button>
                            </div>

                        </div>
                    </div>
                )
            }
        </Layout>
    )
}

export async function getStaticProps(context) {
    const insightsCaseStudiesData = await axios.get("/insights/case-studies/");

    return {
        props: {
            insightsCaseStudiesData: insightsCaseStudiesData.data,
        },
    };
}