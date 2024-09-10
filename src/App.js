import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import TitleItem from './TitleItem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Venom from './Venom';
import Dashboard from './Dashboard';

function App() {
  return (
   <>
   {/* <Dashboard /> */}
   
    {/* <Navbar />
    <TitleItem /> */}


<Router>
      {/* <div>
        <nav>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/venom">Venom</a>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/venom" element={<Venom />} />
        </Routes>
      {/* </div> */}
    </Router>

    </>
  );
}

export default App;
