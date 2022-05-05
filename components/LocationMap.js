import { useEffect, useRef, useState } from "react";

export default function LocationMap(props) {

    const [pinOnEdge, setPinOnEdge] = useState(false);


    const pinRef = useRef();

    function pinClick(pinLocation) {
        props.setPinDetails(pinLocation.id)
    }


    function closeClick(pinLocation) {
        props.setPinDetails(null)
    }

    useEffect(() => {
        setPinOnEdge(pinRef.current.getBoundingClientRect().x + 200 > window.innerWidth)
    }, [pinRef]);

  
    // animation-delay: #{$i * 0.5}s;
    return (
        <>
            <div className="">
                {/* <div className="position-absolute pin-location" style={{ top: props.y + '%', left: props.x + '%' }} onClick={() => pinClick(props.pinLocation)}> */}
                <div className="position-absolute pin-location" style={{ top: props.y + '%', left: props.x + '%' }} onClick={() => pinClick(props.pinLocation)}>
                    <img ref={pinRef} className={" pins pin-delay" + (props.pinLocation.operations_map_legend_id === 5 ? " pin-home" : " ")} src={props.pin} alt="pin" animate="" style={{ transitionDelay: props.index * 0.1 + 's' }}  />
                    <div className={"location-details-hover d-none d-sm-none d-md-block d-lg-block" + (pinOnEdge ? " pin-on-edge" : " ") + (props.pinDetails === props.id ? " " : " fade-out")}>
                        <div className="row p-3">
                            <div className="col-auto">
                                {
                                    <>
                                        <h2 className={props.description ? " " : " mb-0"}>{props.title}</h2>
                                        <p className={props.description ? " " : " d-none"}>{props.description}</p>
                                        {props.phone ?
                                            <>

                                                <a className={"d-flex align-items-center map-details pb-3" + (props.title ? " pt-2" : " ")} href={"tel:" + props.phoneUrl}>
                                                    <img src={props.iconPhone} alt="icon" />
                                                    <p className="mb-0 ms-3">{props.phone}</p>
                                                </a>
                                            </>
                                            :
                                            null
                                        }
                                        {props.locationUrl ?
                                            <a className="d-flex align-items-center map-details pb-3" target="_blank" rel="noreferrer" href={props.locationUrl}>
                                                <img src={props.locationIcon} alt="icon" />
                                                <p className="mb-0 ms-3">{props.location}</p>
                                            </a>
                                            :
                                            null
                                        }
                                        {props.email ?
                                            <a className="d-flex align-items-center map-details" href={"mailTo:" + props.email}>
                                                <img src={props.iconEmail} alt="icon" />
                                                <p className="mb-0 ms-3">{props.email}</p>
                                            </a>
                                            : null
                                        }
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"location-details d-block d-sm-block d-md-none d-lg-none" + (props.pinDetails === props.id ? " " : " fade-out")}>
                <div className="row p-3">
                    <div className="col">
                        <div className="close-details text-end" onClick={(e) => { e.stopPropagation(); closeClick() }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12.338 12.338">
                                <line id="Line_35" data-name="Line 35" y2="13.448" transform="translate(10.924 1.414) rotate(45)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.5"></line>
                                <line id="Line_36" data-name="Line 36" y2="13.448" transform="translate(1.414 1.414) rotate(-45)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.5"></line>
                            </svg>
                        </div>
                        {

                            <>
                                <h2>{props.title}</h2>
                                <p>{props.description}</p>
                                {props.phone ?
                                    <a className="d-flex align-items-center map-details pb-3" href={"tel:" + props.phoneUrl}>
                                        <img src={props.iconPhone} alt="icon" />
                                        <p className="mb-0 ms-3">{props.phone}</p>
                                    </a>
                                    :
                                    null
                                }
                                {props.locationUrl ?
                                    <a className="d-flex align-items-center map-details pb-3" target="_blank" rel="noreferrer" href={props.locationUrl}>
                                        <img src={props.locationIcon} alt="icon" />
                                        <p className="mb-0 ms-3">{props.location}</p>
                                    </a>
                                    :
                                    null
                                }
                                {props.email ?
                                    <a className="d-flex align-items-center map-details" href={"mailTo:" + props.email}>
                                        <img src={props.iconEmail} alt="icon" />
                                        <p className="mb-0 ms-3">{props.email}</p>
                                    </a>
                                    : null
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}