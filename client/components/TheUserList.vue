<template>
  <v-list two-line>
    <template v-for="{ email, name, picture, gender, dob } in users">
      <v-list-tile avatar
                   :key="email">
        <v-list-tile-avatar>
          <img :src="picture.thumbnail">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ `${name.title}. ${name.first} ${name.last}` | titleize }}</v-list-tile-title>
          <v-list-tile-sub-title>
            {{ `${gender}` | titleize }}
            <span style="float: right">{{ `${dob}` }}</span>
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script lang="ts">
import { NuxtContext } from 'nuxt';
import { Component, Prop, Vue } from 'nuxtjs-extensions';
import { FetchUsersResult } from '../../server/app/user/user.interfaces';

@Component
export default class extends Vue {
  @Prop({ type: Array, required: true })
  users: FetchUsersResult[];
}
</script>
