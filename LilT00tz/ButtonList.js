import React, { Component } from 'react';
import "./ButtonList.css";

class ButtonList extends Component {
    static defaultProps = {
        colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"]
    };

    render() {
        return (
            <div ClassName='ButtonList'>
                {this.props.colors.map(c => {
                    const colorObj = { bacjgroundColor: c };
                    return <button style={colorObj}>Click Me!</button>
                })}
            </div>
        );
    }
}

export default ButtonList;