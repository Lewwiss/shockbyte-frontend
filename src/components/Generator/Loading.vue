<script lang="ts">
  export default {
    methods: {
      // Set's the parent status to 2
      setStatus() {
        this.$emit("setstatus", 2);
      },
    },
    mounted() {
      setTimeout(() => {
        // Call's our function after 2 seconds
        this.setStatus();
      }, 2000);
    },
  };
</script>

<template>
    <div class="mx-auto flex items-center justify-center pt-80 pb-96 px-10">
      <div class="flex flex-row space-x-3 pb-24">
        <div class="w-3.5 h-3.5 bg-black animate-pulse " />
        <div class="w-3.5 h-3.5 bg-black animate-pulse" />
        <div class="w-3.5 h-3.5 bg-black animate-pulse" />
      </div>
    </div>
</template>