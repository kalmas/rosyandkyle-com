<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import Nav from "./Nav.svelte";
    import Event from "./routes/Event.svelte";
    import Home from "./routes/Home.svelte";
    import RSVP from "./routes/RSVP.svelte";
    import { v4 as uuidv4 } from "uuid";

    let url: string = "";
    let sessionId: string = uuidv4();

    let emoji: string;
    let emojis = [
        "💜",
        "🔥",
        "❤️‍🔥",
        "💯",
        "🎉",
        "🍾",
        "🦝",
        "🐊",
        "😻",
        "🫀",
        "🏩",
    ];

    const setEmoji = (index: number) => {
        if (index >= emojis.length) {
            index = 0;
        }

        emoji = emojis[index];

        setTimeout(setEmoji.bind(null, index + 1), 2000);
    };

    setEmoji(0);
</script>

<Router {url}>
    <Nav />
    <main>
        <Route path="rsvp"><RSVP {sessionId} /></Route>
        <Route path="/event"><Event /></Route>
        <Route path="/"><Home /></Route>
        <div class="text-center mb-2 display-6">{emoji}</div>
    </main>
    <div id="footer">
        Questions? Text Kyle at <a href="tel:757-407-1298" class="link-dark"
            >(757) 407-1298</a
        >.
    </div>
</Router>

<style>
    #footer {
        text-align: center;
        padding-bottom: 15px;
    }
</style>
