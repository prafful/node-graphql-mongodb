import React from 'react';

class DisplayFriend extends React.Component {
    
    render() { 
        return ( 
            <tr>
                <td>{this.props.name}</td> 
                <td>{this.props.location}</td>
            </tr>    
         )
    }
}
 
export default DisplayFriend;