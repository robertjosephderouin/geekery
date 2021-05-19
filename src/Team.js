import React, { Component } from 'react';
import Member from './Member'
import './App.css';
import memberData from './memberData';


class Team extends Component {
  constructor() {
    super();
    this.state = {
      members: memberData
    }
    this.memberCards = this.state.members.map(member => {
      return (
        <Member
          key={member.name}
          path={member.path}
          name={member.name}
          role={member.role}
          funFact={member.funFact}
        />
      )
    })
  }

  render() {
    return (
      <div className='members-container'>
        {this.memberCards}
      </div>
    )
  }
}

export default Team;
