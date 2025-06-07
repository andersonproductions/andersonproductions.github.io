<script>
    import { browser } from "$app/environment";
</script>

{#if browser}
    <script
        src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
        defer
    ></script>
{/if}
