import React, { Component, Fragment } from 'react';

class DisplayStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avg: 0
        }
    }
    get_average(prop_type) {
        var count = 0;
        var dist = 0;
        (this.props.data).map(item => {
            if (item.type === prop_type) {
                return (
                    dist = dist + item.distance,
                    count++
                )
            }
        }
        )
        this.setState({
            avg: dist / count
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
        return (
            <Fragment>
            <h2>Average</h2>
                <p>
                    {this.state.avg} km
                </p>
            </Fragment>
        )
    }
};

export default DisplayStats