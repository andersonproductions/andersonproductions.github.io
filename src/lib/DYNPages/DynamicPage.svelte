<script lang="ts">
    import type { CorePage, portfolio_page } from "$lib/block.types";
    import AboutPage from "./AboutPage.svelte";
    import MarkdownPage from "./MarkdownPage.svelte";
    import PortfoilioPage from "./PortfoilioPage.svelte";

    export let data: any;
    export let md: string | undefined | null;
</script>

{#if data.__typename == "portfolio_page"}
    <PortfoilioPage {data} />
{:else if data.__typename == "about_page"}
    <AboutPage {data} />
{:else if (data.__typename = "markdown_page")}
    <MarkdownPage {data} {md} />
{/if}
