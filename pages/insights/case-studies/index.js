import { useContext, useEffect, useState } from "react";
import Layout from "../../../components/layout";
import NewsSection from "../../../components/NewsSection";
import SideButton from "../../../components/SideButton";
import axios from "axios";
import Link from "next/link";
import GlobalState from "../../../GlobalState";
import SeoTags from "../../../components/SeoTags";

export default function CaseStudies(props) {

    const { triggerScroll } = useContext(GlobalState);
    const [loading, setLoading] = useState(true);

    const menuItems = props.insightsCaseStudiesData.fixed_titles;
    const socialMedia = props.insightsCaseStudiesData.social_media;
    const footerLogos = props.insightsCaseStudiesData.footer_logos;
    const footerContactIcons = props.insightsCaseStudiesData.footer_contact_icons;
    const serviceTitles = props.insightsCaseStudiesData.services_titles;
    const industriesTitles = props.insightsCaseStudiesData.industries_titles;

    const insightsSettings = props.insightsCaseStudiesData.page_items.insights_settings;
    const paginatedInsights = props.insightsCaseStudiesData.page_items.paginated_case_studies;

    const [caseStudies, setCaseStudies] = useState({});

    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState([]);
    const [oldPage, setOldPage] = useState(1);

    useEffect(() => {
        triggerScroll();
        setLoading(false);
    }, [loading]);

    useEffect(() => {
        let dbPage = page === oldPage ? 1 : page;
        axios.get('/insights/case-studies?page=' + dbPage).then(res => {
            setCaseStudies(res.data.page_items.paginated_case_studies.data);
            setPage(res.data.page_items.paginated_case_studies.current_page);
            setOldPage(res.data.page_items.paginated_case_studies.current_page);
            var foo = [];
            for (var i = 0; i < res.data.page_items.paginated_case_studies.last_page; i++) {
                foo.push(i + 1);
            }
            setMaxPages(foo);
            console.log(foo);
        });


    }, [page]);


    return loading ? null : (
        <Layout activePage="insights" fixedNav={true} menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>

            <SeoTags
                title={props.insightsCaseStudiesData.page_items.seo.title}
                description={props.insightsCaseStudiesData.page_items.seo.description}
                image={props.insightsCaseStudiesData.page_items.seo.image}
            />

            <SideButton
                title={menuItems['book-a-consultation']}
            />

            {
                insightsSettings && (
                    <div className="pt-lg-5">
                        <div className="pt-5">
                            <div className="container pt-5" >
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
                                                    <h2 className="mb-0 service-title-page">{insightsSettings.case_studies_title}</h2>
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
                paginatedInsights && (
                    <div className="container pt-lg-5"  >
                        <div className="row justify-content-center text-center ">
                        </div>
                        <div className="row justify-content-center gx-5">
                            {
                                caseStudies?.length > 0 ?
                                    caseStudies?.map((paginatedInsight, index) =>
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
                                    :
                                    null
                            }

                            {
                                maxPages.length > 0 ?
                                    <div className=" text-center align-items-center justify-content-center d-flex pb-5">
                                        {
                                            page > 1 ?
                                                <button onClick={() => setPage(page - 1)} className="button pagination-arrow mx-1">
                                                    <img className="my-2" src="../img/images/prev.svg" alt="news" />
                                                </button>
                                                :
                                                null
                                        }

                                        {
                                            maxPages.map((page, index) => (
                                                <div className="mx-1" key={index}>
                                                    <button className={"button pagination-number " + ((index + 1) === page ? 'mb-0 active' : 'mb-0')} key={index} onClick={() => setPage(index + 1)}>{(index + 1)}</button>
                                                </div>
                                            ))
                                        }
                                        {
                                            page < maxPages?.length ?
                                                <button onClick={() => setPage(page + 1)} className="button pagination-arrow mx-1">
                                                    <img className="my-2" src="../img/images/next.svg" alt="news" />
                                                </button>
                                                :
                                                null
                                        }

                                    </div>
                                    :
                                    null
                            }

                            {/* {
                                maxPages.length > 0 ?
                                    <div className="pagination d-flex justify-content-center align-items-center pt-5">
                                        {
                                            page > 1 ?
                                                <div>
                                                    <img onClick={() => setPage(page - 1)} className="pagination-arrow rotate-180 ms-2" src="/assets/images/pagination-arrow.svg" alt="arrow" />
                                                </div>
                                                :
                                                null
                                        }
                                        {
                                            maxPages.map((singlePage, index) => (
                                                <p className={(index + 1) === page ? 'ms-2 mb-0 active-pagination' : 'ms-2 mb-0'} key={index} onClick={() => setPage(index + 1)}>{(index + 1)}</p>
                                            ))
                                        }
                                        {
                                            page < maxPages?.length ?
                                                <div>
                                                    <img onClick={() => setPage(page + 1)} className="pagination-arrow ms-2" src="/assets/images/pagination-arrow.svg" alt="arrow" />
                                                </div>
                                                :
                                                null
                                        }
                                    </div>
                                    :
                                    null
                            } */}
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
        revalidate: 10,
    };
}