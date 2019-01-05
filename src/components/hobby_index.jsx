import React from 'react';
import HobbyIndexItem from './hobby_index_item';
import NewHobbyIndexItem from './new_hobby_index_item';

class HobbyIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hobbies: this.props.hobbies
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  render(){
    return(
      <div className="hobby-box">
        <label className="emp-label">Hobbies</label><button className="emp-btn" onClick={this.addHobby}>Add</button>
        <button className="emp-btn" onClick={this.handleEdit}>Edit</button><button className="emp-btn" onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

// Thoughts about Hobby Index - I probably want to store the hobbies as a hash so I can key in to modify it easier
// Challenges - I need to figure out what keys will work and be passable through the various local states
// Hobby Index Item - has Edit state and Info state - Edit causes it to display NHII - Info is basic HII
// Checkbox will pass check upwards
// OH! I can hash with the hobby label, and then the edit state of true or false - that should work
// Something something functions and callbacks