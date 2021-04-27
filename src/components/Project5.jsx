import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import projectGif from '../assets/images/projects/sharegate-gif1.gif';
import projectImage1 from '../assets/images/projects/share-img2.jpg';
import projectImage2 from '../assets/images/projects/share-img3.png';
import projectImage3 from '../assets/images/projects/share-img4.jpg';
import projectImage4 from '../assets/images/projects/share-img5.png';
import projectImage5 from '../assets/images/projects/share-img6.jpg';

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
					<h1>
						ShareGate
					</h1>
					<div className="project__header">
						<div className="project__header--left">
							<h2>Contexte</h2>
							<p>À cette époque, ShareGate venait de refaire son identité visuelle et avait besoin d’un nouveau site marketing. Passant d’un produit à une marque multi-produits, il fallait carrément tout repenser. J’ai fait le design complet du site principal ainsi que quelques micro-sites pour du contenu exclusif.</p>
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
									Wireframes
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
									Collaboration avec l’équipe design, les créateur·trice·s de 	contenu, les illustrateur·trice·s et l’équipe de développement.
								</li>								
							</ul>
						</div>
					</div>
					
				</div>

				<div className="project__colorBG project__colorBG--5">
					<div className="content-wrapper">
						<img className="computer" src={projectGif} alt="computer" />
					</div>
				</div>
			
				<div className="project__image project__image--share1">
					<img src={projectImage1} alt="" />
				</div>

				<div className="project__image ">
					<img src={projectImage2} alt="" />
				</div>

				<div className="project__image project__image--share2">
					<img src={projectImage3} alt="" />
				</div>
				<div className="project__image">
					<img src={projectImage4} alt="" />
				</div>
				<div className="project__image project__image--share3">
					<img src={projectImage5} alt="" />
				</div>							
	
				<div className="project__next" />
			</div>
			
		</div>
	);
}

export default Project1;
