import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home/Home';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </div>
  );
}
