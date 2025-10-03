import { ReactElement } from "react"
import { ElementClassAttribute, ElementContent, ElementIdAttribute } from "../types/generic"

export default function Accordion({id, listId, listItems}: AccordionProps) {
    return (
        <div id={id} className="accordion">
            <nav id={listId} className="accordion-list">
                {listItems.map(({id, content}) => <li key={id} className="accordion-list-item">{content}</li>)}
            </nav>
        </div>
    )
}

type AccordionProps = {
    id?: ElementIdAttribute,
    classes: ElementClassAttribute[],
    listId?: ElementIdAttribute,
    listClasses: ElementClassAttribute[],
    listItems: AccordionListItem[],
}

type AccordionListItem = {
    id: ElementIdAttribute,
    content: ElementContent,
}