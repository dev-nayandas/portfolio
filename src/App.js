import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes/Routes";
import ParticalBackground from "./Pages/Background/ParticalBackground";
import { motion, useScroll } from "framer-motion"


function App() {

  
  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
