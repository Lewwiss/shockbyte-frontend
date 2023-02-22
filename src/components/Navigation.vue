<script lang="ts">
    export default {
        data() {
            return {
                // Bool returning if menu is open
                isMenu: false,
            }
        },
        methods: {
            // Set's the isMenu value to the opposite of the current value
            setMenu() {
                this.isMenu = !this.isMenu;
            }
        }
    };
</script>

<template>
    <div>
        <div class="max-w-7xl mx-auto container grid grid-cols-2 py-10 px-6 sm:px-10">
            <div class="flex items-center justify-start space-x-5">
                <a href="/" class="bg-white border-black border-8 h-10 w-10 flex items-center justify-center">
                    <div class="bg-black w-4 border-white border-2 h-4" />
                </a>
                <a href="/" class="font-bold text-xl">QRCoded</a>
            </div>
            <div class="hidden md:flex items-center justify-end space-x-10">
                <a class="text-lg line-through">Why use a QR code?</a>
                <a href="/support" class="text-lg">Get support</a>
            </div>
            <div class="flex md:hidden flex items-center justify-end space-x-10">
                <button v-on:click="setMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </button>
            </div>
            <div v-show="isMenu" class="fixed w-full h-full top-0 left-0 flex flex-row z-50">
                <div class="flex flex-grow col-span-2 bg-black opacity-50" v-on:click="setMenu" />
                <div class="col-span-2 bg-white flex flex-col items-start justify-start space-y-10 p-10">
                    <button v-on:click="setMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </button>
                    <a class="text-lg line-through">Why use a QR code?</a>
                    <a href="/support" class="text-lg">Get support</a>
                </div>
            </div>
        </div>
    </div>
</template>