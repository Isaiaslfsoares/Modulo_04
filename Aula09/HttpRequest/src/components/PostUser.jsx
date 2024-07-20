import { useState } from "react"
import axios from 'axios'

function Formulario() {

    const [user, setUser] = useState({
        name: '',
        email: '',
    })

    const handleChange = (event) => {
        const {name, value} = event.target
    
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post('https://reqres.in/api/users', user)

            console.log(response)

            alert(`Usuário criado com sucesso! ID ${response.data.id}, Nome: ${response.data.name}, Email: ${response.data.email}`)
        } catch (error) {
            console.error(error)
            alert('ERro ao criar o usuário')
        }
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <h1>Acessar sua conta:</h1>
            <label htmlFor="">
                Nome:
                <input type="text" name="name" value={user.name} onChange={handleChange}/>
            </label>
            <br /><br />
            <label htmlFor="">
                Email:
                <input type="text" name="email" value={user.email} onChange={handleChange}/>
            </label>
            <br /><br />
            <button type="submit">Acessar</button>
        </form>
    )
}

export default Formulario