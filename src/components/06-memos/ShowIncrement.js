import React from 'react'

export const ShowIncrement = ( { increment } ) => {
    return (
        <button
        className="btn btn btn-primary"
        onClick={ ()=>{
            increment( 5 );
        } }>
            Incrementar
        </button>
    )
}
