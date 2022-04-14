import Banner from "./components/Banner";
import Layout from "./components/layout";
import SideButton from "./components/SideButton";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import GlobalState from "./components/GlobalState";

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
            {
                productsSetting ?
                    <Banner
                        video={productsSetting.banner_video}
                        title={productsSetting.title}
                    />
                    :
                    null
            }
            <SideButton />
            <div className="py-lg-3"></div>
            {
                productsCategories ?
                    <>
                        <div className="container py-5" animate="left">
                            <div className="row justify-content-center">
                                <div className="col-lg-9 ">
                                    <Swiper className="mySwiper py-5"
                                        spaceBetween={0}
                                        autoplay={{ delay: 3000 }}
                                        loop={true}
                                        slidesPerView={3}
                                        centeredSlides={true}
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
                                            },

                                        }}
                                    >
                                        {
                                            productsCategories.map((productCategory, index) =>
                                                <SwiperSlide key={index} >
                                                    <div className="text-center px-3" onClick={() => logoClick(productCategory)}>
                                                        <div className="ratio ratio-1x1">
                                                            <img className={"brand-image" + (productCategory === productsItems ? " active" : " ")} src={productCategory.logo} alt="brand" />
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
                                <div className=" position-relative" animate="right">
                                    <div className="">
                                        <div className=" justify-content-end d-flex">
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
                                            className="products-swiper">
                                            {
                                                productsItems.products.map((product, index) =>
                                                    <div key={index}>
                                                        <SwiperSlide >
                                                            <div className="row align-items-center">
                                                                <div className="col-lg-5 ">
                                                                    <div className="product-bg position-relative py-5">
                                                                        <div className=" justify-content-end d-flex">
                                                                            <div className="swiper-button-prev fix-arrow-mobile-prev">
                                                                                <img src="../img/images/prev-arrow.svg" alt="prev" />
                                                                            </div>
                                                                            <div className="swiper-button-next fix-arrow-mobile-next">
                                                                                <img src="../img/images/next-arrow.svg" alt="next" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-lg-6"></div>
                                                                            <div className="col-lg-6">
                                                                                <Swiper
                                                                                    style={{
                                                                                        "--swiper-navigation-color": "#fff",
                                                                                        "--swiper-pagination-color": "#fff",
                                                                                    }}
                                                                                    loop={true}
                                                                                    spaceBetween={10}
                                                                                    navigation={true}
                                                                                    thumbs={{ swiper: (thumbsSwiper?.$el && thumbsSwiper?.slidesPerView) ? thumbsSwiper : null }}
                                                                                    modules={[FreeMode, Navigation, Thumbs]}
                                                                                    className="mySwiper2 pe-lg-2"
                                                                                >
                                                                                    {
                                                                                        product.product_images.map((imageProduct, index) =>
                                                                                            <SwiperSlide key={index}>
                                                                                                <div className="ratio product-ratio">
                                                                                                    <img className="pb-4" src={imageProduct.image} alt="product" />
                                                                                                </div>
                                                                                            </SwiperSlide>
                                                                                        )
                                                                                    }
                                                                                </Swiper>

                                                                                <Swiper
                                                                                    onSwiper={setThumbsSwiper}
                                                                                    spaceBetween={10}
                                                                                    slidesPerView={4}
                                                                                    freeMode={true}
                                                                                    watchSlidesProgress={true}
                                                                                    modules={[FreeMode, Navigation, Thumbs]}
                                                                                    className="mySwiper"
                                                                                >
                                                                                    {
                                                                                        product.product_images.map((productColor,index) =>
                                                                                            <SwiperSlide key={index}>
                                                                                                <div className="d-flex justify-content-center me-lg-3">
                                                                                                    <div className=" " style={{ color: productColor.color, backgroundColor: productColor.color, width: '30px', height: '30px', borderRadius: '6px' }}></div>
                                                                                                </div>
                                                                                            </SwiperSlide>
                                                                                        )
                                                                                    }
                                                                                </Swiper>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 pt-lg-0 pt-5  justify-content-lg-start justify-content-center text-lg-start text-center">
                                                                    <div className="row product justify-content-md-center">
                                                                        <div className="col-lg-9 col-md-9">
                                                                            <div className="ms-lg-5 ms-2">
                                                                                <div className=" ">
                                                                                    <div className="logo-product">
                                                                                        <img src={product.logo} alt="brand" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex justify-content-lg-start justify-content-center">
                                                                                    <div className="me-3">
                                                                                        <Link href={product.website_url}>
                                                                                            <a target="_blank" rel="noreferrer">
                                                                                                <button className="button blue-button visit-mobile">{product.website_button}</button>
                                                                                            </a>
                                                                                        </Link>
                                                                                    </div>
                                                                                    <button className="button youtube-button" onClick={() => setYoutubePopup(product)}>{product.product_button}</button>
                                                                                </div>
                                                                                <p className="pt-5">{product.description}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    </div>
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
    console.log(productsData.data);
    return {
        props: {
            productsData: productsData.data,
        },
    };
}