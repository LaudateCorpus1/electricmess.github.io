import React from 'react';
import loaderGif from '../assets/images/loader.gif';

function Loader() {

	const loadingStyle = {
		width: '1%',
	};
	return (
		<div id="loader" className="page-loader">
			<div className="loaderOverlay">
				<div className="loader">
					<img className="loaderFaces" src={loaderGif} alt="loaderGif" />
					<div id="loadingPercentage" className="page-loader-percentage">
						<div id="loadingPercentageBar" className="page-loader-percentage-bar" style={loadingStyle} />
					</div>				
				</div>
			</div>
		</div>
	);
}

export default Loader;
