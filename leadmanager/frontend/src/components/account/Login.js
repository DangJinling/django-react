import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';


export class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
        console.log('submit');
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />;
        }
        const { email, password, } = this.state;
        return (
            <div className='col-md-6 m-auto'>
                <div className='card card-body mt-5'>
                    <h2 className='text-center'>Login</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                name='email'
                                onChange={this.onChange}
                                value={email}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                name='password'
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='btn btn-primary'>
                                Login
                            </button>
                        </div>
                        <p>
                            Don't have an account? <Link to='/register'>Regiser</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
