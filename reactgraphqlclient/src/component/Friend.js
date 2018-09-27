import React from 'react'

class Friend extends React.Component {
    
    render() { 
        return ( 
                <div>
                    <h2>Hello from React: {this.props.children}</h2>
                    <h3>is from {this.props.location}</h3>
                </div> 
                    );
    }
}
 
export default Friend;