import React from 'react';

function Loader() {

	const loadingStyle = {
		width: '1%',
	};
	return (
		<div id="loader" className="page-loader">
			<div className="loaderOverlay">
				<div id="loadingCube" className="loader">
					<div id="loadingPercentage" className="page-loader-percentage">
						<div id="loadingPercentageBar" className="page-loader-percentage-bar" style={loadingStyle} />
					</div>				
				</div>
			</div>
		</div>
	);
}

export default Loader;
