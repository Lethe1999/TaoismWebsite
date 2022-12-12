import "./css/modal.css";
import Form from "./Form";

function Modal(props) {
    return (
        <div
            className={`modal--container ${props.open ? 'modal--open' : ''}`}
            onClick={event => props.onCloseModal(event)}
        >
            <div
                className="modal"
                onClick={event => event.stopPropagation()}
            >
                <a
                    className="modal__link--close"
                    href="/"
                    onClick={event => props.onCloseModal(event)}
                    aria-label="close"
                >x</a>
                <Form />
            </div>
        </div >
    );
}

export default Modal;