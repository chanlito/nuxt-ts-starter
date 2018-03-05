<template>
  <div>
    <the-user-list :users="users" />
  </div>
</template>

<script lang="ts">
import { NuxtContext } from 'nuxt';
import { Component, Vue } from 'nuxtjs-extensions';

import TheUserList from '../components/TheUserList.vue';

@Component({
  components: {
    TheUserList
  }
})
export default class extends Vue {
  async asyncData({ app }: NuxtContext) {
    const { results } = await app.$axios.$get('/api/users');
    return { users: results };
  }
}
</script>
