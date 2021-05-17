import React, { Component } from 'react';
import Navbar from './navbar.jsx';
import Counters from './counters.jsx';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    }

    handleIncrement = (counter) => {
        let counters = this.state.counters;
        const index = counters.indexOf(counter);
        counters[index].value += 1;
        this.setState({ counters });
    }

    handleDecrement = (counter) => {
        let counters = this.state.counters;
        const index = counters.indexOf(counter);
        counters[index].value -= 1;
        this.setState({ counters });
    }

    handleDelete = (counter) => {
        const counterId = counter.id;
        const counters = this.state.counters.filter((counter) => counter.id !== counterId);
        this.setState({ counters });
    }

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter(counter => counter.value > 0).length} />
                <Counters
                    counters={this.state.counters}
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement} 
                    onDelete={this.handleDelete} 
                    onReset={this.handleReset} 
                />
            </React.Fragment>
        );
    }
}

export default App;
