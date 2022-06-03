import Banner from "../components/Banner";
import Layout from "../components/layout";
import SideButton from "../components/SideButton";
import ProductSliderContent from "../components/ProductSliderContent";
import Link from "next/link";
import VerificationPopup from "../components/VerificationPopup";

import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, FreeMode, Navigation, Thumbs, Pagination } from 'swiper';
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/thumbs";


// import required modules

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import GlobalState from "../GlobalState";
import * as Scroll from 'react-scroll';
import SeoTags from "../components/SeoTags";

export default function Products(props) {

    SwiperCore.use([Autoplay])
    let scroll = Scroll.animateScroll;

    const { triggerScroll } = useContext(GlobalState);
    const productSetting = props.productsData.product_settings;
    const menuItems = props.productsData.fixed_titles;
    const favIcon = props.productsData.fav_icon_settings;
    const socialMedia = props.productsData.social_media;
    const footerLogos = props.productsData.footer_logos;
    const footerContactIcons = props.productsData.footer_contact_icons;
    const serviceTitles = props.productsData.services_titles;
    const industriesTitles = props.productsData.industries_titles;

    const productsSetting = props.productsData.page_items.products_setting;
    const productsCategories = props.productsData.page_items.products_categories;
    const [productsItems, setProductsItems] = useState(null)

    const [youtubePopup, setYoutubePopup] = useState(null);
    const [loading, setLoading] = useState(true);

    function logoClick(productCategory) {
        // setAgeVerificationPopup(null)
        setProductsItems(productCategory);
    }

    // function ageVerificationClick(productCategory) {
    //     let underAgePopupProducts = localStorage.getItem('underAgePopupProducts');
    //     if (!underAgePopupProducts) {
    //         setAgeVerificationPopup(productCategory)
    //         localStorage.setItem('underAgePopupProducts', 1);
    //     }
    //     else {
    //         setProductsItems(productCategory);
    //         setAgeVerificationPopup(null)
    //     }
    // }

    // function ageClose(productCategory) {
    //     localStorage.removeItem('underAgePopupProducts', 1);
    //     setAgeVerificationPopup(null)
    // }

    
  function scrollSection() {
    const element = document.getElementById("scroll-section2")
    scroll.scrollTo(element.offsetTop - 81)
  }

    useEffect(() => {
        console.log(productSetting.title)
    }, []);

    useEffect(() => {
        triggerScroll();
        setLoading(false)
        setProductsItems(productsCategories[0])
    }, [productsCategories]); // eslint-disable-line react-hooks/exhaustive-deps

    return loading ? null : (
        <Layout activePage="products" favIcon={favIcon} productSetting={productSetting} menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>
            <SeoTags
                title={props.productsData.page_items.seo.title}
                description={props.productsData.page_items.seo.description}
                image={props.productsData.page_items.seo.image}
            />


            {
                productsSetting ?
                    <Banner
                        video={productsSetting.banner_video}
                        title={productsSetting.title}
                        banner={productsSetting.image}
                    />
                    :
                    null
            }
            <SideButton
                title={menuItems['book-a-consultation']}
            />
            <div className="py-lg-3"></div>
            {
                productsCategories?.length > 0 ?
                    <>
                        <div className="container py-5" >
                            <div className="row justify-content-center">
                                <div className="col-lg-9 ">
                                    <Swiper className="mySwiper1 py-5"
                                        spaceBetween={2}
                                        autoplay={{ delay: 3000 }}
                                        loop={true}
                                        slidesPerView={3}
                                        breakpoints={{
                                            1199.98: {
                                                slidesPerView: 6,
                                            },

                                            991.98: {
                                                slidesPerView: 4,
                                            },

                                            // when window width is >= 767.98px
                                            767.98: {
                                                slidesPerView: 4,
                                            },

                                            575.98: {
                                                slidesPerView: 4,
                                                spaceBetween: 20
                                            },

                                        }}
                                    >
                                        {
                                            productsCategories?.map((productCategory, index) =>

                                                <SwiperSlide key={index} >
                                                    {
                                                        // productCategory.with_popup === 1 ?
                                                        //     <div className="text-center px-3" onClick={() => ageVerificationClick(productCategory)}>
                                                        //         <div className={"ratio ratio-1x1 category-circle" + (productCategory === productsItems ? " active" : " ")}>
                                                        //             <img className="brand-image" src={productCategory.logo} alt="brand" />
                                                        //         </div>
                                                        //     </div>
                                                        //     :
                                                            <div className="text-center px-3" onClick={() => logoClick(productCategory)}>
                                                                <div onClick={scrollSection} className={"ratio ratio-1x1 category-circle" + (productCategory === productsItems ? " active" : " ")}>
                                                                    <img className="brand-image" src={productCategory.logo} alt="brand" />
                                                                </div>
                                                            </div>
                                                    }
                                                </SwiperSlide>

                                            )
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>

                        {
                            productsItems && (
                                productsItems.products?.length < 0 ? null :
                                    <div className=" position-relative" id="scroll-section2">
                                        <div className="">
                                            <div className="d-flex justify-content-end">
                                                <div className="swiper-button-prev">
                                                    <img src="../img/images/prev-arrow.svg" alt="prev" />
                                                </div>
                                                <div className="swiper-button-next ">
                                                    <img src="../img/images/next-arrow.svg" alt="next" />
                                                </div>
                                            </div>
                                            <Swiper
                                                modules={[Navigation]}
                                                navigation={{
                                                    nextEl: '.swiper-button-next',
                                                    prevEl: '.swiper-button-prev'
                                                }}
                                                className="products-swiper"
                                            >
                                                {
                                                    productsItems?.products?.map((product, index) =>
                                                        <SwiperSlide key={`product-items-${index}`}>
                                                            <ProductSliderContent product={product} youtubeClick={() => setYoutubePopup(product)} />
                                                        </SwiperSlide>
                                                    )
                                                }
                                            </Swiper>
                                        </div>
                                    </div>
                            )
                        }
                        {
                            productsItems?.description ?
                                <div className="container py-lg-5">
                                    <div className="row justify-content-center text-center py-5">
                                        <div className="col-lg-10 disclaimer mx-lg-5 px-xxl-5">
                                            <p>{productsItems?.description}</p>
                                        </div>
                                    </div>
                                </div>
                                :
                                null
                        }

                        <div className="py-lg-3"></div>

                        {
                            youtubePopup && (
                                <div className={"youtube-popup" + (youtubePopup ? " " : " fade-out")}>
                                    <div className="modal-window position-relative">
                                        <div className="cancel-button stop-video" onClick={() => setYoutubePopup(null)}>
                                            <img src="../img/images/x-button.svg" alt="" />
                                        </div>
                                        <iframe className="youtube-borders mw-100" width="900" height="500" src={youtubePopup.product_video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            )
                        }
                    </>
                    :
                    null
            }

           
        </Layout >
    )
}

export async function getStaticProps() {
    const productsData = await axios.get("/products");
    return {
        props: {
            productsData: productsData.data,
        },
        revalidate: 10,
    };
}