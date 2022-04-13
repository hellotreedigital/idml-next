import Layout from "../../components/layout";
import SideButton from "../../components/SideButton";
import { useContext, useEffect } from "react";
import axios from "axios";
import GlobalState from "../../components/GlobalState";

export default function Services(props) {

    const { triggerScroll, calcMinHeight } = useContext(GlobalState);

    const categorySettings = props.serviceCategoryData.page_items.services_setting;
    const categories = props.serviceCategoryData.page_items.single_category.services;
    const singleCat = props.serviceCategoryData.page_items.single_category;
    const serviceTitles = props.serviceCategoryData.services_titles;

    const menuItems = props.serviceCategoryData.fixed_titles;
    const socialMedia = props.serviceCategoryData.social_media;
    const footerLogos = props.serviceCategoryData.footer_logos;
    const footerContactIcons = props.serviceCategoryData.footer_contact_icons;
    const industriesTitles = props.serviceCategoryData.industries_titles;

    useEffect(() => {
        triggerScroll();
        calcMinHeight();
    }, [categorySettings]);

    return (
        <div>
            <Layout fixedNav={true} activePage="services" menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles}  industriesTitles={industriesTitles}>
                <SideButton />
                {
                    categorySettings ?
                        <div className="min-height-js pt-lg-5" animate="up">
                            <div className="pt-5">
                                <div className="container pt-5" >
                                    <div className="row align-items-center py-5">
                                        <div className="col-xxl-auto col-lg-1 col-auto">
                                            <div className=" d-none d-sm-flex">
                                                <a href="/service-categories">
                                                    <div className="button back-button d-flex align-items-center shadow">
                                                        <svg className="arrow-back" xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                                            <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                                        </svg>
                                                        <p className="mb-0 ms-2">{categorySettings.back_button}</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="d-block d-sm-none">
                                                <button className="back-button-border">
                                                    <a href="/service-categories">
                                                        <svg className="arrow-back " xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                                            <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                                        </svg>
                                                    </a>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col">
                                            <div className="d-flex text-center justify-content-center">
                                                <a href="/service-categories">
                                                    <div className="d-flex align-items-center">
                                                        <h2 className="mb-0 service-title-page">{singleCat?.title}</h2>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-auto col-lg-1 col-auto"></div>

                                        <div className="col-12 pt-4 justify-content-center text-center services">
                                            <p>{singleCat?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container " >
                                <div className="row pb-lg-5 justify-content-center">
                                    {
                                        categories ?
                                            categories.map(category =>
                                                <div className="col-lg-4 col-md-6 col-sm-6 pb-5">
                                                    <a href={"/services/" + singleCat?.slug + "/" + category.slug}>
                                                        <div className="service-section shadow position-relative">
                                                            <div className="ratio team-ratio">
                                                                <img src="../img/temp-images/story1.jpg" alt="ceo" />
                                                            </div>
                                                            <div className="service-title py-lg-3 py-2">
                                                                <h4 className="my-4">{category.title}</h4>
                                                                {/* <h5>Founder & CEO</h5> */}
                                                            </div>
                                                            <div className="service-on-hover">
                                                                <div className="service-content">
                                                                    <h4 className="mb-4">{category.title}</h4>
                                                                    <h5 className="mb-3">{category.small_description}</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                            :
                                            null
                                    }
                                </div>
                            </div>
                        </div>
                        :
                        null
                }

            </Layout >
        </div>
    )
}

export async function getStaticPaths() {
    let services = await axios.get("/services");
    const paths = [];
    // Get the paths we want to pre-render based on posts

    services.data.page_items.services_categories.forEach((service) => {
        paths.push({
            params: { categorySlug: service.slug },
        });
    });
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}


export async function getStaticProps(context) {
    const { categorySlug } = context.params;
    const serviceCategoryData = await axios.get("/services/" + categorySlug);
    console.log(serviceCategoryData)

    return {
        props: {
            serviceCategoryData: serviceCategoryData.data,
        },
    };
}