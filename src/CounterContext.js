// used Context to handle all the data for extra credit
import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({children}) => {
    const [cells, setCells] = useState([false, false, false, false]);

    const changeCell = (index) => {
        const newCells = [...cells];
        newCells[index] = !newCells[index];
        setCells(newCells);
    };

    const countCells = cells.filter(cell => cell).length;

    return (
        <CounterContext.Provider value={{ cells, changeCell, countCells }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => useContext(CounterContext);
