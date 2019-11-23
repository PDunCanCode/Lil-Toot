import React, { Component } from 'react';
import styled from 'styled-components';
import { white } from 'ansi-colors';
import { blockParams } from 'handlebars';


const StyledBall =styled.div`
    .Ball {
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

}
`;


class Ball extends Commponent {
    render() {
        return <div></div>
    }
}