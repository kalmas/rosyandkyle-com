<script lang="ts">
    export let value: string = "";
    export let label: string = "";

    export let handleBlur = (e) => {e};

    $: console.log(value);
</script>

<label>
    <input type="text" bind:value placeholder={label} on:blur={handleBlur} class="form-control-lg" />
    {value.length > 0 ? label : ""}</label
>

<style>
    .form-control-lg {
        width: 100%;
        margin-bottom: 0px;
    }
</style>
