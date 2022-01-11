import React, { useState } from 'react'
import StyledButton from '../Button'
import { StyledContainer, PrettyH1, PrettyH2, PrettyParagraph, InputContainer} from './styles'
import theme from '../theme'
import { ThemeProvider } from 'styled-components'




const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    
    
      
    const handleSubmit = e => {
        e.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() * 20000),
            text: todo,
            isCompleted: false,
        }
        setTodos([...todos].concat(newTodo))
        setTodo('')      
        }

      

    const removeTodo = id => {
        const updateArr = [...todos].filter((todo) => todo.id !== id)

        setTodos(updateArr)
    }

    const completeTodo = id => {
        const updateArr = [...todos].map((todo) => {
            if(todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        })
        setTodos(updateArr)
    }

    


    return(
        < ThemeProvider theme={ theme }>
        <StyledContainer>
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                <PrettyH1>Welcome to Today's Tasks</PrettyH1>
                <PrettyH2>Enter task :) </PrettyH2>
                <InputContainer>
                <input 
                    type='text'
                    placeholder='Add a todo item'
                    value={todo}
                    name='text'
                    className='todo-input'
                    onChange={(e) => setTodo(e.target.value)}
                    />
                <StyledButton type='submit' name='Add todo'/>
                </InputContainer>
            </form>

        {todos.map((todo) => (
            <div style={{ background: '#D5E1FF', margin: 'auto' }}>
            <ul
                key={todo.id} style={{justifyContent: 'center', listStyleType: 'none', display: 'flex'}}>
                <li 
                    className='todo-item' 
                    style={{ display: 'list-item', padding: '5px 10px', color: 'white', marginLeft: '1%', marginRight: 'auto'}}>
                    <PrettyParagraph>{todo.text}</PrettyParagraph>
                </li>
                <li
                    className='todo-item' 
                    style={{ display: 'list-item', padding: '5px 10px', color: 'white', margin:'auto 2% auto 2%'}}>
                    <input 
                        style={{ width: '20px', height: '20px'}}
                        type="checkbox" 
                        onChange={() => completeTodo(todo.id)} 
                        checked={todo.isCompleted} />
                </li>
                <li
                    className='todo-item' 
                    style={{ display: 'list-item', padding: '5x 10px', color: 'white', margin:'auto 5% auto 5%'}}>
                    <button
                        style={{ background: '#F2F2F2 ', border: 'none', borderRadius: '5%', height: '2rem', color: '#5973B3', padding: '.5rem'}}
                        className='complete' 
                        onClick={() => removeTodo(todo.id)}
                        
                        > Clear </button>        
                </li> 
                
            </ul>
            </div>
          
        ))}

         </div>
         </StyledContainer>
         </ThemeProvider>
    )
}
  
export default TodoList