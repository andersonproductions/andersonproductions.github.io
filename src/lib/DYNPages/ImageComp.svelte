<script lang="ts">
    import type { ContentService } from "$lib/block.types";
    import { onMount } from "svelte";

    export let data: ContentService;
    let img: HTMLImageElement;
    let current_url = "";
    let schema = {};
    onMount(
        () =>
            (schema = {
                "@context": "https://schema.org",
                "@type": "ImageObject",
                contentUrl: img.src,
                creator: {
                    "@type": "Person",
                    name: "Thibaut Anderson",
                },
                creditText: "©Anderson Productions/Thibaut Anderson",
            }),
    );
</script>

{#if data.name === "repo"}
    <img
        bind:this={img}
        alt={data.alt}
        src={"/assets/" + data.id}
        {...$$restProps}
    />
    {#if schema}
        <svelte:element this={"script"} type="application/ld+json">
            {JSON.stringify(schema)}
        </svelte:element>
    {/if}
{:else if data.name === "href"}
    <img alt={data.alt} src={data.id} />
{/if}
