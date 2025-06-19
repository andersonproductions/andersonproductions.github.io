<script lang="ts">
    import DynamicPage from "$lib/DYNPages/DynamicPage.svelte";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
    console.log(data);
</script>

<svelte:head>
    <title
        >{data.pageData.title_override
            ? data.pageData.title_override
            : data.pageData.title + " | Anderson Productions"}</title
    >
</svelte:head>
<DynamicPage data={data.pageData} md={data.markdownData} />
