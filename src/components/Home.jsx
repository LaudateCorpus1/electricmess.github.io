import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../Constants';
import ElliotJaxIntro from '../assets/images/projects/elliot-jax-intro.jpg';


function Home() {

	function goToPage(route) {

	}

	return (
		<>
			<div className="main-block intro" data-scroll-section>
				<div className="content-wrapper">
					<div className="intro__content">
						{/* TODO FIX TIMING */}
						<div className="intro__title">
							<p className="intro__mask"><span className="intro__text">Bonjour, hi!</span></p>
							<p className="intro__mask"><span className="intro__text">Je m’appelle Alexia. Amoureuse des détails et des expériences peaufinées, </span></p>
							<p className="intro__mask"><span className="intro__text">j’ai passé les 8 dernières années à explorer plusieurs facettes du design.</span></p>
						</div>
						<h2>
							J’ai aussi bingé beaucoup d’animes, bu au moins 5800 lattés et tué quelques plantes malgré tous mes efforts.
						</h2>
					</div>

				</div>
				<i className="arrowDown">
					<svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M15.9913 28.728L28.2843 16.435L29.6985 17.8492L15.5563 31.9914L14.8492 32.6985L14.1421 31.9914L1.15506e-06 17.8492L1.41421 16.435L13.9913 29.0121L13.9913 -6.62007e-07L15.9913 -5.77713e-07L15.9913 28.728Z" fill="#FF4000" />
					</svg>

				</i> 

				<i className="circleDown">
					<svg width="158" height="79" viewBox="0 0 158 79" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M157 79C157 35.9218 122.078 1 79 1C35.9218 1 1 35.9218 1 79" stroke="#FF4000" strokeWidth="2" strokeMiterlimit="10" />
					</svg>


				</i>
			</div>

			<div data-scroll-section className="main-block half">
				<div className="content-wrapper">
					<h3 className="half__title">
						At the
						<br />
					moment
					</h3>
					<div className="half__content">
						<p>
							I currently work as a UI/UX designer for&nbsp;
							<a className="externalLinks" target="blank" href="https://nexusinno.com/">
								Nexus Innovations.
								<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M21.5889 10.414L8.35038 23.6525L6.93617 22.2383L19.5637 9.6108L9.3527 9.6108L9.3527 7.6108L22.5889 7.6108L23.5889 7.6108L23.5889 8.6108L23.5889 21.847L21.5889 21.847L21.5889 10.414Z" fill="#FF4000" />
								</svg>
							</a>
						</p>
						<p>
							Je fais aussi partie de l’équipe de Montréal Interactive, une communauté locale de design existant depuis 4 ans. Durant ce temps pandémique, nous somme surtout actif·ve·s sur&nbsp;
							<a className="externalLinks" target="blank" href="https://discord.gg/7pQHXzcjWx">
								Discord.
								<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M21.5889 10.414L8.35038 23.6525L6.93617 22.2383L19.5637 9.6108L9.3527 9.6108L9.3527 7.6108L22.5889 7.6108L23.5889 7.6108L23.5889 8.6108L23.5889 21.847L21.5889 21.847L21.5889 10.414Z" fill="#FF4000" />
								</svg>

							</a>
						</p>
					</div>
				</div>
			</div>
			<div data-scroll-section className="main-block half">
				<div className="content-wrapper">
					<h3 className="half__title">
						What I enjoy
						<br />
					doing the most
					</h3>
					<div className="half__content">
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
			<div data-scroll-section className="main-block scroll-separator">
				<h2>Projects I worked on</h2>
			</div>
			<div data-scroll-section className="main-block projects">
				<div className="content-wrapper">
					<div onClick={() => goToPage(ROUTES.project1)} tabIndex={0} role="button" onKeyDown={() => goToPage(ROUTES.project1)} className="projects__block">
						<img src={ElliotJaxIntro} alt="Elliot Jax" />
						{/* TODO paralax in title */}
						<div className="projects__block--title">
							<h3>Elliot Jaxx</h3>
							<h4>Site Web</h4>
						</div>
					</div>
				</div>
			</div>

			<div data-scroll-section className="main-block centered">
				<h2>Side Hustle</h2>
				<p>En dehors des heures de travail, j&apos;explore en illustration. Welcome to my playground</p>
			</div>

			<div data-scroll-section className="main-block scroll-separator">
				<h2>my playground</h2>
			</div>
			
			<div className="contact__block">
				<h2>Veux tu sortir avec moi</h2>
				<div className="formBlock">
					<span> YES </span>
					<span> NO </span>
				</div>
				<hr className="content__separator" />
				<div className="socials">
					<a href="asdf">Linked</a>
					<a href="asdf">Linked</a>
					<a href="asdf">Linked</a>
					<a href="asdf">Linked</a>
					<a href="asdf">Linked</a>
				</div>
			</div>
		</>

	);
}

export default Home;
