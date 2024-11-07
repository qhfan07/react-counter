import React from 'react';
import Parent from './Parent';
import {CounterProvider} from './CounterContext';

const App = () => {
    return (
        <CounterProvider>
            <div style={{textAlign: 'center', marginTop: '20px'}}>
                <Parent/>
            </div>
        </CounterProvider>
    );
};

export default App;
