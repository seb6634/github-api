// == Import : npm
import React from "react";
import { render } from "react-dom";
import "semantic-ui-css/semantic.min.css";

// Composants
import App from "../src/components/App";
const rootReactElement = <App />;
const target = document.getElementById("root");
render(rootReactElement, target);
