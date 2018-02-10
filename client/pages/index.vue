<template>
  <the-cat-list :cats="cats" />
</template>

<script lang="ts">
import Vue from 'vue';
import { NuxtContext } from 'nuxt';

import TheCatList from '../components/TheCatList.vue';

export default Vue.extend({
  components: {
    TheCatList
  },
  async asyncData({ app }: NuxtContext) {
    const cats = await app.$axios.$get('/api/cats');
    return { cats };
  }
});
</script>
