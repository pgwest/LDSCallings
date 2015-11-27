import React from 'react'

class Actions extends React.Component {
  render() {
    const events = [
      { id: 0, title: 'Callings to be filled' }
    ]

    return (
      <div>
        <h2>Callings with Action Needed</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

module.exports = Actions;
