import React, { Component } from 'react';
import styled from 'styled-components'; 


const StyledBall =styled.div`
    background-color: tomato;
    border-radius: 50%;
    color: white;
    display: inline-block;
    width: 3em;
    height: 2.25em;
    padding-top: 0.75em;
    text-align: center;
    margin-right: 0.5em;
    font-weight: bold;
    font-size: 1.5em;
`;


class Ball extends Component {
    render() {
        return <div className='styledBall'>{this.props.num}</div>;
    }
}

export default Ball;