<script lang="ts">
    import type { ContentService } from "$lib/block.types";
    import { Splide, SplideSlide, type Options } from "@splidejs/svelte-splide";
    import ImageComp from "../ImageComp.svelte";

    export let images: Array<ContentService>;
    let splideOptions: Options = {
        autoplay: true,
        perPage: 2,
    };
</script>

<Splide class="max-h-96" options={splideOptions}>
    {#each images as image}
        <SplideSlide class="max-h-96 pr-4 last:pr-0">
            <ImageComp class={"h-full w-full object-cover"} data={image} />
        </SplideSlide>
    {/each}
</Splide>
