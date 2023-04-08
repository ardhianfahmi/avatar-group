import { useRoutes } from 'react-router-dom';
import CustomAvatar from '../pages/CustomAvatarPage'

export default function Router() {
    const routes = useRoutes([
        {
            path: '/',
            element: <CustomAvatar />,
        },
    ]);

    return routes;
}
