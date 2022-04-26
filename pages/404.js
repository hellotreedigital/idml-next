import axios from "axios";
import Link from "next/link";

export default function NotFound(props) {

    const notFoundSettings = props.notFoundData.page_items.page_not_found;

    return (
        <div className="not-found position-relative py-5 h-100 d-flex flex-column justify-content-center">
            <div className="contact-bg">
                <img src="../img/images/contact-bg.png" alt="background" />
            </div>
            <div className="row py-5 justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                    <div className="text-center not-found-image">
                        <img src={notFoundSettings.image} alt="404" />
                    </div>
                </div>
            </div>
            <div className="row text-center position-relative not-found-content justify-content-center py-5">
                <div className="col-lg-8 col-md-6 col-9">
                    <h2 className="mb-4">{notFoundSettings.title}</h2>
                    <p className="mb-4">{notFoundSettings.subtitle}</p>
                    <Link href="/">
                        <a>
                            <button className="button blue-button change-color shadow">
                            {notFoundSettings.button}
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const notFoundData = await axios.get("/not-found");
    return {
        props: {
            notFoundData: notFoundData.data,
        },
        revalidate: 10,
    };
}