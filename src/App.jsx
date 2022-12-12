import './css/app.css';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

    // GlobalNav button
    const [openGlobalNav, setOpenGlobalNav] = useState(false);
    function onOpenGlobalNav(event) {
        event.preventDefault();
        setOpenGlobalNav(!openGlobalNav);
    }

    // Theme
    const [theme, setTheme] = useState('');
    function onTheme(event) {
        event.preventDefault();
        if (theme === '') {     // On light mode - Change to dark mode
            setTheme('theme--dark');
        } else {                // On dark mode - Change to light mode
            setTheme('');
        }
    }

    // Toggle modal
    const [openModal, setOpenModal] = useState(false);
    function onOpenModal(event) {
        event.preventDefault();
        setOpenModal(true);
    }
    function onCloseModal(event) {
        event.preventDefault();
        setOpenModal(false);
    }

    return (
        <div className="app">
            <a href="#main" className="skip__link" aria-label="skip to the main content">Skip to main content</a>
            <Header
                onOpenGlobalNav={onOpenGlobalNav}
                onTheme={onTheme} theme={theme}
                onOpenModal={onOpenModal}
            />
            <Main
                onOpenGlobalNav={onOpenGlobalNav} openGlobalNav={openGlobalNav}
                theme={theme}
                openModal={openModal} onCloseModal={onCloseModal}
            />
            <Footer theme={theme} />
        </div>
    );
}

export default App;
