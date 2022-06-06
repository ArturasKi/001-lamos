import React from 'react';

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {counter: 0};
    }

    doClick = () => {
        this.setState(s => ({counter: s.counter + 1}));
    }

    componentDidMount() {
        console.log('Loaded');
    } // uzsikrauna viena vieninteli karta => useEffect tuscio masyvo atitikmuo;

    componentWillUnmount() {
        console.log('Numiro');
    }


    render() {
        return (
            <>
            <div>{this.state.counter}: {this.props.when}</div>
            <button onClick={this.doClick}>
                <svg>
                    <use href='#star'/>
                </svg>
            </button>
            </>
        )
    }

}

export default Counter;