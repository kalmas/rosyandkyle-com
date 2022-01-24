<script lang="ts">
    import { Link } from "svelte-routing";
    import helpers from "./helpers";

    function getProps({ href, isPartiallyCurrent, isCurrent }) {
        const isActive =
            href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

        // The object returned here is spread on the anchor element's attributes
        if (isActive) {
            return { class: "nav-link active" };
        }
        return { class: "nav-link" };
    }
</script>

<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">{helpers.ourInitials()}</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link to="/rsvp" {getProps}>RSVP</Link>
                </li>
                <li class="nav-item">
                    <Link to="/event" {getProps}>Event Details</Link>
                </li>
                <li class="nav-item">
                    <Link to="/registry" {getProps}>Our Registry</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

<style>
    .navbar-brand {
        font-size: xx-large;
        font-weight: 100;
    }

    .nav-item {
        font-size: large;
        font-weight: 100;
    }
</style>
