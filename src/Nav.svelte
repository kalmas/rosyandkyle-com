<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import helpers from "./helpers";

    export var url: string = "hello!";

    function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
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
            <Link to="/" class="navbar-brand">{helpers.ourInitials()}</Link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link to="/" {getProps}>Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/rsvp" {getProps}>RSVP</Link>
                </li>
            </ul>
        </div>
    </nav>
</div>

