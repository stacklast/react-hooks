import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
export const MultipleCustomHooks = () => {

    const state = useFetch( `https://breakingbadapi.com/api/quotes/1` );
    console.log( state );
    return (
        <div>
            <h1> Custom Hooks</h1>
        </div>
    )
}
