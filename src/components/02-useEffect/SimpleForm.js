import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message'
export const SimpleForm = () => {
    
    
    const [ formState, setFormState] = useState({
        name: '',
        email: '',
    })
    const { name, email } = formState;

    useEffect( ()=>{
        console.log('primera carga!');
    }, []);

    useEffect( ()=>{
        console.log('formState cambio!');
    }, [formState]);

    useEffect( ()=>{
        console.log('email cambio!');
    }, [email]);

    const handleInputChange = ( { target } ) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }
    return (
        <>
            <h1>UseEffect</h1>
            <hr/>
            <div className="input-group">
                <input type="text" name="name" className="form-control"
                placeholder="name" 
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
                />
            </div>
            <div className="input-group">
                <input type="text" name="email" className="form-control"
                placeholder="email@gmail.com" 
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
                />
            </div>
            { (name === '123') && <Message /> }
        </>
    )
}
