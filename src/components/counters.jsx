import React, { Component } from 'react';
import Counter from './counter.jsx';

class Counters extends Component {
    render() {
        const { counters, onIncrement, onDecrement, onDelete, onReset } = this.props;
        return (
            <React.Fragment>
                <button className="btn btn-primary m-1" onClick={onReset}>Reset</button>
                {counters.map((counter, i) => {
                    return (
                        <Counter 
                            key={i}
                            counter={counter} 
                            onDelete={ onDelete } 
                            onIncrement={ onIncrement } 
                            onDecrement={ onDecrement } 
                        >
                            <h2>Counter #{counter.id}</h2>            
                        </Counter>
                    );
                })}
            </React.Fragment>
        );
    }
}

export default Counters;
