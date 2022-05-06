import Link from "next/link";

export default function Section(props) {
    return (
        <div className="container px-sm-2 px-4">
            <div className="row">
                <div className="col-12 pb-5">
                    <h2 className="mb-4">{props.title}</h2>
                    <p className="home-small-paragraph mb-4">{props.subtitle}</p>
                    {
                        props.button === "1" ?
                            <Link href="/booking">
                                <a>
                                    <button className="button blue-button mt-4 remove-padding shadow cursor-opposite">
                                        {props.label}
                                    </button>
                                </a>
                            </Link>
                            :
                            null}
                    {
                        props.button === "2" ?
                            <Link href="/booking">
                                <a>
                                    <button className="button blue-button  shadow cursor-opposite">
                                        {props.label}
                                    </button>
                                </a>
                            </Link>
                            :
                            null}
                </div>
            </div>
        </div>
    )
}