import React from 'react';
import styles from './App.css';
import Current from './components/Current.js';
import GlobalNav from './components/GlobalNav.js';
import Dashboard from './components/Dashboard.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div >
            <GlobalNav/>
        {this.props.children || <Dashboard/>}
      </div>
        
    );
  }
}
