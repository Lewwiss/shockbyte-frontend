<script lang="ts">
  import { defineComponent } from 'vue';
  import Navigation from './components/Navigation.vue';
  import Generator from './components/Generator/Generator.vue';
  import Action from './components/Action.vue';
  import Information from './components/Information.vue';
  import Footer from './components/Footer.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Navigation,
      Generator,
      Action,
      Information,
      Footer,
    }
  });
</script>

<template>
  <main class="overflow-hidden">
    <Navigation />
    <Generator />
    <Information />
    <Action />
    <Footer />
  </main>
</template>