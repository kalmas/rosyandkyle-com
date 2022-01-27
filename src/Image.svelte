<script lang="ts">
    export let src: string = "";
    export let alt: string = "";
</script>

<a href={src}><img class="img-fluid mb-2" {alt} {src} /></a>
