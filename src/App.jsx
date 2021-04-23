import React from 'react';
import logo from './logo.svg';
import './assets/sass/styles.scss';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<span>Logo</span>		
				<span>Menu</span>
			</header>
			<div className="main-view">

				<div className="main-block">
					<h1>
					Bonjour, hi 
						<br />
					Je m’appelle Alexia. Amoureuse des détails et des expériences peaufinées, j’ai passé les 8 dernières années à explorer plusieurs facettes du design numérique. 
					</h1>
					<h2>
						J’ai aussi bingé beaucoup d’animes, bu au moins 5800 lattés et tué quelques plantes malgré tous mes efforts.	
					</h2>	
				</div>

				<div className="main-block half">
					<h3>
						At the moment
					</h3>
					<div>
						<p>
							I currently work as a UI/UX designer for Nexus Innovations. 
						</p>
						<p>							
							Je fais aussi partie de l’équipe de Montréal Interactive, une communauté locale de design existant depuis 4 ans. Durant ce temps pandémique, nous somme surtout actif·ve·s sur Discord.
						</p>
					</div>	
				</div>
				<div className="main-block half">
					<h3>
						What I enjoy doing the most
					</h3>
					<div>
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
		</div> 
	);
}

export default App;
