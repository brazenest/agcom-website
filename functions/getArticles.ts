/**
getArticles.ts
*/

import { queryApi } from './queryApi';

export const getArticles = async ({ params = {} }: getArticlesProps = {}) => {

    console.log('getArticles(): at top of function.')

    const apiResponse = await queryApi({
        endpoint: 'articles',
        params: Object.keys(params).map(key => ({ key, value: params[key] })),
    })

    console.log('getArticles(): apiResponse (returning .data) ====', apiResponse)

    return apiResponse.data
}

type getArticlesProps = {
    params?: {
        slug?: string,
        limit?: string,
    }
}
