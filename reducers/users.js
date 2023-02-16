import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: null,
    token: null,
    password: null,
    email: null,
    profil: null,
    devis: [],
    articles: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.password = action.payload.password;
      state.value.email = action.payload.email;
      state.value.profil = action.payload.profil;
      state.value.articles = [];
    },
    logout: (state) => {
      state.value.username = null;
      state.value.email = null;
      state.value.token = null;
      state.value.profil = null;
      state.value.articles = [];
    },
    addArticles: (state, action) => {
      const newArticle = {
        article: action.payload,
      };
      state.value.articles.push(newArticle);
      console.log(newArticle);
    },
  },
});

export const { login, logout, addArticles } = userSlice.actions;
export default userSlice.reducer;
