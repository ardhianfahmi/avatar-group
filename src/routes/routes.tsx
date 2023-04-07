import { useRoutes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import CustomAvatar from '../pages/CustomAvatarPage'
// layouts

// ----------------------------------------------------------------------

export default function Router() {
    const routes = useRoutes([
        {
            path: '/',
            element: <LandingPage />,
        },
        {
            path: '/custom-avatar',
            element: <CustomAvatar />,
        },
    ]);

    return routes;
}
