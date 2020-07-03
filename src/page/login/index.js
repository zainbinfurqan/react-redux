import React, { useState } from 'react';

import { connect } from "react-redux";
import api from '../../utils/api';
import authAction from '../../redux/action/authAction'


function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');


    async function handleLogin() {
        try {
            let body = {
                email, password
            }
            const response = await api.Login(body, null)
            if (response.status == 200) {
                props.Login(response)
                props.history.push('Home')
            }
            console.log(response)
        } catch (error) {

        }
    }

    return (
        <div>
            {props.auth.token && props.history.push('Home')}
            <h1>Login</h1>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleLogin}>Loign</button>
        </div>
    )
}

const mapStateToProps = (store) => ({
    auth: store.auth.auth
})

const mapDispatchToProps = {
    Login: authAction.Login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)