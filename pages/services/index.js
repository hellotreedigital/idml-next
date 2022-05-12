import { useContext, useEffect } from "react";
import Banner from "../../components/Banner";
import Layout from "../../components/layout";
import SideButton from "../../components/SideButton";
import BluePill from "../../components/BluePill";
import GlobalState from "../../GlobalState";
import SeoTags from "../../components/SeoTags";
import axios from "axios";
import Link from "next/link";

export default function Services(props) {

    const { triggerScroll, calcMinHeight } = useContext(GlobalState);
    const serviceSetting = props.servicesData.page_items.services_setting;
    const serviceCategories = props.servicesData.page_items.services_categories

    const menuItems = props.servicesData.fixed_titles;
    const productSetting = props.servicesData.product_settings;
    const socialMedia = props.servicesData.social_media;
    const footerLogos = props.servicesData.footer_logos;
    const footerContactIcons = props.servicesData.footer_contact_icons;
    const serviceTitles = props.servicesData.services_titles;
    const industriesTitles = props.servicesData.industries_titles;


    useEffect(() => {
        triggerScroll();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Layout activePage="services" productSetting={productSetting} menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>
            <SeoTags
                title={props.servicesData.page_items.seo.title}
                description={props.servicesData.page_items.seo.description}
                image={props.servicesData.page_items.seo.image}
            />
            {
                serviceSetting ?
                    <Banner
                        banner={serviceSetting.image}
                        title={serviceSetting.title}
                        video={serviceSetting.banner_video}
                    />
                    :
                    null
            }

            <SideButton
                title={menuItems['book-a-consultation']}
            />
            <div className="py-lg-5"></div>
            <div className="py-5">
                <div className="container py-lg-5 px-sm-2 px-4">
                    <div className="row justify-content-center pt-5">

                        {
                            serviceCategories ?
                                serviceCategories.map((serviceCategory, index) =>
                                    <div className="col-lg-3 col-md-6 col-sm-6 pb-5" animate="" key={index}>
                                        <Link href={"/services/" + serviceCategory.slug}>
                                            <a>
                                                <BluePill title={serviceCategory.title} icon={serviceCategory.icon} readMore={serviceSetting.read_more} />
                                            </a>
                                        </Link>
                                    </div>
                                )
                                :
                                null
                        }

                    </div>
                </div>
            </div>
            <div className="py-lg-5"></div>
        </Layout>
    )
}

export async function getStaticProps() {
    const servicesData = await axios.get("/services");
    return {
        props: {
            servicesData: servicesData.data,
        },
        revalidate: 10,
    };
}