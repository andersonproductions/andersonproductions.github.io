<script lang="ts">
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import type { Options } from "@splidejs/splide";
    import type { ContentService } from "$lib/block.types";
    import "@splidejs/svelte-splide/css/core";
    let instance;
    let splideOptions: Options = {
        type: "fade",
        autoplay: true,
        perPage: 1,
        arrows: false,
        interval: 1200,
        pauseOnHover: false,
        pauseOnFocus: false,
    };
    export let items: Array<ContentService>;

    function handleMove(event) {
        const newIndex = event.detail.index;

        if (newIndex === items.length - 1) {
            setTimeout(() => {
                instance.go(0);
            }, splideOptions.interval); // match your autoplay delay
        }
    }
</script>

<div>
    <Splide bind:this={instance} on:move={handleMove} options={splideOptions}>
        {#each items as item}
            <SplideSlide>
                <div class="w-[100vw] h-[98vh]">
                    {#if item.name === "repo"}
                        <img
                            class="w-full h-full object-cover"
                            alt={item.alt}
                            src={"assets/" + item.id}
                        />
                        <svelte:element
                            this={"script"}
                            type="application/ld+json"
                            >{JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "ImageObject",
                                contentUrl: "assets/" + item.id,
                                creator: {
                                    "@type": "Person",
                                    name: "Thibaut Anderson",
                                },
                                creditText:
                                    "©Anderson Productions/Thibaut Anderson",
                            })}</svelte:element
                        >
                    {/if}
                    {#if item.name === "href"}
                        <img alt={item.alt} src={item.id} />
                    {/if}
                </div>
            </SplideSlide>
        {/each}
    </Splide>
</div>
