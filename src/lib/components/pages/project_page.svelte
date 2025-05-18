<script lang="ts">
    let { title, subTitle }: { title: String; subTitle: String | undefined } =
        $props();
    import { gsap } from "gsap";
    import { SplitText } from "gsap/all";
    import { onMount } from "svelte";
    let titleElement;
    onMount(() => {
        let titleChars = SplitText.create(titleElement, {
            type: "chars, words",
        });
        // titleChars.chars.forEach((e) => {
        //     gsap.set(e, { scale: 1 });
        //     let animation = gsap.to(e, { scale: 1.3 });
        //     e.addEventListener("mouseenter", () => animation.play());
        //     e.addEventListener("mouseleave", () => animation.reverse());
        // });
        gsap.set(titleChars.words, { overflow: "hidden" });
        gsap.from(titleChars.chars, { y: 100, stagger: 0.07 });
    });
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>
<section class="relative h-[95vh] text-white">
    <div class="p-4 sm:p-16 flex h-full justify-between flex-col">
        <div class="w-full flex items-center flex-col mt-14 sticky top-10">
            <h1
                class="font-headline text-6xl md:text-8xl z-20"
                bind:this={titleElement}
            >
                {title}
            </h1>
            {#if subTitle}
                <p>{subTitle}</p>
            {/if}
        </div>

        <div class="flex">
            <div>
                <span>
                    <span class="font-bold">Client</span>
                    <br />
                    <span>DLRCC</span>
                </span>
            </div>
        </div>
    </div>
    <div class="absolute w-[100vw] h-[95vh] top-0 left-0 -z-10">
        <img
            src="https://storage.googleapis.com/seapoint-rugby-content-store/wp-content/uploads/2025/04/DSC_8201-47.jpg"
            alt=""
            class="h-full w-full object-cover fixed brightness-75"
        />
    </div>
</section>
<div class="bg-white min-h-[70vh] p-9 md:p-16 lg:p-24 font-ns">
    <p>
        Dear Movie Lover,<br /> I’m writing to you on this occasion to invite you
        out of your home and into a movie theatre to see a film starring Willem Dafoe,
        Emily Watson, Finn Wolfhard, Helena Zengel, a gang of Romanian boys, a realistic
        animatronic puppet, and several people in ape suits. This film, The Legend
        of Ochi, is my first, and it took seven years to create. We filmed on location
        in the remote mountain villages of Transylvania. I made over two hundred
        matte paintings. The sets we constructed atop the highest elevation road-accessible
        point in Romania were eaten by large bears. This film was an adventure to
        make, and if you go to the theatre this weekend, I trust you’ll feel that
        for yourself.
    </p>
    <p>
        <img src="" alt="" />
    </p>
</div>
