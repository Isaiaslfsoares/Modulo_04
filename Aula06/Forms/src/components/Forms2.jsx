import { useState } from "react";

function Forms2() {
    const [ endereco, setEndereco ] = useState({
        street: '',
        city: '',
        postalCode: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setEndereco(prevState => ({
            ...prevState, 
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (endereco.street === '') {
            alert(`O campo de rua está vazio.`)
        } else if (endereco.city === '') {
            alert(`O campo de cidade está vazio.`)
        } else if (endereco.postalCode === '') {
            alert(`O campo de CEP está vazio.`)
        } else {
            alert(`Endereço: ${endereco.street}, ${endereco.city}, ${endereco.postalCode}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rua:
                <input type="text" name="street" onChange={handleChange}/>
            </label>
            <br />
            <label>
                Cidade:
                <input type="text" name="city" onChange={handleChange}/>
            </label>
            <br />
            <label>
                CEP:
                <input type="text" name="postalCode" onChange={handleChange}/>
            </label>
            <br />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Forms2