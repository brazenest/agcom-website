import type { ApiQueryParam, queryApiParamsT } from '@/types/api'
import { notFound } from 'next/navigation';
import { queryApi } from './query-api';

export const getArticles = async ({ params = [] }: getArticlesProps = {}) => {

    const queryRequestParams: queryApiParamsT = {
        endpoint: 'articles',
        method: 'GET',
        params,
    }

    queryRequestParams.params?.push({ key: 'sortOrder', value: 'newestFirst' })

    const response = await queryApi(queryRequestParams)

    if (!response.ok) {
        notFound()
    }

    const responseData = response.data.map(article => ({
        ...article,
        date: article.datePublished,
        href: `/blog/articles/${article.slug}`
    }))

    return responseData
}

type getArticlesProps = {
    params?: ApiQueryParam[],
}