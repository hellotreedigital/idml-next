import Layout from "../../../../components/layout";
import { useContext, useEffect, useState } from "react";
import Section from "../../../../components/Section";
import SideButton from "../../../../components/SideButton";
import axios from "axios";
import GlobalState from "../../../../GlobalState";
import SeoTags from "../../../../components/SeoTags";

export default function SingleService(props) {

    const { triggerScroll } = useContext(GlobalState);

    const menuItems = props.serviceCategoryData.fixed_titles;
    const socialMedia = props.serviceCategoryData.social_media;
    const footerLogos = props.serviceCategoryData.footer_logos;
    const footerContactIcons = props.serviceCategoryData.footer_contact_icons;
    const serviceTitles = props.serviceCategoryData.services_titles;
    const productSetting = props.serviceCategoryData.product_settings;
    const favIcon = props.serviceCategoryData.fav_icon_settings;

    const serviceSettings = props.serviceCategoryData.page_items.services_setting;
    const singleServiceItems = props.serviceCategoryData.page_items.single_service;
    const serviceContact = props.serviceCategoryData.page_items.contact_settings;
    const industriesTitles = props.serviceCategoryData.industries_titles;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        triggerScroll();
    }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Layout favIcon={favIcon} fixedNav={true} productSetting={productSetting} activePage="services" menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>

            <SeoTags
                title={props.serviceCategoryData.page_items.single_service.seo_title}
                description={props.serviceCategoryData.page_items.single_service.seo_description}
                image={props.serviceCategoryData.page_items.single_service.seo_image}
            />

            <SideButton
                title={menuItems['book-a-consultation']}
            />
            {
                singleServiceItems ?
                    <>
                        <div className="pt-lg-5" >
                            <div className="pt-5">
                                <div className="container pt-5 px-sm-2 px-4" >
                                    <div className="row align-items-center mb-4  pt-5">
                                        {loading ? null :
                                            <>
                                                <div className="col-xxl-auto col-lg-1 col-auto add-absolute">
                                                    {
                                                        serviceSettings ?
                                                            <div className=" d-none d-sm-block">
                                                                {
                                                                    window.history.length > 2 ?
                                                                        <button onClick={() => window.history.back()} className="button back-button d-flex align-items-center shadow cursor-opposite">
                                                                            <svg className="arrow-back" xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                                                                <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                                                            </svg>
                                                                            <p className="mb-0 ms-3">{serviceSettings.back_button}</p>
                                                                        </button>
                                                                        :
                                                                        null
                                                                }
                                                            </div>
                                                            :
                                                            null
                                                    }
                                                    <div className=" d-block d-sm-none">
                                                        {
                                                            window.history.length > 2 ?
                                                                <button onClick={() => window.history.back()} className="back-button-border cursor-opposite">
                                                                    <svg className="arrow-back" xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                                                        <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                                                    </svg>
                                                                </button>
                                                                :
                                                                null
                                                        }
                                                    </div>
                                                </div>
                                            </>
                                        }

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

                        <div className="container pb-5 single-service px-sm-2 px-4" >
                            <div className="row align-items-center mb-5 mb-md-0">
                                <div className="col-lg-7 col-md-6 pb-lg-0 pt-3">
                                    <p>{singleServiceItems.small_description}</p>
                                    <div dangerouslySetInnerHTML={{ __html: singleServiceItems.full_description }} />
                                </div>

                                <div className="col-lg-5 col-md-6" animate="">
                                    <div className="ratio single-service-ratio cursor-opposite">
                                        <img src={singleServiceItems.image} alt={singleServiceItems.title} title={singleServiceItems.title} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="" animate="">
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
    // {fallback: false } means other routes should 404.
    return { paths, fallback: false };
}


export async function getStaticProps(context) {
    const { categorySlug, serviceSlug } = context.params;
    const serviceCategoryData = await axios.get("/services/" + categorySlug + "/" + serviceSlug);

    return {
        props: {
            serviceCategoryData: serviceCategoryData.data,
        },
        revalidate: 10,
    };
}