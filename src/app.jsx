import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Browse from './pages/Browse.jsx';
import About from './pages/About.jsx';
import Writing from './pages/Writing.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="about" element={<About />} />
          <Route path="writing/:slug" element={<Writing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
