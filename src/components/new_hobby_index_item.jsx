import React from 'react';

class NewHobbyIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hobbyText: this.props.hobbyText
    }
  }

  render(){
    return(
      <div>
        <input type="text" autoFocus value={this.props.hobbyText} onChange={(e) => this.props.changeHobby(this.props.index, e.target.value)}/>
      </div>
    );
  }
}

export default NewHobbyIndexItem;