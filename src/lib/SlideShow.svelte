<script lang="ts">
    import { onMount } from 'svelte';
    import Swiper from 'swiper';
    import { Navigation, Pagination, EffectFade } from 'swiper/modules';

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/effect-fade';

    type Era = {
        title: string;
        era: string;
        description: string;
        img: string;
    };

    import erasData from '$lib/data/eras.json';
    const eras = erasData as Era[];

    let swiperEl: HTMLDivElement;

    onMount(() => {
        const swiper = new Swiper(swiperEl, {
            modules: [Navigation, Pagination, EffectFade],
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            direction: 'horizontal',
            spaceBetween: 0,
            slidesPerView: 1,
            navigation: {
                nextEl: '.next-btn',
                prevEl: '.prev-btn'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
    });
</script>


<!-- Full-screen Swiper -->
<div class="swiper w-screen h-screen bg-gray-800" bind:this={swiperEl}>
    <div class="swiper-wrapper">

        <div class="swiper-slide w-screen h-screen flex items-center justify-center">
            <img src="/bg/title.webp" alt="title-bg" class="absolute inset-0 w-full h-full object-cover -z-10 saturate-75"/>

            <div class="w-full h-full flex items-center justify-center flex-col px-2 backdrop-blur text-white">
                <div class="text-center w-fit h-fit bg-black/70 p-10 rounded-2xl backdrop-blur-xl">
                    <h1 class="text-4xl font-bold drop-shadow">THE TIMELINE OF HUMAN EVOLUTION</h1>
                </div>
            </div>
        </div>


        {#each eras as era}
            <div class="swiper-slide w-screen h-screen flex items-center justify-center">
                <img src="{era.img}" alt="{era.title}" class="absolute inset-0 w-full h-full object-cover -z-10"/>

                <div class="w-full h-full flex items-center justify-center flex-col px-2 backdrop-blur-lg text-white">
                    <div class="text-center w-[98%] max-w-4xl h-fit bg-black/70 lg:p-10 p-4 rounded-2xl backdrop-blur-xl">
                        <h1 class="text-3xl font-bold drop-shadow">{era.title}</h1>
                        <h2 class="text-xl font-light drop-shadow">{era.era}</h2>
                        <h2 class="text-xl text-center mt-4 drop-shadow">{@html era.description}</h2>
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <!-- Bottom Dots Pagination -->
    <div class="swiper-pagination absolute bottom-6 left-0 w-full z-50"></div>

    <!-- Navigation -->
    <div class="hidden lg:inline absolute top-1/2 left-4 -translate-y-1/2 z-50">
        <button class="prev-btn bg-gray-800 text-white px-4 py-2 rounded">Prev</button>
    </div>

    <div class="hidden lg:inline absolute top-1/2 right-4 -translate-y-1/2 z-50">
        <button class="next-btn bg-gray-800 text-white px-4 py-2 rounded">Next</button>
    </div>
</div>
