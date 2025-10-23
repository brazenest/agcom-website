import type { ApiArticleParam } from '@/app/lib/types/api'
import { notFound } from 'next/navigation';
import { API_REQUEST_SCHEME, API_REQUEST_HOST, API_REQUEST_PORT, API_ARTICLES_REQUEST_PATH } from './constants';

export const getArticles = async ({ params }: getArticlesProps = {}) => {
    const queryParamString = (params ? params : [])
    .map(({ key, value }) => `${key}=${value}`)
    .concat('sortOrder=newestFirst')
    .join('&')
    
    const response = await fetch(`${API_REQUEST_SCHEME}://${API_REQUEST_HOST}:${API_REQUEST_PORT}${API_ARTICLES_REQUEST_PATH}?${queryParamString}`);
    if (!response.ok) {
        throw new Error(`Response: ${response.status} ${response.statusText}`);
    }

    const result = await response.json()
    if (!result.ok) {
        notFound()
    }

    return result.data
}

type getArticlesProps = {
    params?: ApiArticleParam[],
}