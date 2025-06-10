<script lang="ts">
    import type { ContentService } from "$lib/block.types";
    import ImageComp from "../ImageComp.svelte";

    export let image: ContentService;
    export let title: string;
    export let eyebrow: string;
</script>

<section
    class="w-[100vw] h-[95vh] flex align-bottom p-8 overflow-clip relative"
>
    <div class="relative flex flex-col z-20">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
    </div>
    <ImageComp
        class="w-full h-full absolute top-0 left-0 right-0 bottom-0"
        data={image}
    />
</section>
