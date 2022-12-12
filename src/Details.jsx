import { useId } from "react";
import "./css/details.css";
import { doctrineList } from "./data/doctrineList";

function Details({ theme }) {
    const id = useId();

    return (
        <div className="details">
            {
                doctrineList.map((item, index) => {
                    return (
                        <div className={`details__section ${theme}`} key={id + index} style={{ backgroundImage: `url(${item.image_src})` }}>
                            <div className="details__content">
                                <h1 className="details__title">{item.title}</h1>
                                <span className="details__paragraph">{item.content}</span>
                            </div>
                            <div className={`details__overlay ${theme}`}></div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Details;