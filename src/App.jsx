import { useState } from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
