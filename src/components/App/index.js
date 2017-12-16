import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setValue} from '../../actions';
import './App.css';

class App extends Component {
  render() {
    const {data, setValue} = this.props;
    return (
      <div className="container">
        <h1>Main Application</h1>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
        <label htmlFor="value">Value</label>&nbsp;
        <input id="value" type="text" onChange={e => setValue(e.target.value)} />
      </div>
    );
  }
}

const mapStateToProps = ({data}) => ({data});

export default connect(mapStateToProps, {setValue})(App);
