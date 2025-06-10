<script lang="ts">
    import type { Block } from "$lib/block.types";
    import BlockRenderer from "../BlockRenderer.svelte";
    export let col1: Array<Block>;
    export let col2: Array<Block>;
</script>

<section class="flex flex-row p-8">
    <div class="w-full">
        {#each col1 as block}
            <BlockRenderer {block} />
        {/each}
    </div>
    <div class="w-full">
        {#each col2 as block}
            <BlockRenderer {block} />
        {/each}
    </div>
</section>
