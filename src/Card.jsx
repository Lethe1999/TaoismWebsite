import "./css/card.css";

function Card({ item, theme, onNav }) {
    return (
        <div className={`card ${theme}`} tabIndex="0">
            <div className="card__thumb">
                <img className="card__image" src={item.image_src} alt={item.image_alt} aria-label="card" />
                <div className="card__caption">
                    <h2 className="card__title">{item.title}</h2>
                    <p className="card__content">{item.content}</p>
                    <a className="card__button" href="/" onClick={event => onNav(event)}>Details</a>
                </div>
            </div>
        </div>
    );
}

export default Card;