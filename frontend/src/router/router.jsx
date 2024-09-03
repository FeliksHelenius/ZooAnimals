import { createBrowserRouter } from 'react-router-dom';

//pages
import App from '../App';
import { ErrorBoundary, Home, Mammals } from '../pages/pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		ErrorBoundary: ErrorBoundary,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/mammals',
				element: <Mammals />,
			},
		],
	},
]);

export default router;
