<script lang="ts">
    import type { about_page } from "$lib/block.types";
    import BlockRenderer from "./BlockRenderer.svelte";
    export let data: about_page;
</script>

<div class="w-full h-full flex flex-col items-center p-8 pt-28 text-center">
    {#each data.mainContent as block}
        {#if block.__typename === "custom_block"}{:else}
            <BlockRenderer
                class="flex flex-col items-center text-center"
                {block}
            />
        {/if}
    {/each}
</div>

<style>
    :global {
        body {
            background-color: black;
            color: white;
        }
    }
</style>
