import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "./feature/productsSlice";
import { productsApi } from "./feature/productApi";
// import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
  return getDefaultMiddleware().concat(productsApi.middleware)
  }
});

store.dispatch(fetchProducts());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
