import Link from "next/link";

export default function verificationPopup(props) {
    return (
        <div className="row ">
            <div className="col-lg-10 col-md-10 col-sm-10 col-11">
                <div className="popup-age change-color">
                    <div className="close-svg cursor-opposite" onClick={() => props.ageClose()} >
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
                            <img src={props.image} alt="age" />
                            <div className="py-4">
                                <h3 className="mb-2">{props.title}</h3>
                                <h4 className="mb-0">{props.text}</h4>
                            </div>
                            <div className="row justify-content-center p-3">
                                <div className="col-lg-4 col-md-4">
                                    <Link href={"/industries/" + props.slug}>
                                        <a>
                                            <div className="button blue-button verification-button  fix-padding shadow cursor-opposite">{props.button}</div>
                                        </a>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-4 pt-md-0 pt-3">
                                    <div onClick={() => props.ageClose()} className="button white-button verification-button add-border shadow cursor-opposite">{props.secondButton}</div>
                                </div>
                                {/* onClick={() => setAgeVerificationPopup(false)} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}