/* eslint-disable no-plusplus */

export function showLoader(selector, callback) {
	const loader = document.getElementById('loader');
	loader.style.top = '0';
	loader.style.transitionDuration = '0.4s';
}

export function loadPage(selector, callback) {
	console.log('selectorcalled', selector);
	const allImagesOnPage = [].slice.call(document.querySelectorAll(`${selector} img`));
	const allVideosOnPage = [].slice.call(document.querySelectorAll(`${selector} video`));
	const allElementsOnPage = [...allImagesOnPage, ...allVideosOnPage];
	const nbElements = allElementsOnPage.length;
	const nbElementsLoaded = 0;

	const triggerIsLoaded = () => {
		console.log('isloaded');

		setTimeout(() => {
			const loaderBar = document.getElementById('loadingPercentageBar');
			if (loaderBar) {
				loaderBar.style.width = '100%';
			}
						
			setTimeout(() => {
				document.documentElement.scrollTop = 0;
				const loader = document.getElementById('loader');
				if (loader) {
					loader.style.top = '-100vh';
					loader.style.transitionDuration = '0.4s';
				}
				if (loaderBar) {
					loaderBar.style.width = '0%';
				}
			}, 1500); 
		}, 1500);
	};

	
	// if (!allElementsOnPage || allElementsOnPage.length <= 0) {
	triggerIsLoaded();
	// }

	// //   console.log({allElementsOnPage, nbElements, nbElementsLoaded});
	// console.log('allElementsOnPage', allElementsOnPage);
	// allElementsOnPage.forEach((elem) => {
	// 	// console.log({elem}, elem.tagName);

	// 	console.log('elem', elem);
	// 	elem.onload = () => {
	// 		nbElementsLoaded++;
	// 		document.getElementById('loadingPercentageBar').style.width = `${10 * nbElementsLoaded}px`;

	// 		if (nbElementsLoaded === nbElements) {
	// 			//   console.log({nbElementsLoaded})
	// 			triggerIsLoaded();
	// 		}
	// 	};
	// });
}
