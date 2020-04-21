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

        var pace = Math.floor(time / this.state.avg_dist);
        var pace_sec = Math.floor(pace % 60) + ' seconds';
        var pace_and = pace_sec!==0? ' and ' : '';
        var pace_min = Math.floor(pace / 60) + ' minutes' + pace_and;
        var rate = null;
        if(this.props.selectedType === "Rowing"){
            var rate_min = Math.floor(pace/120) + ' minutes ';
            var rate_sec = Math.floor((pace % 60)/2)+ ' seconds';
            var rate_and = pace_sec!==0? ' and ' : '';
            rate = rate_min + rate_and + rate_sec ;
            pace_min = null;
            pace_sec = null;
        }


        return (
            <Fragment>
            <div className="stat">
            <h2>{this.props.title}</h2>
                <p>
                <span>Distance</span><br/>
                    {this.state.avg_dist} km
                </p>
                <p><span>Time</span><br/>{min} Minutes and {sec} Seconds</p>
                <p><span>Pace/Rate</span><br/>{pace_min} {pace_sec} {rate}</p>
                
            </div>

            </Fragment>
        )
    }
};

export default DisplayStats