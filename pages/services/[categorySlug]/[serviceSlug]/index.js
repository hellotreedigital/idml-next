import Layout from "../../../components/layout";
import { useContext, useEffect } from "react";
import Section from "../../../components/Section";
import SideButton from "../../../components/SideButton";
import axios from "axios";
import GlobalState from "../../../components/GlobalState";

export default function SingleService(props) {

    const { triggerScroll, calcMinHeight } = useContext(GlobalState);

    const menuItems = props.serviceCategoryData.fixed_titles;
    const socialMedia = props.serviceCategoryData.social_media;
    const footerLogos = props.serviceCategoryData.footer_logos;
    const footerContactIcons = props.serviceCategoryData.footer_contact_icons;
    const serviceTitles = props.serviceCategoryData.services_titles;

    const serviceSettings = props.serviceCategoryData.page_items.services_setting;
    const singleServiceItems = props.serviceCategoryData.page_items.single_service;
    const serviceContact = props.serviceCategoryData.page_items.contact_settings;
    const industriesTitles = props.serviceCategoryData.industries_titles;

    useEffect(() => {
        calcMinHeight();
        triggerScroll();
    }, []);

    return (
        <Layout fixedNav={true} activePage="services" menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles}  industriesTitles={industriesTitles}>
            <SideButton />
            {
                singleServiceItems ?
                    <>
                        <div className="pt-lg-5" animate="up">
                            <div className="pt-5">
                                <div className="container pt-5" >
                                    <div className="row align-items-center mb-4  pt-5">
                                        <div className="col-xxl-auto col-lg-1 col-auto add-absolute">
                                            {
                                                serviceSettings ?
                                                    <div className=" d-none d-sm-block">
                                                        <button onClick={() => window.history.back()} className="button back-button d-flex align-items-center shadow">
                                                            <svg className="arrow-back" xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                                                <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                                            </svg>
                                                            <p className="mb-0 ms-2">{serviceSettings.back_button}</p>
                                                        </button>
                                                    </div>
                                                    :
                                                    null
                                            }
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
                                                    <h2 className="mb-0 service-title-page">{singleServiceItems.title}</h2>
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
                                    <p>{singleServiceItems.small_description}</p>
                                    <div dangerouslySetInnerHTML={{ __html: singleServiceItems.full_description }} />
                                </div>

                                <div className="col-lg-5 col-md-6">
                                    <div className="ratio single-service-ratio">
                                        <img src={singleServiceItems.image} alt="ceo" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="py-lg-5">
                                <Section
                                    title={serviceContact.contact_component_title}
                                    subtitle={serviceContact.contact_component_text}
                                    label={serviceContact.contact_component_button}
                                    button="2"
                                />
                            </div>
                        </div>
                    </>
                    :
                    null
            }
        </Layout>
    )
}


export async function getStaticPaths() {
    let services = await axios.get("/services");
    const paths = [];
    // Get the paths we want to pre-render based on posts

    services.data.page_items.services_categories.forEach((service) => {
        service.services.forEach((singleService) => {
            paths.push(
                {
                    params: {
                        categorySlug: service.slug,
                        serviceSlug: singleService.slug
                    }
                }
            );
        });
    });
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}


export async function getStaticProps(context) {
    const { categorySlug, serviceSlug } = context.params;
    const serviceCategoryData = await axios.get("/services/" + categorySlug + "/" + serviceSlug);
    console.log(serviceCategoryData)

    return {
        props: {
            serviceCategoryData: serviceCategoryData.data,
        },
    };
}