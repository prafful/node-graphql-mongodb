import React from 'react'

class Friend extends React.Component {
    
    render() { 
        return ( 
                <div>
                    <h1>Hello from React: {this.props.children}</h1>
                    <h4>is from {this.props.location}</h4>
                </div> 
                    );
    }
}
 
export default Friend;