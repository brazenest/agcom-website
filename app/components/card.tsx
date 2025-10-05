export const Card = ({ layout, id, heading, text, button, media }: CardProps) => {
    return (
        <div id={id} className="card flex flex-row items-center my-6 space-x-6 border rounded-xl p-6 shadow-lg">
            {media && <div className={`card-media w-2/5 ${layout === LAYOUT_LEFT ? 'order-1' : ''}`}>{media}</div>}
            <div className={`card-content w-3/5 ${layout === LAYOUT_LEFT ? 'order-0' : ''}`}>
                {heading && <h2 className="card-heading mb-4 text-3xl font-semibold">{heading}</h2>}
                {text && <p className="card-text">{text}</p>}
                {button && <div className="card-button my-6">{button}</div>}
            </div>
        </div>
    )
}

type CardProps = {
    layout: 'left' | 'right',
    id?: string,
    heading: string,
    text: string,
    button: React.ReactNode,
    media: React.ReactNode,
}

const LAYOUT_LEFT = 'left'
const LAYOUT_RIGHT = 'right'