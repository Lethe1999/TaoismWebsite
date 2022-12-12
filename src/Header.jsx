import "./css/header.css";
import "./css/css-gg.css";
import logoImg from "./img/logo.png";

function Header({ onOpenGlobalNav, onTheme, theme, onOpenModal }) {
    const themeIconClass = (theme === '') ? "gg-moon" : "gg-sun";

    return (
        <header className="header">
            <button className="global__nav__button" onClick={onOpenGlobalNav} aria-label="global nav">
                <i className='gg-menu-left-alt' />
            </button>
            <a className='logo__title' href="/">
                <img
                    className='logo__image'
                    src={logoImg}
                    alt="This is the Taoism logo"
                    aria-label="logo"
                />
                <h1 className='header__title'>Taoism</h1>
            </a>
            <div className="header__accessories">
                <button className="theme__button" onClick={onTheme} aria-label="change theme">
                    <i className={themeIconClass} />
                </button>
                <a
                    className='join__button'
                    href="/"
                    onClick={event => onOpenModal(event)}
                >join us</a>
            </div>
        </header>
    );
}

export default Header;