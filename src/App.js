import './App.css';
import {
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Living from './pages/Living';
import RSVP from './pages/RSVP';
import Location from './pages/Location';
import Dinner from './pages/Dinner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/boende" element={<Living />} ></Route>
          <Route path="/vigsel" element={<Location />} ></Route>
          <Route path="/sittning" element={<Dinner />} ></Route>
          <Route path="/osa" element={<RSVP />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
