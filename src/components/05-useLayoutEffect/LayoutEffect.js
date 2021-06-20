import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layouteffect.css';
export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch( `https://breakingbadapi.com/api/quotes/${ counter }` );
    const { author, quote } = !!data && data[0];
    // console.log( data );

    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({})
    useLayoutEffect( () => {

        setBoxSize( pTag.current.getBoundingClientRect() );

    }, [quote]);

    return (
        <div>
            <h1> Breaking Bad Quotes </h1>
            <blockquote className="blockquote text-right">
                <p ref={ pTag } className="mb-2"> { quote } </p>
                <footer className="blockquote-footer"> { author } </footer>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 )  }
            </pre>

            <button 
            className="btn btn-primary"
            onClick={ increment } >
                Siguiente Quote
            </button>
        </div>
    )
}
