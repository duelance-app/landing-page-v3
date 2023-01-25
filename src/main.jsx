import { Provider } from "jotai";
import { Provider as BalancerProvider } from "react-wrap-balancer";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider>
            <BalancerProvider ratio={0.0}>
                <Router>
                    <App />
                </Router>
            </BalancerProvider>
        </Provider>
        <Analytics />
    </React.StrictMode>
);
