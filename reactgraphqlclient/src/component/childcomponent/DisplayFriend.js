import React from 'react';

class DisplayFriend extends React.Component {
    constructor(){
        super()
        this.friendClicked = this.friendClicked.bind(this)
    }

    friendClicked(){
        console.log("friend clicked " + this.props.id )
    }
    
    render() { 
        return ( 
            <tr>
                <td>{this.props.name}</td> 
                <td>{this.props.location}</td>
                <td>
                    <button onClick={this.friendClicked}>Click</button>
                </td>
            </tr>    
         )
    }
}
 
export default DisplayFriend;