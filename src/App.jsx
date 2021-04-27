import React, { useRef } from 'react';
import { 
	HashRouter as Router, Switch, Route,
	Link,
} from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
import Home from './components/Home';
import Loader from './components/Loader';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Project5 from './components/Project5';
import { ROUTES } from './Constants.js';
import logo from './assets/images/smiley.svg';
import './assets/sass/styles.scss';

import { loadPage, showLoader } from './helper/loader';

function App() {
	const containerRef = useRef(null);

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

		<LocomotiveScrollProvider
			options={
				{
					smooth: true,
					multiplier: 1.25,
				}
			}
			watch={
				[
					//...all the dependencies you want to watch to update the scroll
				]
			}
			containerRef={containerRef}
		>
			<div id="mainScroll" data-scroll-container ref={containerRef}>
				<Loader />
				<Router basename={process.env.PUBLIC_URL}>
					<header className="header">
						<div onClick={() => goToPage(ROUTES.home)} tabIndex={0} role="button" onKeyDown={() => goToPage(ROUTES.home)} className="logo">
							<svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M43.0674 35.3333C40.2674 35.3333 38.0007 30.5333 38.0007 24.6667C38.0007 18.8 40.2674 14 43.0674 14C45.8674 14 48.1341 18.8 48.1341 24.6667C48.1341 30.5333 45.8674 35.3333 43.0674 35.3333ZM26.0667 42.5333C23.2667 42.5333 21 37.7333 21 31.8666C21 25.9999 23.2667 21.2 26.0667 21.2C28.8667 21.2 31.1333 25.9999 31.1333 31.8666C31.1333 37.7333 28.8667 42.5333 26.0667 42.5333ZM55.0007 31.8666C55.0007 37.7333 57.2674 42.5333 60.0674 42.5333C62.8674 42.5333 65.1341 37.7333 65.1341 31.8666C65.1341 25.9999 62.8674 21.2 60.0674 21.2C57.2674 21.2 55.0007 25.9999 55.0007 31.8666Z" fill="#FF4000" />
								<path d="M70 48C70 62.3295 58.1804 74 43.5 74C28.8196 74 17 62.3295 17 48" stroke="#FF4000" strokeWidth="2" strokeMiterlimit="10" />
								<circle cx="43.5" cy="43.5" r="42.5" stroke="#FF4000" strokeWidth="2" strokeMiterlimit="10" />
							</svg>

						</div>
						<nav>
							<span>À propos</span>
							<span>Travail</span>
							<span>Contact</span>
						</nav>		
					</header>
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
		</LocomotiveScrollProvider>
	);
}

export default App;
