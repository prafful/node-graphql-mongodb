import ReactDOM from 'react-dom'
import React from 'react';

import ApolloClient from "apollo-boost";
import {ApolloProvider}  from "react-apollo";


import Friend from "./component/Friend"
import Location from "./component/Location";
import RemoteComponent from './component/RemoteComponent';

const client = new ApolloClient(
    {
        uri:'http://localhost:1234/graphql'
    }
)

const location = document.getElementById('root')

ReactDOM.render(
    <ApolloProvider client={client}>
    <div>
                 <div>
                    <RemoteComponent />
                 </div>   
                 <div>
                    <h1>Location</h1>
                    <Location friends="15" city="Chennai"></Location>
                </div>
                <div>
                    <h1>Friends</h1>   
                    <Friend location="Chennai">Omi</Friend>
                    <Friend location="Pune">Uma</Friend>
                    <Friend location="Kochi">Teri</Friend>
                </div>
               
    </div>
    </ApolloProvider>            
                , location)


