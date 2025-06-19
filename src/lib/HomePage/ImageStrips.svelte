<script lang="ts">
    export let row1: Array<{ url: string }>;
    export let row2: Array<{ url: string }>;
    export let row3: Array<{ url: string }>;
    import { gsap, ScrollTrigger } from "gsap/all";
    import { onMount } from "svelte";
    gsap.registerPlugin(ScrollTrigger);
    var wrapper: HTMLElement;
    var row01: HTMLElement;
    var row02: HTMLElement;
    var row03: HTMLElement;
    onMount(() => {
        gsap.to(row01, {
            xPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: wrapper,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.to(row02, {
            xPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: wrapper,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        gsap.to(row03, {
            xPercent: 70,
            ease: "none",
            scrollTrigger: {
                trigger: wrapper,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });
    });
</script>

<div bind:this={wrapper} class="w-full h-full flex-col flex justify-around">
    <div bind:this={row01} class="-translate-x-1/12 flex flex-row gap-4">
        {#each row1 as rowItem}
            <img class="max-h-[30vh]" src={"/assets/" + rowItem.url} alt={""} />
        {/each}
    </div>

    <div bind:this={row02} class="-translate-x-2.5 flex flex-row gap-4">
        {#each row2 as rowItem}
            <img class="max-h-[30vh]" src={"/assets/" + rowItem.url} alt={""} />
        {/each}
    </div>

    <div bind:this={row03} class="-translate-x-9 flex flex-row gap-4">
        {#each row3 as rowItem}
            <img class="max-h-[30vh]" src={"/assets/" + rowItem.url} alt={""} />
        {/each}
    </div>
    <svelte:element this={"script"} type="application/ld+json">
        {JSON.stringify(
            row1.concat(row2, row3).map((e) => {
                return {
                    "@context": "https://schema.org",
                    "@type": "ImageObject",
                    contentUrl:
                        "https://andersonproductions.github.io/assets/" + e.url,
                    creator: {
                        "@type": "Person",
                        nname: "Thibaut Anderson",
                    },
                    creditText: "©Anderson Productions/Thibaut Anderson",
                };
            }),
        )}
    </svelte:element>
</div>
