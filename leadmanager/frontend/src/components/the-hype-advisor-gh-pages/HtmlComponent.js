import React, { Component } from 'react';
import htmlFile from './index.html';
// const htmlFile = require('./index.html');

export default class HtmlComponent extends Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: htmlFile }} />
        )
    }
}

