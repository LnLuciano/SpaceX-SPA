import Home from '../pages/Home';
import Rocket from '../pages/Rocket';
import Error404 from '../pages/Error404';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';

const routes = {
    '/': Home,
    '/:id': Rocket,
};

const router = async () => {
    const content = null || document.getElementById('content');

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();

};

export default router;