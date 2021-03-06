import React, { Component } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    // const styles = require('./Home.scss');
    require('./Home.css');
    return (
      <div className="home-page">
        <Helmet title="Home"/>
        <div className="container">
          <h1>{config.app.title}</h1>
          <h2>{config.app.description}</h2>
          <p>
            <a href="https://github.com/erikras/react-redux-universal-hot-example"
               target="_blank">
              <i className="fa fa-github"/> View on Github
            </a>
          </p>
        </div>
      </div>
    );
  }
}
