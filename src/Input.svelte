<!-- <script lang="ts">
    export let value: string = "";
    export let label: string = "";

    export let handleBlur = (e) => {};
    export let pattern;
</script>

<label>
    <input
        type="text"
        bind:value
        placeholder={label}
        {pattern}
        on:blur={handleBlur}
        class="form-control-lg form-control"
        required
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

    .form-control:valid {
        border-color: #198754;
        padding-right: calc(1.5em + 0.75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) center;
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    }
</style> -->
