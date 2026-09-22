import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Register.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = ( { setUser } ) => {
    const [ form, setForm ] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [ error, setError ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/register', form);
            setUser(res.data.user);
            navigate('/');
        } catch (err) {
            setError("Registration failed");
        }
    };


  return (
    <div className ='register-container'>
        <div className='register-header'>
            <h1>Register</h1>
            <h2>To save your notes</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                <input type="email" placeholder="Email"  value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}  />
                <button type="submit">Register</button>
                <h3>Already have an account?</h3>
                <Link to="/login">
                    <button type="button">Login</button>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default Register