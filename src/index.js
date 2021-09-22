import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { VideoProvider } from "./Contexts/VideoProvider";
import { AuthProvider } from "./Contexts/AuthProvider";
import { ModalProvider } from "./Contexts/ModalProvider";
import { PlaylistModalProvider } from "./Contexts/PlaylistModalProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <AuthProvider>
          <ModalProvider>
            <PlaylistModalProvider>
              <App />
            </PlaylistModalProvider>
          </ModalProvider>
        </AuthProvider>
      </VideoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
