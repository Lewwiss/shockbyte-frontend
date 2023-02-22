<script lang="ts">
    export default {
        props: {
            url: String,
            size: Number,
            qrCode: String
        },
        methods: {
            // Set's the parent url to new value
            setUrl(value : String) {
                this.$emit("seturl", value);
            },
            // Set's the parent size to new value
            setSize(value : Number) {
                this.$emit("setsize", value);
            },
            // Call's the parents generateQrCode method
            generate() {
                this.$emit("generate");
            },
            // Call's the parents resetQrCode method
            reset() {
                this.$emit("reset");
            },
        },
        beforeMount() {
            this.generate();
        },
    };
</script>

<template>
    <div class="mx-auto max-w-7xl pt-10 pb-48 px-10 grid grid-cols-1 lg:grid-cols-2 mb-4">
        <div class="flex flex-col items-center justify-center text-center space-y-5 px-2 sm:px-10 order-2 lg:order-1 z-10">
            <button v-on:click="reset" class="w-full bg-black text-white py-4 px-8 font-medium text-lg mb-3">Reset</button>
            <input placeholder="Enter a URL" class="w-full rounded-none border-2 border-gray-200 py-4 px-5 text-grey-dark focus:outline-none appearance-none mb-5" v-bind:value=url @input="(event: Event) => setUrl((event.target as HTMLInputElement).value)" />
            <div class="relative w-full">
                <select class="w-full rounded-none bg-white border-2 border-gray-200 py-4 px-5 text-grey-dark focus:outline-none appearance-none" v-bind:value="size" @input="(event: Event) => setSize(parseInt((event.target as HTMLInputElement).value))">
                    <option value="100">100x100</option>
                    <option value="200">200x200</option>
                    <option value="300">300x300</option>
                    <option value="400">400x400</option>
                    <option value="500">500x500</option>
                    <option value="600">600x600</option>
                    <option value="700">700x700</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 absolute right-5 top-4 pt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
            </div>
            <button v-on:click="generate" class="w-full bg-black text-white py-4 px-8 font-medium text-lg">Regenerate</button>
            <a v-bind:href="qrCode" download="QRCode.png" class="w-full bg-black text-white py-4 px-8 font-medium text-lg">Download</a>
        </div>
        <div class="flex items-center justify-center text-center pt-10 order-1 lg:order-2 pb-20 lg:pb-10">
            <div class="aspect-phone w-72 border-black border-8 rounded-3xl overflow-hidden flex items-center justify-center relative shadow-xl">
                <div class="w-60 h-60 p-8 absolute m-auto top-0 bottom-0">
                    <img v-bind:src="qrCode" class="w-full" />
                </div>
            </div>
        </div>
    </div>
</template>