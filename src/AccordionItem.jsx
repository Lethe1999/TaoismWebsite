function AccordionItem({ item, index, open, onOpenIndex }) {
    return (
        <div className="accordion__item" >
            <a
                className="accordion__question"
                href="/"
                onClick={(event) => onOpenIndex(event, index)}
            >{item.question}</a>
            <p
                className={`accordion__content ${open ? "accordion__content--open" : ""}`}
            >{item.content}</p>
        </div>
    );
}

export default AccordionItem;