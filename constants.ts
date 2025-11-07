export const SITE_VERSION = '1.1.2'

// export const API_REQUEST_SCHEME = 'http'
// export const API_REQUEST_HOST = 'localhost'
// export const API_REQUEST_PORT = 3000
export const API_REQUEST_PATH = '/api'
export const API_ARTICLES_REQUEST_PATH = '/api/articles'
export const API_TAGCLOUD_REQUEST_PATH = '/api/tag-cloud'

export const API_REQUEST_SCHEME = 'https'
export const API_REQUEST_HOST = 'aldengillespy.com'
export const API_REQUEST_PORT = 80

export const API_CONNECTION_PARAMS = {
    scheme: API_REQUEST_SCHEME,
    host: API_REQUEST_HOST,
    port: API_REQUEST_PORT,
    path: API_REQUEST_PATH,
}

export const DB_NAME = 'agcom'
export const DB_USER = 'github'
export const DB_PASSWORD = '8H&_!@t=Q7<-,OTyjlo#rLii#'
export const DB_HOST = 'aldengillespy.com'
export const DB_PORT = 3306
export const DB_DIALECT = 'mariadb' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */

export const DB_CONNECTION_PARAMS = {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
}

export const GOOGLE_ANALYTICS_MEASUREMENT_ID = 'G-DGCKGYKJK8'
