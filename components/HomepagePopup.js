export default function HomepagePopup(props) {
    return (
        <div className="modal-window team-member position-relative">
            <div className="popup-team home-popup-content">
                <div className="close-svg cursor-opposite" onClick={() => props.setHomePopup(null)}>
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
                <div className="row justify-content-center  align-items-center py-lg-5 py-3 gx-5 mx-lg-3 mx-2">
                    <div className="col-12 pt-4 pt-lg-0">
                        <div className="position-relative home-popup-image mb-3">
                                <img src={props.image} alt="team" className="position-absolute top-0 left-0 w-100 h-100" />
                        </div>
                    </div>
                    <div className="col-12 pt-lg-0">
                        <div className="mb-3">
                            <h3 className="mb-1 ">{props.title}</h3>
                            <p className="">{props.description}</p>
                        </div>
                        {props.url ?
                            <div className="text-center">
                                <a href={props.url} target="_blank" rel="noreferrer" className="homepopup-link">
                                    {props.label}
                                </a>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}