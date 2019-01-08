import React from 'react';
import HobbyInfoItem from './hobby_info_item';
import NewHobbyIndexItem from './new_hobby_index_item';

class HobbyIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hobbyId: this.props.hobbies.length - 1,
      hobbies: [],
      editMode: {},
      editButtonMode: false,
      checked: {}
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.changeHobby = this.changeHobby.bind(this);
  }

  componentDidMount(){
    this.setState({hobbies: this.props.hobbies});
  }

  componentWillReceiveProps(nextProps){
    if (this.props.hobbies !== nextProps.hobbies){
      this.setState({hobbies: nextProps.hobbies, hobbyId: nextProps.hobbies.length - 1});
    }
  }

  toggleCheckbox(key){
    let checked = {...this.state.checked}
    checked[key] = !this.state.checked[key]
    this.setState({checked})
  }

  changeHobby(key, hobby){
    let hobbies = this.state.hobbies.slice();
    hobbies[key] = hobby
    this.setState({hobbies});
  }

  handleDelete(e){
    e.preventDefault();
    this.setState({
      hobbies: this.state.hobbies.filter((hobby,index) => (!this.state.checked[index])),
      checked: {},
      editButtonMode: false,
      editMode: {},
      hobbyId: this.state.hobbyId - Object.keys(this.state.checked).length
    });
    this.props.setHobbies(this.state.hobbies.filter((hobby,index) => (!this.state.checked[index])));
  }

  handleEdit(e){
    e.preventDefault();
    let checked = Object.keys(this.state.checked);
    let editMode = {...this.state.editMode};
    checked.forEach(key => {editMode[key] = true});
    this.setState({
      editMode,
      editButtonMode: true
    });
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

  handleSave(e){
    e.preventDefault();
    this.setState({
        editMode: {},
        editButtonMode: false,
        checked: {}
    });
    this.props.setHobbies(this.state.hobbies);
  }

  render(){
    let hobbyComp = this.state.hobbies.map((hobby, index) => {
      if (typeof hobby !== "string"){
        return <HobbyInfoItem
          hobbyText=""
          index={index}
          key={index}
          toggleCheckbox={this.toggleCheckbox}
          checked={!!this.state.checked[index]}
        />
      }
      else if (this.state.editMode[index]){
        return <NewHobbyIndexItem
          hobbyText={hobby}
          index={index}
          key={index}
          changeHobby={this.changeHobby}
          toggleCheckbox={this.toggleCheckbox}
          checked={!!this.state.checked[index]}
        />
      }else{
        return <HobbyInfoItem
          hobbyText={hobby}
          index={index}
          key={index}
          toggleCheckbox={this.toggleCheckbox}
          checked={!!this.state.checked[index]}
        />
      }
    });
    let editButton = <div className="btns"><button className="emp-btn" onClick={this.handleEdit}>Edit</button><button className="emp-btn" onClick={this.handleDelete}>Delete</button></div>
    if (this.state.editButtonMode){
      editButton = <button className="emp-btn" onClick={this.handleSave}>Save</button>
    }
    return(
    <div className="hobby-index">
      <legend className="emp-label">Hobbies</legend><button className="emp-btn" onClick={this.handleAdd}>Add</button>
      {hobbyComp}
      {editButton}
    </div>);
  }
}

export default HobbyIndex;