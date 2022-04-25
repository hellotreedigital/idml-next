import Link from "next/link";

export default function NotFound() {
    return (
        <div className="not-found position-relative py-5 h-100 d-flex flex-column justify-content-center">
            <div className="contact-bg">
                <img src="/assets/images/contact-bg.png" alt="background" />
            </div>
            <div className="row py-5 justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                    <div className="text-center not-found-image">
                        <img src="/assets/images/404.svg" alt="404" />
                    </div>
                </div>
            </div>
            <div className="row text-center position-relative not-found-content justify-content-center py-5">
                <div className="col-lg-8 col-md-6 col-9">
                    <h2 className="mb-4">Page not found</h2>
                    <p className="mb-4">The page you are looking for might have been removed or temporarily unavailable.</p>
                    <Link href="/">
                        <a>
                            <button className="button blue-button change-color shadow">
                                GO TO HOMEPAGE
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}