<template>
  <form>
    <v-text-field v-model="name"
                  label="Name"
                  :counter="10"
                  :error-messages="errors.collect('name')"
                  v-validate="'required|max:10'"
                  data-vv-name="name"
                  required></v-text-field>
    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxtjs-extensions';

@Component
export default class extends Vue {
  name: string = '';

  submit() {
    const r = this.$validator.validateAll();
  }

  clear() {
    this.name = '';
  }
}
</script>
