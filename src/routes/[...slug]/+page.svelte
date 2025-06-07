<script lang="ts">
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
    console.log(data);
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>
