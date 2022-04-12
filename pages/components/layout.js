import { useEffect, useState } from "react";

export default function Layout(props) {
    const [headerScroll, setHeaderScroll] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    function burgerClick() {
        setMobileMenuOpen(true)
    }
    function closeMenu() {
        setMobileMenuOpen(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', function (e) {
            setHeaderScroll(window.pageYOffset > 50);
        });
    }, []);

    useEffect(() => {
        document.querySelector('body').style.overflow = mobileMenuOpen ? 'hidden' : null;
        document.querySelector('html').style.overflow = mobileMenuOpen ? 'hidden' : null;
    }, [mobileMenuOpen]);

    return (
        <>

            <div className={"container-fluid navbar-items py-3" + (headerScroll ? " header-scroll" : " ") + (props.fixedNav ? " header-scroll" : " ")}>
                <div className="row mx-lg-3">
                    <div className="col">
                        <a href="/">
                            <img src="/img/images/logo.svg" alt="logo" />
                        </a>
                    </div>
                    <div className="col-auto d-lg-flex d-none">
                        <div className="me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            <a className={"menu " + (props.activePage === "home" ? " active" : "") + (props.activePage === "home" && headerScroll ? "header-scroll active" : "")} href="/">{props.menuItems?.home}</a>
                        </div>
                        <div className="me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            <a className={"menu " + (props.activePage === "our-story" ? " active" : "") + (props.activePage === "our-story" && headerScroll ? "header-scroll active" : "")} href="/our-story">{props.menuItems ? props.menuItems['our-story'] : ''}</a>
                        </div>
                        <div className="me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            <a className={"menu " + (props.activePage === "products" ? " active" : "") + (props.activePage === "products" && headerScroll ? "header-scroll active" : "")} href="/products">{props.menuItems?.products}</a>
                        </div>
                        <div className="dropdown me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            <a className={"menu " + (props.activePage === "services" ? " active" : "") + (props.activePage === "services" && headerScroll ? "header-scroll active" : "")} href="/services">{props.menuItems?.services}</a>
                            <div className="dropdown-content">
                                <a href={"/services/" + 1} className="mb-2 mt-2">Operations</a>
                                <a href={"/services/" + 1} className="mb-2 mt-2">Strategy</a>
                                <a href={"/services/" + 1} className="mb-2 mt-2">Innovation</a>
                                <a href={"/services/" + 1} className="mb-2 mt-2">Project management</a>
                                <a href={"/services/" + 1} className="mb-2 mt-2">Intellectual property</a>
                                <a href={"/services/" + 1} className="mb-2 mt-2">Sales and Marketing</a>
                                <a href={"/services/" + 1} className="mb-2 mt-2">Finance</a>
                            </div>
                        </div>
                        <div className="dropdown me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            <a className={"menu " + (props.activePage === "industries" ? " active" : "") + (props.activePage === "industries" && headerScroll ? "header-scroll active" : "")} href="/industries">{props.menuItems?.industries}</a>
                            <div className="dropdown-content">
                                <a href={"/industries/" + 1} className="mb-2">Tobacco</a>
                                <a href={"/industries/" + 1} className="mb-2">INVNT</a>
                                <a href={"/industries/" + 1} className="mb-2">FMCG</a>
                            </div>
                        </div>
                        <div className="me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            <a className={"menu " + (props.activePage === "insights" ? " active" : "") + (props.activePage === "insights" && headerScroll ? "header-scroll active" : "")} href="/insights">{props.menuItems?.insights}</a>
                        </div>
                        <div className="me-xl-5 me-lg-4 h-100 d-flex align-items-center">
                            <a className={"menu " + (props.activePage === "contact" ? " active" : "") + (props.activePage === "contact" && headerScroll ? "header-scroll active" : "")} href="/contact">{props.menuItems ? props.menuItems['contact-us'] : ''}</a>
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

            <div className={"mobile-menu" + (mobileMenuOpen ? " " : " fade-out")}>
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
                                <a className="burger-menu" href="/">{props.menuItems?.home}</a>
                            </div>
                            <div className="pb-3">
                                <a className="burger-menu" href="/our-story">{props.menuItems ? props.menuItems['our-story'] : ''}</a>
                            </div>
                            <div className="pb-3">
                                <a className="burger-menu" href="/products">{props.menuItems?.products}</a>
                            </div>
                            <div className="dropdown pb-4">
                                {/* <a onClick={dropdownSlide} href="#" className="burger-menu" >SERVICES</a> */}
                                <div className="mb-3">
                                    <a href="/services" className="burger-menu" >{props.menuItems?.services}</a>
                                </div>
                                {/* <div className={" mobile-dropdown" + (dropdownOpen ? "" : " remove")}> */}
                                <div className="mobile-dropdown d-grid">
                                    <a href={"/services/" + 1}>Operations</a>
                                    <a href={"/services/" + 1}>Strategy</a>
                                    <a href={"/services/" + 1}>Innovation</a>
                                    <a href={"/services/" + 1}>Project management</a>
                                    <a href={"/services/" + 1}>Intellectual property</a>
                                    <a href={"/services/" + 1}>Sales and Marketing</a>
                                    <a href={"/services/" + 1}>Finance</a>
                                </div>
                            </div>
                            <div className="dropdown pb-3">
                                <div className="mb-3">
                                    <a className="burger-menu" href="/industries">{props.menuItems?.industries}</a>
                                </div>
                                <div className="mobile-dropdown d-grid">
                                    <a href="/industries/1">Tobacco</a>
                                    <a href="/industries/1">INVNT</a>
                                    <a href="/industries/1">FMCG</a>
                                </div>
                            </div>
                            <div className="pb-3">
                                <a className="burger-menu" href="/insights">{props.menuItems?.insights}</a>
                            </div>
                            <div className="pb-3">
                                <a className="burger-menu" href="/contact">{props.menuItems ? props.menuItems['contact-us'] : ''}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {props.children}


            <div className=" position-relative">
                <div className="footer-img">
                    <img src="/img/images/footer-bg.png" alt="bg" />
                </div>
                <div className="container">
                    <div className="row footer align-items-center justify-content-between">
                        <div className="col-lg-5 col-md-12 justify-content-md-center text-lg-start text-center">
                            <div className="background-blue py-lg-5 py-4">
                                <div className="row justify-content-center justify-content-lg-start  align-items-center position-relative">
                                    <div className="col-lg-3 ">
                                        <a href="/">
                                            <img src="/img/images/logo-footer.svg" alt="logo" />
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-md-5 col-sm-8 col-9">
                                        <div className="d-none d-lg-block">
                                            {
                                                props?.footerContactIcons ?
                                                    props.footerContactIcons.map(footerContactIcon =>
                                                        <a target="_blank" rel="noreferrer" href={footerContactIcon.url}>
                                                            <img className="social-icon me-3" src={footerContactIcon.icon} alt="icon" />
                                                        </a>
                                                    )
                                                    :
                                                    null
                                            }
                                        </div>
                                        <div className="pt-3">
                                            <p>{props.menuItems ? props.menuItems['footer-text'] : ''}</p>
                                        </div>
                                        <div className="d-block d-lg-none pb-3">
                                            {
                                                props?.footerContactIcons ?
                                                    props.footerContactIcons.map(footerContactIcon =>
                                                        <a target="_blank" rel="noreferrer" href={footerContactIcon.url}>
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
                                                        <a className={"mobile-footer" + (props.activePage === "our-story" ? " active" : "")} href="/our-story">{props.menuItems ? props.menuItems['our-story'] : ''}</a>
                                                    </div>
                                                    <div className="mb-4">
                                                        <a className={"mobile-footer" + (props.activePage === "products" ? " active" : "")} href="/products">{props.menuItems?.products}</a>
                                                    </div>
                                                    <div className="mb-4">
                                                        <a className={"mobile-footer" + (props.activePage === "services" ? " active" : "")} href="/services">{props.menuItems?.services}</a>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="mb-4">
                                                        <a className={"mobile-footer" + (props.activePage === "industries" ? " active" : "")} href="/industries">{props.menuItems?.industries}</a>
                                                    </div>
                                                    <div className="mb-4">
                                                        <a className={"mobile-footer" + (props.activePage === "insights" ? " active" : "")} href="/insights">{props.menuItems?.insights}</a>
                                                    </div>
                                                    <div className="mb-4">
                                                        <a className={"mobile-footer" + (props.activePage === "contact" ? " active" : "")} href="/contact">{props.menuItems ? props.menuItems['contact-us'] : ''}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                {
                                                    props.socialMedia ?
                                                        props.socialMedia.map(social =>
                                                            <a target="_blank" rel="noreferrer" href={social.url}>
                                                                <img className="social-icon invert me-3" src={social.icon} alt="icon" />
                                                            </a>
                                                        )
                                                        :
                                                        null
                                                }
                                            </div>
                                            <div className="pt-4">
                                                {
                                                    props?.footerLogos ?
                                                        props.footerLogos.map(footerLogo =>
                                                            <img className="mx-3 invert" src={footerLogo.logo} alt="logo" />
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
                                            <a className={"footer-link" + (props.activePage === "our-story" ? " active" : "")} href="/our-story">{props.menuItems ? props.menuItems['our-story'] : ''}</a>
                                        </div>
                                        <div className="mb-3">
                                            <a className={"footer-link" + (props.activePage === "products" ? " active" : "")} href="/products">{props.menuItems?.products}</a>
                                        </div>
                                        <div>
                                            <a className={"footer-link" + (props.activePage === "services" ? " active" : "")} href="/services">{props.menuItems?.services}</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 d-block">
                                    <div className="d-grid">
                                        <div className="mb-3">
                                            <a className={"footer-link" + (props.activePage === "industries" ? " active" : "")} href="/industries">{props.menuItems?.industries}</a>
                                        </div>
                                        <div className="mb-3">
                                            <a className={"footer-link" + (props.activePage === "insights" ? " active" : "")} href="/insights">{props.menuItems?.insights}</a>
                                        </div>
                                        <div>
                                            <a className={"footer-link" + (props.activePage === "contact" ? " active" : "")} href="/contact">{props.menuItems ? props.menuItems['contact-us'] : ''}</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-auto d-block justify-content-center">

                                    <div className="d-flex pb-3 text-center">
                                        {
                                            props?.footerLogos ?
                                                props.footerLogos.map(footerLogo =>
                                                    <img className="ms-3" src={footerLogo.logo} alt="logo" />
                                                )
                                                :
                                                null
                                        }
                                    </div>

                                    <div className="d-flex">
                                        {
                                            props.socialMedia ?
                                                props.socialMedia.map(social =>
                                                    <a target="_blank" rel="noreferrer" href={social.url}>
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
        </>
    )
}