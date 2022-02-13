import './App.css';
import Home from './components/home/Home.js';
import tourData from'./data/db.json'
function App() {
  return (
    <>
    <Home data = {tourData}/>

    </>
  );
}

export default App;
