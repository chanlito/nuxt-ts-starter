<template>
  <div>
    <the-user-list :users="users" />
    <the-test-form />
  </div>
</template>

<script lang="ts">
import { NuxtContext } from 'nuxt';
import { Component, Vue } from 'nuxtjs-extensions';

import TheTestForm from '../components/TheTestForm.vue';
import TheUserList from '../components/TheUserList.vue';

import { FetchUsersResponse } from '../../server/app/user/user.interface';

@Component({
  components: {
    TheUserList,
    TheTestForm
  }
})
export default class extends Vue {
  async asyncData({ app }: NuxtContext) {
    const { results } = await app.$axios.$get('/api/users') as FetchUsersResponse;
    return { users: results };
  }
}
</script>
