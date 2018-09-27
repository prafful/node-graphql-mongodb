import React from 'react'
import axios from 'axios'
import DisplayFriend from './childcomponent/DisplayFriend';

class RemoteComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            remoteFriends:[]
        }
    }
    getRemotData(){
        console.log("Getting data from REST API")
        axios.get("http://localhost:3000/friends")
                    .then((response)=>{
                        this.setState(
                            {
                                remoteFriends:response.data
                            }
                        )
                        console.log(this.state.remoteFriends)
                    })
    }

    componentDidMount(){
        this.getRemotData()
    }

    render() { 

        var displayData = this.state.remoteFriends.map((frn)=>{
        return(
                <DisplayFriend 
                    key={frn.id}
                    name={frn.name}
                    location={frn.location}
                />
              )
        })


        return (  
            <div>
                I will get the data from REST API using AXIOS.
                <br></br>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayData}
                    </tbody>    
                </table>
            </div>
        );
    }
}
 
export default RemoteComponent;