import axios from "axios"

function UpdateUser () {
    const userData = {
        name:  "Sulivan",
        job: "Músico"
    };

    const sendRequest = () => {
        axios.put("https://reqres.in/api/users/2", userData)
        .then(response => {
            console.log('Dados do usuário:', response.data)
            alert('Usuário atualizado:' + JSON.stringify(response.data))
        })
        .catch(error => {
            console.log('Erro ao atualizar o usuário:', error)
            alert('Erro ao atualizar os dados do usuário')
        });
    }


    return (
        <button onClick={sendRequest}>Atualizar dados</button>  
    )
}

export default UpdateUser