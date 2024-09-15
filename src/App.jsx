import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  const storeReportData = localStorage.getItem('reportData');
  const reportData = storeReportData ? JSON.parse(storeReportData) : [];

  return (
    <BrowserRouter basename="/Avkara-Sankal">
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
