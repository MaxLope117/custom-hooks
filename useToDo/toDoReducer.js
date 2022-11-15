
export const toDoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case '[TODO] Add ToDo':
            return [ ...initialState, action.payload ];

        case '[TODO] Remove ToDo':
            return initialState.filter( toDo => toDo.id != action.payload );

        case '[TODO] Toggle ToDo':
            return initialState.map( toDo => {

                if( toDo.id === action.payload ) {
                    return {
                        ...toDo,
                        done : !toDo.done
                    }
                }

                return toDo;

            });
    
        default:
            return initialState;
    }

};