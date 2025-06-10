<script lang="ts">
    import { onMount } from "svelte";
    import Logo from "./Logo.svelte";
    import { page } from "$app/state";
    import { ScrollTrigger, gsap, CustomEase } from "gsap/src/all";
    import { customEase } from "./ease";
    import type { Nav } from "$lib/block.types";
    import AnimatedSpan from "./AnimatedSpan.svelte";
    import { sendEvent } from "$lib/gtag";
    gsap.registerPlugin(CustomEase);
    gsap.registerPlugin(ScrollTrigger);
    var logo: HTMLElement;
    onMount(() => {
        let win = window.innerHeight;
        if (!page.error) {
            gsap.from(
                logo,
                {
                    y: win * 0.5,
                    duration: 1,
                    postion: "absolute",
                    ease: customEase,
                },
                "+=1.5",
            );
        }
    });

    function clickMenuButton() {
        console.log("clicked");
        shouldShowMainMenu = !shouldShowMainMenu;
    }
    export let data: Nav;

    var shouldShowMainMenu = false;
</script>

<nav class="fixed z-50 w-[100vw] p-8">
    <!-- ALWAYS VISABLE -->
    <a href="/" bind:this={logo} class="flex max-h-9">
        <Logo />
    </a>
    <button
        class={shouldShowMainMenu
            ? "text-white z-50 relative"
            : "z-50 relative text-inherit"}
        onclick={() => {
            clickMenuButton();
        }}><AnimatedSpan>menu</AnimatedSpan></button
    >
    <menu
        class={shouldShowMainMenu
            ? "absolute w-full h-full top-0 left-0 right-0 bottom-0"
            : "hidden"}
    >
        <ul class="content-center w-[100vw] h-[100vh] p-8 bg-black text-white">
            {#each data.items as item}
                <li>
                    <span class="text-7xl font-headline">
                        {#if item.url}
                            <a
                                onclick={() => {
                                    clickMenuButton();
                                }}
                                onfocus={() => {}}
                                onmouseover={() => {
                                    sendEvent({
                                        action: "hover",
                                        category: "engagement",
                                        label:
                                            "hover_over_menu_link_" + item.text,
                                        value: "1",
                                    });
                                }}
                                href={item.url.href}
                                ><AnimatedSpan>{item.text}</AnimatedSpan></a
                            >
                        {/if}
                    </span>
                </li>
            {/each}
        </ul>
    </menu>
</nav>

<style>
    :global {
        menu {
        }
    }
</style>
