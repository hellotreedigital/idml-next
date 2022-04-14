import { useRef } from "react";

export default function Banner(props) {

    const videoRef = useRef();

    return (
        <div className="position-relative">

            {
                <>
                    <div className="ratio banner-ratio">
                        {
                            props.video ?
                                <>
                                    <video muted loop autoPlay playsInline ref={videoRef}>
                                        <source src={props.video} />
                                    </video>

                                </>
                                :
                                <img src={props.banner} alt="" id="image-on-video" />
                        }
                    </div>
                </>
            }
            <div className="title-banner">
                <h1 className="mb-0">{props.title}</h1>
            </div>
        </div>
    )
}