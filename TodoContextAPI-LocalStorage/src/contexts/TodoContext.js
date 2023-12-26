import { createContext , useContext } from'react'

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:'Learn React',
            isCompleted:false
        }
    ],
    deleteTodo:(id) => {},
    addTodo:(todo) => {},
    toggleComplete:(id) => {},
    updateTodo:(id, todo) => {}
})

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => useContext(TodoContext);
