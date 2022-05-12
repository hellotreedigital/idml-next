import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import VerificationPopup from "./VerificationPopup";
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Layout(props) {
    const [ageVerificationPopup, setAgeVerificationPopup] = useState(null);
    const [ageVerificationPopupProduct, setAgeVerificationPopupProduct] = useState(null);
    const [headerScroll, setHeaderScroll] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();
    const popupRef = useRef(null);


    function burgerClick() {
        setMobileMenuOpen(true)
    }
    function closeMenu() {
        setMobileMenuOpen(false)
    }

    function ageVerificationProductClick(productSetting) {
        let underAgePopupProduct = localStorage.getItem('underAgePopupProduct');
        if (!underAgePopupProduct) {
            setAgeVerificationPopupProduct(productSetting)
            localStorage.setItem('underAgePopupProduct', 1);
        }
        else {
            router.push("/products")
        }
    }

    function ageClosePopup(productSetting) {
        setAgeVerificationPopupProduct(null)
        localStorage.removeItem('underAgePopupProduct', 1);
    }

    function ageVerificationClick(industryTitle) {
        let underAgePopup = localStorage.getItem('underAgePopup');
        if (!underAgePopup) {
            setAgeVerificationPopup(industryTitle)
            localStorage.setItem('underAgePopup', 1);
        }
        else {
            router.push("/industries/" + industryTitle.slug)
        }
    }

    function ageClose(industryTitle) {
        setAgeVerificationPopup(null)
        localStorage.removeItem('underAgePopup', 1);
    }

    useEffect(() => {
        window.addEventListener('scroll', function (e) {
            setHeaderScroll(window.pageYOffset > 50);
        });
    }, []);

    // useEffect(() => {
    //     console.log(props.productSetting)
    // }, [props.productSetting]);

    useEffect(() => {
        document.querySelector('body').style.overflow = mobileMenuOpen ? 'hidden' : null;
        document.querySelector('html').style.overflow = mobileMenuOpen ? 'hidden' : null;
    }, [mobileMenuOpen]);

    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href={props.favIcon?.apple_touch_icon} />
                <link rel="icon" type="image/png" sizes="32x32" href={props.favIcon?.icon_32} />
                <link rel="icon" type="image/png" sizes="16x16" href={props.favIcon?.icon_16} />
                <link rel="manifest" href={props.favIcon?.manifest} />
                <link rel="mask-icon" href={props.favIcon?.mask_icon} color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>

            <div className={"container-fluid navbar-items py-3" + (headerScroll ? " header-scroll cursor-opposite" : " ") + (props.fixedNav ? " header-scroll" : " ")}>
                <div className="row mx-lg-3">
                    <div className="col ">
                        <Link href="/">
                            <a>
                                <img className="cursor-opposite" src="/img/images/logo.svg" alt="logo" />
                            </a>
                        </Link>
                    </div>
                    <div className="col-auto d-lg-flex d-none cursor-opposite">
                        <div className="me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            <Link href="/">
                                <a className={"menu " + (props.activePage === "home" ? " active" : "") + (props.activePage === "home" && headerScroll ? "header-scroll active" : "")}>
                                    {props.menuItems?.home}
                                </a>
                            </Link>
                        </div>
                        <div className="me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            <Link href="/our-story">
                                <a className={"menu " + (props.activePage === "our-story" ? " active" : "") + (props.activePage === "our-story" && headerScroll ? "header-scroll active" : "")}>
                                    {props.menuItems ? props.menuItems['our-story'] : ''}
                                </a>
                            </Link>
                        </div>
                        <div className="me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            {
                                props.productSetting?.with_popup === 1 ?
                                    <p className={"menu mb-0" + (props.activePage === "products" ? " active" : "") + (props.activePage === "products" && headerScroll ? "header-scroll active" : "")} onClick={() => ageVerificationProductClick(props.productSetting)}>
                                        {props.productSetting?.title}
                                    </p>
                                    :

                                    <Link href="/products">
                                        <a className={"menu " + (props.activePage === "products" ? " active" : "") + (props.activePage === "products" && headerScroll ? "header-scroll active" : "")} >
                                            {props.productSetting?.title}
                                        </a>
                                    </Link>
                            }
                        </div>
                        <div className="dropdown me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            <Link href="/services">
                                <a className={"menu " + (props.activePage === "services" ? " active" : "") + (props.activePage === "services" && headerScroll ? "header-scroll active" : "")}>{props.menuItems?.services}</a>
                            </Link>
                            <div className="dropdown-content">
                                {props.serviceTitles ?
                                    props.serviceTitles.map((serviceTitle, index) =>
                                        <Link href={"/services/" + serviceTitle.slug} key={index}>
                                            <a className="mb-2 mt-2">
                                                {serviceTitle?.title}
                                            </a>
                                        </Link>
                                    )
                                    :
                                    null
                                }
                            </div>
                        </div>
                        <div className="dropdown me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            <Link href="/industries">
                                <a className={"menu " + (props.activePage === "industries" ? " active" : "") + (props.activePage === "industries" && headerScroll ? "header-scroll active" : "")} >
                                    {props.menuItems?.industries}
                                </a>
                            </Link>
                            <div className="dropdown-content">
                                {props.industriesTitles ?
                                    props.industriesTitles.map((industryTitle, index) =>
                                        industryTitle.with_popup === 1 ?
                                            <p className="mb-2 mt-2" key={index} onClick={() => ageVerificationClick(industryTitle)}>
                                                {industryTitle?.title}
                                            </p>
                                            :
                                            <Link href={"/industries/" + industryTitle.slug} key={index}>
                                                <a className="mb-2 mt-2">
                                                    {industryTitle?.title}
                                                </a>
                                            </Link>
                                    )
                                    :
                                    null
                                }
                            </div>
                        </div>
                        <div className="me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            <Link href="/insights">
                                <a className={"menu " + (props.activePage === "insights" ? " active" : "") + (props.activePage === "insights" && headerScroll ? "header-scroll active" : "")}>
                                    {props.menuItems?.insights}
                                </a>
                            </Link>
                        </div>
                        <div className="me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            <Link href="/contact">
                                <a className={"menu " + (props.activePage === "contact" ? " active" : "") + (props.activePage === "contact" && headerScroll ? "header-scroll active" : "")}>
                                    {props.menuItems ? props.menuItems['contact-us'] : ''}
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-auto d-lg-none d-flex align-self-center" onClick={burgerClick}>
                        <svg className="burger-icon" xmlns="http://www.w3.org/2000/svg" width="22.664" height="14.449" viewBox="0 0 22.664 14.449">
                            <g id="Group_979" data-name="Group 979" transform="translate(-313.586 -8.75)">
                                <g id="Group_947" data-name="Group 947" transform="translate(-20 -20)">
                                    <line className="burger-color" id="Line_202" data-name="Line 202" x2="20.164" transform="translate(334.836 30)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2.5" />
                                    <line className="burger-color" id="Line_203" data-name="Line 203" x2="20.164" transform="translate(334.836 35.975)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2.5" />
                                    <line className="burger-color" id="Line_204" data-name="Line 204" x2="20.164" transform="translate(334.836 41.949)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2.5" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <div className={"mobile-menu cursor-opposite" + (mobileMenuOpen ? " " : " fade-out")}>
                <div className="container-fluid d-flex flex-column h-100">

                    <div className="text-end close-mobile-menu py-4" onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12.338 12.338">
                            <line id="Line_35" data-name="Line 35" y2="13.448" transform="translate(10.924 1.414) rotate(45)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.5"></line>
                            <line id="Line_36" data-name="Line 36" y2="13.448" transform="translate(1.414 1.414) rotate(-45)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.5"></line>
                        </svg>
                    </div>

                    <div className="flex-grow-1 d-flex flex-column justify-content-center">
                        <div className="row align-items-center justify-content-center text-center d-flex flex-column">
                            <div className="pb-3">
                                <Link href="/">
                                    <a className="burger-menu">
                                        {props.menuItems?.home}
                                    </a>
                                </Link>
                            </div>
                            <div className="pb-3">
                                <Link href="/our-story">
                                    <a className="burger-menu" >
                                        {props.menuItems ? props.menuItems['our-story'] : ''}
                                    </a>
                                </Link>
                            </div>
                            <div className="pb-3">
                                <Link href="/products">
                                    <a className="burger-menu">
                                        {props.menuItems?.products}
                                    </a>
                                </Link>
                            </div>
                            <div className="dropdown pb-4">
                                <div className="">
                                    <Link href="/services">
                                        <a className="burger-menu" >
                                            {props.menuItems?.services}
                                        </a>
                                    </Link>
                                </div>

                                {/* <div className="mobile-dropdown d-grid">
                                    {props.serviceTitles ?
                                        props.serviceTitles.map((serviceTitle, index) =>
                                            <Link href={"/services/" + serviceTitle.slug} key={index}>
                                                <a>
                                                    {serviceTitle?.title}
                                                </a>
                                            </Link>
                                        )
                                        :
                                        null
                                    }

                                </div> */}
                            </div>

                            <div className="dropdown pb-3">
                                <div className="">
                                    <Link href="/industries">
                                        <a className="burger-menu">
                                            {props.menuItems?.industries}
                                        </a>
                                    </Link>
                                </div>
                                {/* <div className="mobile-dropdown d-grid">
                                    {props.industriesTitles ?

                                        props.industriesTitles.map((industryTitle, index) =>
                                            industryTitle.with_popup === 1 ?

                                                <p className="mb-0" key={index} onClick={() => ageVerificationClick(industryTitle)}>
                                                    {industryTitle?.title}
                                                </p>
                                                :
                                                <Link href={"/industries/" + industryTitle.slug} key={index}>
                                                    <a>
                                                        {industryTitle?.title}
                                                    </a>
                                                </Link>

                                        )
                                        :
                                        null
                                    }
                                </div> */}
                            </div>
                            <div className="pb-3">
                                <Link href="/insights">
                                    <a className="burger-menu">
                                        {props.menuItems?.insights}
                                    </a>
                                </Link>
                            </div>
                            <div className="pb-3">
                                <Link href="/contact" >
                                    <a className="burger-menu">
                                        {props.menuItems ? props.menuItems['contact-us'] : ''}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {props.children}

            <div className=" position-relative ">
                <div className="footer-img">
                    <img src="/img/images/footer-bg.png" alt="bg" />
                </div>
                <div className="container">
                    <div className="row footer align-items-center justify-content-between">
                        <div className="col-lg-5 col-md-12 justify-content-md-center text-lg-start text-center cursor-opposite">
                            <div className="background-blue  py-lg-5 py-4">

                                <div className="row d-lg-none d-flex position-relative justify-content-center align-items-center pb-4">
                                    <div className="col-md-2 col-sm-2 col-3">
                                        <Link href="/">
                                            <a>
                                                <img className="footer-logo " src="/img/images/logo-footer.svg" alt="logo" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="col-md-5 col-sm-8 col-8">
                                        <div className="text-start">

                                            <div className="pt-lg-3">
                                                <p className="mb-0">{props.menuItems ? props.menuItems['footer-text'] : ''}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center justify-content-lg-start  align-items-center position-relative">
                                    <div className="col-lg-3  d-none d-lg-block">
                                        <Link href="/">
                                            <a>
                                                <img className="footer-logo" src="/img/images/logo-footer.svg" alt="logo" />
                                            </a>
                                        </Link>
                                    </div>


                                    <div className="col-lg-6 col-md-5 col-sm-8 col-9 ">
                                        <div className="d-none d-lg-block pb-3">
                                            {
                                                props?.footerContactIcons ?
                                                    props.footerContactIcons.map((footerContactIcon, index) =>

                                                        <a href={footerContactIcon.url} target="_blank" rel="noreferrer" key={index}>
                                                            <img className="social-icon me-3" src={footerContactIcon.icon} alt="icon" />
                                                        </a>
                                                    )
                                                    :
                                                    null
                                            }
                                        </div>
                                        <div className="pt-3 d-none d-lg-block">
                                            <p>{props.menuItems ? props.menuItems['footer-text'] : ''}</p>
                                        </div>
                                        <div className="d-block d-md-none d-sm-none d-lg-none pb-3">
                                            {
                                                props?.footerContactIcons ?
                                                    props.footerContactIcons.map((footerContactIcon, index) =>
                                                        <a target="_blank" rel="noreferrer" href={footerContactIcon.url} key={index}>
                                                            <img className="social-icon me-3" src={footerContactIcon.icon} alt="icon" />
                                                        </a>
                                                    )
                                                    :
                                                    null
                                            }
                                        </div>
                                        <div className="d-lg-none d-block">
                                            <div className="row justify-content-center">
                                                <div className="col-4">
                                                    <div className="mb-4">
                                                        <Link href="/our-story">
                                                            <a className={"mobile-footer" + (props.activePage === "our-story" ? " active" : "")}>
                                                                {props.menuItems ? props.menuItems['our-story'] : ''}
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="mb-4">
                                                        <Link href="/products">
                                                            <a className={"mobile-footer" + (props.activePage === "products" ? " active" : "")} >
                                                                {props.menuItems?.products}
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="mb-4">
                                                        <Link href="/services">
                                                            <a className={"mobile-footer" + (props.activePage === "services" ? " active" : "")}>{props.menuItems?.services}</a>
                                                        </Link>
                                                    </div>
                                                    <div className="mb-4">
                                                        <Link href="/industries">
                                                            <a className={"mobile-footer" + (props.activePage === "industries" ? " active" : "")} > {props.menuItems?.industries}</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="mb-4">
                                                        <Link href="/insights">
                                                            <a className={"mobile-footer" + (props.activePage === "insights" ? " active" : "")} >{props.menuItems?.insights}</a>
                                                        </Link>
                                                    </div>
                                                    <div className="mb-4">
                                                        <Link href="/contact">
                                                            <a className={"mobile-footer" + (props.activePage === "contact" ? " active" : "")} >{props.menuItems ? props.menuItems['contact-us'] : ''}</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                {
                                                    props.socialMedia ?
                                                        props.socialMedia.map((social, index) =>
                                                            <a target="_blank" rel="noreferrer" href={social.url} key={index}>
                                                                <img className="social-icon  me-3" src={social.mobile_icon} alt="icon" />
                                                            </a>
                                                        )
                                                        :
                                                        null
                                                }
                                            </div>
                                            <div className="pt-4">
                                                {
                                                    props?.footerLogos ?
                                                        props.footerLogos.map((footerLogo, index) =>
                                                            <img className="mx-3 footer-mobile-logo" src={footerLogo.mobile_logo} alt="logo" key={index} />
                                                        )
                                                        :
                                                        null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 d-lg-block d-none">
                            <div className="row py-5 justify-content-end">
                                <div className="col-lg-3 d-block">
                                    <div className="d-grid">
                                        <div className="mb-3">
                                            <Link href="/our-story">
                                                <a className={"footer-link" + (props.activePage === "our-story" ? " active" : "")}>
                                                    {props.menuItems ? props.menuItems['our-story'] : ''}
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="mb-3">
                                            <Link href="/products">
                                                <a className={"footer-link" + (props.activePage === "products" ? " active" : "")}>
                                                    {props.menuItems?.products}
                                                </a>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="/services">
                                                <a className={"footer-link" + (props.activePage === "services" ? " active" : "")}>
                                                    {props.menuItems?.services}
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 d-block">
                                    <div className="d-grid">
                                        <div className="mb-3">
                                            <Link href="/industries">
                                                <a className={"footer-link" + (props.activePage === "industries" ? " active" : "")} >
                                                    {props.menuItems?.industries}
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="mb-3">
                                            <Link href="/insights">
                                                <a className={"footer-link" + (props.activePage === "insights" ? " active" : "")} >
                                                    {props.menuItems?.insights}
                                                </a>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="/contact">
                                                <a className={"footer-link" + (props.activePage === "contact" ? " active" : "")}>{props.menuItems ? props.menuItems['contact-us'] : ''}</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-auto d-block justify-content-center">

                                    <div className="d-flex pb-3 text-center">
                                        {
                                            props?.footerLogos ?
                                                props.footerLogos.map((footerLogo, index) =>
                                                    <img className="ms-3 logo-products" src={footerLogo.logo} alt="logo" key={index} />
                                                )
                                                :
                                                null
                                        }
                                    </div>

                                    <div className="d-flex">
                                        {
                                            props.socialMedia ?
                                                props.socialMedia.map((social, index) =>
                                                    <a target="_blank" rel="noreferrer" href={social.url} key={index}>
                                                        <img className="social-icon ms-3" src={social.icon} alt="icon" />
                                                    </a>
                                                )
                                                :
                                                null
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                ageVerificationPopup ?
                    <div className={"team-popup " + (ageVerificationPopup ? " " : " fade-out")}>
                        <div className="modal-window team-member change-color position-relative">
                            <VerificationPopup
                                image={ageVerificationPopup.popup_image}
                                title={ageVerificationPopup.popup_title}
                                text={ageVerificationPopup.popup_text}
                                slug={ageVerificationPopup.slug}
                                button={ageVerificationPopup.first_popup_button}
                                secondButton={ageVerificationPopup.second_popup_button}
                                ageClick={() => setAgeVerificationPopup(null)}
                                ageClose={ageClose}
                                ageVerificationClick={() => ageVerificationClick()}
                            />
                        </div>
                    </div>
                    :
                    null
            }

            <div className={" team-popup " + (ageVerificationPopupProduct ? " " : " fade-out")}>
                {
                    ageVerificationPopupProduct ?
                        <div className="modal-window team-member change-color position-relative">
                            <div className="row ">
                                <div className="col-lg-10 col-md-10 col-sm-10 col-11">
                                    <div className="popup-age change-color">
                                        <div className="close-svg cursor-opposite" onClick={() => ageClosePopup()} >
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
                                                <img src={ageVerificationPopupProduct.popup_image} alt="age" />
                                                <div className="py-4">
                                                    <h3 className="mb-2">{ageVerificationPopupProduct.popup_title}</h3>
                                                    <h4 className="mb-0">{ageVerificationPopupProduct.popup_text}</h4>
                                                </div>
                                                <div className="row justify-content-center p-3">
                                                    <div className="col-lg-4 col-md-4">

                                                        <div onClick={() => ageVerificationProductClick(ageVerificationPopupProduct)} className="button blue-button verification-button  fix-padding shadow cursor-opposite">{ageVerificationPopupProduct.first_popup_button}</div>

                                                    </div>
                                                    <div className="col-lg-4 col-md-4 pt-md-0 pt-3">
                                                        <div onClick={() => ageClosePopup()} className="button white-button verification-button add-border shadow cursor-opposite">{ageVerificationPopupProduct.second_popup_button}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
            </div>


        </>
    )
}