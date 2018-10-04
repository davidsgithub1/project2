export const setApi = () => {

	switch(window.location.hostname) {
		//local environment
		case 'localhost': 
			return 'http://localhost:8080';
		//production environment
		case 'googleauth': 
			return 'herokupath'
		default: 
			return null; 
	}
};