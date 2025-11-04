import { queryApiParamsT } from "@/types/api";
import { generateApiUrl } from "./generate-api-url";
import { API_CONNECTION_PARAMS } from "@/constants";

export const queryApi = async ({ endpoint, params = [], method = 'GET', data = {} }: queryApiParamsT) => {
    let response;

    // Construct URL with query parameters
    const requestUrl = generateApiUrl({ connectionParams: API_CONNECTION_PARAMS, endpoint, params })

    switch (method) {
        case 'GET':

            console.log('queryApi(): method GET: requestUrl ====', requestUrl)

            try {
                // Execute fetch request
                const queryResponse = await fetch(requestUrl);
                response = await queryResponse.json();
            } catch (e: any) {
                console.error('queryApi(): method GET: fetch(requestUrl): ERROR during fetch() |-|', e.message)
            }

            break;

        /* POST bypasses fetch and uses apiQueryDatabase directly, until further notice. */
        case 'POST':

            // Construct URL with query parameters
            console.log('queryApi(): method POST: requestUrl:', requestUrl)

            try {
                // Execute fetch request
                const queryResponse = await fetch(requestUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                response = await queryResponse.json();
            } catch (e: any) {
                console.error('queryApi(): method POST: fetch(requestUrl, params): ERROR during fetch() |-| message: ', e.message, '|-| response: ', response)
            }

            // const query = `insert into articles (title, slug, excerpt, author, datePublished, body) values (?, ?, ?, ?, ?, ?)`
            // const values = [data.title, data.slug, data.excerpt, 1, data.datePublished, data.body]

            // // Execute database query directly for POST
            // response = await apiQueryDatabase(query, values)

            break;

        default:
            response = {
                ok: false,
                message: `queryApi(): Invalid HTTP method: ${method}`,
            };
    }

    return response;
}

