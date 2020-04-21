import React, { Component, Fragment } from 'react';

class DisplayStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avg_dist: 0
        }
    }
    get_average(prop_type) {
        var count = 0;
        var dist = 0;
        var time = 0;
        // var d = new Date();
        // var previous = d.getFullYear() + '/'  + ('0' + (d.getMonth()+1)).slice(-2) + '/' +  (d.getDate()-10);
        // var today = new Intl.DateTimeFormat('en-GB').format(d);

        (this.props.data).map(item => {
            // var log_date = item.start_date.replace(/(T|Z)/g," ").split(" ")[0].replace(/-/g,'/');
            if(count < this.props.logs){
                if (item.type === prop_type) {
                return (
                    dist = dist + item.distance,
                    time = time + item.moving_time,
                    count++
                )
            }
        }
        }
        )
        let a = Math.floor(dist / count)
        let t = Math.floor(time / count);
        this.setState({
            avg_dist: Math.floor(a/10)/100,
            avg_time: t
        })
    };
    componentDidMount(){
        this.get_average(this.props.selectedType)

    }

    componentWillUpdate(nextProps){
        if (nextProps.selectedType !== this.props.selectedType) {
            this.get_average(nextProps.selectedType)
        }
    }

    render() {
        var time = this.state.avg_time;
        var min = Math.floor(time/60);
        var sec = time % 60;
        return (
            <Fragment>
            <div className="stat">
            <h2>{this.props.title}</h2>
                <p>
                    {this.state.avg_dist} km
                </p>
                <p>{min} Minutes and {sec} Seconds</p>
            </div>

            </Fragment>
        )
    }
};

export default DisplayStats