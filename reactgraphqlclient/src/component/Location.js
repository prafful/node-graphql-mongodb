import React from 'react';
import City from "./childcomponent/City";

class Location extends React.Component {
    constructor(props){
       super(props)
       let fc = parseInt(this.props.friends)
       this.state = {
           friendCount:fc
       }
       this.addFriend = this.addFriend.bind(this)
       this.removeFriend = this.removeFriend.bind(this)
    }

    addFriend(){
        console.log("Addfriend called")
        this.setState(
            { 
                friendCount:this.state.friendCount + 1
            }
        )
    }

    removeFriend(){
        this.setState(
            { 
                friendCount:this.state.friendCount - 1
            }
        )
    }

    render() { 
        return (  
            <div>
                
                No of friends: {this.state.friendCount} from <City city={this.props.city}></City>
                <br></br>
                <button onClick={this.addFriend}>Add Friend</button>
                <button onClick={this.removeFriend}>Remove Friend</button>
            </div>
        );
    }
}
 
export default Location;