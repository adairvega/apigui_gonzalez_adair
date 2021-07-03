import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'bootstrap';

const app = new App({
	target: document.body,
	props: {
		name: 'Bienvenido',
	}
});

export default app;