<script lang="ts">
    import { onMount } from "svelte";
    import Logo from "./Logo.svelte";
    import { ScrollTrigger, gsap } from "gsap/src/all";
    gsap.registerPlugin(ScrollTrigger);
    var logo: HTMLElement;
    onMount(() => {
        let win = window.innerHeight;
        gsap.from(
            logo,
            {
                y: win * 0.5,
                duration: 2,
                postion: "absolute",
            },
            "+=2",
        );
    });
</script>

<nav class="fixed z-50 w-[100vw] p-8">
    <!-- ALWAYS VISABLE -->
    <div bind:this={logo} class="flex max-h-9">
        <Logo />
    </div>
    <!-- SIDEMENU -->
</nav>
