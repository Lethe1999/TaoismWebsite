import "./css/form.css";
import { useId, useState } from "react";

function Form() {
    const id = useId();
    const beliefMenu = [`Taoism`, `Asian Religion`, `Euro Religion`, `Other`];

    const [name, setName] = useState('');               // Input name text
    const [validName, setValidName] = useState(true);
    const onNameChange = event => {
        const tmpName = event.target.value;
        if (tmpName.length >= 10) {
            // Invalid name
            setValidName(false);
            setName('');
        } else {
            setValidName(true);
            setName(tmpName);
        }
    }

    const [email, setEmail] = useState('');             // Input email text
    const [validEmail, setValidEmail] = useState(true);
    const onEmailChange = event => {
        const tmpEmail = event.target.value;
        for (let i = 0; i < tmpEmail.length; i++) {
            if (tmpEmail.charAt(i) === '@') {
                setValidEmail(true);
                setEmail(tmpEmail);
                return;
            }
        }
        // Invalid email
        setValidEmail(false);
        setEmail('');
    }

    const [useSameEmail, setUseSameEmail] = useState(false);    // Use same email


    const handleSubmit = event => {
        event.preventDefault();

        if (name.length <= 0 || name.length >= 10) {
            event.preventDefault();
            setValidName(false);
            return;
        }
        
        // Same email input
        if (event.target[1].value !== event.target[3].value) {
            event.preventDefault();
            alert('Email not match!');
            return;
        }

        let valid = false;
        // Contain '@'
        for (let i = 0; i < email.length; i++) {
            if (email.charAt(i) === '@') {
                valid = true;
            }
        }
        if (!valid) {
            event.preventDefault();
            alert('Invalid email!');
            return;
        }

        alert('Submission succeed!');
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__field">
                <input
                    className="text__input" name="name" type="text" aria-label="name"
                    onChange={onNameChange} required />
                <label className={`form__label ${validName ? "" : "invalid__input"}`}>{`Name (*Require <10 letters)`}</label>
            </div>
            <div className="form__field">
                <input
                    className="text__input" name="email" type="text" aria-label="email"
                    onChange={onEmailChange} required />
                <label className={`form__label ${validEmail ? "" : "invalid__input"}`}>Email (*Required)</label>
            </div>
            <div className="form__field">
                <label className="email__verify">
                    Verify Email (*Required)
                    <div className="email__verify__checkbox">
                        <input
                            className="checkbox__input" name="verifyEmail" type="checkbox" aria-label="use same email"
                            onChange={() => { setUseSameEmail(!useSameEmail) }} />
                        <span className="checkbox__content">Same</span>
                    </div>
                </label>
                {
                    useSameEmail && email ?
                        <input className="text__input text__input--unchangeable" name="email" value={email} type="text" aria-label="verify email unchangeable" readOnly />
                        : <input className="text__input" name="email" type="text" aria-label="verify email" required />
                }
            </div>
            <div className="form__field">
                <label >Belief</label>
                <div className="form__checkbox__panel">
                    {
                        beliefMenu.map((item, index) => {
                            return (
                                <div className="form__checkbox" key={id + index}>
                                    <input className="checkbox__input" name="belief" type="checkbox" aria-label="choose belief" />
                                    <span className="checkbox__content">{item}</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="form__field">
                <label >Message</label>
                <input className="text__input" name="message" type="text" aria-label="message" />
            </div>
            <button className="form__submit" type="submit">
                Submit
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </form>
    );
}

export default Form;