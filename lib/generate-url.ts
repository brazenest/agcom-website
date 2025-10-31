import { UrlQueryParam } from "./types/generic"
import { generateUrlParamsString } from "./generate-url-params-string"

export const generateUrl = ({ scheme, host, port, path = '/', queryParams = [], fragment = undefined }: generateUrlPropsT) => (
    `${scheme}://${host}${(![21, 80, 443].includes(port)) ? `:${port}` : ''}${path}${queryParams.length ? '?' + generateUrlParamsString(queryParams) : ''}${fragment ? `#${fragment}` : ''}`
)

type generateUrlPropsT = {
    scheme: 'http' | 'https',
    host: string,
    port: number,
    path?: string,
    queryParams?: UrlQueryParam[],
    fragment?: string,
}
