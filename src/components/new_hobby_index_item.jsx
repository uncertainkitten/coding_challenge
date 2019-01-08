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
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.hobbyText} onChange={this.props.changeHobby}/>
        </form>
      </div>
    );
  }
}