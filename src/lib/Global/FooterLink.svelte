<script lang="ts">
    import type { FooterLink as FooterLinkType } from "$lib/block.types";

    export let links: FooterLinkType[] = [];
</script>

<ul>
    {#each links as link}
        <li>
            {#if link.url && link.text}
                <a href={link.url.href}>{link.text}</a>
            {:else if link.text}
                {link.text}
            {/if}

            {#if link.items && link.items.length > 0}
                <!-- Recursive call -->
                <svelte:self links={link.items} />
            {/if}
        </li>
    {/each}
</ul>
