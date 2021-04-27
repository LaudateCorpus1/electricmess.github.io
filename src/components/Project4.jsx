import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import computer from '../assets/images/projects/computer.png';
import projectGif from '../assets/images/projects/elliotjaxx-gif1.gif';
import projectImage1 from '../assets/images/projects/grav-img1.jpg';
import projectImage2 from '../assets/images/projects/grav-img2.png';
import projectImage3 from '../assets/images/projects/grav-img3.jpg';
import projectImage4 from '../assets/images/projects/grav-img4.png';
import projectImage5 from '../assets/images/projects/grav-img5.jpg';
import projectImage6 from '../assets/images/projects/grav-img6.jpg';
import projectImage7 from '../assets/images/projects/grav-img7.jpg';

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
						Gravi-t
					</h1>
					<div className="project__header">
						<div className="project__header--left">
							<h2>Contexte</h2>
							<p>Loin des centres d’entrainement traditionnels, Gravi-T est un gym privé haut-de-game qui offre une prise en charge complète et modulée. Plaçant ses client·e·s au centre de leur offre de services, Gravi-t est une solution unique pour atteindre ses objectifs de mise en forme.</p>							
						</div>
						<div className="project__header--right">
							<h2>Ce que j’ai fait</h2>
							<ul className="list">
								<li>
									Gestion client
								</li>
								<li>
									Ateliers créatifs
								</li>
								<li>
									Logo
								</li>
								<li>
									Brand guidelines
								</li>								
							</ul>
						</div>
					</div>
					
				</div>
			
				<div className="project__image">
					<img src={projectImage1} alt="" />
				</div>

				<div className="project__image ">
					<img src={projectImage2} alt="" />
				</div>

				<div className="project__image project__image--grav1">
					<img src={projectImage3} alt="" />
				</div>
				<div className="project__image">
					<img src={projectImage4} alt="" />
				</div>
				<div className="project__image">
					<img src={projectImage5} alt="" />
				</div>		

				<div className="project__image">
					<img src={projectImage6} alt="" />			
				</div>		

				<div className="project__image">
					<img src={projectImage7} alt="" />
				</div>						
	
				<div className="project__next" />
			</div>
			
		</div>
	);
}

export default Project1;
