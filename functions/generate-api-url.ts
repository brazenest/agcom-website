import { ApiQueryParam } from "@/types/api";
import { API_CONNECTION_PARAMS } from "@/constants";
import { generateUrl } from "./generate-url";

export const generateApiUrl = ({ connectionParams = API_CONNECTION_PARAMS, endpoint, params = [] }: generateApiUrlPropsT) => (
    generateUrl({
        scheme: connectionParams.scheme,
        host: connectionParams.host,
        port: connectionParams.port,
        path: `${connectionParams.path}/${endpoint}`,
        queryParams: params,
    })
)

type generateApiUrlPropsT = {
    connectionParams: any,
    endpoint: string,
    params: ApiQueryParam[],
}