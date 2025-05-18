<script lang="ts">
    import { footerData } from "$lib/data/footer";
</script>

<footer class="bg-white p-12">
    <div class="flex-col flex md:flex-row justify-between gap-7">
        {#each footerData.links as item}
            <li class="list-none">
                {#if item.text}
                    <span class="uppercase font-medium"> {item.text} </span>
                    <ul class="text-gray-950">
                        {#each item.items as subItem}
                            <li>
                                <a href={subItem.url.href}>{subItem.text}</a>
                            </li>
                        {/each}
                    </ul>
                {:else}
                    <ul>
                        {#each item.items as subItem}
                            <li>
                                <a
                                    class={subItem.uppercase
                                        ? "uppercase"
                                        : "" + subItem.bold
                                          ? "font-medium"
                                          : ""}
                                    href={subItem.url.href}>{subItem.text}</a
                                >
                            </li>
                        {/each}
                    </ul>
                {/if}
            </li>
        {/each}
    </div>
</footer>
