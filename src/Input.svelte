<script lang="ts">
    export let value: string = '';
    export let label: string = '';

    export let handleBlur = (e) => {};

</script>

<label>
    <input
        type="text"
        bind:value
        placeholder={label}
        on:blur={handleBlur}
        class="form-control-lg"
    />
    <div class="text-label" class:hidden={value.length <= 0}>{label}</div>
</label>

<style>
    .form-control-lg {
        width: 100%;
        margin-bottom: 0px;
    }

    .text-label {
        text-align: left;
        margin-left: 1em;
        margin-bottom: 0px;
        font-size: small;
        color: gray;
    }
</style>
