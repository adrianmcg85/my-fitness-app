import React, {Component, Fragment} from 'react';
import {authorize} from './data'
import Sport_Filter from './filter'

class FetchStrava extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            run_data: {}
        };
    }

    async componentDidMount(){
        const auth = await authorize()
        const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${auth.access_token}`;
        const res = await fetch(activities_link)
        const data = await res.json()
        await this.setState({
            loading: false,
            run_data: data
        })
        console.log(this.state.run_data)
    }
    //     return  console.log('test')
        // <React.Fragment>
        // 

        // </React.Fragment>
    // }
    render(){
        return(
            <div>
                {this.state.loading ? <div>Loading...</div> : <div>
                    <Fragment>
                    <Sport_Filter />

                    </Fragment>
                </div> }
            </div>
        )
    }
}

export default FetchStrava