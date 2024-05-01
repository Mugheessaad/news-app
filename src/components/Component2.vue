<template>
  <div class="my-10 mx-8 py-5 px-8">
    <v-data-table
      :items-per-page="store.item"
      :items="store.locallyStoredLocalStorageData"
    >
      <thead v-if="!store.loading">
        <tr class="bg-purple-accent-4">
          <th style="max-width: 2px" class="text-center">Author</th>
          <th style="max-width: 10px" class="text-center">Content</th>
          <th style="max-width: 5px" class="text-center">URL</th>
          <th style="max-width: 10px" class="text-center">Actions</th>
        </tr>
      </thead>
      <thead v-if="store.loading">
        <tr class="bg-purple-accent-4">
          <th class="text-center">Loading... Please wait</th>
        </tr>
      </thead>
      <tbody v-if="store.loading">
        <tr>
          <td>
            <v-progress-linear
              class="w-100"
              v-if="store.loading"
              color="purple"
              indeterminate
            ></v-progress-linear>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr
          v-for="(data, index) in store.locallyStoredLocalStorageData"
          :key="data.content"
          :class="{ 'odd-row': index % 2 === 0, 'even-row': index % 2 !== 0 }"
        >
          <td style="font-size: 15px; max-width: 2px" class="text-truncate">
            {{ data.author == null ? "No Data Availabe" : `${data.author}` }}
          </td>

          <td style="font-size: 15px; max-width: 80px">
            {{ data.content == null ? "No Data Availabe" : `${data.content}` }}
          </td>
          <td
            style="font-size: 15px; max-width: 5px; text-decoration: none"
            class="text-truncate"
          >
            <a :href="data.url" target="_blank">
              {{ data.url == null ? "No Data Availabe" : `${data.url}` }}
            </a>
          </td>
          <td style="font-size: 15px; max-width: 50px" class="text-center">
            <v-row justify="center" class="my-2">
              <v-col cols="12" sm="6" md="3" lg="3" xl="5">
                <v-btn
                  class="edit"
                  icon="mdi-lead-pencil"
                  variant="tonal"
                  density="default"
                  @click="editNews(data, index)"
                ></v-btn>
              </v-col>
              <v-col cols="12" sm="6" md="3" lg="3" xl="5">
                <v-btn
                  class="delete"
                  icon="mdi-delete"
                  variant="tonal"
                  @click="deleteNews(index)"
                ></v-btn>
              </v-col>
            </v-row>
          </td>
        </tr>
      </tbody>
    </v-data-table>
    <Component3 v-if="store.dialog" :sendDataToChild="sendDataToChild" />
    <Alert v-if="store.alert" />
  </div>
</template>
<script setup>
import Component3 from "@/components/Component3.vue";
import Alert from "@/components/Alert.vue";
import { newsStore } from "@/store/newsStore";

const store = newsStore();

const editNews = (data, index) => {
  store.dialog = !store.dialog;
  store.dialogType = "Update";
  store.dialogText = "Update News";
  store.tempDataToTrack = {
    id: index,
    author: data.author,
    content: data.content,
    url: data.url,
  };
};
const deleteNews = (data) => {
  const index = store.locallyStoredLocalStorageData.findIndex(
    (item, id) => id === data
  );
  store.locallyStoredLocalStorageData.splice(index, 1);
  store.alert = true;
  store.success = true;
  store.alertText = "Successfull Deleted";
};
</script>

<style lang="scss" scoped>
.edit {
  color: #00c853;
  background-color: #f3e5f5;
}
.edit:hover {
  background-color: #00c853;
  color: white;
}
.delete {
  color: #d50000;
  background-color: #f3e5f5;
}
.delete:hover {
  background-color: #d50000;
  color: white;
}
.even-row {
  background-color: #e1bee7;
}
</style>
