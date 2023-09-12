import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PizzaContextProvider from "./context/pizzaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <PizzaContextProvider>
            <App />
        </PizzaContextProvider>
    </React.StrictMode>
);
