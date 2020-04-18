import React, { Component } from 'react';
import FetchStrava from './strava';

class Stats extends Component{
    render(){
        return(
            <div>
            <FetchStrava />
            </div>

        )
    }
}

export default Stats