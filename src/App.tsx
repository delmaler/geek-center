import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Reserve from './pages/Reserve.tsx';
import GeekCafe from './pages/GeekCafe.tsx';
import GeekArt from './pages/GeekArt.tsx';
import GeekRPG from './pages/GeekRPG.tsx';
import TTRPG from './pages/TTRPG.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="geek-cafe" element={<GeekCafe />} />
        <Route path="geek-art" element={<GeekArt />} />
        <Route path="geekrpg" element={<GeekRPG />} />
        <Route path="geekrpg/reserve" element={<Reserve />} />
        <Route path="geekrpg/ttrpg" element={<TTRPG />} />
      </Route>
    </Routes>
  );
}

export default App;
