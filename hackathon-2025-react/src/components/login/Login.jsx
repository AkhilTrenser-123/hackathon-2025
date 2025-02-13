import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import MyIcon  from '../../assets/sign-logo.svg'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form submission

        if (!username || !password) {
            setError('Username and password are required.');
            return;
        }

        if (username === '1' && password === '2') {
            navigate('/home');
            console.log('Login successful!');
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div className='main-container'>
            {/* <div className="logo-container">
                <h2> TEST </h2>
                <img
              className="logo"
              src={MyIcon}
              alt="test"
            />
            </div> */}
            <div className="login-container">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>} {/* Display error message */}
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="/signup">Sign Up</a></p> {/* Sign-up link */}
            </div>
        </div>
    );
}

export default Login
