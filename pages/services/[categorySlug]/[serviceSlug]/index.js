import Layout from "../../../components/Layout";
import { useEffect } from "react";
import Section from "../../../components/Section";
import SideButton from "../../../components/SideButton";
import axios from "axios";

export default function SingleService(props) {

    // useEffect(() => {
    //     window.triggerScroll();
    // }, []);

    return (
        <Layout fixedNav={true} activePage="services">
            <SideButton />
            <div className="pt-lg-5" animate="up">
                <div className="pt-5">
                    <div className="container pt-5" >
                        <div className="row align-items-center mb-4  pt-5">
                            <div className="col-xxl-auto col-lg-1 col-auto add-absolute">
                                <div className=" d-none d-sm-block">
                                    <button onClick={() => window.history.back()} className="button back-button d-flex align-items-center shadow">
                                        <svg className="arrow-back" xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                            <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                        </svg>
                                        <p className="mb-0 ms-2">BACK</p>
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
                                        <h2 className="mb-0 service-title-page">SUPPLY CHAIN</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1  d-sm-block d-none"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-5 single-service" animate="up">
                <div className="row align-items-center mb-5 mb-md-0">
                    <div className="col-lg-7 col-md-6 pb-lg-0 pt-3">
                        <p>Our dedicated team of professionals has the expertise to take any supply
                            chain project from implementing best practices to improving customer
                            service. We’ll come up with a customized solution for your company tailored
                            to your specific needs.</p>

                        <p>1-Optimization</p>
                        <p>2-3PL sourcing and setup</p>
                        <p>3- Product packaging optimization (or right-sizing to ensure
                            you don’t miss shipping categories)</p>

                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="col-lg-5 col-md-6">
                        <div className="ratio single-service-ratio">
                            <img src="/assets/temp-images/story1.jpg" alt="ceo" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="py-lg-5">
                    <Section
                        title="NEED HELP WITH YOUR BUSINESS?"
                        subtitle="Book your 15 mins free consultation now!"
                        label="CONTACT"
                        button="2"
                    />
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticPaths() {
    let services = await axios.get("/services");
    const paths = [];
    // Get the paths we want to pre-render based on posts

    services.data.page_items.services_categories.forEach((service) => {
        paths.push(
            {
                params: {
                    categorySlug: service.slug,
                    serviceSlug: service.slug
                }
            }
        );
    });
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}


export async function getStaticProps(context) {
    const { categorySlug, serviceSlug } = context.params;
    const serviceCategoryData = await axios.get("/services/" + categorySlug + serviceSlug);

    return {
        props: {
            serviceCategoryData: serviceCategoryData.data,
        },
    };
}