
import Link from "next/link";

export default function NewsSection(props) {
    return (
        <div className="news-section shadow position-relative mb-3">
            <div className="ratio news-image">
                <img src={props.image} alt="news" />
            </div>
            <div className=" ">
                <div className="news-on-hover d-flex align-items-center  p-4 px-4">
                    <h3 className="me-3 mb-0">{props.title}</h3>
                    <h4 className="date mb-0">{props.date}</h4>
                </div>
                <div className="content-news p-4 px-4 d-flex flex-column justify-content-center">
                    <div>
                        <div className="d-md-flex d-block align-items-center  mb-2">
                            <h3 className="">{props.title}</h3>
                            <h4 className="date">{props.date}</h4>
                        </div>
                        <p className="mb-1">{props.description}</p>
                    </div>
                    <span className="underlined-link" >{props.button}</span>
                </div>
            </div>
        </div>
    )
}