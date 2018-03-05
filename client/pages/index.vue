<template>
  <v-container class="ma-0 pa-0">
    <v-layout>
      <v-flex class="ml-2 mr-2">
        <v-btn block
               color="accent"
               nuxt
               to="/about">
          Go to About Page
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <the-user-list :users="users" />
      </v-flex>
    </v-layout>
  </v-container>
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
