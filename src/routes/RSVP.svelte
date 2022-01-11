<script lang="ts">
    import Input from "../Input.svelte";
    import helpers from "../helpers";

    export let greeting: string = "friend";
    export let name: string = "";
    export let rsvp: string;
    export let partner: string;
    export let complete: boolean = false;

    let covid: string;
    let showDetails: boolean;
    let email: string;
    let phone: string;

    const changeGreeting = (e) => {
        if (e.target.value.length) {
            greeting =  e.target.value.replace(/ .*/, '') ;
        } else {
            greeting = "friend";
        }
    };

    const rsvpChange = (e) => {
        rsvp = e.target.value;

        if (rsvp == "no") {
            complete = true;
        } else {
            complete = false;
        }
    };

    const covidChange = (e) => {
        covid = e.target.value;

        if (covid !== undefined) {
            showDetails = true;
        }
    };


</script>

<main>
    <div class="container">
        <h1>Hello, {greeting}!</h1>
        <p>
            Thanks for RSVPing to {helpers.ourNames()}'s wedding. Please tell us a few things
            to help us prepare. If this form isn't working right, text Kyle.
        </p>

        <form class="needs-validation" novalidate>
            <div class="accordion">
                <div class="form-group mb-2">
                    <div class="row mb-2">
                        <Input
                            bind:value={name}
                            handleBlur={changeGreeting}
                            label="Your Name"
                            pattern="^[\w.-]+(?: [\w.-]+)+$"
                        />
                    </div>
                </div>

                <div class="btn-group mb-4" role="group">
                    <input
                        checked={rsvp == "yes"}
                        on:change={rsvpChange}
                        value="yes"
                        disabled={!name.length}
                        type="radio"
                        class="btn-check"
                        name="rsvp"
                        autocomplete="off"
                        id="attending"
                    />
                    <label class="btn btn-outline-dark" for="attending"
                        >I'll Be There ✅</label
                    >
                    <input
                        checked={rsvp == "no"}
                        on:change={rsvpChange}
                        value="no"
                        disabled={!name.length}
                        type="radio"
                        class="btn-check"
                        name="rsvp"
                        autocomplete="off"
                        id="not-attending"
                    />
                    <label class="btn btn-outline-dark" for="not-attending"
                        >I Can't Make It ❌</label
                    >
                </div>

                <div class="collapse mb-2" class:show={rsvp == "yes"}>
                    <div class="mb-2">
                        <strong>Lorem ipsum dolor sit amet,</strong> consectetur
                        adipiscing elit. Mauris vitae iaculis odio. Suspendisse nisi
                        ipsum, pharetra sed massa id, imperdiet sollicitudin diam.
                        Nam magna leo, luctus eu sodales sit amet, ornare et velit.
                        Mauris at elit aliquam, ullamcorper dui sed, dignissim leo.
                        Praesent in semper metus, in vestibulum sem. Morbi non nulla
                        viverra, elementum dolor in, hendrerit lectus. In mollis
                        lobortis quam non varius. Integer vel ex vitae ante gravida
                        sodales sit amet eu nunc. Morbi in lectus arcu. Nullam erat
                        diam, vehicula ac volutpat ac, rutrum in mi. Duis laoreet
                        mauris sit amet enim elementum, viverra suscipit dui pulvinar.
                        Aenean vel massa rhoncus, varius erat iaculis, cursus urna.
                        Mauris sapien dui, consectetur et porta quis, pharetra id
                        tortor. Vivamus pharetra tempus nisi, a tincidunt eros mattis
                        nec.
                    </div>

                    <div class="btn-group mb-4" role="group">
                        <input
                            checked={covid == "vaccinated"}
                            on:change={covidChange}
                            value="vaccinated"
                            type="radio"
                            class="btn-check"
                            name="covid"
                            autocomplete="off"
                            id="vaccinated"
                        />
                        <label class="btn btn-outline-dark" for="vaccinated"
                            >I'll Be Fully Vaccinated 💉</label
                        >
                        <input
                            checked={covid == "test"}
                            on:change={covidChange}
                            value="test"
                            type="radio"
                            class="btn-check"
                            name="covid"
                            autocomplete="off"
                            id="test"
                        />
                        <label class="btn btn-outline-dark" for="test"
                            >I'll Take A Test 🧪</label
                        >
                        <input
                            checked={covid == "noresponse"}
                            on:change={covidChange}
                            value="noresponse"
                            type="radio"
                            class="btn-check"
                            name="covid"
                            autocomplete="off"
                            id="noresponse"
                        />
                        <label class="btn btn-outline-dark" for="noresponse"
                            >I'd Rather Not Say 🥸</label
                        >
                    </div>
                </div>

                {#if showDetails == true}
                    <div class="form-group mb-2">
                        <p class="mb-2">How can we get in contact with you?</p>
                        <div class="row mb-2">
                            <Input
                                bind:value={email}
                                pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                label="Email Address"
                            />
                        </div>
                        <div class="row mb-2">
                            <Input
                                bind:value={phone}
                                pattern="^\d&#123;3&#125;-?\d&#123;3&#125;-?\d&#123;4&#125;$"
                                label="Phone Number"
                            />
                        </div>
                    </div>

                    <p class="mb-2">Are you bringing a partner?</p>
                    <div class="btn-group mb-2" role="group">
                        <input
                            bind:group={partner}
                            type="radio"
                            class="btn-check"
                            name="partner"
                            value={"yes"}
                            id="partner"
                            autocomplete="off"
                        />
                        <label class="btn btn-outline-dark" for="partner"
                            >Yes</label
                        >

                        <input
                            bind:group={partner}
                            type="radio"
                            class="btn-check"
                            name="partner"
                            value={"no"}
                            id="noPartner"
                            autocomplete="off"
                        />
                        <label class="btn btn-outline-dark" for="noPartner"
                            >No</label
                        >
                    </div>
                {/if}

                <div class="form-group">
                    <div class="row mb-4">
                        <button
                            disabled={complete === false}
                            type="submit"
                            class="submit mx-auto btn btn-dark btn-block">Submit</button
                        >
                    </div>
                </div>
            </div>
        </form>
    </div>
</main>

<style>
    main {
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #f5f4f4;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 150;
    }

    main {
        max-width: none;
    }

    .submit {
        max-width: 70%;

    }
</style>
