import App from './App.svelte';


const app = new App({
	target: document.body,
	props: {
		greeting: 'friend',
		firstName: '',
		lastName: '',
		rsvp: undefined,
		partner: undefined,
		complete: false
	}
});

export default app;