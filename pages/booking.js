import { useContext, useEffect, useState } from "react";
import Layout from "./components/Layout";

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Select from 'react-select';
import axios from "axios";
import GlobalState from "./components/GlobalState";

export default function Booking(props) {

    const { triggerScroll, calcMinHeight } = useContext(GlobalState);
    const bookingSettings = props.bookingData.page_items.book_consultation_settings;
    const countriesList = props.bookingData.page_items.countries_list;
    const menuItems = props.bookingData.fixed_titles;
    const socialMedia = props.bookingData.social_media;
    const footerLogos = props.bookingData.footer_logos;
    const footerContactIcons = props.bookingData.footer_contact_icons;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [countriesOptions, setCountriesOptions] = useState([]);
    const [message, setMessage] = useState('');
    const [successPopupOpen, setSuccessPopupOpen] = useState(false);
    const [errorMessages, setErrorMessages] = useState('');
    const [errorPopupOpen, setErrorPopupOpen] = useState(false);
    const [loadingForm, setLoadingForm] = useState('');
    const [loading, setLoading] = useState(true);


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
        calcMinHeight();
        setLoading(false);
    }, [countriesList, bookingSettings, loading]);


    const submitForm = (e) => {
        e.preventDefault();
        setLoadingForm(true);
        setErrorMessages(null);
        axios
            .post('book', {
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
            })
            .catch(r => {
                setErrorPopupOpen(true)
                setErrorMessages(r.response.data.errors)
            })
            .finally(() => {
                setLoadingForm(false)
            });
    }


    return loading ? null : (
        <Layout fixedNav={true} menuItems={menuItems} socialMedia={socialMedia} footerLogos={footerLogos} footerContactIcons={footerContactIcons}>
            {
                bookingSettings ?
                    <div className="min-height-js">
                        <div className="py-lg-5">
                            <div className="py-5">
                                <div className="py-5">
                                    <div className="container py-5" animate="up">
                                        <form onSubmit={submitForm} className="row py-5">
                                            <div className="text-center" animate="up">
                                                <h2 className="mb-4">{bookingSettings.title}</h2>
                                            </div>
                                            <div className="col-lg-6 col-md-6" animate="left">
                                                <div className="mb-4">
                                                    <input className="contact-form w-100" placeholder={bookingSettings.name_palceholder} value={name} onChange={e => setName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6" animate="right">
                                                <div className="mb-4">
                                                    <input className="contact-form w-100" placeholder={bookingSettings.email_placeholder} value={email} onChange={e => setEmail(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6" animate="left">
                                                <div className="mb-4">
                                                    <div className="booking-phone">
                                                        <PhoneInput
                                                            placeholder={bookingSettings.phone_number_placeholder}
                                                            value={phoneNumber}
                                                            onChange={setPhoneNumber}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 location-input" animate="right">
                                                <div className="mb-4">
                                                    <Select
                                                        Select classNamePrefix="location-select-booking"
                                                        placeholder={bookingSettings.location_placeholder}
                                                        value={location}
                                                        onChange={newValue => setLocation(newValue)}
                                                        options={countriesOptions}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12" animate="left">
                                                <div className="mb-4">
                                                    <textarea rows="4" className="contact-form w-100" placeholder={bookingSettings.message_placeholder} value={message} onChange={e => setMessage(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="text-center" >
                                                <button className="button blue-button" type="submit">

                                                    {
                                                        loadingForm ?
                                                            'Loading'
                                                            :
                                                            bookingSettings.book_button
                                                    }

                                                </button>
                                            </div>
                                        </form>
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
                                                <img className="popup-form-icon" src="../img/images/error.svg" alt="ceo" />
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
                                                        <button className="button blue-button color-hover" onClick={() => setErrorPopupOpen(false)}>{bookingSettings.error_popup_button}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"popup " + (successPopupOpen ? " " : " fade-out")}>
                            <div className="modal-window success-booking position-relative ">
                                <div className="">
                                    <div className="close-svg-popup" onClick={() => setSuccessPopupOpen(false)}>
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
                                        <div className="col-md-12 bg-popup-top">
                                            <div className="py-5">
                                                <img className="popup-form-icon" src="../img/images/success.svg" alt="ceo" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center text-center gx-5 mx-3">
                                        <div className="col-md-12 bg-popup-bottom py-5">
                                            <div className="row justify-content-center">
                                                <div className="col-10">
                                                    <h3 className="mb-4">{bookingSettings.success_message}</h3>
                                                    <div className="">
                                                        <button className="button blue-button" onClick={() => setSuccessPopupOpen(false)}>{bookingSettings.success_popup_button}</button>
                                                    </div>
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
        </Layout>

    )
}

export async function getStaticProps() {
    const bookingData = await axios.get("/book-a-consultation");
    return {
        props: {
            bookingData: bookingData.data,
        },
    };
}