import { useState } from "react";

function Forms3() {
    const [ registro, setRegistro ] = useState({ 
        nome: '',
        idade: '', 
        email: '',
        senha: '',
        confirmaSenha: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setRegistro(prevState => ({
            ...prevState, 
            [name]:value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(registro.nome === ''){
            alert(`O campo nome está vazio.`)
        } else if(registro.idade === ''){
            alert(`O campo idade está vazio`)
        } else if(!registro.email){
            alert(`O campo email está incorreto.`)
        } else if(registro.senha === '') {
            alert(`O campo senha está vazio.`)
        } else if (registro.senha.length <8) {
            alert(`A senha precisa conter no mínimo 8 dígitos`)
        } else if (registro.confirmaSenha !== registro.senha) {
            alert(`Senha não confere com a anterior.`)
        } else {
            alert(`Usuário registrado com sucesso: \nNome: ${registro.nome} \nIdade: ${registro.idade} \nE-mail: ${registro.email} \nSenha: ${registro.senha}`)
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:<input type="text" name="nome" onChange={handleChange}/>
            </label>
            <br />
            <label>
                Idade:<input type="number" name="idade" onChange={handleChange}/>
            </label>
            <br />
            <label>
                E-mail:<input type="email" name="email" onChange={handleChange}/>
            </label>
            <br />
            <label>
                Senha:<input type="password" name="senha" placeholder="Mínimo 8 dígitos" onChange={handleChange}/>
            </label>
            <br />
            <label>
                Confirme a senha:<input type="password" name="confirmaSenha" onChange={handleChange}/>
            </label>
            <br />
            <button type="submit">Enviar</button>
        </form>

    )
}

export default Forms3