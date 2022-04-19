import { useContext, useEffect, useState } from "react";
import GlobalState from "../../../GlobalState";
import Layout from "../../../components/layout";
import SideButton from "../../../components/SideButton";
import axios from "axios";

export default function Industries(props) {

    const [popupOpen, setPopupOpen] = useState(null);
    const { triggerScroll } = useContext(GlobalState);

    const menuItems = props.industriesData.fixed_titles;
    const socialMedia = props.industriesData.social_media;
    const footerLogos = props.industriesData.footer_logos;
    const footerContactIcons = props.industriesData.footer_contact_icons;
    const serviceTitles = props.industriesData.services_titles;
    const industriesTitles = props.industriesData.industries_titles;


    const industriesSettings = props.industriesData.page_items.industries_setting;
    const singleIndustry = props.industriesData.page_items.single_industry;
    const clientsList = props.industriesData.page_items.single_industry.clients_list;

    function popupClick(product) {
        setPopupOpen(product);
    }

    useEffect(() => {
        triggerScroll();
    }, []);

    useEffect(() => {
        document.querySelector('body').style.overflow = popupOpen ? 'hidden' : null;
        document.querySelector('html').style.overflow = popupOpen ? 'hidden' : null;
    }, [popupOpen]);

    return (
        <Layout fixedNav={true} activePage="industries" menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>
            <SideButton
                title={menuItems['book-a-consultation']}
            />
            {
                singleIndustry ?
                    <>
                        <div className="pt-lg-5" animate="left">
                            <div className="pt-5">
                                <div className="container pt-5" >
                                    <div className="row align-items-center py-5">
                                        <div className="col-2">
                                            <div className="d-none d-sm-flex">
                                                <button onClick={() => window.history.back()} className="button back-button d-flex align-items-center shadow">
                                                    <svg className="arrow-back" xmlns="http://www.w3.org/2000/svg" width="8.136" height="12.964" viewBox="0 0 8.136 12.964">
                                                        <path className="arrow-stroke" id="Path_4297" data-name="Path 4297" d="M0,0,5.191,5.074,10,0" transform="matrix(-0.017, 1, -1, -0.017, 6.698, 1.527)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                                    </svg>
                                                    <p className="mb-0 ms-2">{industriesSettings?.back_button}</p>
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
                                                    <h2 className="mb-0 service-title-page">{singleIndustry.title}</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2"></div>

                                        <div className="col-12 pt-4 justify-content-center text-center services">
                                            <p>{singleIndustry.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container " animate="right">
                            <div className="row justify-content-center">
                                {
                                    singleIndustry?.products_list?.map((product, index) =>
                                        <div className="col-lg-2 col-md-4 col-sm-6 pb-5" key={index}>
                                            <div className="single-industry position-relative" onClick={() => popupClick(product)}>
                                                <div className="ratio industy-square">
                                                    <div className="square"></div>
                                                </div>
                                                <img className="industry-icon" src={product.full_path_icon} alt="icon" />
                                            </div>
                                            <div className="text-center pt-3">
                                                <h3 className="title-industry">{product.title}</h3>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        <div className="container py-lg-5 pt-5" animate="left">
                            <div className="row justify-content-center d-flex text-center mb-4">
                                <h2 className="mb-4">{industriesSettings.clients_title}</h2>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-11 ">
                                    <div className="row justify-content-center text-center">
                                        {
                                            clientsList ?
                                                clientsList.map((clientList, index) =>
                                                    <div className="col-lg-auto col-md-3  col-6 mb-5 mx-lg-3" key={index}>
                                                        <div>
                                                            <img className="brand-image-default" src={clientList.full_path_logo} alt="brand" />
                                                        </div>
                                                    </div>
                                                )
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container pb-5" animate="down">
                            <div className="row justify-content-center text-center py-5">
                                <div className="col-lg-10 disclaimer mx-lg-5 px-xxl-5">
                                    <p>{singleIndustry.last_text}</p>
                                </div>
                            </div>
                        </div>

                        <div className={" team-popup " + (popupOpen ? " " : " fade-out")}>
                            <div className=" team-member position-relative">
                                <div className="popup-team popup-single-industry">
                                    <div className="close-svg" onClick={() => setPopupOpen(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="37" viewBox="0 0 49 37">
                                            <g id="Group_3342" data-name="Group 3342" transform="translate(-1096 -228)">
                                                <path id="Rectangle_267" data-name="Rectangle 267" d="M0,0H12A37,37,0,0,1,49,37v0a0,0,0,0,1,0,0H27.75A27.75,27.75,0,0,1,0,9.25V0A0,0,0,0,1,0,0Z" transform="translate(1096 228)" fill="#14334a" />
                                                <g id="Group_3054" data-name="Group 3054" transform="translate(214.465 49.965)">
                                                    <line id="Line_8" data-name="Line 8" x2="9.07" y2="9.07" transform="translate(900.5 193.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2" />
                                                    <line id="Line_9" data-name="Line 9" x1="9.07" y2="9.07" transform="translate(900.5 193.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2" />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="row align-items-center p-5 p-sm-4">
                                        <div className="col-sm-4 mb-3 mb-sm-0">
                                            <div className="single-industry position-relative" onClick={popupClick}>
                                                <div className="ratio square-ratio">
                                                    <div className="square"></div>
                                                </div>
                                                <img className="industry-icon" src={popupOpen?.full_path_icon} alt="icon" />
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <h3 className="mb-3">{popupOpen?.title}</h3>
                                            <p className="mb-0">{popupOpen?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    null
            }
        </Layout >
    )
}

export async function getStaticPaths() {
    let industries = await axios.get("/industries");
    const paths = [];
    // Get the paths we want to pre-render based on posts

    industries.data.page_items.all_industries.forEach((industry) => {
        paths.push({
            params: { slug: industry.slug },
        });
    });
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}


export async function getStaticProps(context) {
    const { slug } = context.params;
    const industriesData = await axios.get("/industries/" + slug);

    return {
        props: {
            industriesData: industriesData.data,
        },
        revalidate: 10,
    };
}
