const resolveRoutes = (route) => {

    if (route.length <= 24) {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;

    }

    return `/${route}`;
};

export default resolveRoutes;