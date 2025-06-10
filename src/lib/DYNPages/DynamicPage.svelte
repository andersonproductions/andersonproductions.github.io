<script lang="ts">
    import type { CorePage, portfolio_page } from "$lib/block.types";
    import PortfoilioPage from "./PortfoilioPage.svelte";

    export let data: any;
</script>

{#if data.__typename == "portfolio_page"}
    <PortfoilioPage {data} />
{/if}
