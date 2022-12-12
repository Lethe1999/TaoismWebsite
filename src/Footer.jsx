import "./css/footer.css";

function Footer({ theme }) {
    return (
        <footer className={`footer ${theme}`}>
            <span className="footer__title">
                &copy;2022 Explore Taoism || Designed By: Changyu
            </span>
        </footer>
    );
}

export default Footer;