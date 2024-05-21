import React, { useState } from "react";
import InputForm from "./components/inputForm";
import LoginButton from "./components/LoginButton";
import { Link } from 'react-router-dom';
import axios from "axios";

function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = () => {
        console.log(id);
        console.log(password);
        axios.post('http://localhost:3001/signup', {
          id : id,
          password: password
        })
        .then(res => {
          console.log(res.data);
            setIsLogin(true);
        })
        .catch(error => {
          console.log('login failed:', error);
          setIsLogin(false);
        })
    }

    return (
        <div>
            <div>
                {isLogin ? <p className="bg-gradient-to-r from-blue-500 to-pink-500"><Link to='/main'>로그인 되었습니다.</Link></p> : <p>로그인이 필요합니다.</p>}
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-md flex flex-col gap-3">
                {/* <input className="text-sm rounded-lg px-2"
                    type="text"
                    value={id}
                    onChange={handleIdChange}
                    placeholder="ddd"
                    /> */}
                <InputForm
                    label="ID"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <InputForm
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <br />
            </div>
            <div className="bg-white p-1 rounded-2xl shadow-md flex flex-col gap-3">
            <LoginButton onClick={handleLogin} id={id} password={password} />
            </div>

        </div>

    )
}

export default Login;