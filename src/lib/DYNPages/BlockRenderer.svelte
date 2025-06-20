<script lang="ts">
    import type { Block } from "$lib/block.types";
    import DetailsSection from "./Blocks/DetailsSection.svelte";
    import ImageGallery from "./Blocks/ImageGallery.svelte";
    import Title from "./Blocks/Title.svelte";

    export let block: Block;
</script>

{#if block.__typename == "section"}
    <section {...$$restProps}>
        {#each block.items as b}
            <svelte:self block={b} {...$$restProps} />
        {/each}
    </section>
{:else if block.__typename == "details_section"}
    <DetailsSection col1={block.col1} col2={block.col2} />
{:else if block.__typename == "title"}
    <Title data={block} />
{:else if block.__typename == "body_string"}
    {#if block.format == "plain-text"}
        <p>{block.text}</p>
    {:else if block.format == "html"}
        <p>{@html block.text}</p>
        <data>{JSON.stringify(block.text)}</data>
    {/if}
{:else if block.__typename == "image_gallery"}
    <ImageGallery images={block.images} />
{:else if block.__typename == "break"}
    <br />
{:else if block.__typename == "profile_card"}
    <div class="flex flex-col items-start max-w-96">
        <img src={block.image} />
        <p class="text-start pt-2">
            <span class="uppercase font-bold text-2xl">{block.name}</span><br
            />{block.role}
        </p>
    </div>
{/if}
<!-- RECURSIVE RENDERING -->
<!-- {#each block.items as b}
    <svelte:self block={b} {...$$restProps} />
{/each} -->
