<script lang="ts">
    import { page } from "$app/state";
    import { sendEvent } from "$lib/gtag";
    import { onMount } from "svelte";
    let errMessages: { [key: string]: { title: string; message: string } } = {
        "400": {
            title: "404, Sorry, we can’t find the page you’ve requested.",
            message:
                'We couldn\'t find the page you were looking for. If you think this is an error, <a href="mailtto:webmaster@andersonproductions.com">you can let us know.</a>',
        },
    };
    onMount(() => {
        sendEvent({
            action: "error",
            category: "error",
            label: "error",
            value: String(page.error?.message ?? page.status),
        });
    });
</script>

<div
    data-dynamic-css
    data-class="bg-black text-white"
    class="w-[100vw] h-[100vh] p-12 flex items-center justify-center flex-col bg-black gap-4"
>
    <h1 class=" text-white text-7xl font-bold">
        {page.status}
        {page.error?.message}
    </h1>
    <p>
        The content you’re looking for is temporarily unavailable. Please try
        again later.
    </p>
    <a
        href="/"
        class=" py-2 px-4 border border-white rounded-full hover:bg-white hover:text-black"
        >Take me home</a
    >
</div>
