import { useId } from "react";
import "./css/global-nav.css";
import "./css/css-gg.css";
import { menu } from "./data/menu";

function GlobalNav({ onNav, onOpenGlobalNav, openGlobalNav }) {

    const id = useId();

    const list = menu.map(item => {
        return (
            <li key={id + item.name}>
                <a
                    className="global__nav__link"
                    href="/"
                    onClick={event => onNav(event)}
                    aria-label="global nav"
                    tabIndex={openGlobalNav ? 0 : -1}
                >
                    <i className={`${item.icon_class}`} />
                    {item.name}
                </a>
            </li>
        );
    });

    return (
        <>
            <button
                className={`global__nav__main__button ${openGlobalNav ? "global__nav__main__button--black" : ""}`}
                onClick={onOpenGlobalNav}
                aria-label="toggle global nav"
            >
                <i className={openGlobalNav ? "gg-chevron-left-o" : "gg-chevron-right-o"} />
            </button>
            <nav className={`global__nav ${openGlobalNav ? "global__nav--open" : ""}`}>
                <ul className="global__nav__list">
                    {list}
                </ul>
            </nav>
        </>
    );
}

export default GlobalNav;