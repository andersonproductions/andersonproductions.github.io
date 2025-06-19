<script lang="ts">
    import { remark } from "remark";
    import { unified } from "unified";
    import remarkParse from "remark-parse";
    import remarkFrontmatter from "remark-frontmatter";
    import MdRender from "./MdRender.svelte";
    export let data: any;
    export let md: string;
    const tree = unified()
        .use(remarkParse)
        .use(remarkFrontmatter, ["yaml"])
        .parse(md);
    console.log(tree);
</script>

<header
    class="h-[50dvh] bg-[#FFA8C8] content-center items-center justify-center flex text-6xl"
>
    <h1 class="uppercase">{data.title}</h1>
</header>
<div class="p-20 pt-32">
    <article><MdRender content={tree.children} /></article>
</div>
