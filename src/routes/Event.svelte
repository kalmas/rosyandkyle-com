<script lang="ts">
    import Image from "../Image.svelte";
</script>

<div class="container">
    <h1 class="display-1">Event Details</h1>

    <h2 class="mt-3 display-4">Time</h2>
    <time datetime="2022-05-28T16:00-0400" class="lead"
        >Saturday, May 28, 2022 at 4pm</time
    >
    <div class="mt-2">
        <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220528T200000Z%2F20220529T020000Z&details=Ceremony%20-%20CCC%20Museum%20https%3A%2F%2Fgoo.gl%2Fmaps%2FbLicy3ahWCyUpKj9A%0AReception%20-%20Powhatan%20Dining%20Hall%20https%3A%2F%2Fgoo.gl%2Fmaps%2FJJHDWwvg38BewGBH8&location=Pocahontas%20State%20Park&text=Rosy%20and%20Kyle%20Get%20Married"
            role="button"
            class="btn btn-dark mb-1"
            title="Add to Google Calendar">Add to Google Calendar</a
        >
        <a
            href="https://outlook.live.com/calendar/0/deeplink/compose?allday=false&body=Ceremony%20-%20CCC%20Museum%20https%3A%2F%2Fgoo.gl%2Fmaps%2FbLicy3ahWCyUpKj9A%0AReception%20-%20Powhatan%20Dining%20Hall%20https%3A%2F%2Fgoo.gl%2Fmaps%2FJJHDWwvg38BewGBH8&enddt=2022-05-29T02%3A00%3A00%2B00%3A00&location=Pocahontas%20State%20Park&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-05-28T20%3A00%3A00%2B00%3A00&subject=Rosy%20and%20Kyle%20Get%20Married"
            role="button"
            class="btn btn-dark mb-1"
            title="Add to Outlook Calendar">Add to Outlook Calendar</a
        >
    </div>

    <h2 class="mt-3 display-4">Place</h2>
    <a href="https://goo.gl/maps/dkoZAN7CG6rmUXUHA" target="blank">
        <address class="lead">
            Pocahontas State Park<br />
            10301 State Park Rd<br />
            Chesterfield, VA 23832
        </address>
    </a>

    <div class="lead mt-3">
        <strong>The Ceremony - </strong><a
            href="https://goo.gl/maps/bLicy3ahWCyUpKj9A">CCC Museum</a
        ><br />
        <strong>The Reception - </strong><a
            href="https://goo.gl/maps/JJHDWwvg38BewGBH8">Powhatan Dining Hall</a
        >
    </div>

    <figure class="mt-3">
        <figcaption class="display-6 mb-2">Map of the Park</figcaption>
        <Image src="img/map1.webp" alt="Map of Pocahontas State Park" />
    </figure>

    <h2 class="mt-3 display-4">Hotels</h2>
    The closest hotels are about 10 minutes away off of I-95. We have some rooms
    held:

    <div class="mt-2">
        <strong>Fairfield Inn -</strong>
        <a href="tel:804-778-7500" class="link-primary">(804) 778-7500</a><br />
        9 Rooms Held Under "Almas"<br />
        <a
            href="https://www.marriott.com/hotels/travel/ricch-fairfield-inn-richmond-chester/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MjgxOTE2OS03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"
            >Website</a
        >
    </div>
    <div class="mt-2">
        <strong>Country Inn and Suites -</strong>
        <a href="tel:804-751-0080" class="link-primary">(804) 751-0080</a><br />
        5 Rooms Held Under "Almas"<br />
        <a
            href="https://www.radissonhotelsamericas.com/en-us/hotels/country-inn-chester-va?cid=a:se+b:gmb+c:amer+i:local+e:cis+d:us+h:VACHESTE"
            >Website</a
        >
    </div>

    <figure class="mt-3">
        <figcaption class="display-6 mb-2">
            The Park (🎉) and Hotels (🏨)
        </figcaption>
        <Image src="img/map3.webp" alt="Map of Greater Richmond" />
    </figure>

    <h2 class="mt-3 display-4">Camping</h2>
    We have reserved a large group campsite with several cabins and room to sleep
    28 people. Please let us know if you're interested in camping and we'll give
    you all the details.

    <figure class="mt-3">
        <figcaption class="display-6 mb-2">Group Camp Site</figcaption>
        <Image src="img/group-campsite.webp" alt="Group Campsite" />
    </figure>
</div>
