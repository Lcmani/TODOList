import React from 'react'

const ToDoItem = (props) => {
    return (
        <div onClick={() => props.deleteitem(props.id)}>
            <li>{props.text}</li>
        </div>
    )
}

export default ToDoItem