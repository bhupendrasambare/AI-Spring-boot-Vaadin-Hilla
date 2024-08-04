import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.css';
import './themes/spring-boot-ai/styles.css'
import App from "./app"
import { persistor, store } from "./storage";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("outlet")

if (container) {
    const root = createRoot(container)

    root.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>,
    )
} else {
    throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
    )
}