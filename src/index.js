import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { VideoProvider } from "./Contexts/VideoProvider";
import { AuthProvider } from "./Contexts/AuthProvider";
import { ModalProvider } from "./Contexts/ModalProvider";
import { PlaylistModalProvider } from "./Contexts/PlaylistModalProvider";
import { DataProvider } from "./Contexts/DataProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <AuthProvider>
          <ModalProvider>
            <PlaylistModalProvider>
              <DataProvider>
                <App />
              </DataProvider>
            </PlaylistModalProvider>
          </ModalProvider>
        </AuthProvider>
      </VideoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
