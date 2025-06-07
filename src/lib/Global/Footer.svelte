<script lang="ts">
    import { onMount } from "svelte";
    import type { Footer } from "$lib/block.types";
    import FooterLink from "./FooterLink.svelte";

    export let data: Footer;
    var text: string;
    onMount(() => {
        let now = new Date();
        text = "©" + now.getFullYear() + " ";
    });
</script>

<footer class="p-12 flex flex-col gap-3">
    <div class="flex flex-row justify-between">
        {#each data.links as link}
            <FooterLink links={[link]} />
        {/each}
    </div>
    <p class="legal_text">
        {text}{@html data.legalText}
    </p>
</footer>

<style>
    .legal_text {
        font-size: 0.75rem;
        color: dimgrey;
        :global {
            a {
                text-decoration-line: underline;
            }
            a:hover {
                color: darkgrey;
            }
        }
    }
</style>
