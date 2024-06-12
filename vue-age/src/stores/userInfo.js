import { defineStore } from "pinia";
import { ref } from "vue";

export const userInfoStore = defineStore(
    "userInfo",
    () => {
        const info = ref({
            id: "",
            username: "",
            password: "",
            picture_URL: "",
            anime: true,
        });
        const setId = (id) => {
            info.value.id = id;
        };
        const setName = (username) => {
            info.value.username = username;
        };
        const setPass = (password) => {
            info.value.password = password;
        };
        const setPicture = (picture_URL) => {
            info.value.picture_URL = picture_URL;
        };
        const setAnime = () => {
            if (info.value.anime == true) {
                info.value.anime = false;
            } else {
                info.value.anime = true;
            }
        };
        const removeInfo = () => {
            info.value = {};
        };
        return { info, setName, removeInfo, setPass, setPicture, setId,setAnime};
    },
    {
        persist: true,
    }
);
