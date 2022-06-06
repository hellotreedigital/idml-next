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
                    props.product.full_path_image === 0 ? "" :
                        <div className={"col-lg-6 col-md-5" + (!props.product.full_path_image ? " d-none" : " ")}>
                            <div className={"ratio product-bg cursor-opposite" + (!props.product.website_url && !props.product.product_button  ? "" : "border-radius-product " )}>
                               <img src={props.product.full_path_image} alt="product" />
                            </div>
                        </div>
                }
                
                <div className={(props.product.full_path_image === null) ? "col-9 pt-lg-0 pt-5  justify-content-lg-start justify-content-center text-lg-start text-center" : "col-lg-6 col-md-6 pt-lg-0 pt-5  justify-content-lg-start justify-content-center text-lg-start text-center"}>
                    <div className={(props.product.full_path_image === null) ? "row product justify-content-md-center text-center" : "row product justify-content-lg-start justify-content-md-center"}>
                        <div className={((props.product.full_path_image === null) ? " col-12" : "col-lg-9 col-md-9 ")}>
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
                                                    <button className="button blue-button visit-mobile cursor-opposite">{props.product.website_button}</button>
                                                </a>
                                            </div>
                                            :
                                            null
                                    }
                                    {
                                        props.product.product_button ?
                                            <button className="button youtube-button cursor-opposite" onClick={props.youtubeClick}>{props.product.product_button}</button>
                                            :
                                            null
                                    }
                                </div>
                                <p className={(!props.product.full_path_image) ? "mx-lg-5 mx-3" : "mx-lg-0 mx-1"}>{props.product.description}</p>
                                <div className="d-md-none d-flex justify-content-lg-start justify-content-center mb-lg-5 mb-md-3 mb-5">
                                    {
                                        props.product.website_url ?
                                            < div className="me-3">
                                                <a href={props.product.website_url} target="_blank" rel="noreferrer">
                                                    <button className="button blue-button visit-mobile cursor-opposite">{props.product.website_button}</button>
                                                </a>
                                            </div>
                                            :
                                            null
                                    }
                                    {
                                        props.product.product_button ?
                                            <button className="button youtube-button cursor-opposite" onClick={props.youtubeClick}>{props.product.product_button}</button>
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