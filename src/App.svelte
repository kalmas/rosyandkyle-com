<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";

	import Home from "./routes/Home.svelte";
	import RSVP from "./routes/RSVP.svelte";

	export let url: string = "";
</script>

<Router {url}>
	<nav>
		<Link to="/">Home</Link>
		<Link to="rsvp">RSVP</Link>
	</nav>
	<div>
		<Route path="rsvp"><RSVP /></Route>
		<Route path="/"><Home /></Route>
	</div>
</Router>
