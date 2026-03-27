import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import AutomationPage from './pages/AutomationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="platform" element={<PlatformPage />} />
          <Route path="automation" element={<AutomationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
