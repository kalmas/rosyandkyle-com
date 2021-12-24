<script lang="ts">
	import Input from './Input.svelte'

	export let greeting: string;
	export let firstName: string;
	export let lastName: string;
	export let rsvp: string;
	export let partner: string;

	const changeGreeting = (e) => {
		if (e.target.value.length) {
			greeting = e.target.value;
		} else {
			greeting = 'friend';
		}
	};
</script>

<main>
	<h1>Hello {greeting}!</h1>
	<p>Thanks for RSVPing!</p>

	<form>
		<div class="row mb-4 form-group">
			<div class="col">
				<Input
				    bind:value={firstName}
					handleBlur={changeGreeting}
					label="First Name"
				/>
			</div>
			<div class="col">
				<Input
				    bind:value={lastName}
					label="Last Name"
				/>
			</div>
		</div>

		<div class="btn-group mb-4" role="group">
			<input
				bind:group={rsvp}
				type="radio"
				class="btn-check"
				name="rsvp"
				value={"Attending"}
				id="attending"
				autocomplete="off"
			/>
			<label class="btn btn-outline-primary" for="attending"
				>I'll Be There</label
			>
			<input
				bind:group={rsvp}
				type="radio"
				class="btn-check"
				name="rsvp"
				value={"Not Attending"}
				id="notAttending"
				autocomplete="off"
			/>
			<label class="btn btn-outline-primary" for="notAttending"
				>I Can't Make It</label
			>
		</div>

		{#if rsvp == "Attending"}
			<div>Nice!</div>

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
				<label class="btn btn-outline-primary" for="partner">Yes</label>

				<input
					bind:group={partner}
					type="radio"
					class="btn-check"
					name="partner"
					value={"No"}
					id="noPartner"
					autocomplete="off"
				/>
				<label class="btn btn-outline-primary" for="noPartner">No</label
				>
			</div>
		{/if}

		{#if rsvp == "Not Attending"}
			<div>Bummer!</div>
		{/if}

		{#if rsvp != undefined}
			<div class="row mb-4">
				<button type="submit" class="btn btn-primary btn-block mb-4"
					>Submit</button
				>
			</div>
		{/if}
	</form>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
