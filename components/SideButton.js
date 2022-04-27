import Link from "next/link";

export default function SideButton(props) {

    return (
        <div className="position-relative">
            <Link href="/booking">
                <a>
                    <div className="button side-button">{props.title}</div>
                </a>
            </Link>
        </div>
    )
}

