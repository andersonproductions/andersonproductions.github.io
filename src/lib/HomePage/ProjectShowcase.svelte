<script lang="ts">
    import type { PortfolioPage } from "$lib/block.types";
    import { onMount } from "svelte";
    import { gsap, ScrollTrigger } from "gsap/all";
    gsap.registerPlugin(ScrollTrigger);
    var items: Array<PortfolioPage> = [
        {
            content: [],
            date: new Date(),
            description: "",
            jsonLD: null,
            mainImage: {
                service: { alt: "", id: "DSC_3961.png", name: "repo" },
            },
            seo_image: "",
            tags: [{ title: "Sports", weight: 0 }],
            title: "Seapoint Rugby Club",
            title_override: undefined,
            url: "/work/seapoint",
        },
        {
            content: [],
            date: new Date(),
            description: "",
            jsonLD: null,
            mainImage: {
                service: {
                    alt: "",
                    id: "https://picsum.photos/seed/picsum/536/354",
                    name: "href",
                },
            },
            seo_image: "",
            tags: [{ title: "Sports", weight: 0 }],
            title: "Seapoint Rugby Club",
            title_override: undefined,
            url: "work/seapoint",
        },
        {
            content: [],
            date: new Date(),
            description: "",
            jsonLD: null,
            mainImage: {
                service: {
                    alt: "",
                    id: "https://picsum.photos/id/870/536/354?grayscale&blur=2",
                    name: "href",
                },
            },
            seo_image: "",
            tags: [{ title: "Sports", weight: 0 }],
            title: "Seapoint Rugby Club",
            title_override: undefined,
            url: "work/seapoint",
        },
        {
            content: [],
            date: new Date(),
            description: "",
            jsonLD: null,
            mainImage: {
                service: { alt: "", id: "DSC_3961.png", name: "repo" },
            },
            seo_image: "",
            tags: [{ title: "Sports", weight: 0 }],
            title: "Seapoint Rugby Club",
            title_override: undefined,
            url: "work/seapoint",
        },
        {
            content: [],
            date: new Date(),
            description: "",
            jsonLD: null,
            mainImage: {
                service: {
                    alt: "",
                    id: "https://picsum.photos/seed/picsum/536/354",
                    name: "href",
                },
            },
            seo_image: "",
            tags: [{ title: "Sports", weight: 0 }],
            title: "Seapoint Rugby Club",
            title_override: undefined,
            url: "work/seapoint",
        },
        {
            content: [],
            date: new Date(),
            description: "",
            jsonLD: null,
            mainImage: {
                service: {
                    alt: "",
                    id: "https://picsum.photos/id/870/536/354?grayscale&blur=2",
                    name: "href",
                },
            },
            seo_image: "",
            tags: [{ title: "Sports", weight: 0 }],
            title: "Seapoint Rugby Club",
            title_override: undefined,
            url: "work/seapoint",
        },
    ];
    var itemsContainer: HTMLElement;
    let projectItems: HTMLElement[] = [];
    var startDegree = 5;
    onMount(() => {
        projectItems.forEach((el, i) => {
            const rotation = isOdd(i) ? -1 : 1;
            gsap.set(el, {
                zIndex: 10 + i,
                rotation: 3 * rotation,
            });

            ScrollTrigger.create({
                trigger: el,
                start: "top 10%",
                endTrigger: projectItems[projectItems.length - 1],
                end: "top top",
                pin: true,
                pinSpacing: false,
                markers: false,
            });
        });
    });
    function isOdd(num: number): boolean {
        if (typeof num === "number" && isFinite(num)) {
            return num % 2 !== 0;
        } else {
            return false;
        }
    }
</script>

<div
    bind:this={itemsContainer}
    class="flex gap-28 flex-col items-center py-60 overflow-clip"
>
    {#each items as item, i}
        <a
            href={item.url}
            bind:this={projectItems[i]}
            class="h-[80vh] md:h-[70vh] w-[70vw] md:w-[90vw] flex sticky overflow-clip flex-col justify-between p-7"
        >
            <div class="flex w-full z-20 justify-between">
                <span class="lowercase">{item.date.getFullYear()}</span>
                <span class="lowercase">{item.tags[0].title}</span>
            </div>
            {#if item.mainImage.service.name === "repo"}
                <img
                    class="absolute top-0 bottom-0 left-0 right-0 z-0 w-full h-full object-cover"
                    alt={item.mainImage.service.alt}
                    src={"/assets/" + item.mainImage.service.id}
                />
            {:else if item.mainImage.service.name === "href"}
                <img
                    class="absolute top-0 bottom-0 left-0 right-0 z-0 w-full h-full object-cover"
                    alt={item.mainImage.service.alt}
                    src={item.mainImage.service.id}
                />
            {/if}
            <h4 class="flex w-full z-20">{item.title}</h4>
        </a>
    {/each}
</div>
