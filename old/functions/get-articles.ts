export const runtime = 'nodejs';

import { notFound } from 'next/navigation';
import { queryDatabase } from '../server/db/queryDatabase';
import { DbQueryValue } from '@/types/db';

export const getArticles = async ({ params = [] }: getArticlesProps = {}) => {

    const queryRequestParams: queryApiParamsT = {
        endpoint: 'articles',
        method: 'GET',
        params,
    }

    queryRequestParams.params?.push({ key: 'sortOrder', value: 'newestFirst' })

    const response = await queryDatabase({ query })

    // const responseData = response.data.length ? response.data.map(article => ({
    //     ...article,
    //     date: article.datePublished,
    //     href: `/blog/articles/${article.slug}`
    // })) : response.data

    return response.data
}

type getArticlesProps = {
    params?: {
        slug?: string,
        limit?: string,
    }
}
