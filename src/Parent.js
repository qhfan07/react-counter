import React from 'react';
import { useCounter } from './CounterContext';
import Child from './Child';

const Parent = () => {
    const { cells, countCells } = useCounter();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <h1>Count: {countCells}</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 100px)', gap: '5px' }}>
                {cells.map((isOn, index) => (
                    <Child key={index} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Parent;
