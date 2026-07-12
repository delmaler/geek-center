import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Reserve from './pages/Reserve.tsx';
import Instructors from './pages/Instructors.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reserve" element={<Reserve />} />
        <Route path="instructors" element={<Instructors />} />
      </Route>
    </Routes>
  );
}

export default App;
