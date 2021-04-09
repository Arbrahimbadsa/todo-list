import React from 'react';

const Todo = ({colorCode, complete}) => {
    return <div className="todo">
        <div className="todo-color" style={{background: colorCode}}></div>
        <div className="todo-name" style={{color: !complete ? '#000': 'gray'}}>
            {!complete ? <p>Fill the jug with the mug with the lug.</p>: <del>Fill the jug with the mug with the lug.</del>}
        </div>
        <div className="todo-option">
            <p><ion-icon name="close-outline"></ion-icon></p>
            <p><ion-icon name="create-outline"></ion-icon></p>
        </div>
    </div>
}

export default Todo;