export default function BluePill(props) {
    return (
        <div className="blue-pill cursor-opposite">
            <img className="blue-circle" src={props.icon} alt="icon" />
            <div className="text-center remove-on-hover">
                <p className="mb-0">{props.title}</p>
            </div>
            <div className="text-center show-on-hover">
                <p className="mb-0 py-5">{props.readMore}</p>
            </div>
        </div>
    )
}