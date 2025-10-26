import type { ApiQueryParam, ApiQueryResponseT, queryApiParamsT } from '@/app/lib/types/api'
import { notFound } from 'next/navigation';
import { queryApi } from './query-api';

export const getArticles = async ({ params = [] }: getArticlesProps = {}) => {

    const queryRequestParams: queryApiParamsT = {
        endpoint: 'articles',
        method: 'GET',
        params,
    }

    queryRequestParams.params?.push({ key: 'sortOrder', value: 'newestFirst' })

    const result = await queryApi(queryRequestParams)

    if (!result.ok) {
        notFound()
    }

    return result.data
}

type getArticlesProps = {
    params?: ApiQueryParam[],
}