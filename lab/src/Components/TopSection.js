import React, { Component } from 'react';

class TopSection extends Component {
    render(){
        return (
            <div>
                <div>
                    <img src={this.props.image1} alt=''></img>
                    <img src={this.props.image2} alt=''></img>
                </div>
                <div>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                    <button>{this.props.btn}</button>
                </div>
            </div>
        )
    }
}

export default TopSection