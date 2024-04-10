import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Register from "./pages/Register/components/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Register />
    </>
  );
}

export default App;
