<script lang="ts">
  export const prerender = true
    import { onMount } from "svelte";
    import "../app.css";
    let { children } = $props();
    import {gsap} from 'gsap/all';
    import { ScrollTrigger,ScrollSmoother } from "gsap/all";
    import Nav from "$lib/Global/Nav.svelte";
    import Footer from "$lib/Global/Footer.svelte";
    import { footerData } from "$lib/Global/footerData";
    import Analytics from "$lib/analytics.svelte";
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollSmoother);
    function classToStyleMap(classes:string) {
		const map = {
			'bg-black': { backgroundColor: '#000' },
			'bg-white': { backgroundColor: '#fff' },
			'text-white': { color: '#fff' },
			'text-black': { color: '#000' },
			// Add more mappings as needed
		};


		let styles = {};
		classes.split(' ').forEach(cls => {
			if (map[cls]) {
				styles = { ...styles, ...map[cls] };
			}
		});

		return styles;
	};

	onMount(() => {
		const elements = document.querySelectorAll('[data-dynamic-css]');
		const defaultStyles = {
					backgroundColor: getComputedStyle(document.body).backgroundColor || '#fff',
					color: getComputedStyle(document.body).color || '#000'
				};
		elements.forEach((el) => {
			const classAttr = el.getAttribute('data-class');
			if (!classAttr) return;

			const targetStyles = classToStyleMap(classAttr);
		let current = 	document.body.style
			gsap.fromTo(
				"body",{
				...defaultStyles
				},
				{
					...targetStyles,
					duration: 1.2,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: el,
						start: 'top 80%',
						end:"top top",
						// toggleActions: 'play none none none',
						scrub:true
					}
				}
			);
		});
	});

</script>
<Analytics/>
<Nav data={{
  items:[{
    text:"Home",
    url:{href:"/",openInNewTab:false},
    items:[]
  },{
    text:"Work",
    url:{href:"/work",openInNewTab:false},
    items:[]
  },{
    text:"About",
    url:{href:"/about",openInNewTab:false},
    items:[]
  },{
    text:"Contact",
    url:{href:"/contact",openInNewTab:false},
    items:[]
  }]
}}/>
<main class="min-h-[75vh]">{@render children()}</main>
<Footer data={footerData}/>
