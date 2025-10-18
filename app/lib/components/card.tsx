import { PlaceholderValue } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { ReactNode } from "react"

export const TalentCard = ({ children, ...talentCardProps }) => {
    return (
        <Card {...talentCardProps}>
            {children}
        </Card>
    )
}

const CardHeading = ({ children, classes }) => <h3 className={"card-heading font-bold text-2xl mt-7 mb-6 ".concat(classes.join(' '))}>{children}</h3>

export const Card = ({ layout = 'top', heading, img, classes = [], children }: CardProps) => {

    let result: ReactNode

    switch (layout) {

        case 'left':
            result = (
                <div className={"card flex flex-col md:flex-row mb-20 p-6 shadow-md border border-slate-200 rounded-lg ".concat(classes.join(' '))}>
                    <span className="card-image-wrap md:w-1/2 mx-4 mb-7">
                        {heading && <CardHeading classes={["md:hidden"]}>{heading}</CardHeading>}
                        {img && <Image {...img} />}
                    </span>
                    <span className="card-content-wrap md:w-1/2 mx-4">
                        {heading && <CardHeading classes={["hidden", "md:block"]}>{heading}</CardHeading>}
                        {children}
                    </span>
                </div>
            )
            break

        case 'right':
            result = (
                <div className={"card flex flex-col md:flex-row mb-20 p-6  shadow-md border border-slate-200 rounded-lg ".concat(classes.join(' '))}>
                    <span className="card-image-wrap md:order-2 md:w-1/2 mx-4 mb-7">
                        {heading && <CardHeading classes={["md:hidden"]}>{heading}</CardHeading>}
                        {img && <Image {...img} />}
                    </span>
                    <span className="card-content-wrap md:order-1 md:w-1/2 mx-4">
                        {heading && <CardHeading classes={["hidden", "md:block"]}>{heading}</CardHeading>}
                        {children}
                    </span>
                </div>
            )
            break

        case 'top':
        default:
            result = (
                <div className="card">
                    {heading && <h3 className="text-center font-bold text-2xl my-6">{heading}</h3>}
                    {img && <Image {...img} />}
                    {children}
                </div>
            )
            break

    }

    return result
}

type CardProps = {
    layout?: 'top' | 'left' | 'right',
    heading?: string,
    img?: {
        src: string,
        alt: string,
        width?: number,
        height?: number,
        placeholder?: PlaceholderValue,
        blurDataURL?: string,
        className: string,
    },
    classes?: ClassAttribute[],
    children: ReactNode,
}

type ClassAttribute = string

export const CardInfobar = ({ children }) => {
    return (
        <div className="flex justify-center p-4">
            {children}
        </div>
    )
}
/*
export const Card = ({ id, heading, imageUri, imageAltText, imageWidth, imageHeight, cardText, linkUri, color, linkTextColor, linkText }: CardProps) => {
    return (
        <div id={id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">{heading}</h2>
            <div className="mb-4 flex justify-center">
                <Image
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
*/
