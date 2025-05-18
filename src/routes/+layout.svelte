<script lang="ts">
    import { onMount } from 'svelte';
	import '../app.css';
	import {gsap,SplitText} from 'gsap/all';
	let { children } = $props();
	onMount(()=>{
	gsap.registerPlugin(SplitText)
	})
</script>

{@render children()}
