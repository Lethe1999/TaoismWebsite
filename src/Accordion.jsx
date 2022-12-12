import "./css/accordion.css";
import AccordionItem from "./AccordionItem";
import { intro } from "./data/intro";
import { useState, useId } from "react";


function Accordion() {
    const id = useId();

    const [openIndex, setOpenIndex] = useState("-1");
    function onOpenIndex(event, index) {
        event.preventDefault();
        if (index === openIndex) {      // Close this accordion
            setOpenIndex("-1");
        } else {                        // open this accordion
            setOpenIndex(index);
        }
    }

    return (
        <div className="accordion">
            {
                intro.map((item, index) => {
                    return (
                        <AccordionItem
                            item={item} index={index}
                            open={openIndex === index}
                            onOpenIndex={onOpenIndex}
                            key={id + index}
                        />
                    );
                })
            }
        </div>
    );
}

export default Accordion;