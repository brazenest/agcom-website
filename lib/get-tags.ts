import { API_REQUEST_SCHEME, API_REQUEST_HOST, API_REQUEST_PORT, API_TAGCLOUD_REQUEST_PATH } from "./constants";

export const getTags = async ({ articleId }: GetTagCloudProps = {}) => {
    const response = await fetch(`${API_REQUEST_SCHEME}://${API_REQUEST_HOST}:${API_REQUEST_PORT}${API_TAGCLOUD_REQUEST_PATH}`);
    if (!response.ok) {
        throw new Error(`Response: ${response.status} ${response.statusText}`);
    }

    const result = await response.json()
    if (!result.ok) {
        console.error('getTags(): Error from API:', result)
        return {}
    }

    return result.data
}

type GetTagCloudProps = {
    articleId?: number,
}