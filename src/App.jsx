import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Technology from './pages/Technology';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/destination" element={<Destination />}></Route>
            <Route path="/crew" element={<Crew />}></Route>
            <Route path="/technology" element={<Technology />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
