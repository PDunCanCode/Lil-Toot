import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {color: 'purple' };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){

    }
    render() {
        <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
             
        </div>
    }
}
export default Box;