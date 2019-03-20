import React, { Component } from 'react';

class TopSection extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <button>{this.props.btn}</button> 
            </div>
        )
    }
}

export default TopSection