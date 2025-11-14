/**
getArticles.ts
*/

import { queryApi } from './queryApi';

export const getArticles = async ({ params = {} }: getArticlesProps = {}) => {

    const apiResponse = await queryApi({
        endpoint: 'articles',
        params: Object.keys(params).map(key => ({ key, value: params[key] })),
    })

    return apiResponse.data
}

type getArticlesProps = {
    params?: {
        slug?: string,
        limit?: string,
    }
}
