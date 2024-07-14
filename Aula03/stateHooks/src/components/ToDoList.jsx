import { useState } from 'react'

function ToDoList() {
    
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('')

    const addToDo = () => {
        setList([ ... list, inputValue])
        setInputValue('')
    }

    return (
        <div>
            <h1>Exercício 3</h1>
            <input type="text" value={inputValue} onChangeCapture={(e) => setInputValue(e.target.value)} />
            <button onClick={addToDo}>Adicionar Tarefa</button>

            <ul>
                {list.map((toDo, index) => (
                    <li key={index}>{toDo}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList