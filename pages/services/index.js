import { useContext, useEffect } from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import SideButton from "../components/SideButton";
import BluePill from "../components/BluePill";
import GlobalState from "../components/GlobalState";
import axios from "axios";
import Link from "next/link";

export default function Services(props) {

    const { triggerScroll, calcMinHeight } = useContext(GlobalState);
    const serviceSetting = props.servicesData.page_items.services_setting;
    const serviceCategories = props.servicesData.page_items.services_categories

    const menuItems = props.servicesData.fixed_titles;
    const socialMedia = props.servicesData.social_media;
    const footerLogos = props.servicesData.footer_logos;
    const footerContactIcons = props.servicesData.footer_contact_icons;
    const serviceTitles = props.servicesData.services_titles;
    const industriesTitles = props.servicesData.industries_titles;
    

    useEffect(() => {
        triggerScroll();
        calcMinHeight();
    }, []);

    return (
        <Layout activePage="services" menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles}  industriesTitles={industriesTitles}>
            {
                serviceSetting ?
                    <Banner
                        banner={serviceSetting.image}
                        title={serviceSetting.title}
                    />
                    :
                    null
            }

            <SideButton />
            <div className="py-lg-5"></div>
            <div className="py-5">
                <div className="container py-lg-5">
                    <div className="row justify-content-center pt-5">

                        {
                            serviceCategories ?
                                serviceCategories.map((serviceCategory, index) =>
                                    <div className="col-lg-3 col-md-6 col-sm-6 pb-5" animate="left" key={index}>
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
    };
}