import React, { Component } from 'react';
import Ball from './LottoBall';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxballs: 6,
        maxNum: 40
    };
    constructor(props) {
        super(props);
        this.state ={ nums: Array.from({ length: this.props.maxBalls }) };
        this.handleClick = this.handleClick.bind(this);
    }
    generate() {
        this.setState(curState => ({ 
            nums: curState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));
        
    }
    handleClick() {
        this.generate();
    }
    render() {
        return (
            <section className='Lottery'>
                <h1>
                    {this.props.title}
                </h1>
                <div>
                    {this.state.nums.map(n => <Ball num={n} />)}
                </div>
                <button onCLick={this.handleCLick}Generate></button>

            </section>
        );
    }
}
export default Lottery;