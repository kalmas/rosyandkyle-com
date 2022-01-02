<script lang="ts">
	import Input from "./Input.svelte";

	export let greeting: string;
	export let firstName: string;
	export let lastName: string;
	export let rsvp: string;
	export let partner: string;
	export let complete: boolean;

	let covid: string;
	let showDetails: boolean;
	let email: string
	let phone: string

	const changeGreeting = (e) => {
		if (e.target.value.length) {
			greeting = e.target.value;
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
		<h1>Hello,<br />{greeting}!</h1>
		<p>Thanks for RSVPing!</p>

		<form>
			<div class="accordion">
				<div class="form-group">
					<div class="row mb-2">
						<Input
							bind:value={firstName}
							handleBlur={changeGreeting}
							label="First Name"
						/>
					</div>
					<div class="row mb-2">
						<Input bind:value={lastName} label="Last Name" />
					</div>
				</div>

				<div class="btn-group mb-4" role="group">
					<input
						checked={rsvp == "yes"}
						on:change={rsvpChange}
						value="yes"
						disabled={!(firstName.length && lastName.length)}
						type="radio"
						class="btn-check"
						name="rsvp"
						autocomplete="off"
						id="attending"
					/>
					<label class="btn btn-outline-primary" for="attending"
						>I'll Be There</label
					>
					<input
						checked={rsvp == "no"}
						on:change={rsvpChange}
						value="no"
						disabled={!(firstName.length && lastName.length)}
						type="radio"
						class="btn-check"
						name="rsvp"
						autocomplete="off"
						id="not-attending"
					/>
					<label class="btn btn-outline-primary" for="not-attending"
						>I Cant Make It</label
					>
				</div>

				<div class="collapse mb-4" class:show={rsvp == "yes"}>
					<div class="mb-4">
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
						<label class="btn btn-outline-primary" for="vaccinated"
							>I'll Be Fully Vaccinated</label
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
						<label class="btn btn-outline-primary" for="test"
							>I'll Take a Test</label
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
						<label class="btn btn-outline-primary" for="noresponse"
							>I'd Rather Not Say</label
						>
					</div>
				</div>

				{#if showDetails == true}
					
					<div class="row mb-2">
						<Input bind:value={email} label="Email Address" />
					</div>
					<div class="row mb-2">
						<Input bind:value={phone} label="Mobile Phone Number" />
					</div>


					<div>Are you bringing a partner?</div>
					<div class="btn-group mb-4" role="group">
						<input
							bind:group={partner}
							type="radio"
							class="btn-check"
							name="partner"
							value={"Yes"}
							id="partner"
							autocomplete="off"
						/>
						<label class="btn btn-outline-primary" for="partner"
							>Yes</label
						>

						<input
							bind:group={partner}
							type="radio"
							class="btn-check"
							name="partner"
							value={"No"}
							id="noPartner"
							autocomplete="off"
						/>
						<label class="btn btn-outline-primary" for="noPartner"
							>No</label
						>
					</div>
				{/if}

				<div class="row mb-4">
					<button
						disabled={complete === false}
						type="submit"
						class="btn btn-primary btn-block mb-4">Submit</button
					>
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
		font-weight: 100;
	}

	main {
		max-width: none;
	}
</style>
