import App from './App.svelte';


const app = new App({
	target: document.body,
	props: {
		greeting: 'friend',
		firstName: 'k',
		lastName: 'k',
		rsvp: 'yes',
		partner: undefined,
		complete: false
	}
});

export default app;