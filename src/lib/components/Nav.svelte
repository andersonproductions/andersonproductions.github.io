<script lang="ts">
    import { nav } from "$lib/data/nav";
    var showMainMenu = false;
</script>

<div class="fixed z-20">
    <!-- Main Menu -->
    <nav
        class={showMainMenu
            ? "h-[100vh] w-[100vw] bg-red-50 z-20 relative"
            : "hidden"}
    >
        <ul
            class="w-full h-full flex justify-center flex-col items-center gap-3.5"
        >
            {#each nav.items as item}
                <li>
                    <span class="text-7xl font-headline">
                        {#if item.url}
                            <a href={item.url.href}>{item.text}</a>
                        {/if}
                        {#if item.items}
                            <span onclick={() => {}}>{item.text}</span>
                            <ul
                                class="font-ns text-base flex flex-col items-center"
                            >
                                {#each item.items as subItem}
                                    <li>
                                        <a href={subItem.url.href}
                                            >{subItem.text}</a
                                        >
                                    </li>{/each}
                            </ul>
                        {/if}
                    </span>
                </li>
            {/each}
        </ul>
    </nav>
    <!-- Menu Buger -->
    <div class="z-50 fixed top-0">
        <button class="bg-white" onclick={() => (showMainMenu = !showMainMenu)}
            >{showMainMenu ? "Close" : "Menu"}</button
        >
    </div>
</div>
