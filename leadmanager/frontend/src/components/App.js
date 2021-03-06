import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Provider } from 'react-redux';
import store from '../store';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
import Register from './account/Register';
import Login from './account/Login';
import PrivateRoute from './common/PrivateRoute';
import { loadUser } from '../actions/auth';
import RegisterResult from './result/RegisterResult';
import HtmlComponent from './the-hype-advisor-gh-pages/HtmlComponent';



const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 3000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser);
    }


    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...options}>
                    <Router>
                        <Fragment>
                            <Route path="/" component={HtmlComponent} />
                            {/* <Alerts />
                            <Header />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path='/lead' component={Dashboard} />
                                    <Route path="/" component={HtmlComponent} />
                                    <Route exact path='/register' component={Register} />
                                    <Route exact path='/login' component={Login} />
                                    <Route exact path='/registerResult' component={RegisterResult} />
                                </Switch>
                            </div> */}
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))