<script lang="ts">
  import {gsap,SplitText} from "gsap/src/all";
    import { onMount } from "svelte";
  let { children } = $props();
  gsap.registerPlugin(SplitText);
  let wrapper:HTMLElement;
  let hoverStaggerText:HTMLElement;
  let hoverStagger:HTMLElement;
  let tl: gsap.core.Timeline;
  onMount(()=>{
    gsap.registerPlugin(SplitText);
    let text1 = SplitText.create(hoverStaggerText, { type: "words, chars" });
    let text2 = SplitText.create(hoverStagger, { type: "words, chars" });

    tl = gsap.timeline({paused:true});
    tl.to(text1.chars,{yPercent:-100,duration:0.4,stagger:{amount:0.2}});
    tl.from(text2.chars,{yPercent:100,duration:0.4,stagger:{amount:0.2}},0);
  })
  const handleMouseEnter = () => tl?.play();
   const handleMouseLeave = () => tl?.reverse();
  </script>

<p onmouseenter={handleMouseEnter} onmouseleave={handleMouseLeave} class="relative overflow-hidden">
    <span bind:this={hoverStaggerText}>
        {@render children()}
    </span>
    <span bind:this={hoverStagger} class="absolute top-0 left-0 bottom-auto right-auto" aria-label="hidden">
        {@render children()}
    </span>
</p>
