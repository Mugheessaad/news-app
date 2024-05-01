<template>
  <v-snackbar
    v-model="store.alert"
    :timeout="timeout"
    :color="store.success ? 'green' : 'red'"
  >
    {{ store.alertText }}

    <template v-slot:actions>
      <v-btn
        :color="store.success ? 'green' : 'red'"
        class="bg-white"
        variant="text"
        @click="store.alert = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { newsStore } from "@/store/newsStore";
import { ref } from "vue";
const store = newsStore();
const timeout = ref(2000);
</script>

<style lang="scss" scoped></style>
