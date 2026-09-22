import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

import axios from 'axios';

const Login = ({ setUser }) => {
    const [ form, setForm ] = useState({
        email: "",
        password: "",
    });
    const [ error, setError ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', form);
            setUser(res.data.user);
            navigate('/');
        } catch (err) {
            setError("Invalid email or password");
        }
    };
    
    return (
        <div className ='login-container'>
            <div className='login-header'>
                <h1>Login</h1>
                <h2>To access your notes</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    {error && <p className="error">{error}</p>}
                    <input type="email" placeholder="Email"  value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                    <input type="password" placeholder="Password"  value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}/>
                    <button id="login-btn" type="submit">Login</button>
                    <h3>Don't have an account?</h3>
                    <Link to="/register">
                        <button id="register-btn" type="button">Register</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login