/* eslint-disable @typescript-eslint/no-unused-vars */
import { SyntheticEvent, useEffect, useRef } from "react";

interface Props {
    navOpen: boolean | null;
}

const Navbar = ({ navOpen }: Props) => {
    const lastActiveLink = useRef<HTMLElement | null>(null);
    const activeBox = useRef<HTMLDivElement | null>(null);

    const initActiveBox = () => {
        if (activeBox.current && lastActiveLink.current) {
            const activeBoxEl = activeBox.current;
            const lastActiveLinkEl = lastActiveLink.current;

            activeBoxEl.style.top = `${lastActiveLinkEl.offsetTop}px`;
            activeBoxEl.style.left = `${lastActiveLinkEl.offsetLeft}px`;
            activeBoxEl.style.width = `${lastActiveLinkEl.offsetWidth}px`;
            activeBoxEl.style.height = `${lastActiveLinkEl.offsetHeight}px`;
        }
    };

    useEffect(() => {
        const homeLink = document.querySelector(
            ".nav-link.active"
        ) as HTMLElement;
        if (homeLink) {
            lastActiveLink.current = homeLink;
            initActiveBox();
        }
    }, []);
    window.addEventListener("resize", initActiveBox);

    const activeCurrentLink = (event: SyntheticEvent) => {
        if (lastActiveLink.current) {
            lastActiveLink.current.classList.remove("active");
        }
        if (event.target instanceof HTMLElement) {
            event.target.classList.add("active");
            lastActiveLink.current = event.target;
            initActiveBox();
        }
    };

    const navItems = [
        { label: "Home", link: "#home", className: "nav-link active" },
        { label: "About", link: "#about", className: "nav-link" },
        { label: "Skill", link: "#skills", className: "nav-link" },
        { label: "Projects", link: "#projects", className: "nav-link" },
        { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
    ];

    return (
        <nav className={`navbar ${navOpen ? "active" : ""}`}>
            {navItems.map(({ label, link, className }, key) => (
                <a
                    href={link}
                    className={className}
                    onClick={activeCurrentLink}
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
