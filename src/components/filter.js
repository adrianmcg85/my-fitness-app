import React, { Component } from 'react';

class SportFilter extends Component{
    constructor(props){
        super(props)
        this.state = {
            type: []
        }
    }
    componentDidMount(){
        let arr = [];
        this.props.data.map(item => {
            if(!arr.includes(item.type)){(
                arr.push(item.type)
                )}
            })
        this.setState({
               type: arr
            })

    }

    render(){
        return(
            <div>
            {this.state.type.map((item, i)=>(
                <p key={i}>{item}</p>
            ))}
            </div>
        )}}
export default SportFilter
