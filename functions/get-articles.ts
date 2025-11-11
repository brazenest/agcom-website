export const runtime = 'nodejs';

import { notFound } from 'next/navigation';
import { queryDatabase } from '../server/db/queryDatabase';
import { DbQueryValue } from '@/types/db';

export const getArticles = async ({ params = {} }: getArticlesProps = {}) => {

    console.log('getArticles(): params ====', params)

    const queryParts = ['SELECT * FROM articles']
    const values: DbQueryValue[] = []

    if (params.slug) {
        queryParts.push(`WHERE slug = ?`)
        values.push(params.slug)

    } else if (params.limit) {
        queryParts.push(`LIMIT ${params.limit}`)
        values.push('3')
    }

    const query = queryParts.join(' ')

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
