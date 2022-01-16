<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import Nav from "./Nav.svelte";
import Event from "./routes/Event.svelte";

    import Home from "./routes/Home.svelte";
    import RSVP from "./routes/RSVP.svelte";

    export let url: string = "";
</script>

<Router {url}>
    <Nav />
    <main>
        <Route path="rsvp"><RSVP /></Route>
        <Route path="/event"><Event /></Route>
        <Route path="/"><Home /></Route>
    </main>
    <div id="footer">Questions? Text Kyle at <a href="tel:757-407-1298">(757) 407-1298</a>.</div>
</Router>

<style>
    #footer {
        font-size: small;
        text-align: center;
        padding-bottom: 15px;
    }
</style>
