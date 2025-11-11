export const List = ({ itemsContent }) => {
    return (
        <div className="list-wrap">
            <ListItems>
                {itemsContent.map((itemContent, i) => <ListItem key={i}>{itemContent}</ListItem>)}
            </ListItems>
        </div>
    )
}

const ListItems = ({ children: items }) => (
    <div className="list-items-wrap">
        {items}
    </div>
)

export const ListItem = ({ children: content }) => <li className="list-item">{content}</li>
