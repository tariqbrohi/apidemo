import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from '../axios';
export default function Login() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: username,
            password: password
        }
        axios.post('/customer-service/login', data)
            .then((res) => {
                if (res.data.result) {
                    localStorage.setItem('userToken', res.token);
                    // notify login sucess
                    history.push('/dashboard');
                } else {
                    console.log(res);
                    document.getElementById("invalid").style.display = "block";
                }
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                // notify error
            })
    }
    return (
        <div>
            <form>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <p id="invalid" style={{color: "red", display: "none"}}>Invalid Username or password!</p>
                <button type="submit" onClick={onFormSubmit}>Login</button>
            </form>
        </div>
    )
}
