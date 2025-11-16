import { ArticleT } from "./article"
import { UrlQueryParam } from "./generic"

export type ApiArticlesQueryResponse = {
    ok: boolean,
    data: ArticleT[],
}

export type ApiQueryParam = UrlQueryParam

export type ApiQueryResponseT = {
    ok: boolean,
    data?: any,
    message?: string,
}
