import type { JSX } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";

function App(): JSX.Element {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main> //This is a description that you are going to love
  );
}

export default App;
