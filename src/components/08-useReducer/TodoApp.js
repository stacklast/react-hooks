import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';

import './style.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

export const TodoApp = () => {

    const [ todos ] = useReducer( todoReducer, initialState );
    console.log(todos);

    return (
        <div>
            <h1>Todo App <small>( { todos.length } )</small> </h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                    {
                        todos.map( ( todo, i ) => (
                            <li 
                                key={todo.id}
                                className="list-group-item" 
                            >
                            <p className="text-center"> 
                            { i + 1 }. { todo.desc } 
                            </p> 
                            <button
                            className="btn btn-danger">
                                Borrar
                            </button>
                            </li>
                        ))    
                    }
                    </ul>
                </div>

                <div className="col-3">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form>
                        <input 
                            className="form-control"
                            type="text" 
                            name="description"
                            placeholder="Aprender ..."
                            autoComplete="off"
                        />
                    </form>
                    <button
                        className="btn btn-btn-outline-primary mt-1 btn-block"
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}
