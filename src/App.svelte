<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import Nav from "./Nav.svelte";

    import Home from "./routes/Home.svelte";
    import RSVP from "./routes/RSVP.svelte";

    export let url: string = "";
</script>

<Router {url}>
    <Nav {url} />
    <main>
        <Route path="rsvp"><RSVP /></Route>
        <Route path="/"><Home /></Route>
    </main>
    <br />
</Router>
