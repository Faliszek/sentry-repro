import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { BrowserRouter as Router } from "react-router-dom";

Sentry.init({
  dsn: "https://7f4f2099ad624e6e95c9fecb1b99fca9@o1220616.ingest.sentry.io/6363607",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
