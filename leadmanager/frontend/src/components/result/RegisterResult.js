import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import style from './RegisterResult.css';

export class RegisterResult extends Component {
    render() {
        return (
            <div style={{
                display: 'table',
                width: '100%'
            }}>
                <div class={style.centerText}>
                    Your account has been registered successfully. Pleas check your email to active the count.
                    <br />
                </div>
                <button className="btn btn-primary">
                    <Link to='/login'>Login</Link>
                </button>
            </div >
        )
    }
}

export default RegisterResult
