export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLE = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_DETAILS_EDIT = 'article_edit',
    ARTICLE_DETAILS_CREATE = 'article_create',
    ADMIN = 'admin',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

type ID = string | number;

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: ID) => `/profile/${id}`;
export const getRouteArticle = () => '/articles';
export const getRouteArtilceDetails = (id: ID) => `/artiles/${id}`;
export const getRouteArticleDetailsEdit = (id: ID) => `/artiles/${id}/edit`;
export const getRouteArtilceDetailsCreate = () => '/artiles/new';
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '/*';
