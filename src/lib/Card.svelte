<script lang="ts">
    export let title: string;
    export let subtitle: string = "";
    export let description: string = "";
</script>

<div class="w-[1200px] h-full bg-red-100 rounded-xl shadow-lg p-8 flex flex-col justify-center items-center text-center">
    <h2 class="text-3xl font-bold mb-2">{title}</h2>

    {#if subtitle}
        <h3 class="text-lg text-gray-500 mb-4">{subtitle}</h3>
    {/if}

    <p class="text-base leading-relaxed max-w-[600px]">{description}</p>
</div>
