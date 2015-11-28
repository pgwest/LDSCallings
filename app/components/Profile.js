import React from 'react'

class Profile extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    alert('log out')
  }
    
    
  render() {
    return (
      <div>
        <div>
            <h1>My Account</h1>
            <h3>Username: Bishop's Name</h3>         <button onClick={this.logOut}>Edit</button>
            <h3>Password: myPassword</h3>         <button onClick={this.logOut}>Edit</button>
            <h3>Calling: Bishop</h3>         <button onClick={this.logOut}>Edit</button>
            <h3>Email: myemail@gmail.com</h3>         <button onClick={this.logOut}>Edit</button>
        </div>
       <div>
        <br> </br>
        <h1>Manage LDS Callings App</h1>
        
        <h3>Edit Organizations</h3> 
        <button onClick={this.logOut}>Edit Organizations</button>
        
        <h3>Edit Callings</h3> 
        <button onClick={this.logOut}>Edit Callings</button>
        
        <h3>Import Ward Members</h3>
        <button onClick={this.logOut}>Import Ward Membors</button>
        
        <h3>Export CSV</h3> 
        <button onClick={this.logOut}>Export CSV</button>
        
        <h3>Edit Administrators</h3> 
        <button onClick={this.logOut}>Edit Admins</button>
        
        <h3>Edit Notifications</h3>
        <button onClick={this.logOut}>Edit Notifications</button>
        <br/>
        <br/>
        <button onClick={this.logOut}>Log Out</button>
        </div>
      </div>
    )
  }
}

module.exports = Profile;