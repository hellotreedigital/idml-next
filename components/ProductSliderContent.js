import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Navigation } from "swiper";

export default function ProductSliderContent(props) {
    const [mainSwiper, setMainSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className={(props.product.product_images.length === 0 ? "row justify-content-center" : "row align-items-center")} >
                {
                    props.product.product_images.length === 0 ? null :
                        <div className="col-lg-6 col-md-5">
                            <div className="product-bg position-relative py-5">
                                <div className="row">
                                    <div className="col-lg-6"></div>
                                    <div className="col-lg-5">
                                        <div className="pagination-thumbs">
                                            <Swiper
                                                spaceBetween={10}
                                                navigation={false}
                                                modules={[Navigation]}
                                                className="mySwiper2 pe-lg-2"
                                                onSwiper={setMainSwiper}
                                                onSlideChange={(r) => thumbsSwiper.slideTo(r.activeIndex)}
                                            >
                                                {
                                                    props.product.product_images?.map((imageProduct, x) =>
                                                        <SwiperSlide key={`product-images-${x}`}>
                                                            <div className="ratio product-ratio">
                                                                <img className="pb-4" src={imageProduct.image} alt="product" />
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                }
                                            </Swiper>
                                            <Swiper
                                                spaceBetween={10}
                                                slidesPerView={5}
                                                centeredSlides={true}
                                                slideToClickedSlide={true}
                                                watchSlidesProgress={true}
                                                modules={[Navigation]}
                                                onSlideChange={(r) => mainSwiper.slideTo(r.activeIndex)}
                                                onSwiper={setThumbsSwiper}
                                                breakpoints={{
                                                    1199.98: {
                                                        slidesPerView: 7,
                                                        spaceBetween: 10,
                                                    },


                                                    // when window width is >= 767.98px
                                                    767.98: {
                                                        slidesPerView: 6,
                                                    },

                                                    575.98: {
                                                        slidesPerView: 10,
                                                    },

                                                }}
                                            >
                                                {
                                                    props.product.product_images?.map((imageProduct, x) =>
                                                        <SwiperSlide key={`product-images-${x}`}>
                                                            <div className="d-flex justify-content-center w-auto h-auto mb-2">
                                                                <div style={{ color: imageProduct.color, backgroundColor: imageProduct.color, width: 30, height: 30, borderRadius: 6 }}></div>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                }
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                <div className={(props.product.product_images.length === 0) ? "col-9 pt-lg-0 pt-5  justify-content-lg-start justify-content-center text-lg-start text-center" : "col-lg-6 col-md-6 pt-lg-0 pt-5  justify-content-lg-start justify-content-center text-lg-start text-center"}>
                    <div className={(props.product.product_images.length === 0) ? "row product justify-content-md-center text-center" : "row product justify-content-lg-start justify-content-md-center"}>
                        <div className={((props.product.product_images.length === 0) ? " col-12" : "col-lg-9 col-md-9 ")}>
                            <div className="ms-lg-5 ms-2">
                                <div className="pb-lg-1 pb-md-1 pb-2">
                                    <div className="logo-product">
                                        <img src={props.product.logo} alt="brand" />
                                    </div>
                                </div>
                                <div className="d-md-flex d-none justify-content-lg-start justify-content-center mb-lg-5 mb-md-3 mb-5">
                                    {
                                        props.product.website_url ?
                                            < div className="me-3">
                                                <a href={props.product.website_url} target="_blank" rel="noreferrer">
                                                    <button className="button blue-button visit-mobile">{props.product.website_button}</button>
                                                </a>
                                            </div>
                                            :
                                            null
                                    }
                                    {
                                        props.product.product_button ?
                                            <button className="button youtube-button" onClick={props.youtubeClick}>{props.product.product_button}</button>
                                            :
                                            null
                                    }
                                </div>
                                <p className={(props.product.product_images.length === 0) ? "mx-lg-5 mx-3" : "mx-lg-0 mx-1"}>{props.product.description}</p>
                                <div className="d-md-none d-flex justify-content-lg-start justify-content-center mb-lg-5 mb-md-3 mb-5">
                                    {
                                        props.product.website_url ?
                                            < div className="me-3">
                                                <a href={props.product.website_url} target="_blank" rel="noreferrer">
                                                    <button className="button blue-button visit-mobile">{props.product.website_button}</button>
                                                </a>
                                            </div>
                                            :
                                            null
                                    }
                                    {
                                        props.product.product_button ?
                                            <button className="button youtube-button" onClick={props.youtubeClick}>{props.product.product_button}</button>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}