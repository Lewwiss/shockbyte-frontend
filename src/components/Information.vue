<template>
    <div class="bg-primary selection:bg-white selection:text-primary relative">
        <div class="absolute -top-28" />
        <div class="mx-auto max-w-7xl flex items-center justify-center py-20 px-10 relative">
            <img src="../assets/1.svg" class="absolute -top-80 w-80 -right-40 lg:-top-96 lg:-right-28 lg:w-96" />
            <img src="../assets/2.svg" class="absolute top-0 -right-40 w-80 lg:-right-28 lg:w-96" />
            <img src="../assets/3.svg" class="absolute -top-80 lg:-top-96 w-80 -left-40 lg:-left-28 lg:w-96" />
            <div class="w-full grid grid-cols-1 xl:grid-cols-2 z-10">
                <div class="w-full flex flex-col items-center justify-center order-2 xl:order-1">
                    <img animate={animation} src="../assets/sketch-1.svg" class="max-w-2xl xl:w-full xl:px-0 h-64 sm:h-auto" />
                </div>
                <div class="flex flex-col items-center xl:items-start justify-center w-full py-10 text-center xl:text-left order-1 xl:order-2">
                    <h3 class="text-white text-3xl md:text-4xl lg:text-5xl leading-normal md:leading-normal lg:leading-normal font-bold mb-5">Direct your customers effortlessly.</h3>
                    <p class="text-white text-md md:text-lg leading-10 md:leading-10 max-w-md">Simplify the process of clients finding your page by directing them exactly where you want.</p>
                </div>
            </div>
        </div>
    </div>
</template>