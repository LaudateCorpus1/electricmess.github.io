import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import Masonry from 'react-masonry-css';
import AOS from 'aos';

import { fabric } from 'fabric';
import { ROUTES } from '../Constants';
import ElliotJaxIntro from '../assets/images/projects/elliot-jax-intro.jpg';
import NetMathIntro from '../assets/images/projects/netmath-intro.jpg';
import MtlIntIntro from '../assets/images/projects/mtl-int-intro.jpg';
import GravIntro from '../assets/images/projects/grav-intro.jpg';
import ShareIntro from '../assets/images/projects/share-intro.jpg';
import linkedin from '../assets/images/LinkedIn.svg';

import { loadPage, showLoader } from '../helper/loader';

import art1 from '../assets/images/art-1.jpg';
import art2 from '../assets/images/art-2.gif';
import art3 from '../assets/images/art-3.jpg';
import art4 from '../assets/images/art-4.jpg';
import art5 from '../assets/images/art-6.gif';
import art6 from '../assets/images/art-5.jpg';


function Home() {
	
	setTimeout(() => {
		window.scrollTo(0, 0);
		AOS.init();
	}, 500);

	const breakpointColumnsObj = {
		default: 2,
		1025: 1,
	};

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
		<div className="homepage">
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
					<h3 className="half__title" data-aos="in-view">						
						<div className="aos__mask">
							<div className="aos__content">
								En ce
								<br />
								moment
							</div>
						</div>
					</h3>
					<div className="half__content" data-aos="in-view"> 
						<div className="aos__mask">
							<div className="aos__content">
								<p>
									Je travaille actuellement en tant que UI/UX designer pour&nbsp;
									<a className="externalLinks" target="blank" href="https://nexusinno.com/">
										Nexus&nbsp;Innovations.
										<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M21.5889 10.414L8.35038 23.6525L6.93617 22.2383L19.5637 9.6108L9.3527 9.6108L9.3527 7.6108L22.5889 7.6108L23.5889 7.6108L23.5889 8.6108L23.5889 21.847L21.5889 21.847L21.5889 10.414Z" fill="#FF4000" />
										</svg>
									</a>
								</p>
								<p>
									Je fais aussi partie de l’équipe de Montréal Interactive, une communauté locale de design existant depuis 5 ans. Étant donné la pandémie mondiale, nous sommes surtout actif·ve·s sur&nbsp;
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
				</div>
			</div>
			<div className="main-block half">
				<div className="content-wrapper">
					<h3 className="half__title" data-aos="in-view">
						<div className="aos__mask">
							<div className="aos__content">
								Ce qui me
								<br />
								fait tripper
							</div>
						</div>
					</h3>
					<div className="half__content" data-aos="in-view">
						<div className="aos__mask">
							<div className="aos__content">
								<ul className="list">
									<li>
										UI Design
									</li>
									<li>
										Micro-interactions
									</li>
									<li>
										Prototypes
									</li>
									<li>
										Design systems
									</li>
									<li>
										Illustration
									</li>
									<li>
										Branding
									</li>
									<li>
										Assurance qualité
									</li>
									<li>
										Apprendre et collaborer
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="main-block scroll-separator project-scroll">
				<h2>Projets selectionnées</h2>
			</div>
			<div className="main-block projects">
				<div className="content-wrapper">
					<div onClick={() => goToPage(ROUTES.project1)} tabIndex={0} role="button" onKeyDown={() => goToPage(ROUTES.project1)} className="projects__block">
						<img src={ElliotJaxIntro} alt="Elliot Jax" />
						<div className="projects__block--title" data-aos="in-view">
							<div className="aos__mask">
								<div className="aos__content">
									<h3>Elliot Jaxx</h3>
									<h4>Site Web</h4>
								</div>
							</div>
						</div>
					</div>

					<div onClick={() => goToPage(ROUTES.project2)} tabIndex={0} role="button" onKeyDown={() => goToPage(ROUTES.project2)} className="projects__block">
						<div data-aos="in-view">
							<img className="aos__images" src={NetMathIntro} alt="NetMath" />
						</div>
						<div className="projects__block--title" data-aos="in-view">
							<div className="aos__mask">
								<div className="aos__content">
									<h3>Netmath</h3>
									<h4>Application Web</h4>
								</div>
							</div>
						</div>
					</div>

					<div onClick={() => goToPage(ROUTES.project3)} tabIndex={0} role="button" onKeyDown={() => goToPage(ROUTES.project3)} className="projects__block">
						<img src={MtlIntIntro} alt="Montréal Interactive" />
						<div className="projects__block--title" data-aos="in-view">
							<div className="aos__mask">
								<div className="aos__content">
									<h3>
										Montréal
										<br />
										Interactive
									</h3>
									<h4>Direction artistique</h4>
								</div>
							</div>
						</div>
					</div>

					<div onClick={() => goToPage(ROUTES.project4)} tabIndex={0} role="button" onKeyDown={() => goToPage(ROUTES.project4)} className="projects__block">
						<img src={GravIntro} alt="Gravi-t" />
						<div className="projects__block--title" data-aos="in-view">
							<div className="aos__mask">
								<div className="aos__content">
									<h3>Gravi-t</h3>
									<h4>Logo</h4>
								</div>
							</div>
						</div>
					</div>

					<div onClick={() => goToPage(ROUTES.project5)} tabIndex={0} role="button" onKeyDown={() => goToPage(ROUTES.project5)} className="projects__block">
						<img src={ShareIntro} alt="ShareGate" />
						<div className="projects__block--title" data-aos="in-view">
							<div className="aos__mask">
								<div className="aos__content">
									<h3>ShareGate</h3>
									<h4>SiteWeb</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <a className="externalLinks" href="https://dribbble.com/alexiabf" target="_blank" rel="noreferrer">
					Voir plus de projets
					<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M21.5889 10.414L8.35038 23.6525L6.93617 22.2383L19.5637 9.6108L9.3527 9.6108L9.3527 7.6108L22.5889 7.6108L23.5889 7.6108L23.5889 8.6108L23.5889 21.847L21.5889 21.847L21.5889 10.414Z" fill="#FF4000" />
					</svg>
				</a> */}
			</div>

			<div className="main-block sideHustle" data-aos="in-view">
				<div className="aos__mask">
					<div className="aos__content">
						<h2>Side Hustle</h2>
						<p>En dehors des heures de travail, j&apos;explore en illustration. Welcome to my playground.</p>
					</div>
				</div>
			</div>

			<div className="main-block scroll-separator">
				<h2>my playground</h2>
			</div>

			<div className="main-block playground">
				<div className="content-wrapper art-grid">

					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="masonry-grid"
						columnClassName="masonry-grid_column" 
					>
						<img src={art1} alt="art-1" />
						<img src={art2} alt="art-2" />
						<img src={art3} alt="art-3" />
						<img src={art4} alt="art-4" />
						<img src={art5} alt="art-5" />
						<img src={art6} alt="art-6" />
					</Masonry>
				</div>
			</div>

			<div className="contact__block">

				<div className="content-wrapper" id="sheetWrapper">

					<h2>Veux tu sortir avec moi ?</h2>
					<div className="formBlock">
						<div className="yes">
							<div className="block" width="72" height="72" />
							<span>Oui</span>
						</div>

						<div className="no">
							<div className="block" width="72" height="72" />
							<span>Non</span>
						</div>

						<canvas id="sheet" />
					</div>
				</div>
			</div>
			<div className="socials-wrapper">
				<div className="content-wrapper">
					<div className="separator">
						<svg width="1370" height="18" viewBox="0 0 1370 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 9C19.24 -1.66667 28.36 -1.66667 46.6 9C64.84 19.6667 73.96 19.6667 92.2 9C110.44 -1.66667 119.56 -1.66667 137.8 9C156.04 19.6667 165.16 19.6667 183.4 9C201.64 -1.66667 210.76 -1.66667 229 9C247.24 19.6667 256.36 19.6667 274.6 9C292.84 -1.66667 301.96 -1.66667 320.2 9C338.44 19.6667 347.56 19.6667 365.8 9C384.04 -1.66667 393.16 -1.66667 411.4 9C429.64 19.6667 438.76 19.6667 457 9C475.24 -1.66667 484.36 -1.66667 502.6 9C520.84 19.6667 529.96 19.6667 548.2 9C566.44 -1.66667 575.56 -1.66667 593.8 9C612.04 19.6667 621.16 19.6667 639.4 9C657.64 -1.66667 666.76 -1.66667 685 9C703.24 19.6667 712.36 19.6667 730.6 9C748.84 -1.66667 757.96 -1.66667 776.2 9C794.44 19.6667 803.56 19.6667 821.8 9C840.04 -1.66667 849.16 -1.66667 867.4 9C885.64 19.6667 894.76 19.6667 913 9C931.24 -1.66667 940.36 -1.66667 958.6 9C976.84 19.6667 985.96 19.6667 1004.2 9C1022.44 -1.66667 1031.56 -1.66667 1049.8 9C1068.04 19.6667 1077.16 19.6667 1095.4 9C1113.64 -1.66667 1122.76 -1.66667 1141 9C1159.24 19.6667 1168.36 19.6667 1186.6 9C1204.84 -1.66667 1213.96 -1.66667 1232.2 9C1250.44 19.6667 1259.56 19.6667 1277.8 9C1296.04 -1.66667 1305.16 -1.66667 1323.4 9C1341.64 19.6667 1350.76 19.6667 1369 9" stroke="#FF1A00" strokeWidth="2" />
						</svg>
					</div>

					<div className="socials">
						<p className="contactPromp">
								Si tu as envie de travailler avec moi ou tout simplement
							<br />
							de discuter, n’hésite pas à&nbsp;
							<a className="externalLinks" href="mailto:alexia.brideau.francoeur@gmail.com">m’écrire</a>
							.
						</p>
						<h3>Tu peux aussi juste me stalker</h3>
						<div className="socials__buttons">
							<a href="https://www.linkedin.com/in/alexiabf/" target="_blank" rel="noreferrer">
								<img src={linkedin} alt="linkedin" />
							</a>
							<a href="https://dribbble.com/alexiabf" target="_blank" rel="noreferrer">
								<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M20 0C8.9588 0 0 8.9588 0 20C0 31.0412 8.9588 40 20 40C31.0195 40 40 31.0412 40 20C40 8.9588 31.0195 0 20 0ZM33.2104 9.21908C35.5965 12.1258 37.0282 15.8352 37.0716 19.8482C36.5076 19.7397 30.8677 18.59 25.1844 19.3058C25.0542 19.0239 24.9458 18.7202 24.8156 18.4165C24.4686 17.5922 24.0781 16.7462 23.6876 15.9436C29.9783 13.384 32.8416 9.69632 33.2104 9.21908ZM20 2.95011C24.3384 2.95011 28.308 4.577 31.3232 7.24512C31.0195 7.67896 28.4382 11.128 22.3644 13.4056C19.5662 8.26464 16.4642 4.0564 15.987 3.40564C17.2668 3.10195 18.6117 2.95011 20 2.95011ZM12.7332 4.55532C13.1887 5.16268 16.2256 9.39264 19.0672 14.4252C11.0846 16.551 4.03472 16.5076 3.27549 16.5076C4.38176 11.2148 7.96096 6.81128 12.7332 4.55532ZM2.90672 20.0217C2.90672 19.8482 2.90672 19.6746 2.90672 19.5011C3.64425 19.5228 11.9306 19.6312 20.4555 17.0716C20.9544 18.026 21.41 19.0022 21.8438 19.9783C21.6269 20.0434 21.3883 20.1085 21.1714 20.1735C12.3644 23.0152 7.67896 30.7809 7.28852 31.4317C4.577 28.4165 2.90672 24.4035 2.90672 20.0217ZM20 37.0933C16.0521 37.0933 12.4078 35.7484 9.52276 33.4924C9.82648 32.8634 13.2972 26.1822 22.9284 22.82C22.9718 22.7983 22.9935 22.7983 23.0369 22.7766C25.4447 29.0022 26.4208 34.2299 26.6811 35.7267C24.6204 36.616 22.3644 37.0933 20 37.0933ZM29.5228 34.1649C29.3492 33.1236 28.4382 28.1345 26.2039 21.9957C31.5618 21.1497 36.2473 22.538 36.833 22.7332C36.0954 27.4837 33.3622 31.5835 29.5228 34.1649Z" fill="#FF4000" />
								</svg>
							</a>
							<a href="https://www.instagram.com/alexiartist/" target="_blank" rel="noreferrer">
								<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M20.0019 0C14.5702 0 13.8885 0.0237504 11.7551 0.120834C9.62593 0.218334 8.17259 0.555417 6.90091 1.05C5.58547 1.56083 4.46963 2.24417 3.35795 3.35625C2.24544 4.46792 1.5621 5.58375 1.04959 6.89875C0.553755 8.17083 0.216252 9.62458 0.120418 11.7529C0.0250001 13.8862 0 14.5683 0 20C0 25.4317 0.0241673 26.1112 0.120835 28.2446C0.218753 30.3738 0.555839 31.8271 1.05001 33.0987C1.56127 34.4142 2.24461 35.53 3.3567 36.6417C4.46796 37.7542 5.58381 38.4392 6.89841 38.95C8.17092 39.4446 9.62468 39.7817 11.7535 39.8792C13.8868 39.9762 14.5681 40 19.9994 40C25.4315 40 26.1111 39.9762 28.2445 39.8792C30.3737 39.7817 31.8287 39.4446 33.1012 38.95C34.4162 38.4392 35.5304 37.7542 36.6416 36.6417C37.7541 35.53 38.4375 34.4142 38.95 33.0992C39.4417 31.8271 39.7792 30.3733 39.8792 28.245C39.975 26.1117 40 25.4317 40 20C40 14.5683 39.975 13.8867 39.8792 11.7533C39.7792 9.62417 39.4417 8.17083 38.95 6.89917C38.4375 5.58375 37.7541 4.46792 36.6416 3.35625C35.5291 2.24375 34.4166 1.56042 33.0999 1.05C31.8249 0.555417 30.3707 0.218334 28.2415 0.120834C26.1082 0.0237504 25.429 0 19.9956 0H20.0019ZM18.2077 3.60417C18.7402 3.60333 19.3344 3.60417 20.0019 3.60417C25.3419 3.60417 25.9749 3.62333 28.0836 3.71917C30.0336 3.80833 31.092 4.13417 31.797 4.40792C32.7303 4.77042 33.3958 5.20375 34.0954 5.90375C34.7954 6.60375 35.2287 7.27042 35.592 8.20375C35.8658 8.90792 36.192 9.96625 36.2808 11.9162C36.3766 14.0246 36.3975 14.6579 36.3975 19.9954C36.3975 25.3329 36.3766 25.9662 36.2808 28.0746C36.1916 30.0246 35.8658 31.0829 35.592 31.7871C35.2295 32.7204 34.7954 33.385 34.0954 34.0846C33.3953 34.7846 32.7308 35.2179 31.797 35.5804C31.0928 35.8554 30.0336 36.1804 28.0836 36.2696C25.9753 36.3654 25.3419 36.3862 20.0019 36.3862C14.6614 36.3862 14.0285 36.3654 11.9201 36.2696C9.9701 36.1796 8.91176 35.8537 8.20634 35.58C7.27299 35.2175 6.60632 34.7842 5.90631 34.0842C5.2063 33.3842 4.77297 32.7192 4.40963 31.7854C4.13588 31.0813 3.80962 30.0229 3.72087 28.0729C3.62504 25.9646 3.60587 25.3312 3.60587 19.9904C3.60587 14.6496 3.62504 14.0196 3.72087 11.9113C3.81004 9.96125 4.13588 8.90292 4.40963 8.19792C4.77213 7.26458 5.2063 6.59792 5.90631 5.89792C6.60632 5.19792 7.27299 4.76458 8.20634 4.40125C8.91134 4.12625 9.9701 3.80125 11.9201 3.71167C13.7651 3.62833 14.4802 3.60333 18.2077 3.59917V3.60417ZM30.6778 6.925C29.3528 6.925 28.2778 7.99875 28.2778 9.32417C28.2778 10.6492 29.3528 11.7242 30.6778 11.7242C32.0028 11.7242 33.0778 10.6492 33.0778 9.32417C33.0778 7.99917 32.0028 6.92417 30.6778 6.92417V6.925ZM20.0019 9.72917C14.3297 9.72917 9.73094 14.3279 9.73094 20C9.73094 25.6721 14.3297 30.2687 20.0019 30.2687C25.674 30.2687 30.2711 25.6721 30.2711 20C30.2711 14.3279 25.6736 9.72917 20.0015 9.72917H20.0019ZM20.0019 13.3333C23.6836 13.3333 26.6686 16.3179 26.6686 20C26.6686 23.6817 23.6836 26.6667 20.0019 26.6667C16.3198 26.6667 13.3351 23.6817 13.3351 20C13.3351 16.3179 16.3198 13.3333 20.0019 13.3333Z" fill="#FF4000" />
								</svg>
							</a>
							<a href="https://vm.tiktok.com/ZMeCM1DwL/" target="_blank" rel="noreferrer">
								<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M37.5252 10.0305C35.2424 10.0305 33.1361 9.27427 31.4447 7.99849C29.5049 6.53599 28.1111 4.39067 27.6189 1.91802C27.4971 1.30708 27.4314 0.676611 27.4252 0.0305176H20.9041V17.8493L20.8963 27.6094C20.8963 30.2188 19.1971 32.4313 16.8416 33.2094C16.158 33.4352 15.4197 33.5422 14.651 33.5C13.6697 33.4461 12.7502 33.15 11.951 32.6719C10.2502 31.6547 9.09705 29.8094 9.0658 27.6985C9.01659 24.3993 11.6838 21.7094 14.9806 21.7094C15.6314 21.7094 16.2564 21.8157 16.8416 22.0086V17.1383V15.3875C16.2244 15.2961 15.5963 15.2485 14.9611 15.2485C11.3525 15.2485 7.97752 16.7485 5.56502 19.4508C3.74159 21.493 2.64784 24.0985 2.47909 26.8305C2.25799 30.4196 3.57127 33.8313 6.11815 36.3485C6.49237 36.718 6.88534 37.061 7.29627 37.3774C9.47987 39.0579 12.1494 39.9688 14.9611 39.9688C15.5963 39.9688 16.2244 39.9219 16.8416 39.8305C19.4681 39.4415 21.8916 38.2391 23.8041 36.3485C26.1541 34.0258 27.4525 30.9422 27.4666 27.6602L27.433 13.0852C28.5541 13.95 29.7799 14.6657 31.0955 15.2211C33.1416 16.0844 35.3111 16.5219 37.5439 16.5211V11.786V10.029C37.5455 10.0305 37.5267 10.0305 37.5252 10.0305Z" fill="#FF4000" />
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
