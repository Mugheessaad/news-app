<template>
  <v-card class="my-10 mx-16 py-5 px-8 bg-purple-lighten-4">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="4"
        md="3"
        lg="2"
        xl="5"
        class="d-flex justify-center"
      >
        <v-btn
          prepend-icon="mdi-plus"
          class="addNews"
          size="large"
          @click="openDialog"
          text="Add New"
        >
        </v-btn>
      </v-col>
      <Component3 v-if="store.dialog" />
      <v-col
        cols="12"
        sm="3"
        md="2"
        lg="2"
        xl="2"
        class="d-flex justify-center"
      >
        <v-btn
          prepend-icon="mdi-sync"
          class="sync"
          size="large"
          @click="synchronizeData"
        >
          Sync
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        sm="5"
        md="3"
        lg="2"
        xl="5"
        class="d-flex justify-center"
      >
        <v-btn
          prepend-icon="mdi-delete"
          class="deleteAll"
          size="large"
          @click="deleteAllData"
        >
          Delete All
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
import Component3 from "@/components/Component3.vue";
import { newsStore } from "@/store/newsStore";
import { ref, onMounted } from "vue";

const store = newsStore();

const openDialog = () => {
  store.dialog = !store.dialog;
  store.dialogType = "Add";
  store.dialogText = "Add News";
};

const fetchDataFromApi = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=30f73300e08a4a54b8fdbbe9da7bba6f`
    );
    if (!response.ok) {
      store.alert = true;
      store.success = false;
      store.alertText = "Network Error!!! Please Try again";
      throw new Error(`Network Error!!! (status: ${response.status})`);
    }
    const responses = await response.json();
    store.loading = false;
    store.locallyStoredLocalStorageData = responses.articles;
  } catch (error) {
    console.error("Error Fetching Details!!!", error);
    store.alert = true;
    store.success = false;
    store.alertText = "Error Fetching Details!!!";
  }
};

const synchronizeData = () => {
  if (store.locallyStoredLocalStorageData.length == 0) {
    store.loading = true;
    fetchDataFromApi();
    store.alert = true;
    store.success = true;
    store.alertText = "Syncronizing Data! Please Wait..";
  } else {
    store.alert = true;
    store.success = false;
    store.alertText = "Already have Data";
  }
};
const deleteAllData = () => {
  store.locallyStoredLocalStorageData = [];
  store.alert = true;
  store.success = true;
  store.alertText = "Successfull Deleted All News";
};
onMounted(async () => {
  fetchDataFromApi();
});
</script>

<style lang="scss" scoped>
.addNews {
  background-color: #00c853;
  color: white;
}
.addNews:hover {
  color: #00c853;
  background-color: white;
}
.sync {
  background-color: #2962ff;
  color: white;
}
.sync:hover {
  color: #2962ff;
  background-color: white;
}
.deleteAll {
  background-color: #d50000;
  color: white;
}
.deleteAll:hover {
  color: #d50000;
  background-color: white;
}
</style>
