import React, {Component, Fragment} from 'react';
import {authorize} from './data'
import SportFilter from './filter'

class FetchStrava extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            my_data: {},
            tpye_select: 'Run'
        };
    }

    async componentDidMount(){
        const auth = await authorize()
        const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${auth.access_token}`;
        const res = await fetch(activities_link)
        const data = await res.json()
        await this.setState({
            loading: false,
            my_data: data
        })
        console.log(this.state.my_data)
    }
    get_type(el){
        this.setState({
            tpye_select: el.item
        })
    }
    render(){
        return(
            <div>
                {this.state.loading ? <div>Loading...</div> : <div>
                    <Fragment>
                    <SportFilter data={this.state.my_data} type={this.get_type.bind(this)} />
                    <p>{this.state.tpye_select}</p>
                    </Fragment>
                </div> }
            </div>
        )
    }
}

export default FetchStrava