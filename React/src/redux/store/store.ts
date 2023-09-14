import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { postsApi } from "../api/postsApi";
import { mediaApi } from "../api/mediaApi";
import { pagesApi } from "../api/pagesApi";
import { searchApi } from "../api/searchApi";
import { categoriesApi } from "../api/categoriesApi";
import { registrationApi } from "../api/registrationApi";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
    [pagesApi.reducerPath]: pagesApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
  },
  middleware: (gDM) =>
    gDM()
      .concat(postsApi.middleware)
      .concat(mediaApi.middleware)
      .concat(pagesApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(searchApi.middleware)
      .concat(registrationApi.middleware)

});

setupListeners(store.dispatch);

export default store;
