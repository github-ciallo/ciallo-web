import { Outlet, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const Dashboard = lazy(() => import('@/pages/dashboard'));
const DashboardIndex = lazy(() => import('@/pages/dashboard/partials/index'));

const NoLoginLayout = lazy(() => import('@/pages/no-login/layout'));
const SignIn = lazy(() => import('@/pages/no-login/sign-in'));
const SignUp = lazy(() => import('@/pages/no-login/sign-up'));

const Home = lazy(() => import('@/pages/home'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Outlet />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'dashboard',
				element: <Dashboard />,
				children: [
					{
						path: '',
						element: <DashboardIndex />,
						loader: () => {
							return <div></div>;
						},
					},
				],
			},
			{
				path: '',
				element: <NoLoginLayout />,
				children: [
					{
						path: 'signIn',
						element: <SignIn />,
					},
					{
						path: 'signUp',
						element: <SignUp />,
					},
				],
			},
		],
	},
]);

export default router;
