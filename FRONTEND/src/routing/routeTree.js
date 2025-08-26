import { createRootRoute } from '@tanstack/react-router';
import RootLayout from '../RootLayout';
import { homePageRoute } from './homePage';
import { authRoute } from './authRoute';
import { dashboardRoute } from './dashboard';

export const rootRoute = createRootRoute({
    component: RootLayout,
});

export const routeTree = rootRoute.addChildren([
    homePageRoute, 
    authRoute, 
    dashboardRoute,
]);