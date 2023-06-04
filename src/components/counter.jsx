import React, { Component } from 'react'

class Counter extends Component {
    state = {
        value: this.props.value
    };

    handlIncrement = product => {
        console.log(product);
        this.setState({ value: this.state.value + 1 });
    }

    render() { 
        return (
        <>
            <h4>Counter #{this.props.id}</h4>
            <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
            <button onClick={() => this.handlIncrement(crypto.randomUUID)} className='btn btn-secondary btn-sm'>Increment</button>
            <button className='btn btn-danger btn-sm m-2' onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
        </>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }    

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;