import { BlogArticleT } from "./blog"
import { UrlQueryParam } from "./generic"

export type ApiArticlesQueryResponse = {
    ok: boolean,
    data: BlogArticleT[],
}

export type ApiQueryParam = UrlQueryParam

export type ApiQueryResponseT = {
    ok: boolean,
    data?: any,
    message?: string,
}

export type queryApiParamsT = {
    endpoint: string;
    params?: ApiQueryParam[];
    method?: 'GET' | 'POST';
    data?: any;
}
