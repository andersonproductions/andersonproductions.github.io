<script lang="ts">
    import type { portfolio_page } from "$lib/block.types";
    import BlockRenderer from "./BlockRenderer.svelte";
    import HeroSection from "./PortfolioPageCE/HeroSection.svelte";
    export let data: portfolio_page;
    let sortedTags = data.tags.sort((e) => {
        e.weight;
    });
</script>

{#each data.content as block}
    {#if block.__typename === "custom_block"}
        {#if block.name === "hero_section"}
            <HeroSection
                image={data.mainImage.service}
                title={data.title}
                eyebrow={sortedTags[0].title}
            />
        {/if}
    {:else}
        <BlockRenderer {block} />
    {/if}
{/each}
