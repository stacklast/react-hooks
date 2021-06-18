import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 });
    const { x, y } = coords;

    useEffect(() => {
        const mouseMove = ( e ) => {
            const coors = { x: e.x, y: e.y }; 
            setCoords( coors );
            // console.log(coors);
            //console.log(':D');
        }   
        window.addEventListener( 'mousemove', mouseMove );

        return () => {
            console.log('componente desmontado');
            window.removeEventListener( 'mousemove', mouseMove );
        }
    }, [])
    return (
        <>
          <h1>Eres genial!</h1>  
          <p>
              x:{ x }, y: { y }
          </p>
        </>
    )
}
