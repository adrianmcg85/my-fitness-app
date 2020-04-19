import React, { Component } from 'react';

class SportFilter extends Component{
    constructor(props){
        super(props);
        this.handleFilter = this.handleFilter.bind(this)
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
    handleFilter(item){
        this.props.type(item)
    }

    render(){
        return(
            <div>
            {this.state.type.map((item, i)=>(
                <a key={i} href="#" onClick={()=>{this.handleFilter({item})}}>{item}</a>
            ))}
            </div>
        )}}
export default SportFilter
