import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'
export const FormWithCustomHook = () => {
    
    
    const [ formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = formValues;

    useEffect(() => {
       console.log('Email Cambio');
        
    }, [email]);

    const handleSubmit = ( e ) => {
        e.preventDefault();

        console.log( formValues );
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
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
            <div className="input-group">
                <input type="text" name="password" className="form-control"
                placeholder="password" 
                autoComplete="off"
                value={ password }
                onChange={ handleInputChange }
                />
            </div>

            <button type="submit" className="btn btn-primary"> 
                Guardar
            </button>

        </form>
    )
}
