import React from 'react';

class City extends React.Component {
    
    render() { 
        return ( 
            <div>
                {this.props.city}
            </div>
         );
    }
}
 
export default City;