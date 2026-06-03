// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import store from "./redux/store.js";
// import { persistStore } from "redux-persist";
// import { Toaster } from "react-hot-toast";

// const persistor = persistStore(store);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Provider >
//     <PersistGate loading={null} persistor={persistor}>
//       {/* <App /> */}
//       <div>Main Page</div>
//       <Toaster />
//     </PersistGate>
//   </Provider>,
// );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <h1>New App</h1> */}
//     <App />
//   </StrictMode>,
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
//import reportWebVitals from "./reportWebVitals.js";
// import { Toaster } from "react-hot-toast";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import store from "./redux/store.js";
// import { persistStore } from "redux-persist";

//const persistor = persistStore(store);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <Provider store={store}>
//   //   <PersistGate loading={null} persistor={persistor}>
//   //     {/* <h1>New App</h1> */}
//   //     <App />
//   //     <Toaster />
//   //   </PersistGate>
//   // </Provider>,

// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
     {/* <h2 className="text-amber-700">Welcome to the App</h2> */}
     <App />
    </Provider>
  </React.StrictMode>,
  
);