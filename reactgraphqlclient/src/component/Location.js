import React from 'react';
import City from "./childcomponent/City";

import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const locationQuery = gql`
                            {
                                locations{
                                city
                                }
                            }
`

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

    displayLocations(){
        var data = this.props.data
        if(data.loading){
            return(<div>Loading Locations...</div>)
        }else{
            return this.props.data.locations.map((l)=>{
                return(
                    <li>{l.city}</li>
                )
            })
        }

    }

    render() { 

        console.log(this.props)
        return (  
            <div>
                
                No of friends: {this.state.friendCount} from <City city={this.props.city}></City>
                <br></br>
                <button onClick={this.addFriend}>Add Friend</button>
                <button onClick={this.removeFriend}>Remove Friend</button>
                <br></br>
                List of cities from graphql server:
                {this.displayLocations()}
                <br></br>
            </div>
        );
    }
}
 
export default   graphql(locationQuery)(Location);