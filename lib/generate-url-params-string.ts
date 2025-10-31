import { ApiQueryParam } from "./types/api";

export const generateUrlParamsString = (params: ApiQueryParam[]) => params.map(({ key, value }) => `${key}=${value}`).join('&')
