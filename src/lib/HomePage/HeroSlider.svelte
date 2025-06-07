<script lang="ts">
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import type { Options } from "@splidejs/splide";
    import type { ContentService } from "$lib/block.types";
    import "@splidejs/svelte-splide/css/core";
    let splideOptions: Options = {
        type: "fade",
        autoplay: true,
        perPage: 1,
        arrows: false,
    };
    export let items: Array<ContentService>;
</script>

<div>
    <Splide options={splideOptions}>
        {#each items as item}
            <SplideSlide>
                <div class="w-[100vw] h-[98vh]">
                    {#if item.name === "repo"}
                        <img
                            class="w-full h-full object-cover"
                            alt={item.alt}
                            src={"assets/" + item.id}
                        />
                    {/if}
                    {#if item.name === "href"}
                        <img alt={item.alt} src={item.id} />
                    {/if}
                </div>
            </SplideSlide>
        {/each}
    </Splide>
</div>
