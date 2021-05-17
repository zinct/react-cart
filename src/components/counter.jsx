import React, { Component } from 'react';

class Counter extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        const stock = 5;
        const { value } = nextProps.counter;
        if(value > stock) return false;
        return true;
    }

    render() {
        const { children, counter, onIncrement, onDecrement, onDelete } = this.props;
        return (
            <React.Fragment>
                <div className="m-3">
                    {children}
                    <span className={this.getCounterClass()}>{this.getCounterValue()}</span>
                    <button className="btn btn-primary m-1" onClick={ () => onIncrement(counter) }>+</button>
                    <button className="btn btn-secondary m-1" onClick={ () => onDecrement(counter) }>-</button>
                    <button className="btn btn-danger m-1" onClick={ () => onDelete(counter) }>Delete</button>
                </div>
            </React.Fragment>
        );
    }

    getCounterValue() {
        const { value } = this.props.counter;
        return value === 0 ? 'zero' : value;
    }
    
    getCounterClass() {
        const { value } = this.props.counter;
        let classes = 'badge p-2 m-2 bg-';
        classes += value === 0 ? 'warning' : 'secondary';
        return classes;
    }

}

export default Counter;