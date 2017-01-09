import React from 'react'
import Router from 'react-router'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes from './Notes/Notes.js'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: [],
      aaa: []
    }
    console.log(`props=${props}`)
  }

  render () {
    debugger;
    console.log(`Profile.this=${this}`)
    return (
      <div className='row'>
        <div className='col-md-4'>
          <UserProfile user={this.props.params.user} />
        </div>
        <div className='col-md-4'>
          <Repos />
        </div>
        <div className='col-md-4'>
          <Notes />
        </div>
      </div>
    )
  }
}
export default Profile
