export const baseApi = (route: string) => {
    return `/api/v1` + route;
};

export default class Paths {
    static Auth = class {
        static register = baseApi('/register');
        static login = baseApi('/login');
        static me = baseApi('/me')
    }
}
