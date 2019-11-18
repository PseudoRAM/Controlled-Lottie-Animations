import * as React from "react";
import { render } from "react-dom";
import Animation from "./components/Animation";

const App = () => <Animation />;

const rootElement = document.getElementById("root");
render(<App />, rootElement);
