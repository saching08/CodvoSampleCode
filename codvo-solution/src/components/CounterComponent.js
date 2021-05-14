import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent';
import CounterDisplay from './CounterDisplay';

class CounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0,
         }

         this.incrementCount = this.incrementCount.bind(this);
         this.decrementCount = this.decrementCount.bind(this);
    }

    incrementCount () {
        this.setState ({
            count: this.state.count + 1,
        })
    }

    decrementCount () {
        this.setState ({
            count: this.state.count - 1,
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <CounterDisplay 
                  count={this.state.count}
                />
                <ButtonComponent 
                  incrementCount={this.incrementCount}
                  decrementCount={this.decrementCount}
                />
            </React.Fragment>
         );
    }
}
 
export default CounterComponent;