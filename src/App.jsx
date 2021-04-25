import React, { useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
import Home from './components/Home';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Project5 from './components/Project5';
import { ROUTES } from './Constants.js';

import './assets/sass/styles.scss';

function App() {
	const containerRef = useRef(null);

	return (		

		<LocomotiveScrollProvider
			options={
				{
					smooth: true,
					// ... all available Locomotive Scroll instance options 
				}
			}
			watch={
				[
					//...all the dependencies you want to watch to update the scroll
				]
			}
			containerRef={containerRef}
		>
			<div data-scroll-container ref={containerRef}>
				<Router>
					<header data-scroll-section className="header">
						<span>Logo</span>		
						<span>Menu</span>
					</header>
					<Switch>					

						<Route path={ROUTES.project1}>
							<Project1 />
						</Route>

						<Route path={ROUTES.project2}>
							<Project2 />
						</Route>

						<Route path={ROUTES.project3}>
							<Project3 />
						</Route>

						<Route path={ROUTES.project4}>
							<Project4 />
						</Route>

						<Route path={ROUTES.project5}>
							<Project5 />
						</Route>

						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Router>
			</div>			
		</LocomotiveScrollProvider>
	);
}

export default App;
