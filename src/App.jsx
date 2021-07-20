import React, { useRef } from 'react';
import { 
	HashRouter as Router, Switch, Route,
	Link,
} from 'react-router-dom';
import { useHistory } from 'react-router';

import AOS from 'aos';
import Home from './components/Home';
import Header from './components/Header';
import Loader from './components/Loader';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Project5 from './components/Project5';
import { ROUTES } from './Constants.js';
import './assets/sass/styles.scss';


import { showLoader } from './helper/loader';

function App() {
	const containerRef = useRef(null);
	const history = useHistory();


	function goToPage(route) {
		showLoader();
		setTimeout(() => {
			history.push({
				pathname: route,
				state: {},
			});
		}, 1000);
	}

	return (		

		<div id="mainScroll" data-scroll-container ref={containerRef}>
			<Loader />
			<Router basename={process.env.PUBLIC_URL}>
				<Header />					
				<Switch>					

					<Route exact path={ROUTES.project1}>
						<Project1 />
					</Route>

					<Route exact path={ROUTES.project2}>
						<Project2 />
					</Route>

					<Route exact path={ROUTES.project3}>
						<Project3 />
					</Route>

					<Route exact path={ROUTES.project4}>
						<Project4 />
					</Route>

					<Route exact path={ROUTES.project5}>
						<Project5 />
					</Route>

					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>			
		// </LocomotiveScrollProvider>
	);
}

export default App;