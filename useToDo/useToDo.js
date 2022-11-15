import { useEffect, useReducer } from 'react';
import { toDoReducer } from '../toDoReducer';

const init = () => {
    return JSON.parse( localStorage.getItem('toDos') || [] );
};

export const useToDo = () => {


    const [ toDos, dispatchToDo ] = useReducer( toDoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDos));
    }, [toDos]);
    

    const handleNewToDo = ( toDo ) => {
        
        const action = {
            type: '[TODO] Add ToDo',
            payload : toDo,
        }

        dispatchToDo( action );

    };

    const handleDeleteToDo = ( id ) => {
        // console.log(id);
        dispatchToDo({
            type : '[TODO] Remove ToDo',
            payload : id
        });

    };

    const handleToogleToDo = ( id ) => {
        // console.log({ id });
        dispatchToDo({
            type : '[TODO] Toggle ToDo',
            payload : id
        });

    };

    const toDosCount = () => {
        return toDos.length;
    };

    const pendingToDosCount = () => {
        return toDos.filter( toDo => !toDo.done ).length;
    };
    
    return {
        toDos,
        toDosCount,
        pendingToDosCount,
        handleNewToDo, 
        handleDeleteToDo, 
        handleToogleToDo,
    };

}
