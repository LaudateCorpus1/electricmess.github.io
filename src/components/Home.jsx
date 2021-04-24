import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';


function Home() {
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
				<div className="main-block intro" data-scroll-section>
					<div className="content-wrapper">
						<div className="intro__content">
							<div className="intro__title" data-scroll>
								<p className="intro__mask"><span className="intro__text">Bonjour, hi</span></p>			
								<p className="intro__mask"><span className="intro__text">Je m’appelle Alexia. Amoureuse des détails et des expériences peaufinées, </span></p>								
								<p className="intro__mask"><span className="intro__text">j’ai passé les 8 dernières années à explorer plusieurs facettes du design numérique.</span></p>
							</div>
							<h2 data-scroll>
								J’ai aussi bingé beaucoup d’animes, bu au moins 5800 lattés et tué quelques plantes malgré tous mes efforts.
							</h2>
						</div>
					</div>
				</div>

				<div data-scroll-section className="main-block half">
					<div className="content-wrapper">
						<h3 data-scroll className="half__title">
							At the
							<br />
						moment
						</h3>
						<div data-scroll className="half__content">
							<p>
								I currently work as a UI/UX designer for Nexus Innovations.
							</p>
							<p>
								Je fais aussi partie de l’équipe de Montréal Interactive, une communauté locale de design existant depuis 4 ans. Durant ce temps pandémique, nous somme surtout actif·ve·s sur Discord.
							</p>
						</div>
					</div>
				</div>
				<div data-scroll-section className="main-block half">
					<div className="content-wrapper">
						<h3 data-scroll className="half__title">
							What I enjoy 
							<br />
						doing the most
						</h3>
						<div data-scroll className="half__content">
							<ul>
								<li>
									Design d’interfaces
								</li>
								<li>
									Micro intéractions
								</li>
								<li>
									Prototypes
								</li>
								<li>
									Systèmes de design
								</li>
								<li>
									Illustration
								</li>
								<li>
									Identité de marque
								</li>
								<li>
									Assurance qualité
								</li>
								<li>
									Collaborate with people
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="main-block scroll-separator">
					<h2>Projects I worked on</h2>
				</div>
				<div className="main-block projects">
					<div className="content-wrapper" />
				</div>
			</div>
		</LocomotiveScrollProvider>
		
	);
}

export default Home;
