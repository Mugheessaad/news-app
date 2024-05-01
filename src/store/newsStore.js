// src/store/newsStore.js
import { defineStore } from "pinia";

export const newsStore = defineStore('newsStore', () => ({
    locallyStoredLocalStorageData: [],
    loading: true,
    alert: false,
    success: false,
    alertText: 'Successfull',
    dialog: false,
    dialogType: "",
    dialogText: "",
    tempDataToTrack: null,
    item: 20,
}));
