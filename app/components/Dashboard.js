import React from 'react'
import { Link } from 'react-router'

class Dashboard extends React.Component {
  render() {

    return (
      <div>
        <h2>Welcom to LDS Callings Manager</h2>
        <p>
            To use this app begin by adding Callings and modifying your ward structure.<br/>
        Once ready, simply fill in the current names and you are ready to start using the LDS Callings Manager to manage your ward with a lot less headache. Enjoy!

        <br/> <br/>   In addition, home teaching and visiting teaching can be reported throught the links below. <em>(this functionality has not yet been added)</em>
        </p>
      </div>
    )
  }
}

module.exports = Dashboard;



//        <h2>Report Your Visits</h2>{' '}
