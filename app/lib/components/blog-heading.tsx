import { ColorBar } from "./color-bar";

export const BlogHeading = ({ children }) => (
    <div>
        <h1 id="page-heading" className="blog-heading text-2xl mb-4 text-gray-800">{children}</h1>
        <ColorBar classes={['bg-blue-500', 'mb-12']} />
    </div>
)
