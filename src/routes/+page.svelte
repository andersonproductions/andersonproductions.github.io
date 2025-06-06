<script lang="ts">
    import type { ContentService } from "$lib/block.types";
    import ImageStrips from "$lib/HomePage/ImageStrips.svelte";
    import ProjectShowcase from "$lib/HomePage/ProjectShowcase.svelte";
    import Slider from "$lib/HomePage/slider.svelte";
    let items: Array<ContentService> = [
        {
            name: "repo",
            id: "DSC_3961.JPG",
            alt: "Rugby",
        },
        {
            name: "repo",
            id: "DSC_3961.png",
            alt: "Rugby",
        },
    ];
</script>

<section>
    <Slider {items} />
</section>
<section data-dynamic-css data-class="bg-black text-white">
    <ProjectShowcase />
</section>
<section class="w-[100vw] h-[100vh]">
    <ImageStrips
        row1={[
            { alt: "", url: "https://picsum.photos/id/13" },
            { alt: "", url: "https://picsum.photos/id/14" },
            { alt: "", url: "https://picsum.photos/id/15" },
            { alt: "", url: "https://picsum.photos/id/16" },
            { alt: "", url: "https://picsum.photos/id/17" },
            { alt: "", url: "https://picsum.photos/id/18" },
            { alt: "", url: "https://picsum.photos/id/139" },
        ]}
        row2={[
            { alt: "", url: "https://picsum.photos/id/13" },
            { alt: "", url: "https://picsum.photos/id/14" },
            { alt: "", url: "https://picsum.photos/id/15" },
            { alt: "", url: "https://picsum.photos/id/16" },
            { alt: "", url: "https://picsum.photos/id/17" },
            { alt: "", url: "https://picsum.photos/id/18" },
            { alt: "", url: "https://picsum.photos/id/139" },
        ]}
        row3={[
            { alt: "", url: "https://picsum.photos/id/13" },
            { alt: "", url: "https://picsum.photos/id/14" },
            { alt: "", url: "https://picsum.photos/id/15" },
            { alt: "", url: "https://picsum.photos/id/16" },
            { alt: "", url: "https://picsum.photos/id/17" },
            { alt: "", url: "https://picsum.photos/id/18" },
            { alt: "", url: "https://picsum.photos/id/139" },
        ]}
    />
</section>
