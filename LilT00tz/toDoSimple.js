import React, { useState} from 'react';

function ToDo () {
    const [todos, setTodos] = React.useState([])
    const [input, setInput] = React.useState('')
    
    return (
        <div>
            <input
            type='text'
            value={input}
            placeholder="New Todo"
            onChange=((e) => setInput())
            />
        </div>

    )
}