import "./css/main.css";
import { useState } from "react";

import GlobalNav from "./GlobalNav";
import Home from "./Home";
import Gallery from "./Gallery";
import Doctrines from "./Doctrines";
import Details from "./Details";
import Modal from "./Modal";

function Main({ onOpenGlobalNav, openGlobalNav, theme, openModal, onCloseModal }) {

    // Nav page
    const [page, setPage] = useState("Home");
    function onNav(event) {
        event.preventDefault();

        var targetPage = event.target.innerText;
        if (targetPage === 'DETAILS') {
            targetPage = 'Details';
        }
        setPage(targetPage);
    }

    return (
        <main id="main" className={`main ${theme}`}>
            <GlobalNav onNav={onNav} onOpenGlobalNav={onOpenGlobalNav} openGlobalNav={openGlobalNav} />
            <Modal open={openModal} onCloseModal={onCloseModal} />
            {page === 'Home' && <Home theme={theme} />}
            {page === 'Gallery' && <Gallery theme={theme} />}
            {page === 'Doctrines' && <Doctrines theme={theme} onNav={onNav} />}
            {page === 'Details' && <Details theme={theme} />}
        </main>
    );
}

export default Main;