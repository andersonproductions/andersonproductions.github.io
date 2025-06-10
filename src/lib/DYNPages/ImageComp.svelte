<script lang="ts">
    import type { ContentService } from "$lib/block.types";

    export let data: ContentService;
</script>

{#if data.name === "repo"}
    <img alt={data.alt} src={"/assets/" + data.id} {...$$restProps} />
{:else if data.name === "href"}
    <img alt={data.alt} src={data.id} />
{/if}
