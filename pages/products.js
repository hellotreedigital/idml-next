import Banner from "./components/Banner";
import Layout from "./components/Layout";
import SideButton from "./components/SideButton";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css/navigation";
import "swiper/css";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";

export default function Products() {
    SwiperCore.use([Autoplay])

    const [imageNumber, setImageNumber] = useState(1);
    const [youtubePopup, setYoutubePopup] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
      }, []);

      return loading ? null : (
        <Layout activePage="products">
            <Banner
                banner="../img/temp-images/products-banner.jpg"
                video="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                title="PRODUCTS"
            />
            <SideButton />
            <div className="py-lg-3"></div>
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
                            <SwiperSlide>
                                <div className="text-center px-3">
                                    <div className="ratio ratio-1x1">
                                        <img className="brand-image active" src="../img/temp-images/brand3.png" alt="brand" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center px-3">
                                    <div className="ratio ratio-1x1">
                                        <img className="brand-image" src="../img/temp-images/brand2.png" alt="brand" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center px-3">
                                    <div className="ratio ratio-1x1">
                                        <img className="brand-image" src="../img/temp-images/brand1.png" alt="brand" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center px-3">
                                    <div className="ratio ratio-1x1">
                                        <img className="brand-image" src="../img/temp-images/brand4.png" alt="brand" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center px-3">
                                    <div className="ratio ratio-1x1">
                                        <img className="brand-image" src="../img/temp-images/brand5.png" alt="brand" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center px-3">
                                    <div className="ratio ratio-1x1">
                                        <img className="brand-image" src="../img/temp-images/brand6.png" alt="brand" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center px-3">
                                    <div className="ratio ratio-1x1">
                                        <img className="brand-image" src="../img/temp-images/brand7.png" alt="brand" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-center px-3">
                                    <div className="ratio ratio-1x1">
                                        <img className="brand-image" src="../img/temp-images/brand8.png" alt="brand" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

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

                        <SwiperSlide>
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
                                                <div className="ratio product-ratio">
                                                    {
                                                        imageNumber === 1 ?
                                                            <img className="pb-4" src="../img/temp-images/red-product.png" alt="product" />
                                                            :
                                                            null
                                                    }
                                                    {
                                                        imageNumber === 2 ?
                                                            <img className="pb-4" src="../img/temp-images/green-product.png" alt="product" />
                                                            :
                                                            null
                                                    }
                                                    {
                                                        imageNumber === 3 ?
                                                            <img className="pb-4" src="../img/temp-images/black-product.png" alt="product" />
                                                            :
                                                            null
                                                    }
                                                    {
                                                        imageNumber === 4 ?
                                                            <img className="pb-4" src="../img/temp-images/product.png" alt="product" />
                                                            :
                                                            null
                                                    }
                                                </div>
                                                <div className="d-flex justify-content-center me-lg-3">
                                                    <div className="color-1 mx-3" onClick={() => setImageNumber(1)}></div>
                                                    <div className="color-2 mx-3" onClick={() => setImageNumber(2)}></div>
                                                    <div className="color-3 mx-3" onClick={() => setImageNumber(3)}></div>
                                                    <div className="color-4 mx-3" onClick={() => setImageNumber(4)}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 pt-lg-0 pt-5  justify-content-lg-start justify-content-center text-lg-start text-center">
                                    <div className="row product justify-content-md-center">
                                        <div className="col-lg-9 col-md-9">
                                            <div className="ms-lg-5 ms-2">
                                                <div className="mb-4">
                                                    <img src="../img/temp-images/ismod.svg" alt="brand" />
                                                </div>
                                                <div className="d-flex justify-content-lg-start justify-content-center">
                                                    <div className="me-3">
                                                        <button className="button blue-button visit-mobile">VISIT WEBSITE</button>
                                                    </div>
                                                    <button className="button youtube-button" onClick={() => setYoutubePopup(true)}>PRODUCT VIDEO</button>
                                                </div>
                                                <p className="pt-5">NANO, a simple, integrated tobacco heating device. The device is available in 4 basic colours: gold, red, green, black. As the top is specially designed, by replacing it with another one in different colour, you have the option of personalizing your device with your favourite colour. 15 seconds of fast heating time, 300 seconds of enjoyment, enabling the consumption of 20 cartridges of non-combusted tobacco with one charging.
                                                    One-button function, simple and fun.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
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
                                                <div className="ratio product-ratio">
                                                    {
                                                        imageNumber === 1 ?
                                                            <img className="pb-4" src="../img/temp-images/red-product.png" alt="product" />
                                                            :
                                                            null
                                                    }
                                                    {
                                                        imageNumber === 2 ?
                                                            <img className="pb-4" src="../img/temp-images/green-product.png" alt="product" />
                                                            :
                                                            null
                                                    }
                                                    {
                                                        imageNumber === 3 ?
                                                            <img className="pb-4" src="../img/temp-images/black-product.png" alt="product" />
                                                            :
                                                            null
                                                    }
                                                    {
                                                        imageNumber === 4 ?
                                                            <img className="pb-4" src="../img/temp-images/product.png" alt="product" />
                                                            :
                                                            null
                                                    }
                                                </div>
                                                <div className="d-flex justify-content-center me-lg-3">
                                                    <div className="color-1 mx-3" onClick={() => setImageNumber(1)}></div>
                                                    <div className="color-2 mx-3" onClick={() => setImageNumber(2)}></div>
                                                    <div className="color-3 mx-3" onClick={() => setImageNumber(3)}></div>
                                                    <div className="color-4 mx-3" onClick={() => setImageNumber(4)}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 pt-lg-0 pt-5  justify-content-lg-start justify-content-center text-lg-start text-center">
                                    <div className="row product justify-content-md-center">
                                        <div className="col-lg-9 col-md-9">
                                            <div className="ms-lg-5 ms-2">
                                                <div className="mb-4">
                                                    <img src="../img/temp-images/ismod.svg" alt="brand" />
                                                </div>
                                                <div className="d-flex justify-content-lg-start justify-content-center">
                                                    <div className="me-3">
                                                        <button className="button blue-button visit-mobile">VISIT WEBSITE</button>
                                                    </div>
                                                    <button className="button youtube-button" onClick={() => setYoutubePopup(true)}>PRODUCT VIDEO</button>
                                                </div>
                                                <p className="pt-5">NANO, a simple, integrated tobacco heating device. The device is available in 4 basic colours: gold, red, green, black. As the top is specially designed, by replacing it with another one in different colour, you have the option of personalizing your device with your favourite colour. 15 seconds of fast heating time, 300 seconds of enjoyment, enabling the consumption of 20 cartridges of non-combusted tobacco with one charging.
                                                    One-button function, simple and fun.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

            <div className="container py-lg-5">
                <div className="row justify-content-center text-center py-5">
                    <div className="col-lg-10 disclaimer mx-lg-5 px-xxl-5">
                        <p>This page is for the purpose of providing general information about our products. The page is not operated for advertising or marketing
                            purposes. The material on this page should not be regarded as an offer to sell, or a solicitation of an offer to buy, any product of our
                            products. Such products are sold only in compliance with the laws of the particular jurisdictions in which they are sold.</p>
                    </div>
                </div>
            </div>
            <div className="py-lg-3"></div>


            {
                youtubePopup && (
                    <div className={"youtube-popup" + (youtubePopup ? " " : " fade-out")}>
                        <div className="modal-window position-relative">
                            <div className="cancel-button stop-video" onClick={() => setYoutubePopup(false)}>
                                <img src="../img/images/x-button.svg" alt="" />
                            </div>
                            <iframe className="youtube-borders mw-100" width="900" height="500" src="https://www.youtube.com/embed/UqzKEMqKwf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                )
            }
        </Layout>
    )
} 