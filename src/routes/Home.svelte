<script lang="ts">
    import helpers from "../helpers";
    import Image from "../Image.svelte";
</script>

<div class="container text-center">
    <h1 class="display-1">
        {helpers.ourNames()} Are Getting Married!
    </h1>

    <h2 class="display-3">
        <a class="link-primary" href="/rsvp">Please RSVP Here!</a>
    </h2>
    <Image src="img/rosyandkyle.webp" alt="Kyle and Rosy" />
</div>
