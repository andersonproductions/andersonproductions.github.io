<script lang="ts">
    let data:
        | {
              text: string;
              url: {
                  href: string;
              };
              items?: undefined;
          }
        | {
              text: string;
              items: {
                  text: string;
                  url: {
                      href: string;
                  };
              }[];
              url?: undefined;
          } = $props();
</script>

<li>
    <span class="text-9xl font-headline">
        {#if data.url}
            <a href={data.url.href}>{data.text}</a>
        {/if}
        {#if data.items}
            <span onclick={() => {}}>{data.text}</span>
            <ul class="font-ns text-base flex flex-col items-center hidden">
                {#each data.items as subItem}
                    <li>{subItem.text}</li>{/each}
            </ul>
        {/if}
    </span>
</li>
