<script lang="ts">
    import type { Block } from "$lib/block.types";

    export let block: Block;
</script>

{#if block.__typename == "section"}
    <section>
        {#each block.items as item}
            <svelte:self links={item} />
        {/each}
    </section>
{:else if block.__typename == "body_string"}
    <p>{block}</p>
{/if}
