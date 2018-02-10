<template>
  <v-list>
    <v-list-tile v-for="cat in cats"
                 :key="cat.id">
      <v-list-tile-content>
        <v-list-tile-title v-text="cat.name"></v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    cats: {
      required: true
    }
  }
});
</script>
