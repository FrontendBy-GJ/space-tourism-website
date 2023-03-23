import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Destination from './pages/Destination';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/destination" element={<Destination />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
