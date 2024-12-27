/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";

interface Props {
    navOpen: boolean | null;
}

const Navbar = ({ navOpen }: Props) => {
    const lastActiveLink = useRef(null);
    const activeBox = useRef(null);
    const navItems = [
        {
            label: "Home",
            link: "#home",
            className: "nav-link active",
            ref: lastActiveLink,
        },
        {
            label: "About",
            link: "#about",
            className: "nav-link",
        },
        {
            label: "Work",
            link: "#work",
            className: "nav-link",
        },
        {
            label: "Reviews",
            link: "#reviews",
            className: "nav-link",
        },
        {
            label: "Contact",
            link: "#contact",
            className: "nav-link md:hidden",
        },
    ];
    return (
        <nav className={"navbar " + (navOpen ? "active" : "")}>
            {navItems.map(({ label, link, className, ref }, key) => (
                <a
                    href={link}
                    className={className}
                    ref={ref}
                    onClick={() => {}}
                    key={key}
                >
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

export default Navbar;
