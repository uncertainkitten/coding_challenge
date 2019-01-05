import React from 'react';

class HobbyIndex extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    hobbyItems = this.props.hobbies.map(hobby => <HobbyIndexItem hobby={hobby}/>)
    return(
      {hobbyItems}
    )
  }
}