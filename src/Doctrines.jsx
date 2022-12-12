import "./css/doctrines.css";
import Card from "./Card";
import { doctrineList } from "./data/doctrineList";
import { useId } from "react";

function Doctrines({ theme, onNav }) {

    const id = useId();

    return (
        <div className={`doctrines ${theme}`}>
            {
                doctrineList.map(item => {
                    return (
                        <Card item={item} theme={theme} onNav={onNav}
                            key={id + item.title} />
                    );
                })
            }
        </div>
    );
}

export default Doctrines;