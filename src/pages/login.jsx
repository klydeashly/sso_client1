import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import accountservice from '../apis/accountservice';

const Login = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await accountservice.login({username, password})
        console.log(response)
        if (response?.data?.token) {
            setToken(response.data.token)
            console.log(response.data.loginConfirmationToken)
            send_data(response.data.loginConfirmationToken)
            localStorage.setItem('token', response.data.token)
            navigate('/');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
            <h1>Login</h1>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ marginBottom: '10px', padding: '10px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginBottom: '10px', padding: '10px' }}
                />
                <button type="submit" style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
