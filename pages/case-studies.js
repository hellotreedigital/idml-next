import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import NewsSection from "./components/NewsSection";
import SideButton from "./components/SideButton";

export default function CaseStudies() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return loading ? null : (
        <Layout activePage="insights" fixedNav={true} >
            <SideButton />
            <div className="pt-lg-5">
                <div className="pt-5">
                    <div className="container pt-5" animate="up">
                        <div className="row align-items-center mb-4 pt-5">
                            <div className="col-xxl-auto col-lg-1 col-auto">
                                <div className=" d-none d-sm-block">
                                    <a href="/insights">
                                        <div className="button back-button d-flex align-items-center shadow">
                                            <svg className="arrow-back me-3" xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                                <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                            </svg>
                                            <p className="mb-0">BACK</p>
                                        </div>
                                    </a>
                                </div>
                                <div className=" d-block d-sm-none">
                                    <button className="back-button-border">
                                        <a href="/insights">
                                            <svg className="arrow-back" xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                                <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                            </svg>
                                        </a>
                                    </button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="d-flex text-center justify-content-center">
                                    <a href="/insights">
                                        <div className="d-flex align-items-center ">
                                            <h2 className="mb-0 service-title-page">CASE STUDIES</h2>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-1  d-sm-block d-none"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt-lg-5" animate="left">
                <div className="row justify-content-center text-center ">
                </div>
                <div className="row justify-content-center gx-5">
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-5">
                        <a href={"/case-studies/" + 1}>
                            <NewsSection
                                title="TITLE HERE"
                            />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-5">
                        <a href={"/case-studies/" + 1}>
                            <NewsSection
                                title="TITLE HERE"
                            />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-5">
                        <a href={"/case-studies/" + 1}>
                            <NewsSection
                                title="TITLE HERE"
                            />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-5">
                        <a href={"/case-studies/" + 1}>
                            <NewsSection
                                title="TITLE HERE"
                            />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-5">
                        <a href={"/case-studies/" + 1}>
                            <NewsSection
                                title="TITLE HERE"
                            />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 pb-5">
                        <a href={"/case-studies/" + 1}>
                            <NewsSection
                                title="TITLE HERE"
                            />
                        </a>
                    </div>
                    <div className=" text-center align-items-center justify-content-center d-flex pb-5">
                        {/* <button className="button pagination-arrow mx-2">
                            <img className="my-2" src="/assets/images/prev.svg" alt="news" />
                        </button> */}
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
                            <img className="my-2" src="/assets/images/next.svg" alt="news" />
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}