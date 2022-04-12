import SideButton from "./components/SideButton";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const brands = [
    {
        url: '../img/temp-images/brand1.png',
        fiterId: 1
    },
    {
        url: '../img/temp-images/brand2.png',
        fiterId: 2
    },
    {
        url: '../img/temp-images/brand3.png',
        fiterId: 3
    },
    {
        url: '../img/temp-images/brand4.png',
        fiterId: 1
    },
    {
        url: '../img/temp-images/brand5.png',
        fiterId: 1
    },
    {
        url: '../img/temp-images/brand6.png',
        fiterId: 1
    },
    {
        url: '../img/temp-images/brand7.png',
        fiterId: 1
    },
    {
        url: '../img/temp-images/brand8.png',
        fiterId: 1
    },
    {
        url: '../img/temp-images/brand1.png',
        fiterId: 1
    },
    {
        url: '../img/temp-images/brand2.png',
        fiterId: 1
    },
    {
        url: '../img/temp-images/brand3.png',
        fiterId: 1
    },
    {
        url: '../img/temp-images/brand4.png',
        fiterId: 1
    },
];

export default function Industries() {

    SwiperCore.use([Autoplay])
    const [ageVerificationPopup, setAgeVerificationPopup] = useState(false);
    const [fiterId, setFilterId] = useState();
    const [loading, setLoading] = useState(true);

    function ageVerificationClick() {
        setAgeVerificationPopup(true)
    }

    useEffect(() => {
        setLoading(false);
    }, []);

    return loading ? null : (
        <Layout activePage="industries">
            <Banner
                banner="../img/temp-images/story-banner.jpg"
                title="INDUSTRIES"
            />

            <SideButton />

            <div className="pt-lg-5" animate="left">
                <div className="pt-5">
                    <div className="container pt-5">
                        <div className="row  pt-5 justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6 add-space">
                                <div className="blue-card h-100 position-relative p-4">
                                    <div className="text-card">
                                        <div className="text-center justify-content-center d-grid">
                                            <div className="circle-card shadow">
                                                <img className="icon-card" src="../img/images/icon-1.svg" alt="icon" />
                                            </div>
                                            <h4 className="my-3">TOBACCO</h4>
                                            <div className="line-card"></div>
                                        </div>
                                        <p className="my-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit.</p>
                                        <div className="card-button " onClick={ageVerificationClick}>
                                            <div className="button white-button hover-effect add-padding shadow">READ MORE</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 add-space" >
                                <div className="blue-card h-100 position-relative p-4">
                                    <div className="text-card">
                                        <div className="text-center justify-content-center d-grid">
                                            <div className="circle-card shadow">
                                                <img className="icon-card" src="../img/images/icon-2.svg" alt="icon" />
                                            </div>
                                            <h4 className="my-3">TOBACCO</h4>
                                            <div className="line-card"></div>
                                        </div>
                                        <p className="my-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit.</p>
                                        <div className="card-button ">
                                            <a href={"/industries/" + 1}>
                                                <div className="button white-button hover-effect add-padding shadow">READ MORE</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 add-space" >
                                <div className="blue-card h-100 position-relative p-4">
                                    <div className="text-card">
                                        <div className="text-center justify-content-center d-grid">
                                            <div className="circle-card shadow">
                                                <img className="icon-card" src="../img/images/icon-3.svg" alt="icon" />
                                            </div>
                                            <h4 className="my-3">TOBACCO</h4>
                                            <div className="line-card"></div>
                                        </div>
                                        <p className="my-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit.</p>
                                        <div className="card-button ">
                                            <a href={"/industries/" + 1}>
                                                <div className="button white-button hover-effect add-padding shadow">READ MORE</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-lg-5 pb-5" animate="right">
                <div className="row  justify-content-center d-flex text-center mb-4 gx-3">
                    <h2 className="mb-4">OUR CLIENTS</h2>
                    <div className="col-auto" onClick={() => setFilterId()}>
                        <p className={"filter-pills " + (!fiterId ? 'active' : '')}>All</p>
                    </div>
                    <div className="col-auto" onClick={() => setFilterId(1)}>
                        <p className={"filter-pills " + (fiterId === 1 ? 'active' : '')}>TOBACCO</p>
                    </div>
                    <div className="col-auto" onClick={() => setFilterId(2)}>
                        <p className={"filter-pills " + (fiterId === 2 ? 'active' : '')}>INVNT</p>
                    </div>
                    <div className="col-auto" onClick={() => setFilterId(3)}>
                        <p className={"filter-pills " + (fiterId === 3 ? 'active' : '')}>FMCG</p>
                    </div>
                    <div className="col-auto" onClick={() => setFilterId(4)}>
                        <p className={"filter-pills " + (fiterId === 4 ? 'active' : '')}>Other</p>
                    </div>
                </div>

                <div className="row  justify-content-center">
                    <div className="col-lg-10 ">
                        <div className="row justify-content-center text-center">
                            {
                                brands.map(brand => (
                                    <>
                                        {
                                            !!(!fiterId || fiterId === brand.fiterId) && (
                                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 my-4">
                                                    <div className="circle-on-hover position-relative">
                                                        <div className="ratio ratio-1x1">
                                                            <img className="brand-image-industry" src={brand.url} alt="brand" />
                                                        </div>
                                                        <div className="circle-overlay"></div>
                                                        <div className="text-on-circle-overlay text-center">
                                                            <h2 className="mb-3">TITLE HERE</h2>
                                                            <p className="mb-0">Industry info</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-lg-5">
                <div className="container py-lg-5 pb-5" animate="left">
                    <div className="row  justify-content-center d-flex text-center mb-4">
                        <h2 className="mb-0">TESTIMONIALS</h2>
                    </div>

                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                        spaceBetween={15}
                        centeredSlides={true}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        slidesPerView={1}
                        className="industries-swiper "
                        breakpoints={{
                            1199.98: {
                                slidesPerView: 3,
                            },

                            991.98: {
                                slidesPerView: 3,
                            },

                            // when window width is >= 767.98px
                            767.98: {
                                slidesPerView: 2,
                            },
                            575.98: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="blue-card h-100 position-relative p-4 mt-2">
                                <div className="text-card">
                                    <div className="text-center justify-content-center d-grid">
                                        <div className="team-image-card ">
                                            <img src="../img/temp-images/ceo.jpg" alt="ceo" />
                                        </div>
                                    </div>
                                    <div>
                                        <svg id="Group_427" data-name="Group 427" xmlns="http://www.w3.org/2000/svg" width="29.629" height="24.802" viewBox="0 0 29.629 24.802">
                                            <path id="Path_323" data-name="Path 323" d="M188.972,186.607v10.8H176.885V188.88q0-6.923,2-10.024a16.076,16.076,0,0,1,8.328-6.253l2.756,3.617a9.809,9.809,0,0,0-5.073,3.539,12.978,12.978,0,0,0-1.815,6.847Z" transform="translate(-176.885 -172.603)" fill="#fff" />
                                            <path id="Path_324" data-name="Path 324" d="M199.515,186.607v10.8H187.43V188.88q0-6.923,2-10.024a16.089,16.089,0,0,1,8.328-6.253l2.756,3.617a9.8,9.8,0,0,0-5.072,3.539,12.977,12.977,0,0,0-1.817,6.847Z" transform="translate(-170.888 -172.603)" fill="#fff" />
                                        </svg>

                                    </div>
                                    <p className="my-3">Lorem ipsum dolor sit amet, consetetur sadipscing
                                        elitr, sed diam nonumy eirmod tempor invidunt.</p>
                                    <div className="text-end">
                                        <svg id="Group_428" data-name="Group 428" xmlns="http://www.w3.org/2000/svg" width="29.629" height="24.803" viewBox="0 0 29.629 24.803">
                                            <path id="Path_321" data-name="Path 321" d="M266.769,258.724v-10.8h12.085v8.526q0,6.923-2,10.024a16.087,16.087,0,0,1-8.33,6.253l-2.755-3.617a9.791,9.791,0,0,0,5.072-3.54,12.966,12.966,0,0,0,1.817-6.846Z" transform="translate(-249.225 -247.925)" fill="#fff" />
                                            <path id="Path_322" data-name="Path 322" d="M256.224,258.724v-10.8h12.087v8.526q0,6.923-2,10.024a16.077,16.077,0,0,1-8.328,6.253l-2.756-3.617a9.8,9.8,0,0,0,5.073-3.54,12.981,12.981,0,0,0,1.817-6.846Z" transform="translate(-255.222 -247.925)" fill="#fff" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="blue-card h-100 position-relative p-4 mt-2">
                                <div className="text-card">
                                    <div className="text-center justify-content-center d-grid">
                                        <div className="team-image-card ">
                                            <img src="../img/temp-images/ceo.jpg" alt="ceo" />
                                        </div>
                                    </div>
                                    <div>
                                        <svg id="Group_427" data-name="Group 427" xmlns="http://www.w3.org/2000/svg" width="29.629" height="24.802" viewBox="0 0 29.629 24.802">
                                            <path id="Path_323" data-name="Path 323" d="M188.972,186.607v10.8H176.885V188.88q0-6.923,2-10.024a16.076,16.076,0,0,1,8.328-6.253l2.756,3.617a9.809,9.809,0,0,0-5.073,3.539,12.978,12.978,0,0,0-1.815,6.847Z" transform="translate(-176.885 -172.603)" fill="#fff" />
                                            <path id="Path_324" data-name="Path 324" d="M199.515,186.607v10.8H187.43V188.88q0-6.923,2-10.024a16.089,16.089,0,0,1,8.328-6.253l2.756,3.617a9.8,9.8,0,0,0-5.072,3.539,12.977,12.977,0,0,0-1.817,6.847Z" transform="translate(-170.888 -172.603)" fill="#fff" />
                                        </svg>

                                    </div>
                                    <p className="my-3">Lorem ipsum dolor sit amet, consetetur sadipscing
                                        elitr, sed diam nonumy eirmod tempor invidunt.</p>
                                    <div className="text-end">
                                        <svg id="Group_428" data-name="Group 428" xmlns="http://www.w3.org/2000/svg" width="29.629" height="24.803" viewBox="0 0 29.629 24.803">
                                            <path id="Path_321" data-name="Path 321" d="M266.769,258.724v-10.8h12.085v8.526q0,6.923-2,10.024a16.087,16.087,0,0,1-8.33,6.253l-2.755-3.617a9.791,9.791,0,0,0,5.072-3.54,12.966,12.966,0,0,0,1.817-6.846Z" transform="translate(-249.225 -247.925)" fill="#fff" />
                                            <path id="Path_322" data-name="Path 322" d="M256.224,258.724v-10.8h12.087v8.526q0,6.923-2,10.024a16.077,16.077,0,0,1-8.328,6.253l-2.756-3.617a9.8,9.8,0,0,0,5.073-3.54,12.981,12.981,0,0,0,1.817-6.846Z" transform="translate(-255.222 -247.925)" fill="#fff" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="blue-card h-100 position-relative p-4 mt-2">
                                <div className="text-card">
                                    <div className="text-center justify-content-center d-grid">
                                        <div className="team-image-card ">
                                            <img src="../img/temp-images/ceo.jpg" alt="ceo" />
                                        </div>
                                    </div>
                                    <div>
                                        <svg id="Group_427" data-name="Group 427" xmlns="http://www.w3.org/2000/svg" width="29.629" height="24.802" viewBox="0 0 29.629 24.802">
                                            <path id="Path_323" data-name="Path 323" d="M188.972,186.607v10.8H176.885V188.88q0-6.923,2-10.024a16.076,16.076,0,0,1,8.328-6.253l2.756,3.617a9.809,9.809,0,0,0-5.073,3.539,12.978,12.978,0,0,0-1.815,6.847Z" transform="translate(-176.885 -172.603)" fill="#fff" />
                                            <path id="Path_324" data-name="Path 324" d="M199.515,186.607v10.8H187.43V188.88q0-6.923,2-10.024a16.089,16.089,0,0,1,8.328-6.253l2.756,3.617a9.8,9.8,0,0,0-5.072,3.539,12.977,12.977,0,0,0-1.817,6.847Z" transform="translate(-170.888 -172.603)" fill="#fff" />
                                        </svg>

                                    </div>
                                    <p className="my-3">Lorem ipsum dolor sit amet, consetetur sadipscing
                                        elitr, sed diam nonumy eirmod tempor invidunt.</p>
                                    <div className="text-end">
                                        <svg id="Group_428" data-name="Group 428" xmlns="http://www.w3.org/2000/svg" width="29.629" height="24.803" viewBox="0 0 29.629 24.803">
                                            <path id="Path_321" data-name="Path 321" d="M266.769,258.724v-10.8h12.085v8.526q0,6.923-2,10.024a16.087,16.087,0,0,1-8.33,6.253l-2.755-3.617a9.791,9.791,0,0,0,5.072-3.54,12.966,12.966,0,0,0,1.817-6.846Z" transform="translate(-249.225 -247.925)" fill="#fff" />
                                            <path id="Path_322" data-name="Path 322" d="M256.224,258.724v-10.8h12.087v8.526q0,6.923-2,10.024a16.077,16.077,0,0,1-8.328,6.253l-2.756-3.617a9.8,9.8,0,0,0,5.073-3.54,12.981,12.981,0,0,0,1.817-6.846Z" transform="translate(-255.222 -247.925)" fill="#fff" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* </div> */}


            <div className={"team-popup " + (ageVerificationPopup ? " " : " fade-out")}>
                <div className="modal-window team-member change-color position-relative">
                    <div className="row ">
                        <div className="col-lg-10 col-md-10 col-sm-10 col-11">
                            <div className="popup-age change-color">
                                <div className="close-svg" onClick={() => setAgeVerificationPopup(false)}>
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
                                <div className="row justify-content-center py-5 gx-5">
                                    <div className="col-lg-12 col-md-10 text-center">
                                        <img src="../img/images/18+.svg" alt="age" />
                                        <div className="py-4">
                                            <h3 className="mb-2">Age Verification</h3>
                                            <h4 className="mb-0">You must be 18 or over to access this page.</h4>
                                        </div>
                                        <div className="row justify-content-center p-3">
                                            <div className="col-lg-4 col-md-4">
                                                <a href={"/industries/" + 1}>
                                                    <div className="button blue-button verification-button  fix-padding shadow">I AM 18 +</div>
                                                </a>
                                            </div>
                                            <div className="col-lg-4 col-md-4 pt-md-0 pt-3">
                                                <div onClick={() => setAgeVerificationPopup(false)} className="button white-button verification-button add-border shadow">I AM UNDER 18</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout >
    )
}