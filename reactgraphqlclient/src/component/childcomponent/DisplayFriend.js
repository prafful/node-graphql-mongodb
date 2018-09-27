import React from 'react';

class DisplayFriend extends React.Component {
    
    render() { 
        return ( 
            <div>{this.props.name} is from {this.props.location}</div>
         )
    }
}
 
export default DisplayFriend;