import SideButton from "../../components/SideButton";
import VerificationPopup from "../../components/VerificationPopup";
import Banner from "../../components/Banner";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import Layout from "../../components/layout";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import GlobalState from "../../GlobalState";
import { useRouter } from 'next/router'
import SeoTags from "../../components/SeoTags";
import ClientsPopup from "../../components/ClientsPopup";

export default function Industries(props) {

    SwiperCore.use([Autoplay])
    const [popupOpen, setPopupOpen] = useState(null);
    const router = useRouter()
    const [ageVerificationPopup, setAgeVerificationPopup] = useState(null);
    const [filterId, setFilterId] = useState(null);
    const [loading, setLoading] = useState(true);
    const { triggerScroll } = useContext(GlobalState);

    const menuItems = props.industriesData.fixed_titles;
    const socialMedia = props.industriesData.social_media;
    const footerLogos = props.industriesData.footer_logos;
    const footerContactIcons = props.industriesData.footer_contact_icons;
    const serviceTitles = props.industriesData.services_titles;
    const industriesTitles = props.industriesData.industries_titles;
    const productSetting = props.industriesData.product_settings;
    const favIcon = props.industriesData.fav_icon_settings;

    const industriesSettings = props.industriesData.page_items.industries_setting;
    const allIndustries = props.industriesData.page_items.all_industries;
    const clientsTagsTitles = props.industriesData.page_items.clients_tags_titles;

    const clientsList = props.industriesData.page_items.clients_list;
    const testimonialsList = props.industriesData.page_items.testimonials_list;
    const [clientsListFilter, setClientsListFilter] = useState();
    const [currentFilter, setCurrentFilter] = useState();
    const [clientPopup, setClientPopup] = useState(null);
    const popupRef = useRef(null);
    const testimonialRef = useRef(null);

    function ageVerificationClick(industry) {
        let underAgePopup = localStorage.getItem('underAgePopup');
        if (!underAgePopup) {
            setAgeVerificationPopup(industry)
            localStorage.setItem('underAgePopup', 1);
        }
        else {
            router.push("/industries/" + industry?.slug)
        }
    }

    function clientsPopupClick(clientList) {
        setClientPopup(clientList);
    }

    function ageClose(industry) {
        localStorage.removeItem('underAgePopup', 1);
        setAgeVerificationPopup(null)
    }

    function clientClick(clientTag) {
        var els = document.querySelectorAll('.clients-circles');
        for (let i = 0; i < els.length; i++) {
            const element = els[i];
            element.classList.remove('show');
        }
        setTimeout(() => {
            setCurrentFilter(clientTag);
        }, [300]);
    }

    useEffect(() => {
        setClientsListFilter([]);
        if (clientsList?.length > 1 && currentFilter) {
            let filtered = [];
            clientsList.forEach(singleClient => {
                if (singleClient.clients_tags.length > 0) {
                    singleClient.clients_tags.forEach(singleTag => {
                        if (singleTag.slug == currentFilter) {
                            filtered = [...filtered, singleClient]
                        }
                    })
                }
            })
            setClientsListFilter(filtered)

        }
    }, [clientsList, currentFilter]);

    useEffect(() => {
        // console.log(clientsTagsTitles[0].slug)
        setCurrentFilter(clientsTagsTitles[0].slug);

    }, [clientsTagsTitles]);

    useEffect(() => {
        triggerScroll();
    }, [clientsListFilter]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        triggerScroll();
        setLoading(false);
    }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (window.location.href.includes('clients')) {
            // window.scrollTo('clients')
            // window.scrollTo(0, document.getElementById('clients').offsetTop)
            const element = document.getElementById("clients")
            if (element) {
                window.scrollTo(0, element.offsetTop);
                // console.log(element.offsetTop)
            }
        }
    }, [loading]);

    

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (testimonialRef.current && !testimonialRef.current.contains(event.target)) {
                setPopupOpen(false)
                setClientPopup(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [testimonialRef, setPopupOpen, setClientPopup]);

    useEffect(() => {
        document.querySelector('body').style.overflow = popupOpen ? 'hidden' : null;
        document.querySelector('html').style.overflow = popupOpen ? 'hidden' : null;
    }, [popupOpen]);

    return loading ? null : (
        <Layout activePage="industries" favIcon={favIcon} productSetting={productSetting} menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>

            <SeoTags
                title={props.industriesData.page_items.seo.title}
                description={props.industriesData.page_items.seo.description}
                image={props.industriesData.page_items.seo.image}
            />

            {
                industriesSettings && (
                    <>
                        <Banner
                            banner={industriesSettings.image}
                            title={industriesSettings.title}
                            video={industriesSettings.banner_video}
                        />

                        <SideButton
                            title={menuItems['book-a-consultation']}
                        />

                        <div className="pt-lg-5"  >
                            <div className="pt-5">
                                <div className="container px-sm-2 px-4 pt-5">
                                    <div className="row  pt-5 justify-content-center">
                                        {
                                            allIndustries ?
                                                allIndustries.map((industry, index) =>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 add-space cursor-opposite" animate="" key={index}>
                                                        <div className="blue-card h-100 position-relative p-4">
                                                            <div className="text-card ">
                                                                <div className="text-center justify-content-center d-grid">
                                                                    <div className="circle-card shadow">
                                                                        <img className="icon-card" src={industry.icon} alt="icon" />
                                                                    </div>
                                                                    <h4 className="my-3">{industry.title}</h4>
                                                                    <div className="line-card"></div>
                                                                </div>
                                                                <p className="my-3">{industry.small_text}</p>
                                                                {
                                                                    industry.with_popup === 1 ?

                                                                        <div className="card-button " onClick={() => ageVerificationClick(industry)} >
                                                                            <div className="button white-button hover-effect add-padding shadow ">{industriesSettings.read_more}</div>
                                                                        </div>
                                                                        :
                                                                        <Link href={"/industries/" + industry.slug}>
                                                                            <a>
                                                                                <div className="card-button ">
                                                                                    <div className="button white-button hover-effect add-padding shadow">{industriesSettings.read_more}</div>
                                                                                </div>
                                                                            </a>
                                                                        </Link>
                                                                }
                                                            </div>
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

                        <div className="container px-sm-2 px-4 py-lg-5 pb-5" id="clients" >
                            <div className="row  justify-content-center d-flex text-center mb-4 gx-3">
                                <h2 className="mb-4">{industriesSettings.clients_title}</h2>
                                {
                                    clientsTagsTitles ?
                                        clientsTagsTitles.map((clientTag, index) =>
                                            <div className="col-auto" onClick={() => clientClick(clientTag.slug)} key={index}>
                                                <p className={"filter-pills cursor-opposite" + ((clientTag.slug === currentFilter) ? ' active' : '')}>{clientTag.title}</p>
                                            </div>
                                        )
                                        :
                                        null
                                }
                            </div>

                            <div className="row  justify-content-center">
                                <div className="col-lg-10 ">
                                    <div className="row justify-content-center text-center" >
                                        {
                                            clientsListFilter?.length > 0 ?
                                                clientsListFilter.map((clientList, index) => (
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-4 my-4 clients-circles cursor-opposite" ref={testimonialRef} onClick={() => clientsPopupClick(clientList)} animate=" " style={{ transitionDelay: '0.1s' }} key={`${currentFilter}-${index}`}>
                                                        <div className="circle-on-hover position-relative">
                                                            <div className="ratio ratio-1x1">
                                                                <img className="brand-image-industry" src={clientList.full_path_logo} alt={clientList.title} title={clientList.title} />
                                                            </div>
                                                            <div className="circle-overlay"></div>
                                                            <div className="text-on-circle-overlay text-center">
                                                                <h2 className="mb-3">{clientList.title}</h2>
                                                                <p className="mb-0">{clientList.info}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pb-lg-5" >
                            <div className="container py-lg-5 pb-5 px-sm-2 px-4">
                                <div className="row  justify-content-center d-flex text-center mb-4">
                                    <h2 className="mb-0">{industriesSettings.testimonials_title}</h2>
                                </div>

                                <Swiper
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    modules={[Pagination]}
                                    spaceBetween={15}
                                    centeredSlides={true}
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
                                    {
                                        testimonialsList && (
                                            testimonialsList.map((testimonial, index) =>
                                                <SwiperSlide key={index} >
                                                    <div className="blue-card position-relative p-4 mt-2 cursor-opposite">
                                                        <div className="text-card py-3">
                                                            <div className="text-center justify-content-center d-grid">
                                                                <div className="team-image-card  ">
                                                                    <img src={testimonial.image} alt="testimonials" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <svg id="Group_427" data-name="Group 427" xmlns="http://www.w3.org/2000/svg" width="29.629" height="24.802" viewBox="0 0 29.629 24.802">
                                                                    <path id="Path_323" data-name="Path 323" d="M188.972,186.607v10.8H176.885V188.88q0-6.923,2-10.024a16.076,16.076,0,0,1,8.328-6.253l2.756,3.617a9.809,9.809,0,0,0-5.073,3.539,12.978,12.978,0,0,0-1.815,6.847Z" transform="translate(-176.885 -172.603)" fill="#fff" />
                                                                    <path id="Path_324" data-name="Path 324" d="M199.515,186.607v10.8H187.43V188.88q0-6.923,2-10.024a16.089,16.089,0,0,1,8.328-6.253l2.756,3.617a9.8,9.8,0,0,0-5.072,3.539,12.977,12.977,0,0,0-1.817,6.847Z" transform="translate(-170.888 -172.603)" fill="#fff" />
                                                                </svg>
                                                            </div>
                                                            <p className="my-3">{testimonial.text}</p>
                                                            <div className="text-end">
                                                                <svg id="Group_428" data-name="Group 428" xmlns="http://www.w3.org/2000/svg" width="29.629" height="24.803" viewBox="0 0 29.629 24.803">
                                                                    <path id="Path_321" data-name="Path 321" d="M266.769,258.724v-10.8h12.085v8.526q0,6.923-2,10.024a16.087,16.087,0,0,1-8.33,6.253l-2.755-3.617a9.791,9.791,0,0,0,5.072-3.54,12.966,12.966,0,0,0,1.817-6.846Z" transform="translate(-249.225 -247.925)" fill="#fff" />
                                                                    <path id="Path_322" data-name="Path 322" d="M256.224,258.724v-10.8h12.087v8.526q0,6.923-2,10.024a16.077,16.077,0,0,1-8.328,6.253l-2.756-3.617a9.8,9.8,0,0,0,5.073-3.54,12.981,12.981,0,0,0,1.817-6.846Z" transform="translate(-255.222 -247.925)" fill="#fff" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        {/* {testimonial.text.length >= 2 ? */}
                                                        <div className="text-center" onClick={() => setPopupOpen(testimonial)} ref={testimonialRef}>
                                                            <div className="button white-button hover-effect add-padding shadow">{industriesSettings.read_more}</div>
                                                        </div>
                                                        {/* : */}
                                                        {/* null */}
                                                        {/* } */}
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        )
                                    }
                                </Swiper>
                            </div>
                        </div>

                        <div className={" team-popup " + (ageVerificationPopup ? " " : " fade-out")}>
                            {
                                ageVerificationPopup ?
                                    <div className="modal-window team-member change-color position-relative">
                                        <VerificationPopup
                                            image={ageVerificationPopup.popup_image}
                                            title={ageVerificationPopup.popup_title}
                                            text={ageVerificationPopup.popup_text}
                                            slug={ageVerificationPopup.slug}
                                            button={ageVerificationPopup.first_popup_button}
                                            secondButton={ageVerificationPopup.second_popup_button}
                                            ageClose={ageClose}
                                            ageVerificationClick={() => ageVerificationClick()}
                                        />
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </>
                )
            }

            <div className={"team-popup " + (popupOpen ? " " : " fade-out")}>
                <div className="modal-window team-member position-relative">
                    <div className="popup-team">
                        <div className="close-svg cursor-opposite cursor-opposite" onClick={() => setPopupOpen(null)}>
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
                        <div className="row justify-content-center justify-content-lg-start align-items-center py-lg-5 py-3 gx-5 mx-lg-3 mx-2">
                            <div className="col-auto p-4 pb-md-0">
                                <div className="team-image cursor-opposite ">
                                    <img src={popupOpen?.image} alt="team" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-11 pt-lg-0">
                                <div>
                                    <svg id="Group_427" data-name="Group 427" xmlns="http://www.w3.org/2000/svg" width="29.629" height="24.802" viewBox="0 0 29.629 24.802">
                                        <path id="Path_323" data-name="Path 323" d="M188.972,186.607v10.8H176.885V188.88q0-6.923,2-10.024a16.076,16.076,0,0,1,8.328-6.253l2.756,3.617a9.809,9.809,0,0,0-5.073,3.539,12.978,12.978,0,0,0-1.815,6.847Z" transform="translate(-176.885 -172.603)" fill="#14334A" />
                                        <path id="Path_324" data-name="Path 324" d="M199.515,186.607v10.8H187.43V188.88q0-6.923,2-10.024a16.089,16.089,0,0,1,8.328-6.253l2.756,3.617a9.8,9.8,0,0,0-5.072,3.539,12.977,12.977,0,0,0-1.817,6.847Z" transform="translate(-170.888 -172.603)" fill="#14334A" />
                                    </svg>
                                </div>
                                <p className="my-3 text-center">{popupOpen?.text}</p>
                                <div className="text-end">
                                    <svg id="Group_428" data-name="Group 428" xmlns="http://www.w3.org/2000/svg" width="29.629" height="24.803" viewBox="0 0 29.629 24.803">
                                        <path id="Path_321" data-name="Path 321" d="M266.769,258.724v-10.8h12.085v8.526q0,6.923-2,10.024a16.087,16.087,0,0,1-8.33,6.253l-2.755-3.617a9.791,9.791,0,0,0,5.072-3.54,12.966,12.966,0,0,0,1.817-6.846Z" transform="translate(-249.225 -247.925)" fill="#14334A" />
                                        <path id="Path_322" data-name="Path 322" d="M256.224,258.724v-10.8h12.087v8.526q0,6.923-2,10.024a16.077,16.077,0,0,1-8.328,6.253l-2.756-3.617a9.8,9.8,0,0,0,5.073-3.54,12.981,12.981,0,0,0,1.817-6.846Z" transform="translate(-255.222 -247.925)" fill="#14334A" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"team-popup " + (clientPopup ? " " : " fade-out")}>
                {clientPopup && (
                    <ClientsPopup
                        setClientPopup={setClientPopup}
                        image={clientPopup.full_path_logo}
                        title={clientPopup.title}
                        description={clientPopup.description}
                        url={clientPopup.url}
                        label={industriesSettings.visit_button}
                    />
                )
                }
            </div>

        </Layout >
    )
}

export async function getStaticProps() {
    const industriesData = await axios.get("/industries");
    return {
        props: {
            industriesData: industriesData.data,
        },
        revalidate: 10,
    };
}