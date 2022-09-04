import React,{useReducer} from 'react'
import { v4 as uuid } from 'uuid';
const initialState = {
    count:0,
    text :'',
    todos : [
        {id : 1, nama : 'Madan'},
        {id : 2, nama : 'Adan'},
        {id : 3, nama : 'Rama'},
        {id : 4, nama : 'Ramadhan'},
    ]
};
const regReducer = (state,action) =>{
    switch(action.type){
        case 'field':
            return {
                ...state,
                [action.field] : action.value
            }
        case 'increment':
            return {
                ...state,
                count : state.count + 1
            };
        case 'decrement':
            if(state.count === 0){
                return {
                    ...state,
                    count : 0
                }
            }
            return {
                ...state,
                count: state.count -1 
            };
        case 'reset':
            return {
                ...state,
                count : 0
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos : [
                    ...state.todos, 
                    {id:uuid(), nama: state.text}
                ],
                text : ''
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                todos : [
                    ...state.todos.filter(item => item.id !== action.id)
                ]
            }
        default: 
            throw new Error();
    }
}

const Reducer = () => {
    const [state,dispatch] = useReducer(regReducer,initialState)
    const {text, todos} = state;
    
    return (
        <div className='bg-white mx-auto text-black p-24'>
            <h2>Page User Reducer</h2>
            <hr/>
            <button onClick={() => dispatch({type:'increment'})}>+</button>
                <div>
                    {state.count}
                </div>
            <button onClick = { () => dispatch({type:'decrement'})}>-</button>
            <a href="#" onClick={ () => dispatch({type : 'reset'}) } >Reset</a>
            <hr/>
            <h4>Add Todo</h4>
            <input type="text" placeholder="add Todo List" 
                onChange={ (e) => dispatch({
                    type: 'field',
                    field : 'text',
                    value : e.currentTarget.value
                })}
                value={text}
            /> 
            <button onClick = { () => dispatch( {type : 'ADD_TODO'} )}>Add</button>
            <h4>List Todo</h4>
            <ol>
                {
                    todos.map( todo => {
                        return (
                            <li key={todo.id} style={{float:'none',width:"200px"}}> {todo.nama} 
                                <button className='text-red-600'
                                    onClick={ () => dispatch({type: 'REMOVE_TODO',id : todo.id})}
                                > X </button> 
                            </li>
                        );
                    })
                }
            </ol>
        </div>
    )
}

export default Reducer