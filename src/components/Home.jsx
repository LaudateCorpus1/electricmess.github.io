import React, { useRef } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';
import { ROUTES } from '../Constants';
import ElliotJaxIntro from '../assets/images/projects/elliot-jax-intro.jpg';
import NetMathIntro from '../assets/images/projects/netmath-intro.jpg';
import linkedin from '../assets/images/LinkedIn.svg';

import { loadPage, showLoader } from '../helper/loader';


function Home() {

	const { scroll } = useLocomotiveScroll();
	if (scroll) {
		scroll.scrollTo(0, 0);
	}

	const history = useHistory();
	loadPage('.homepage');
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
		<div className="homepage" data-scroll-section>
			<div className="main-block intro">
				<div className="content-wrapper">
					<div className="intro__content">
						{/* TODO FIX TIMING */}
						<div className="intro__title">
							<p className="intro__mask"><span className="intro__text">Bonjour, hi!</span></p>
							<p className="intro__mask"><span className="intro__text">Je m’appelle Alexia. Amoureuse des détails et des expériences peaufinées, </span></p>
							<p className="intro__mask"><span className="intro__text">j’ai passé les 8 dernières années à explorer plusieurs facettes du design.</span></p>
						</div>
						<h2>
							J’ai aussi bingé beaucoup d’animes, bu au moins 5800 lattés et recommencé trop souvent mon île dans Animal Crossing.
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

			<div className="main-block half">
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
			<div className="main-block half">
				<div className="content-wrapper">
					<h3 className="half__title">
						What I enjoy
						<br />
					doing the most
					</h3>
					<div className="half__content">
						<ul className="list">
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
				<div className="content-wrapper">
					<div onClick={() => goToPage(ROUTES.project1)} tabIndex={0} role="button" onKeyDown={() => goToPage(ROUTES.project1)} className="projects__block">
						<img src={ElliotJaxIntro} alt="Elliot Jax" />
						{/* TODO paralax in title */}
						<div className="projects__block--title">
							<h3>Elliot Jaxx</h3>
							<h4>Site Web</h4>
						</div>
					</div>

					<div onClick={() => goToPage(ROUTES.project1)} tabIndex={0} role="button" onKeyDown={() => goToPage(ROUTES.project1)} className="projects__block">
						<img src={NetMathIntro} alt="NetMath" />
						{/* TODO paralax in title */}
						<div className="projects__block--title">
							<h3>Nethmath</h3>
							<h4>Application Web</h4>
						</div>
					</div>
				</div>
				<a className="externalLinks" href="https://dribbble.com/alexiabf" target="_blank" rel="noreferrer">
					Voir plus de projets
					<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M21.5889 10.414L8.35038 23.6525L6.93617 22.2383L19.5637 9.6108L9.3527 9.6108L9.3527 7.6108L22.5889 7.6108L23.5889 7.6108L23.5889 8.6108L23.5889 21.847L21.5889 21.847L21.5889 10.414Z" fill="#FF4000" />
					</svg>
				</a>
			</div>

			<div className="main-block sideHustle">
				<h2>Side Hustle</h2>
				<p>En dehors des heures de travail, j&apos;explore en illustration. Welcome to my playground</p>
			</div>

			<div className="main-block scroll-separator">
				<h2>my playground</h2>
			</div>

			<div className="main-block playground" />

			<div className="contact__block">
				<div className="content-wrapper">
					<h2>Veux tu sortir avec moi</h2>
					<div className="formBlock">
						<div className="yes">
							<canvas id="canvasYes" width="72" height="72" />
							<span>Yes</span>
						</div>

						<div className="no">
							<canvas id="canvasNo" width="72" height="72" />
							<span>No</span>
						</div>
					</div>
					<p className="contactPromp">
						Si tu as envie de travailler avec moi ou tout simplement de discuter, n’hésite pas à&nbsp;
						<a href="mailto:alexia.brideau.francoeur@gmail.com">m’écrire</a>
						.
					</p>

					<div className="separator">
						<svg width="1370" height="18" viewBox="0 0 1370 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 9C19.24 -1.66667 28.36 -1.66667 46.6 9C64.84 19.6667 73.96 19.6667 92.2 9C110.44 -1.66667 119.56 -1.66667 137.8 9C156.04 19.6667 165.16 19.6667 183.4 9C201.64 -1.66667 210.76 -1.66667 229 9C247.24 19.6667 256.36 19.6667 274.6 9C292.84 -1.66667 301.96 -1.66667 320.2 9C338.44 19.6667 347.56 19.6667 365.8 9C384.04 -1.66667 393.16 -1.66667 411.4 9C429.64 19.6667 438.76 19.6667 457 9C475.24 -1.66667 484.36 -1.66667 502.6 9C520.84 19.6667 529.96 19.6667 548.2 9C566.44 -1.66667 575.56 -1.66667 593.8 9C612.04 19.6667 621.16 19.6667 639.4 9C657.64 -1.66667 666.76 -1.66667 685 9C703.24 19.6667 712.36 19.6667 730.6 9C748.84 -1.66667 757.96 -1.66667 776.2 9C794.44 19.6667 803.56 19.6667 821.8 9C840.04 -1.66667 849.16 -1.66667 867.4 9C885.64 19.6667 894.76 19.6667 913 9C931.24 -1.66667 940.36 -1.66667 958.6 9C976.84 19.6667 985.96 19.6667 1004.2 9C1022.44 -1.66667 1031.56 -1.66667 1049.8 9C1068.04 19.6667 1077.16 19.6667 1095.4 9C1113.64 -1.66667 1122.76 -1.66667 1141 9C1159.24 19.6667 1168.36 19.6667 1186.6 9C1204.84 -1.66667 1213.96 -1.66667 1232.2 9C1250.44 19.6667 1259.56 19.6667 1277.8 9C1296.04 -1.66667 1305.16 -1.66667 1323.4 9C1341.64 19.6667 1350.76 19.6667 1369 9" stroke="#FF1A00" strokeWidth="2" />
						</svg>
					</div>
					<div className="socials">
						<h3>Tu peux aussi juste me stalker</h3>
						<div className="socials__buttons">
							<a href="https://www.linkedin.com/in/alexiabf/" target="_blank" rel="noreferrer">
								<img src={linkedin} alt="linkedin" />
							</a>
							<a href="https://dribbble.com/alexiabf" target="_blank" rel="noreferrer">
								<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0)">
										<path fillRule="evenodd" clipRule="evenodd" d="M19.73 8.96143C13.9672 8.96143 9.29126 13.6374 9.29126 19.4002C9.29126 25.163 13.9672 29.839 19.73 29.839C25.4815 29.839 30.1688 25.163 30.1688 19.4002C30.1688 13.6374 25.4815 8.96143 19.73 8.96143ZM26.625 13.7732C27.8704 15.2903 28.6177 17.2264 28.6403 19.3209C28.346 19.2643 25.4023 18.6643 22.436 19.0379C22.368 18.8907 22.3114 18.7322 22.2435 18.5737C22.0623 18.1435 21.8585 17.7019 21.6547 17.283C24.9381 15.947 26.4326 14.0223 26.625 13.7732ZM19.73 10.5012C21.9944 10.5012 24.0663 11.3503 25.64 12.7429C25.4815 12.9694 24.1342 14.7696 20.9641 15.9583C19.5036 13.2751 17.8846 11.0786 17.6355 10.739C18.3035 10.5805 19.0054 10.5012 19.73 10.5012ZM15.9372 11.339C16.175 11.656 17.76 13.8638 19.2432 16.4905C15.0767 17.6 11.3971 17.5774 11.0009 17.5774C11.5783 14.8148 13.4464 12.5165 15.9372 11.339ZM10.8084 19.4115C10.8084 19.3209 10.8084 19.2304 10.8084 19.1398C11.1933 19.1511 15.5183 19.2077 19.9678 17.8717C20.2282 18.3699 20.4659 18.8794 20.6924 19.3889C20.5792 19.4228 20.4546 19.4568 20.3414 19.4908C15.7447 20.9739 13.2992 25.0272 13.0954 25.3668C11.6802 23.7931 10.8084 21.6985 10.8084 19.4115ZM19.73 28.3218C17.6695 28.3218 15.7674 27.6199 14.2616 26.4424C14.4201 26.1141 16.2316 22.6269 21.2585 20.872C21.2811 20.8607 21.2924 20.8607 21.3151 20.8494C22.5718 24.0988 23.0813 26.8273 23.2172 27.6086C22.1416 28.0727 20.9641 28.3218 19.73 28.3218ZM24.7003 26.7934C24.6098 26.2499 24.1342 23.6459 22.9681 20.4418C25.7646 20.0003 28.2101 20.7249 28.5158 20.8268C28.1309 23.3062 26.7043 25.4461 24.7003 26.7934Z" fill="#FF4000" />
									</g>
									<defs>
										<clipPath id="clip0">
											<rect width="20.8775" height="20.8775" fill="white" transform="translate(9.29126 8.96143)" />
										</clipPath>
									</defs>
								</svg>
							</a>
							<a href="https://www.instagram.com/alexiartist/" target="_blank" rel="noreferrer">
								<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0)">
										<path d="M19.471 8.96143C16.636 8.96143 16.2802 8.97382 15.1667 9.02449C14.0554 9.07538 13.2968 9.25132 12.6331 9.50946C11.9465 9.77608 11.3641 10.1327 10.7839 10.7132C10.2032 11.2934 9.84657 11.8758 9.57907 12.5621C9.32028 13.2261 9.14412 13.9849 9.0941 15.0957C9.0443 16.2092 9.03125 16.5652 9.03125 19.4002C9.03125 22.2352 9.04386 22.5899 9.09432 23.7034C9.14543 24.8147 9.32136 25.5732 9.57929 26.2369C9.84613 26.9235 10.2028 27.5059 10.7832 28.0861C11.3633 28.6668 11.9457 29.0243 12.6318 29.2909C13.296 29.5491 14.0547 29.725 15.1658 29.7759C16.2793 29.8266 16.6349 29.839 19.4697 29.839C22.3049 29.839 22.6596 29.8266 23.7731 29.7759C24.8844 29.725 25.6439 29.5491 26.308 29.2909C26.9944 29.0243 27.5759 28.6668 28.1559 28.0861C28.7366 27.5059 29.0932 26.9235 29.3607 26.2372C29.6174 25.5732 29.7935 24.8144 29.8457 23.7036C29.8957 22.5901 29.9088 22.2352 29.9088 19.4002C29.9088 16.5652 29.8957 16.2094 29.8457 15.0959C29.7935 13.9846 29.6174 13.2261 29.3607 12.5624C29.0932 11.8758 28.7366 11.2934 28.1559 10.7132C27.5753 10.1325 26.9946 9.77587 26.3074 9.50946C25.6419 9.25132 24.8829 9.07538 23.7716 9.02449C22.6581 8.97382 22.3036 8.96143 19.4677 8.96143H19.471ZM18.5345 10.8426C18.8125 10.8421 19.1226 10.8426 19.471 10.8426C22.2582 10.8426 22.5885 10.8526 23.6892 10.9026C24.707 10.9491 25.2594 11.1192 25.6273 11.2621C26.1145 11.4513 26.4618 11.6775 26.8269 12.0428C27.1923 12.4082 27.4185 12.7561 27.6081 13.2433C27.751 13.6108 27.9213 14.1632 27.9676 15.181C28.0176 16.2814 28.0285 16.612 28.0285 19.3978C28.0285 22.1836 28.0176 22.5142 27.9676 23.6146C27.921 24.6324 27.751 25.1848 27.6081 25.5523C27.4189 26.0395 27.1923 26.3863 26.8269 26.7515C26.4616 27.1168 26.1147 27.343 25.6273 27.5322C25.2598 27.6757 24.707 27.8454 23.6892 27.8919C22.5887 27.9419 22.2582 27.9528 19.471 27.9528C16.6836 27.9528 16.3533 27.9419 15.2528 27.8919C14.235 27.8449 13.6826 27.6749 13.3145 27.532C12.8273 27.3428 12.4793 27.1166 12.114 26.7513C11.7486 26.3859 11.5224 26.0388 11.3328 25.5515C11.1899 25.1839 11.0196 24.6315 10.9733 23.6138C10.9233 22.5133 10.9133 22.1828 10.9133 19.3952C10.9133 16.6076 10.9233 16.2788 10.9733 15.1784C11.0199 14.1606 11.1899 13.6082 11.3328 13.2402C11.522 12.7531 11.7486 12.4051 12.114 12.0398C12.4793 11.6744 12.8273 11.4482 13.3145 11.2586C13.6824 11.1151 14.235 10.9454 15.2528 10.8987C16.2158 10.8552 16.589 10.8421 18.5345 10.84V10.8426ZM25.0432 12.5758C24.3516 12.5758 23.7905 13.1363 23.7905 13.8281C23.7905 14.5196 24.3516 15.0807 25.0432 15.0807C25.7348 15.0807 26.2958 14.5196 26.2958 13.8281C26.2958 13.1365 25.7348 12.5754 25.0432 12.5754V12.5758ZM19.471 14.0395C16.5105 14.0395 14.1102 16.4397 14.1102 19.4002C14.1102 22.3607 16.5105 24.7598 19.471 24.7598C22.4315 24.7598 24.8309 22.3607 24.8309 19.4002C24.8309 16.4397 22.4313 14.0395 19.4708 14.0395H19.471ZM19.471 15.9206C21.3926 15.9206 22.9506 17.4784 22.9506 19.4002C22.9506 21.3218 21.3926 22.8798 19.471 22.8798C17.5492 22.8798 15.9914 21.3218 15.9914 19.4002C15.9914 17.4784 17.5492 15.9206 19.471 15.9206V15.9206Z" fill="#FF4000" />
									</g>
									<defs>
										<clipPath id="clip0">
											<rect width="20.8775" height="20.8775" fill="white" transform="translate(9.03125 8.96143)" />
										</clipPath>
									</defs>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default Home;
