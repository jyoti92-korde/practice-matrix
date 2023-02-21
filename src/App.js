import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AirlineList from './components/AirlineList';

function App() {
  return (
    <div >
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<AirlineList />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
