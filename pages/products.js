import Banner from "../components/Banner";
import Layout from "../components/layout";
import SideButton from "../components/SideButton";
import Link from "next/link";

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
import SeoTags from "../components/SeoTags";

export default function Products(props) {

    SwiperCore.use([Autoplay])

    const { triggerScroll } = useContext(GlobalState);

    const menuItems = props.productsData.fixed_titles;
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

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [swiper, setSwiper] = useState();
    const swiperRef = useRef();

    function logoClick(productCategory) {
        setProductsItems(productCategory);
    }

    useEffect(() => {
        triggerScroll();
        setLoading(false)
        setProductsItems(productsCategories[0])
    }, [productsCategories]);

    return loading ? null : (
        <Layout activePage="products" menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>

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
                                        spaceBetween={0}
                                        autoplay={{ delay: 3000 }}
                                        loop={true}
                                        centeredSlides={true}
                                        slidesPerView={6}
                                    >
                                        {
                                            productsCategories?.map((productCategory, index) =>
                                                <SwiperSlide key={index} >
                                                    <div className="text-center px-3" onClick={() => logoClick(productCategory)}>
                                                        <div className={"ratio ratio-1x1 category-circle" + (productCategory === productsItems ? " active" : " ")}>
                                                            <img className="brand-image" src={productCategory.logo} alt="brand" />
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>

                        {
                            productsItems && (
                                productsItems.products.length < 0 ? null :
                                    <div className=" position-relative">
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
                                                            <div className={(product.product_images.length === 0 ? "row justify-content-center d-flex" : "row align-items-center d-flex")} >
                                                                {
                                                                    product.product_images.length === 0 ? null :
                                                                        <div className="col-lg-5 ">
                                                                            <div className="product-bg position-relative py-5">
                                                                                <div className="row">
                                                                                    <div className="col-lg-5"></div>
                                                                                    <div className="col-lg-6">
                                                                                        <div className="pagination-thumbs">
                                                                                            <Swiper
                                                                                                loop={true}
                                                                                                spaceBetween={10}
                                                                                                navigation={false}
                                                                                                modules={[Navigation, Pagination]}
                                                                                                pagination={{
                                                                                                    clickable: true,
                                                                                                    clickableClass: 'custom-swiper-pagination-bullet',
                                                                                                    renderBullet: function (index, className) {
                                                                                                        return `<div class="d-flex justify-content-center ${className} w-auto h-auto mb-2"><div style="color: ${product.product_images[index].color}; background-color: ${product.product_images[index].color}; width: 30px; height: 30px; borderRadius: 6px;"></div></div>`;
                                                                                                    }
                                                                                                }}
                                                                                                className="mySwiper2 pe-lg-2"
                                                                                                ref={swiperRef}
                                                                                            >
                                                                                                {
                                                                                                    product?.product_images?.map((imageProduct, x) =>
                                                                                                        <SwiperSlide key={`product-images-${x}`}>
                                                                                                            <div className="ratio product-ratio">
                                                                                                                <img className="pb-4" src={imageProduct.image} alt="product" />
                                                                                                            </div>
                                                                                                        </SwiperSlide>
                                                                                                    )
                                                                                                }
                                                                                            </Swiper>
                                                                                            {/* <div className="custom-pagination-thumbs">
                                                                                                {
                                                                                                    product?.product_images?.map((imageProduct, x) =>
                                                                                                        <div className="
                                                                                                        d-flex justify-content-center swiper-pagination-bullet w-auto h-auto
                                                                                                        custom-swiper-pagination-bullet
                                                                                                        ">
                                                                                                            <div style={{ color: imageProduct.color, backgroundColor: imageProduct.color, width: 30, height: 30, borderRadius: 6 }}></div>
                                                                                                        </div>
                                                                                                    )
                                                                                                }
                                                                                            </div> */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                }
                                                                <div className={(product.product_images.length === 0) ? "col-9 pt-lg-0 pt-5  justify-content-lg-start justify-content-center text-lg-start text-center" : "col-lg-6 pt-lg-0 pt-5  justify-content-lg-start justify-content-center text-lg-start text-center"}>
                                                                    <div className={(product.product_images.length === 0) ? "row product justify-content-md-center text-center" : "row product justify-content-lg-start justify-content-md-center"}>
                                                                        <div className={((product.product_images.length === 0) ? " col-12" : "col-lg-9 col-md-9 ")}>
                                                                            <div className="ms-lg-5 ms-2">
                                                                                <div className="pb-5 ">
                                                                                    <div className="logo-product">
                                                                                        <img src={product.logo} alt="brand" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex justify-content-lg-start justify-content-center mb-5">
                                                                                    {
                                                                                        product.website_url ?
                                                                                            < div className="me-3">
                                                                                                <a href={product.website_url} target="_blank" rel="noreferrer">
                                                                                                    <button className="button blue-button visit-mobile">{product.website_button}</button>
                                                                                                </a>
                                                                                            </div>
                                                                                            :
                                                                                            null
                                                                                    }
                                                                                    {
                                                                                        product.product_button ?
                                                                                            <button className="button youtube-button" onClick={() => setYoutubePopup(product)}>{product.product_button}</button>
                                                                                            :
                                                                                            null
                                                                                    }
                                                                                </div>
                                                                                <p className={(product.product_images.length === 0) ? "mx-lg-5 mx-3" : "mx-lg-0 mx-1"}>{product.description}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
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