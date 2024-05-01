<template>
  <v-dialog v-model="store.dialog" width="auto">
    <v-card class="mx-auto" max-width="500" elevation="16">
      <h1 class="w-100 d-flex justify-center text-orange">
        {{ store.dialogText }}
      </h1>
      <v-form @submit.prevent>
        <v-sheet width="500" class="mx-auto pa-4 ma-4">
          <v-text-field v-model="data.author" label="Author"></v-text-field>
          <v-text-field v-model="data.content" label="Content"></v-text-field>
          <v-text-field v-model="data.url" label="URL"></v-text-field>
          <v-btn
            type="submit"
            block
            class="mt-8 bg-blue"
            :prepend-icon="
              store.dialogType == 'Add' ? 'mdi-plus' : 'mdi-update'
            "
            @click="updateOrAdd"
            >{{ store.dialogText }}</v-btn
          >
        </v-sheet>
      </v-form>
      <v-card-actions>
        <v-btn
          class="cancel"
          block
          @click="store.dialog = !store.dialog"
          prepend-icon="mdi-cancel"
          >Cancel</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { onMounted } from "vue";
import { ref, reactive } from "vue";
import { newsStore } from "@/store/newsStore";

const store = newsStore();
let data = reactive({
  author: "",
  content: "",
  url: "",
  id: "",
});

const setValuesTotable = () => {
  if (store.dialogType == "Add") {
    store.tempDataToTrack = null;
  } else {
    data.id = store.tempDataToTrack.id;
    data.author = store.tempDataToTrack.author;
    data.content = store.tempDataToTrack.content;
    data.url = store.tempDataToTrack.url;
  }
};
const updateOrAdd = () => {
  if (store.tempDataToTrack == null) {
    store.locallyStoredLocalStorageData.unshift(data);
    store.alert = true;
    store.success = true;
    store.alertText = "Successfull Added";
    store.dialog = !store.dialog;
  } else {
    const index = store.locallyStoredLocalStorageData.findIndex(
      (item, index) => index == store.tempDataToTrack.id
    );
    store.locallyStoredLocalStorageData[index] = data;
    store.alert = true;
    store.success = true;
    store.alertText = "Successfull Updated";
    store.dialog = !store.dialog;
  }
};
onMounted(() => {
  setValuesTotable();
});
</script>

<style lang="scss" scoped></style>
