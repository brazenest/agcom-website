/**
queryApi.ts
*/

import 'dotenv/config'
import { ApiQueryParam } from "@/types/api";
import { createApiUrl } from "./createApiUrl";

export const queryApi = async ({ endpoint, params = [], method = 'GET', data = {} }: queryApiParamsT) => {

    const processEnvHasNextPublicPrefixedValues = Object.keys(process.env)
        .some(key =>
            key.match(/^NEXT_PUBLIC_.*$/)
        )
    console.log('queryApi(): process.env has NEXT_PUBLIC_* values?', processEnvHasNextPublicPrefixedValues)

    // Construct URL with query parameters
    const requestUrl = createApiUrl({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL!, endpoint, params })

    console.log('queryApi(): requestUrl =', requestUrl)

    let fetchParams

    switch (method) {
        case 'GET':
            fetchParams = {}
            break;

        case 'POST':
            fetchParams = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
            break;

        default:
            return {
                ok: false,
                message: `queryApi(): Invalid HTTP method: ${method}`,
            };
    }

    const apiResponse = await fetch(requestUrl, fetchParams)
    const response = await apiResponse.json()

    console.log('queryApi(): response ====', response)

    return response
}

type queryApiParamsT = {
    endpoint: string;
    params?: ApiQueryParam[];
    method?: 'GET' | 'POST';
    data?: any;
}
