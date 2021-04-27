import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ROUTES } from '../Constants.js';

import { loadPage, showLoader } from '../helper/loader';

function Header() {

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
	);
}

export default withRouter(Header);
