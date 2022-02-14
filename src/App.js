import './App.css';
import Home from './components/home/Home.js';
import tourData from'./data/db.json'
import { Routes, Route, Link } from "react-router-dom";
import TourDetails from './components/TourDetails/TourDetails';

function App() {
  return (
    <>
  <Routes>
        <Route path="/" element={<Home data = {tourData}/>} />
        <Route path="/city/:id" element={<TourDetails data={tourData}/>} />
      </Routes>
    

    </>
  );
}

export default App;
