import "./css/home.css";
import { useId } from "react";
import Accordion from "./Accordion";

const titleText = [`Compassion`, `Frugality`, `Humility`];
const content = `Chinese philosophy and religion`;

function Home({ theme }) {
    const id = useId();

    const homeTopClass = (theme === '') ? "home__top--light" : "home__top--dark";

    const title = titleText.map(item => {
        return (
            <h1
                className="home__title"
                key={id + item}
            >{item}</h1>
        );
    });

    return (
        <>
            <div className={`home__top ${homeTopClass}`}>
                <div className="home__text">
                    {title}
                    <h2 className="home__content">{content}</h2>
                </div>
            </div>
            <Accordion />
        </>
    );
}

export default Home;