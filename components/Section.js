import Link from "next/link";

export default function Section(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 pb-5">
                    <h2 className="mb-4">{props.title}</h2>
                    <p className="home-small-paragraph mb-4">{props.subtitle}</p>
                    {
                        props.button === "1" ?
                            <Link href="/booking">
                                <button className="button blue-button mt-4 remove-padding shadow">
                                    {props.label}
                                </button>
                            </Link>
                            :
                            null}
                    {
                        props.button === "2" ?
                            <Link href="/contact">
                                <button className="button blue-button  shadow">
                                    {props.label}
                                </button>
                            </Link>
                            :
                            null}
                </div>
            </div>
        </div>
    )
}