<template lang="pug">
  #app
    Chart
    Patterns
</template>

<style>
  #app {
    display: flex;
  }
  @media screen and (max-width: 414px) {
    #app {
      display: block;
    }
  }
</style>

<script>
  // components
  import Patterns from './components/patterns.vue';
  import Chart from './components/chart.vue';

  // mutation
  import mutationTypes from './store/mutationTypes';

  export default {
    name: 'App',

    computed: {

    },

    components: {
      Patterns,
      Chart,
    },

    created() {
    },
  };
</script>
