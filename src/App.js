import { useContext } from 'react';
import './App.css';
import { ApiContext } from './contexts/ApiContext'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Admin from './pages/Admin';
import Public from './pages/Public';
import NoPage from './pages/NoPage';
import Urlap from './pages/Urlap';

function App() {
  const {termekLista}= useContext(ApiContext)
  return (
    <div className="App">
     
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Public />} />
                        <Route path="admin" element={<Admin />} />
                        <Route path="urlap" element={<Urlap />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;