import { set } from 'mongoose';
import React , {useState} from 'react'
import Todoform from './Todoform'
import Todo from './Todo';
function Todolist() {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        if(!todo.text){
               return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos)
        //console.log(...todos)
    }

    const completeTodo = id =>{
        let updatedtodo = todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo
        })
        setTodos(updatedtodo)
    }
 const removeTodo = id =>{
     const removedarr = [...todos].filter(todo => todo.id !== id);
     setTodos(removedarr)
 }
const updateTodo  = (todoId, newVal)=>{
    if(!newVal.text){
        return;
    }
    setTodos(prev => prev.map(item=>(item.id === todoId ? newVal:item)))
}
    return (
        <div>
            <Todoform onSubmit = {addTodo}/>
            <Todo todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}/>
        </div>
    )
}

export default Todolist
