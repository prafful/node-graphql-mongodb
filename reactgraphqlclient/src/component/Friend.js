import React from 'react'
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const friendsQuery = gql`
                            {
                                friends{
                                name
                                age
                                }
                            }
`

class Friend extends React.Component {

    loadFriends(){
        //console.log(this.props)
        var data = this.props.data
        if(data.loading){
            return(<div><h1>Loading friends....</h1></div>)
        }else{
            return this.props.data.friends.map((frn)=>{
                return (
                    <li>{frn.name}, {frn.age}</li>
                )
            })
        }
    }
    
    render() { 
        //console.log(this.props)
        return ( 
                <div>
                    <h2>Hello from GraphQL: </h2>
                    <h3>{this.loadFriends()}</h3>
                </div> 
                    );
    }
}
 
export default graphql(friendsQuery)(Friend);