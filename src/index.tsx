import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const str = `
___        ________   ________   _________        ________   _______    _______    ________      
|\\  \\      |\\   __  \\ |\\   ____\\ |\\___   ___\\     |\\   ____\\ |\\  ___ \\  |\\  ___ \\  |\\   ___  \\    
\\ \\  \\     \\ \\  \\|\\  \\\\ \\  \\___|_\\|___ \\  \\_|     \\ \\  \\___|_\\ \\   __/| \\ \\   __/| \\ \\  \\\\ \\  \\   
 \\ \\  \\     \\ \\   __  \\\\ \\_____  \\    \\ \\  \\       \\ \\_____  \\\\ \\  \\_|/__\\ \\  \\_|/__\\ \\  \\\\ \\  \\  
  \\ \\  \\____ \\ \\  \\ \\  \\\\|____|\\  \\    \\ \\  \\       \\|____|\\  \\\\ \\  \\_|\\ \\\\ \\  \\_|\\ \\\\ \\  \\\\ \\  \\ 
   \\ \\_______\\\\ \\__\\ \\__\\ ____\\_\\  \\    \\ \\__\\        ____\\_\\  \\\\ \\_______\\\\ \\_______\\\\ \\__\\\\ \\__\\
    \\|_______| \\|__|\\|__||\\_________\\    \\|__|       |\\_________\\\\|_______| \\|_______| \\|__| \\|__|
                         \\|_________|                \\|_________|  
`;
const style = "font-size: 8px; font-family:monospace";

console.log("%c%s", style, str);
console.log("g i t h u b . c o m / m a c f i r e 1 0");

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
