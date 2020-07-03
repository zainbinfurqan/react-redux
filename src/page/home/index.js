import React, { useState } from 'react';
import authAction from '../../redux/action/authAction'

import { connect } from "react-redux";

function Home(props) {

    function handleLogout() {
        props.Logout()
    }

    return (
        <div>
            <h1>Home</h1>

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

const mapStateToProps = (store) => ({
    auth: store.auth.auth
})

const mapDispatchToProps = {
    Logout: authAction.Logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)