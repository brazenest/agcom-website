export const Card = ({ layout, theme, id, heading, text, button, media }: CardProps) => {
    const themes = {
        dark: 'bg-gray-800 text-white',
        blue: 'bg-blue-100 border-blue-500 text-gray-900',
        purple: 'bg-purple-100 border-purple-500 text-gray-900',
        yellow: 'bg-yellow-100 border-yellow-500 text-gray-900',
        light: 'bg-white border-gray-500 text-gray-900',
        green: 'bg-green-100 border-green-500 text-gray-900',
    }
    const themeClass = theme && themes[theme] ? themes[theme] : themes['light'];

    return (
        <div id={id} className={`card flex flex-row${layout === LAYOUT_LEFT ? '-reverse' : ''} items-center my-6 border rounded-xl p-6 shadow-lg ${themeClass}`}>
            {media && <div className={`card-media w-2/5 ${layout === LAYOUT_LEFT ? 'order-1 ml-5' : 'mr-5'}`}>{media}</div>}
            <div className={`card-content w-3/5 ${layout === LAYOUT_LEFT ? 'order-0' : ''}`}>
                {heading && <h3 className="card-heading mb-4 text-2xl font-semibold">{heading}</h3>}
                {text && <p className="card-text">{text}</p>}
                {button && <div className="card-button my-6">{button}</div>}
            </div>
        </div>
    )
}

type CardProps = {
    layout: 'left' | 'right',
    theme?: 'light' | 'dark' | 'blue' | 'purple' | 'yellow' | 'green',
    id?: string,
    heading: string,
    text: string,
    button: React.ReactNode,
    media: React.ReactNode,
}

const LAYOUT_LEFT = 'left'
const LAYOUT_RIGHT = 'right'