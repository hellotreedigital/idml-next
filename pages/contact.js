import { useContext, useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import Layout from "../components/layout";
import SideButton from "../components/SideButton";

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Select from 'react-select'
import axios from "axios";
import GlobalState from "../GlobalState";
import SeoTags from "../components/SeoTags";


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export default function Contact(props) {
    const { triggerScroll } = useContext(GlobalState);
    const contactSettings = props.contactData.page_items.contact_settings;
    const contactOffices = props.contactData.page_items.contact_offices;
    const countriesList = props.contactData.page_items.countries_list;
    const menuItems = props.contactData.fixed_titles;
    const socialMedia = props.contactData.social_media;
    const footerLogos = props.contactData.footer_logos;
    const footerContactIcons = props.contactData.footer_contact_icons;
    const serviceTitles = props.contactData.services_titles;
    const industriesTitles = props.contactData.industries_titles;
    const productSetting = props.contactData.product_settings;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [countriesOptions, setCountriesOptions] = useState([]);
    const [message, setMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState('');
    const [successPopupOpen, setSuccessPopupOpen] = useState(false);
    const [errorPopupOpen, setErrorPopupOpen] = useState(false);
    const [loadingForm, setLoadingForm] = useState('');

    const popupRef = useRef(null);

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
          if (popupRef.current && !popupRef.current.contains(event.target)) {
            setSuccessPopupOpen(false)
            setErrorPopupOpen(false)
          }
        }
    
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [popupRef, setErrorPopupOpen, setSuccessPopupOpen]);


    useEffect(() => {

        let newCountries = [];
        countriesList.forEach((country) => {
            newCountries.push({
                value: country.id,
                label: country.name,
            });
        });
        setCountriesOptions(newCountries);

        triggerScroll();
    }, [countriesList, contactSettings]); // eslint-disable-line react-hooks/exhaustive-deps

    const submitForm = (e) => {
        e.preventDefault();
        setLoadingForm(true);
        setErrorMessages(null);
        axios.post('contact', {
            'name': name,
            'phone_number': phoneNumber,
            'email': email,
            'location': location?.label,
            'message': message,
        })
            .then(r => {
                setName('')
                setPhoneNumber('')
                setEmail('')
                setLocation('')
                setMessage('')
                setErrorPopupOpen([]);
                setErrorPopupOpen(false)
                setSuccessPopupOpen(true)
                setTimeout(() => {
                    setLoadingForm('');
                }, 3000);
            })
            .catch(r => {
                setErrorPopupOpen(true)
                setErrorMessages(r.response.data.errors)
                setLoadingForm(false)
            });
    }

    return (
        <Layout activePage="contact" productSetting={productSetting} menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons} serviceTitles={serviceTitles} industriesTitles={industriesTitles}>

            <SeoTags
                title={props.contactData.page_items.seo.title}
                description={props.contactData.page_items.seo.description}
                image={props.contactData.page_items.seo.image}
            />

            {
                contactSettings ?
                    <>
                        <Banner
                            banner={contactSettings.image}
                            video={contactSettings.banner_video}
                            title={contactSettings.title}
                        />
                        <SideButton
                            title={menuItems['book-a-consultation']}
                        />
                        <div className="py-lg-5">
                            <div className="container px-sm-2 px-4 contact-us py-5"  >
                                <div className="row py-lg-5 pt-5">
                                    {
                                        contactOffices ?
                                            contactOffices.map((contactOffice, index) =>
                                                <div className="col-lg-6 col-md-12 justify-content-center mb-5 " key={index}>
                                                    <div className="row mb-4 mb-lg-0">
                                                        <div className="col-lg-6 col-md-6 justify-content-center pb-md-0 pb-3 ">
                                                            <iframe title="map" className="maps" src={contactOffice.map_url} loading="lazy" />
                                                        </div>

                                                        <div className="col-lg-6 col-md-6 justify-content-center ">
                                                            <h2 className="mb-4">{contactOffice.title}</h2>
                                                            <div className="">
                                                                <div className="d-flex align-items-center mb-3">
                                                                    <img className="me-3 social-contact-icon" src={contactSettings.office_phone_icon} alt="icon" />
                                                                    <a className="underlined" href={"tel:" + contactOffice.phone_number} >{contactOffice.phone_number}</a>
                                                                </div>

                                                                <div className="d-flex align-items-center mb-3">
                                                                    <img className="me-3 social-contact-icon" src={contactSettings.office_location_icon} alt="icon" />
                                                                    <a rel="noreferrer" className="underlined" target="_blank" href={contactOffice.location_url}>{contactOffice.location}</a>
                                                                </div>

                                                                <div className="d-flex align-items-center">
                                                                    <img className="me-3 social-contact-icon" src={contactSettings.office_email_icon} alt="icon" />
                                                                    <a className="underlined" href={"mailTo:" + contactOffice.email}>{contactOffice.email}</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                            :
                                            null
                                    }
                                </div>
                                <div className="py-5">
                                    <div className="booking-bg position-relative">
                                        <div className="contact-bg">
                                            <img src="../img/images/bg-contact-us.png" alt="icon" />
                                        </div>
                                        <form onSubmit={submitForm} className="row justify-content-center position-relative">
                                            <div className="col-lg-10 col-12">
                                                <div className="row justify-content-center text-center mx-lg-5 mx-3 py-5">
                                                    <h3 className="mb-5">{contactSettings.form_title}</h3>
                                                    <div className="col-lg-6"  >
                                                        <div className="mb-4 text-start">
                                                            <input className="booking-form w-100" placeholder={contactSettings.name_placeholder} value={name} onChange={e => setName(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6"  >
                                                        <div className="mb-4 text-start">
                                                            <input className="booking-form w-100" placeholder={contactSettings.email_placeholder} value={email} onChange={e => setEmail(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6"  >
                                                        <div className="mb-4 text-start">
                                                            <PhoneInput
                                                                placeholder={contactSettings.phone_placeholder}
                                                                value={phoneNumber}
                                                                onChange={setPhoneNumber}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 location-input"  >
                                                        <div className="mb-4 text-start ">
                                                            <Select
                                                                classNamePrefix="location-select"
                                                                placeholder={contactSettings.location_placeholder}
                                                                value={location}
                                                                onChange={newValue => setLocation(newValue)}
                                                                options={countriesOptions}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12"  >
                                                        <div className="mb-4 text-start">
                                                            <textarea rows="4" className="booking-form w-100" placeholder={contactSettings.message_placeholder} value={message} onChange={e => setMessage(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <button className="button blue-button contact-button" type="submit">

                                                            {
                                                                loadingForm ?
                                                                    'Loading'
                                                                    :
                                                                    contactSettings.button
                                                            }
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    null
            }

            <div className={"popup " + (successPopupOpen ? " " : " fade-out")}>
                <div className="modal-window success-booking position-relative ">
                    <div className="">
                        <div className="close-svg-popup" onClick={() => setSuccessPopupOpen(false)} ref={popupRef}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="37" viewBox="0 0 49 37">
                                <g id="Group_3343" data-name="Group 3343" transform="translate(-908 -203)">
                                    <g id="Group_3345" data-name="Group 3345">
                                        <path id="Rectangle_271" data-name="Rectangle 271" d="M0,0H12A37,37,0,0,1,49,37v0a0,0,0,0,1,0,0H27.75A27.75,27.75,0,0,1,0,9.25V0A0,0,0,0,1,0,0Z" transform="translate(908 203)" fill="#ccd7e0" />
                                        <g id="Group_3055" data-name="Group 3055" transform="translate(27.465 23.965)">
                                            <line id="Line_8" data-name="Line 8" x2="9.07" y2="9.07" transform="translate(900.5 193.5)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                            <line id="Line_9" data-name="Line 9" x1="9.07" y2="9.07" transform="translate(900.5 193.5)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="row justify-content-center text-center  gx-5 mx-3">
                            <div className="col-12 bg-popup-top">
                                <div className="py-lg-5 py-3">
                                    <img className="popup-form-icon" src="../img/images/success.svg" alt="success" />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center text-center gx-5 mx-3">
                            <div className="col-12 bg-popup-bottom py-lg-5 py-3 ">
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <h3 className="mb-4">{contactSettings.success_message}</h3>
                                        <div className="">
                                            <button className="button blue-button color-hover"  ref={popupRef} onClick={() => setSuccessPopupOpen(false)}>{contactSettings.success_popup_button}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"popup " + (errorPopupOpen ? " " : " fade-out")}>
                <div className="modal-window success-booking position-relative ">
                    <div className="">
                        <div className="close-svg-popup" onClick={() => setErrorPopupOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="37" viewBox="0 0 49 37">
                                <g id="Group_3343" data-name="Group 3343" transform="translate(-908 -203)">
                                    <g id="Group_3345" data-name="Group 3345">
                                        <path id="Rectangle_271" data-name="Rectangle 271" d="M0,0H12A37,37,0,0,1,49,37v0a0,0,0,0,1,0,0H27.75A27.75,27.75,0,0,1,0,9.25V0A0,0,0,0,1,0,0Z" transform="translate(908 203)" fill="#ccd7e0" />
                                        <g id="Group_3055" data-name="Group 3055" transform="translate(27.465 23.965)">
                                            <line id="Line_8" data-name="Line 8" x2="9.07" y2="9.07" transform="translate(900.5 193.5)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                            <line id="Line_9" data-name="Line 9" x1="9.07" y2="9.07" transform="translate(900.5 193.5)" fill="none" stroke="#14334a" strokeLinecap="round" strokeWidth="2" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="row justify-content-center text-center  gx-5 mx-3">
                            <div className="col-12 bg-popup-top">
                                <div className="py-5">
                                    <img className="popup-form-icon" src="../img/images/error.svg" alt="error" />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center text-center gx-5 mx-3">
                            <div className="col-12 bg-popup-bottom py-5">
                                <div className="row justify-content-center">
                                    <div className="col-10 pt-3">
                                        {
                                            errorMessages?.name ?
                                                <p className="error-message">{errorMessages?.name}</p>
                                                :
                                                null
                                        }

                                        {
                                            errorMessages?.email ?
                                                <p className="error-message">{errorMessages?.email}</p>
                                                :
                                                null
                                        }

                                        {
                                            errorMessages?.phone_number ?
                                                <p className="error-message">{errorMessages?.phone_number}</p>
                                                :
                                                null
                                        }
                                        {
                                            errorMessages?.location ?
                                                <p className="error-message">{errorMessages?.location}</p>
                                                :
                                                null
                                        }
                                        {
                                            errorMessages?.message ?
                                                <p className="error-message">{errorMessages?.message}</p>
                                                :
                                                null
                                        }
                                        <div className="pt-3">
                                            <button className="button blue-button color-hover" onClick={() => setErrorPopupOpen(false)}>{contactSettings.error_popup_button}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>

    )
}


export async function getStaticProps() {
    const contactData = await axios.get("/contact-us");
    return {
        props: {
            contactData: contactData.data,
        },
        revalidate: 10,
    };
}