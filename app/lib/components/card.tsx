export const Card = ({ id, heading, imageUri, imageAltText, imageWidth, imageHeight, cardText, linkUri, color, linkTextColor, linkText }: CardProps) => {
    return (
        <div id={id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">{heading}</h2>
            <div className="mb-4 flex justify-center">
                <img
                    src={imageUri}
                    alt={imageAltText}
                    width={imageWidth}
                    height={imageHeight}
                    className="rounded-lg"
                />
            </div>
            <p className="text-gray-700 mb-4">{cardText}</p>
            <div className="text-center">
                <a
                    href={linkUri}
                    className={`px-4 py-2 bg-${color}-500 text-${linkTextColor} rounded hover:bg-${color}-600`}
                >
                    {linkText}
                </a>
            </div>
        </div>
    )
}

type CardProps = {
    id?: string,
    heading: string,
    imageUri: string,
    imageAltText: string,
    imageWidth: number,
    imageHeight: number,
    cardText: string,
    linkUri: string,
    color: string,
    linkTextColor: string,
    linkText: string,
}
