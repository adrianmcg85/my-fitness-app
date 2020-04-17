import React from 'react';
import {authorize} from './data'

class FetchStrava extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            run: ''
        }
    }

    async componentDidMount(){
        const auth = await authorize()
        const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${auth.access_token}`;
        const res = await fetch(activities_link)
        const data = await res.json()
        this.setState({
            loading: false,
            run: data[0]
        })
    }
    render(){
        return(
            <div>
                {this.state.loading ? <div>Loading...</div> : <div>=</div> 
                }
                <p></p>
            </div>
        )
    }
}

export default FetchStrava