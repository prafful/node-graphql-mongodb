import ReactDOM from 'react-dom'
import React from 'react';
import Friend from "./component/Friend"

const location = document.getElementById('root')

ReactDOM.render(
                <div>
                    <Friend location="Chennai">Omi</Friend>
                    <Friend location="Pune">Uma</Friend>
                    <Friend location="Kochi">Teri</Friend>
                </div>
                , location)


