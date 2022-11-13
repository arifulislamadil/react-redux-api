import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../sevices/actions/Action';

const Todos = () => {
    const {isLoading,todos,error} = useSelector((state) => state);
    console.log(todos);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllTodos())
    },[])
    return (
        <div>
            <h1>From Todos</h1>
            {isLoading && <h3>Loading.....</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {todos && todos.map((todo)=>{
                    return <article>

                        <h3>{todo.id}</h3>
                        <h4>{todo.title}</h4>
                    </article>
                })}
            </section>
        </div>
    );
};

export default Todos;