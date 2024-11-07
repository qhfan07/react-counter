import React from 'react';
import { useCounter } from './CounterContext';

const Child = ({ index }) => {
    const { cells, changeCell } = useCounter();

    return (
        <div
            onClick={() => changeCell(index)}
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: cells[index] ? 'black' : 'white',
                border: '1px solid grey',
                display: 'inline-block'
            }}
        />
    );
};

export default Child;
