import { ColorBar } from "./color-bar";

export const BlogHeading = ({ children }) => (
    <div>
        <h1 id="page-heading" className="blog-heading text-3xl font-semibold mb-4 text-blue-600">{children}</h1>
        <ColorBar classes={['bg-blue-500', 'mb-12']} />
    </div>
)
