import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.name) {
                alert.error(`Name: ${error.msg.name.join()}`);
            }
            if (error.msg.email) {
                alert.error(`Email: ${error.msg.email.join()}`);
            }
            if (error.msg.message) {
                alert.error(`Message: ${error.msg.email.join()}`);
            }
            if (error.msg.first_name) {
                alert.error(`Name: ${error.msg.first_name.join()}`);
            }
            if (error.msg.non_field_errors) {
                alert.error(error.msg.non_field_errors.join());
            }
            else {
                alert.error('Error');
            }

        }
        if (message !== prevProps.message) {
            if (message.deleteLead) {
                alert.success(message.deleteLead);
            }
            if (message.addLead) {
                alert.success(message.addLead);
            }
            if (message.passwordNotMatch) {
                alert.error(message.passwordNotMatch);
            }
        }
    }
    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));
