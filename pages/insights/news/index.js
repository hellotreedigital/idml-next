import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import GlobalState from "../../../GlobalState";
import Layout from "../../../components/layout";
import NewsSection from "../../../components/NewsSection";
import SideButton from "../../../components/SideButton";

export default function News(props) {

    const [loading, setLoading] = useState(true);
    const { triggerScroll } = useContext(GlobalState);

    const menuItems = props.insightsNewsData.fixed_titles;
    const socialMedia = props.insightsNewsData.social_media;
    const footerLogos = props.insightsNewsData.footer_logos;
    const footerContactIcons = props.insightsNewsData.footer_contact_icons;
    const serviceTitles = props.insightsNewsData.services_titles;
    const industriesTitles = props.insightsNewsData.industries_titles;

    const insightsSettings = props.insightsNewsData.page_items.insights_settings;
    const paginatedNews = props.insightsNewsData.page_items.paginated_news;

    const [news, setNews] = useState({});

    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState([]);
    const [oldPage, setOldPage] = useState(1);

    useEffect(() => {
        triggerScroll();
        setLoading(false);
    }, [loading]);

    useEffect(() => {
        let dbPage = page === oldPage ? 1 : page;
        axios.get('/insights/news?page=' + dbPage).then(res => {
            setNews(res.data.page_items.paginated_news.data);
            setPage(res.data.page_items.paginated_news.current_page);
            setOldPage(res.data.page_items.paginated_news.current_page);
            var foo = [];
            for (var i = 0; i < res.data.page_items.paginated_news.last_page; i++) {
                foo.push(i + 1);
            }
            setMaxPages(foo);
            // console.log(foo);
        });
    }, [page]);

    useEffect(() => {
        triggerScroll();
        setLoading(false);
    }, [loading]);

    return loading ? null : (
        <Layout activePage="insights" fixedNav={true} menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>
            <SideButton
                title={menuItems['book-a-consultation']}
            />
            {
                insightsSettings ?
                    <div className="pt-lg-5">
                        <div className="pt-5">
                            <div className="container pt-5" >
                                <div className="row  align-items-center mb-4 pt-5">
                                    <div className="col-2">
                                        <div className=" d-none d-sm-flex">

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
                                                <h2 className="mb-0 service-title-page">{insightsSettings.news_title}</h2>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-2">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null

            }

            {
                paginatedNews ?
                    <div className="container pt-lg-5"  >

                        <div className="row justify-content-center gx-5">
                            {
                                news?.length > 0 ?
                                    news.map((paginatedNew, index) => (
                                        <div className="col-lg-4 col-md-6 col-sm-6 pb-5" key={index}>
                                            <Link href={"/insights/news/" + paginatedNew.slug}>
                                                <a>
                                                    <NewsSection
                                                        title={paginatedNew.title}
                                                        date={paginatedNew.date_formatted}
                                                        image={paginatedNew.first_image}
                                                        description={paginatedNew.small_description}
                                                        button={insightsSettings?.read_more}
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    ))
                                    :
                                    null
                            }
                        </div>
                    </div>
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

        </Layout >
    )
}

export async function getStaticProps(context) {
    const insightsNewsData = await axios.get("/insights/news/");

    return {
        props: {
            insightsNewsData: insightsNewsData.data,
        },
        revalidate: 10,
    };
}