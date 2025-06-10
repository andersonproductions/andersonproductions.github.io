<script lang="ts">
    import type { title } from "$lib/block.types";

    export let data: title;
</script>

{#if data.weight == "h1"}
    <h1 class="font-hanken text-5xl uppercase tracking-tight font-black">
        {#if data.format == "plain-text"}
            {data.text}
        {:else if data.format == "html"}
            {@html data.text}
        {/if}
    </h1>
{:else if data.weight == "h2"}
    <h2 class="font-hanken text-3xl uppercase tracking-tight font-black">
        {#if data.format == "plain-text"}
            {data.text}
        {:else if data.format == "html"}
            {@html data.text}
        {/if}
    </h2>
{:else if data.weight == "h3"}
    <h3>
        {#if data.format == "plain-text"}
            {data.text}
        {:else if data.format == "html"}
            {@html data.text}
        {/if}
    </h3>
{:else if data.weight == "h4"}
    <h4>
        {#if data.format == "plain-text"}
            {data.text}
        {:else if data.format == "html"}
            {@html data.text}
        {/if}
    </h4>
{/if}
