import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-photo-view/dist/react-photo-view.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthContext from "./contexts/authContext/AuthContext.jsx";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <AuthContext>
        <App />
      </AuthContext>
    </React.StrictMode>
  </QueryClientProvider>
);
