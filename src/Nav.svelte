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

<div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container-fluid">
            <div class="navbar-brand">{helpers.ourInitials()}</div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link to="/" {getProps}>Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/rsvp" {getProps}>RSVP</Link>
                </li>
                <li class="nav-item">
                    <Link to="/event" {getProps}>Event</Link>
                </li>
            </ul>
        </div>
    </nav>
</div>

<style>
    .navbar-brand {
        font-size: xxx-large;
        font-weight: 100;
    }

    .nav-item {
        font-size: x-large;
        font-weight: 100;
    }
</style>