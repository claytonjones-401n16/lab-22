import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }


    /**
     * This function is an event handler than increments the state variable 'count' when called
     * @function - handleUp
     * @param {object} e - The event object
     *
     */

    handleUp = (e) => {
        let count = this.state.count + 1;
        this.updateCounter(count);
    };

    /**
     * This function is an event handler than decrements the state variable 'count' when called
     * @function - handleDown
     * @param {object} e - The event object
     *
     */

    handleDown = (e) => {
        let count = this.state.count - 1;
        this.updateCounter(count);
    };

    /**
     * This function updates the state variable. Used inside event handlers handleUp and handleDown
     * @function - updateCounter
     * @param {object} e - The event object
     *
     */
    
    updateCounter(count) {
        let polarity = '';
        if (count > 0) {
            polarity = 'positive';
        } else if (count < 0) {
            polarity = 'negative';
        }
        this.setState({ count, polarity });
    }

    render() {
        let classes = ['count', this.state.polarity].join(' ');
        return (
            <section className='counter'>
                <span className='down clicker' onClick={this.handleDown}>
                    {' '}
                    -{' '}
                </span>
                <span className={classes}>{this.state.count}</span>
                <span className='up clicker' onClick={this.handleUp}>
                    {' '}
                    +{' '}
                </span>
            </section>
        );
    }
}

export default Counter;
