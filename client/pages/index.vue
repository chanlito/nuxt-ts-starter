<template>
  <div>
    <the-cat-list :cats="cats" />
    <the-test-form />
  </div>
</template>

<script lang="ts">
import { NuxtContext } from 'nuxt';
import Vue from 'vue';

import TheCatList from '../components/TheCatList.vue';
import TheTestForm from '../components/TheTestForm.vue';

export default Vue.extend({
  components: {
    TheCatList,
    TheTestForm
  },
  async asyncData({ app }: NuxtContext) {
    const cats = await app.$axios.$get('/api/cats');
    return { cats };
  }
});
</script>
