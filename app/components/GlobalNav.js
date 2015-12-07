import React from 'react'
import { Link } from 'react-router'
import auth from './auth.js'
import App from '../App.js'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  padding: '10px 20px',
  overflow: 'hidden',
  background: dark,
  color: light
}

styles.link = {
  padding: 11,
  color: light,
  fontWeight: 200
}

styles.activeLink = {
  ...styles.link,
  background: light,
  color: dark
}

styles.button = {
  background: dark,
  color: light,
  fontWeight: 200

}

class GlobalNav extends React.Component {

  static defaultProps = {
    user: {
      id: 1,
      name: 'User\'s Name'
    }
  }

  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    alert('log out')
  }
      
  open() {
    
  }

  render() {
    const { user } = this.props

    return (
      <div style={styles.wrapper}>
        <div style={{ float: 'left' }}>
          <Link to="/" style={styles.link}>Home</Link>{' '}
          <Link to="/current" style={styles.link} activeStyle={styles.activeLink}>Current Callings</Link>{' '}
          <Link to="/actions" style={styles.link} activeStyle={styles.activeLink}>Action Needed</Link>{' '}
          <Link to="/without" style={styles.link} activeStyle={styles.activeLink}>Without A Calling</Link>{' '}
                  <Link to="/members" style={styles.link} activeStyle={styles.activeLink}>Member Directory</Link>{' '}
          <Link to="/myActions" style={styles.link} activeStyle={styles.activeLink}>My Actions <span className="badge">3</span></Link>{' '}
        



        
        </div>
        <div style={{ float: 'right' }}>
          <Link style={styles.link} to="/profile">My Account <span className="glyphicon glyphicon-cog" aria-hidden="true"></span></Link> <button style={styles.button} onClick={auth.logout}>Log Out</button>

        </div>
      </div>
    )
  }
}

module.exports = GlobalNav;


//
//          <Link to="/register" style={styles.link} activeStyle={styles.activeLink}>Register</Link>{' '}
//
//          <Link to="/login" style={styles.link} activeStyle={styles.activeLink}>Login</Link>{' '}