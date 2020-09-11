import { BrowserRouter, Route } from 'react-router-dom';
import Fallback from './components/FallbackPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';

// lazy-loading is amazing i tell yer
const UserSettings = React.lazy(() => import('./pages/users/UserSettings'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Userpage = React.lazy(() => import('./pages/users/UserPage'));
const Signup = React.lazy(() => import('./pages/Signup'));
const Login = React.lazy(() => import('./pages/Login'));
const Home = React.lazy(() => import('./pages/Home'));

class ApplicationComponent extends React.Component {

	render() {
		return (
			<React.Suspense fallback={<Fallback />}>
				<BrowserRouter>
					<Navbar />
					<Route path='/' component={Home} />
					<Route path='*' component={NotFound} />
					<Route path='/signup' component={Signup} />
					<Route path='/login' component={Login} />
					<Route path='/users/:slug' component={Userpage} />
					<Route path='/settings' component={UserSettings} />
					<Footer />
				</BrowserRouter>
			</React.Suspense>
		);
	}

}

ApplicationComponent.displayName = 'Application';
export default React.memo(ApplicationComponent);
