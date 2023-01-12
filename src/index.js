//import some react tools
import ReactDOM from "react-dom/client";
import App from "./App";

//import our first component : App

//Target the root div
const rootDiv = document.getElementById("root");

//Transform the root div into a react node
const reactRoot = ReactDOM.createRoot(rootDiv);

//Inject our app component into react node
reactRoot.render(<App></App>);
