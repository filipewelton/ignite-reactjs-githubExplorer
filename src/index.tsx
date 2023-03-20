import { createRoot } from "react-dom/client";

import { App } from "./App";

const domElement = document.getElementById("root")!;
const root = createRoot(domElement);

root.render(<App />);
