import { useEffect, useState } from 'react'
import Register from './pages/Register'
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './components/NotFound'
import Navbar from './components/navbar';

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;


function App() {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/me")
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }


  return (
    <BrowserRouter>
    <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} error={error}/>} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register setUser={setUser} />}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
