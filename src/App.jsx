import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import './index.css';


function App() {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    const storeReportData = localStorage.getItem('reportData');
    try {
      setReportData(storeReportData ? JSON.parse(storeReportData) : []);
    } catch (error) {
      console.error("Error parsing report data from localStorage:", error);
      setReportData([]);
    }
  }, []);

  return (
    <BrowserRouter basename="Avkara-Sankal">
     
      <Routes>
        <Route path="/" element={<> <Navbar /><Body/></>} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
