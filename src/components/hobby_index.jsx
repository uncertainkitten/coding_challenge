import React from 'react';
import HobbyInfoItem from './hobby_info_item';
import NewHobbyIndexItem from './new_hobby_index_item';

class HobbyIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hobbyId: 2,
      hobbies: ["Punching Computers", "Getting Mad At Video Games", "Depression"],
      editMode: {},
      editButtonMode: false
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.changeHobby = this.changeHobby.bind(this);
  }

  changeHobby(key, hobby){
    let hobbies = this.state.hobbies.slice()
    hobbies[key] = hobby
    this.setState({hobbies});
  }

  handleAdd(e){
    e.preventDefault();
    let hobbyId = this.state.hobbyId + 1
    this.setState({
      hobbies: [...this.state.hobbies, ""],
      editMode: {...this.state.editMode, [hobbyId]: true},
      editButtonMode: true,
      hobbyId
    });
  }

  handleSubmit(){
    
  }

  render(){
    let hobbyComp = this.state.hobbies.map((hobby, index) => {
      if (this.state.editMode[index]){
        return <NewHobbyIndexItem hobbyText={hobby} index={index} changeHobby={this.changeHobby} />
      }else{
        return <HobbyInfoItem hobbyText={hobby} index={index}/>
      }
    });
    let editButton = <input type="submit" className="emp-btn" value="Edit" />
    if (this.state.editButtonMode){
      editButton = <input type="submit" className="emp-btn" value="Save" />
    }
    return(<div className="hobby-index">
      <form className="hobby-form" onSubmit={this.handleSubmit}>
        <legend className="emp-label">Hobbies</legend><button className="emp-btn" onClick={this.handleAdd}>Add</button>
        {hobbyComp}
        {editButton}<input type="submit" className="emp-btn" value="Delete" />
      </form>
    </div>);
  }
}

export default HobbyIndex;

// Thoughts about Hobby Index - I probably want to store the hobbies as a hash so I can key in to modify it easier
// Challenges - I need to figure out what keys will work and be passable through the various local states
// Hobby Index Item - has Edit state and Info state - Edit causes it to display NHII - Info is basic HII
// Checkbox will pass check upwards
// OH! I can hash with the hobby label, and then the edit state of true or false - that should work
// Something something functions and callbacks