import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import projectGif from '../assets/images/projects/net-gif1.gif';
import projectGif2 from '../assets/images/projects/net-gif2.gif';
import projectImage1 from '../assets/images/projects/netmath-img2.jpg';
import projectImage2 from '../assets/images/projects/netmath-img3.jpg';
import projectImage3 from '../assets/images/projects/netmath-img4.png';
import projectImage4 from '../assets/images/projects/netmath-img5.jpg';
import projectImage5 from '../assets/images/projects/netmath-img7.jpg';

import { loadPage, showLoader } from '../helper/loader';


function Project1() {

	const { scroll } = useLocomotiveScroll();
	if (scroll) {
		scroll.scrollTo(0, 0);
	}

	loadPage('.project-page', loadCompleted);
	function loadCompleted() {
		console.log('loading done');
	}

	function goToPage(route) {
		
		showLoader();

		history.push({
			pathname: route,
			state: {},
		});
	}
	return (	
		<div data-scroll-section className="project-page">
			<div className="main-block project">							
				<div className="content-wrapper">
					<h1>Netmath</h1>
					<div className="project__header">
						<div className="project__header--left">
							<h2>Mandat</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum metus a nisi lobortis, sit amet luctus nulla ullamcorper. onec porta, nunc sed blandit laoreet, ex lacus vulputate odio, vel ultrices est ligula eu turpis. Nunc hendrerit pretium pulvinar. Morbi bibendum urna in felis ornare scelerisque. </p>
							<a href="direction" className="externalLinks" target="_blank">
								Voir la version en ligne
								<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M21.5889 10.414L8.35038 23.6525L6.93617 22.2383L19.5637 9.6108L9.3527 9.6108L9.3527 7.6108L22.5889 7.6108L23.5889 7.6108L23.5889 8.6108L23.5889 21.847L21.5889 21.847L21.5889 10.414Z" fill="#FF4000" />
								</svg>
							</a>
						</div>
						<div className="project__header--right">
							<h2>Ce que j’ai fait</h2>
							<ul className="list">
								<li>
									Direction artistique
								</li>
								<li>
									Maquettes
								</li>
								<li>
									Micro interactions
								</li>
								<li>
									Assurance qualité
								</li>
								<li>
									Collaboration avec l’équipe design, les illustrateur·trice·s et l’équipe de développement.
								</li>
							</ul>
						</div>
					</div>
					
				</div>
				<div className="project__colorBG project__colorBG--2">
					<div className="content-wrapper">
						<img className="computer" src={projectGif} alt="computer" />
					</div>
				</div>
	
				<div className="project__image project__image--net1">
					<img src={projectImage1} alt="" />
				</div>
				<div className="project__image">
					<img src={projectImage2} alt="" />
				</div>
				<div className="project__image">
					<img src={projectImage3} alt="" />
				</div>
				<div className="project__image">
					<img src={projectImage4} alt="" />
				</div>

				<div className="project__image project__image--net2">
					<img src={projectGif2} alt="" />
				</div>	
				
				<div className="project__image">
					<img src={projectImage5} alt="" />
				</div>		
	
				<div className="project__next" />
			</div>
			
		</div>
	);
}

export default Project1;
