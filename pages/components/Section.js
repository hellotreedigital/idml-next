export default function Section(props) {
    return (
        <div className="container" animate="left">
            <div className="row">
                <div className="col-12 pb-5">
                    <h2 className="mb-4" animate="left">{props.title}</h2>
                    <p className="home-small-paragraph mb-4" animate="left">{props.subtitle}</p>
                    {
                        props.button === "1" ?
                            <a href="/booking">
                                <button className="button blue-button mt-4 remove-padding shadow">
                                    {props.label}
                                </button>
                            </a>
                            :
                            null}
                    {
                        props.button === "2" ?
                            <a href="/contact">
                                <button className="button blue-button  shadow">
                                    {props.label}
                                </button>
                            </a>
                            :
                            null}
                </div>
            </div>
        </div>
    )
}