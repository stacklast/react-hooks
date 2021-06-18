import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter( 100 );

    return (
        <div>
            <h1>Counter With Custom Hook { state } </h1>
            <hr/>
            <button  onClick={ () => increment(2) } className="btn">
                + 1
            </button>
            <button  onClick={ reset } className="btn">
                Reset
            </button>
            <button onClick={ () => decrement(2) } className="btn">
                - 1
            </button>

        </div>
    )
}
