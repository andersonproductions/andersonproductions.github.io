<script lang="ts">
    import type { ContentService, portfolio_page } from "$lib/block.types";
    import ImageStrips from "$lib/HomePage/ImageStrips.svelte";
    import ProjectShowcase from "$lib/HomePage/ProjectShowcase.svelte";
    import HeroSlider from "$lib/HomePage/HeroSlider.svelte";
    export let data: {
        images: string[];
        work: portfolio_page[];
    };
    let k = data.images.map((e) => {
        let b: ContentService = { alt: "image", id: e, name: "repo" };
        return b;
    });
    let items: Array<ContentService> = k;
</script>

<svelte:head>
    <title>Anderson Productions</title>
</svelte:head>
<section>
    <HeroSlider {items} />
</section>
<section data-dynamic-css data-class="bg-black text-white">
    <ProjectShowcase items={data.work} />
</section>
<section class="w-[100vw] h-[100vh]">
    <ImageStrips
        row1={data.images.slice(0, 10).map((e) => {
            return { url: e };
        })}
        row2={data.images.slice(3, 13).map((e) => {
            return { url: e };
        })}
        row3={data.images.slice(7, 15).map((e) => {
            return { url: e };
        })}
    />
</section>
