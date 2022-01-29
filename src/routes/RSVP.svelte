<script lang="ts">
    import { v4 as uuidv4 } from "uuid";

    export let sessionId: string;

    let greeting: string = "friend";
    let partnerName: string = "";
    let kidName: string = "";
    let name: string = "";
    let rsvp: string = undefined;
    let covid: string;
    let phone: string;
    let partner: boolean = false;
    let kids: boolean = false;
    let camper: boolean = false;
    let complete: boolean = false;
    let submitting: boolean = false;

    let submission: object;
    let error: boolean = false;
    let errorMsg: string;

    let id: string = uuidv4();

    const changeGreeting = (e) => {
        if (e.target.value.length) {
            greeting = e.target.value.replace(/ .*/, "");
        } else {
            greeting = "friend";
        }
    };

    const rsvpChange = (e) => {
        rsvp = e.target.value;
    };

    const covidChange = (e) => {
        covid = e.target.value;
    };

    const setError = (msg: string) => {
        submitting = false;
        error = true;
        errorMsg = msg;
    };

    const handleSubmit = async () => {
        submitting = true;
        error = false;

        const cleanName = name.trim();
        if (!/^[\w.-]+(?: [\w.-]+)+$/.test(cleanName)) {
            setError("Please tell us your full name.");
            return;
        }

        if (rsvp === undefined) {
            setError("Please tell us if you can come.");
            return;
        }

        const cleanRsvp = rsvp == "yes" ? true : false;

        if (cleanRsvp && phone === undefined) {
            setError("Please give us a number to text you at.");
            return;
        }

        const cleanPhone = phone.replace(/-/g, '');

        submission = {
            id,
            sessionId,
            name: cleanName,
            rsvp: cleanRsvp,
            covid,
            phone: cleanPhone,
            partner,
            partnerName,
            kids,
            kidName,
            camper,
        };

        const response: Response | void = await fetch(
            "https://api.rosyandkyle.com/rsvp",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submission),
            }
        ).catch(() => {});

        if (!response || !response.ok) {
            setError("Something unexpected went wrong. Maybe try agian?");
            return;
        }

        submitting = false;
        complete = true;
    };
</script>

<div class="container">
    <h1 class="display-1">RSVP</h1>
    <h2 class="display-5 mb-3">Hello, {greeting}!</h2>
    {#if complete}
        <div class="mb-5">
            <h3>Thanks for responding. We love you!</h3>
            {#if rsvp == "yes"}
                <p class="text-justify">
                    Now check out <a class="link-primary" href="/event"
                        >the Event Details page</a
                    >.
                </p>
            {/if}
        </div>
    {/if}

    {#if !complete}
        <form novalidate on:submit|preventDefault={handleSubmit}>
            <p class="text-justify">
                Thanks for RSVPing! Our wedding is on <strong
                    >Sat May 28th, 2022 at 4pm</strong
                >. For more info please see <a href="/event">Event Details</a>.
            </p>
            <p class="text-justify">
                Please tell us a few things to help us prepare.
            </p>
            <div class="form-floating mb-3">
                <input
                    type="text"
                    bind:value={name}
                    on:blur={changeGreeting}
                    class="form-control"
                    id="full-name"
                    pattern="^[\w.-]+(?: [\w.-]+)+$"
                    placeholder="Your Name"
                    required
                />
                <label for="full-name">Your Name</label>
            </div>

            <div class="row mb-4">
                <div class="btn-group mx-auto" role="group">
                    <input
                        checked={rsvp == "yes"}
                        on:change={rsvpChange}
                        value="yes"
                        type="radio"
                        class="btn-check"
                        name="rsvp"
                        autocomplete="off"
                        id="attending"
                    />
                    <label class="btn btn-outline-dark" for="attending"
                        >I'll Be There<br />✅</label
                    >
                    <input
                        checked={rsvp == "no"}
                        on:change={rsvpChange}
                        value="no"
                        type="radio"
                        class="btn-check"
                        name="rsvp"
                        autocomplete="off"
                        id="not-attending"
                    />
                    <label class="btn btn-outline-dark" for="not-attending"
                        >I Can't Make It<br />❌</label
                    >
                </div>
            </div>

            <div class="collapse" class:show={rsvp == "yes"}>
                <h3 class="mb-2">Ok, let's talk about Covid 🦠</h3>
                <p class="text-justify">
                    <small>
                        Out of love and respect for our family and friends, we
                        are asking that everyone who attends be vaccinated
                        (highly highly encouraged!) or test negative for
                        COVID-19 the day of the wedding. Please get vaccinated
                        ❤️ We love you and cannot wait to celebrate safely with
                        you.
                    </small>
                </p>

                <div class="row mb-4">
                    <div class="btn-group mx-auto" role="group">
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
                            >I'll Have Proof of Vaccination<br />💉</label
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
                            >I'll Take A Test Before<br />🧪</label
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
                            >Call Me About It<br />🥸</label
                        >
                    </div>
                </div>

                <h3>Give us a ☎️ to text you at</h3>
                <div class="form-floating mb-4">
                    <input
                        type="tel"
                        bind:value={phone}
                        class="form-control"
                        id="phone"
                        pattern={"^[0-9]{3}-?[0-9]{3}-?[0-9]{4}$"}
                        placeholder="Your Phone (111-111-1111)"
                        required
                    />
                    <label for="phone">Your Phone (111-111-1111)</label>
                </div>

                <h3>Who are you bringing?</h3>
                <div class="mb-4">
                    <div class="form-check mb-2">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            bind:checked={partner}
                            id="partner"
                        />
                        <label class="form-check-label" for="partner">
                            I'm bringing a partner.
                        </label>
                    </div>
                    <div class="collapse" class:show={partner}>
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                bind:value={partnerName}
                                class="form-control"
                                id="partner-name"
                                pattern="^[\w.-]+(?: [\w.-]+)+$"
                                placeholder="Partner's Name"
                                required
                            />
                            <label for="full-name">Partner's Name</label>
                        </div>
                    </div>
                    <div class="form-check mb-2">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            bind:checked={kids}
                            id="kids"
                        />
                        <label class="form-check-label" for="kids">
                            I'm bringing my kids. (You should!)
                        </label>
                    </div>

                    <div class="collapse" class:show={kids}>
                        <p class="text-justify">
                            That's great! We're planning lots of fun stuff for
                            them to do.
                        </p>
                        <div class="form-floating mb-3">
                            <textarea
                                bind:value={kidName}
                                class="form-control"
                                placeholder="Kid's Name (Just List 'Em)"
                                id="kid-names"
                                required
                            />
                            <label for="kid-names"
                                >Kid's Names (List 'Em Here)</label
                            >
                        </div>
                    </div>
                </div>

                <h3>Accommodations 🏕</h3>
                <p class="text-justify">
                    <small
                        >This party is at a state park and we will have a large
                        group camp site available. If you are interested in
                        camping, let us know. There are also hotels nearby, more
                        details about that are on the Event Details page.</small
                    >
                </p>
                <div class="form-check mb-4">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        bind:checked={camper}
                        id="camper"
                    />
                    <label class="form-check-label" for="camper">
                        Tell me more about camping!
                    </label>
                </div>
            </div>

            <div class="form-group mt-3">
                {#if error}
                    <div class="alert alert-warning" role="alert">
                        {errorMsg}
                    </div>
                {/if}

                <div class="row">
                    <button
                        type="submit"
                        class="submit mx-auto btn btn-dark btn-block"
                    >
                        {#if submitting}
                            <span
                                class="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                            />
                            <span class="sr-only">Submitting...</span>
                        {:else}
                            Submit
                        {/if}
                    </button>
                </div>
            </div>
        </form>
    {/if}
</div>

<style>
    .form-control:valid {
        border-color: #198754;
        padding-right: calc(1.5em + 0.75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) center;
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    }

    textarea {
        height: 100px !important;
    }

    .submit {
        max-width: 96%;
    }
</style>
