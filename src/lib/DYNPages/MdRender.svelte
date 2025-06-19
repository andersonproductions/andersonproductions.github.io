<script lang="ts">
    import type { RootContent } from "mdast";
    export let content: RootContent[];
    content.map((e) => {
        e.type == "";
    });
</script>

{#each content as child}
    {#if child.type === "paragraph"}
        <p data-md={JSON.stringify(child)}>
            <svelte:self content={child.children} />
        </p>
    {:else if child.type === "text"}
        <span data-md={JSON.stringify(child)}>{child.value}</span>
    {:else if child.type === "link"}
        <a data-md={JSON.stringify(child)} href={child.url}
            ><svelte:self content={child.children} /></a
        >
    {:else if child.type === "strong"}
        <span><svelte:self content={child.children} /></span>
    {:else if child.type === "emphasis"}
        <span><svelte:self content={child.children} /></span>
    {:else if child.type === "blockquote"}
        <span><svelte:self content={child.children} /></span>
    {:else if child.type === "break"}
        <br />
    {:else if child.type === "code"}
        <span>{child.value}</span>
    {:else if child.type === "definition"}
        <span>{JSON.stringify(child)}</span>
    {:else if child.type === "delete"}
        <span>{JSON.stringify(child)}</span>
    {:else if child.type === "footnoteDefinition"}
        <span>{JSON.stringify(child)}</span>
    {:else if child.type === "footnoteReference"}
        <span>{JSON.stringify(child)}</span>
    {:else if child.type === "heading"}
        <h1><svelte:self content={child.children} /></h1>
    {:else if child.type === "html"}
        {@html child.value}
    {:else if child.type === "image"}
        <span>{JSON.stringify(child)}</span>
    {:else if child.type === "imageReference"}
        <span>{JSON.stringify(child)}</span>
    {:else if child.type === "inlineCode"}
        <span>{JSON.stringify(child)}</span>
    {:else if child.type === "linkReference"}
        <span>{JSON.stringify(child)}</span>
    {:else if child.type === "list"}
        <ul><svelte:self content={child.children} /></ul>
    {:else if child.type === "listItem"}
        <li><svelte:self content={child.children} /></li>
    {:else if child.type === "thematicBreak"}
        <span>{JSON.stringify(child)}</span>
    {/if}
{/each}
