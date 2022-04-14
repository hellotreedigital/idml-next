import Link from "next/link";

export default function SideButton(props) {

    return (
        <div className="position-relative">
            <Link href="/booking">
                <div className="button side-button">BOOK A CONSULTATION</div>
            </Link>
        </div>
    )
}

