import { useState } from 'react'

function MirrorText(){

    const [textArea, setTextArea] = useState("");

    return (
        
        <div>
            <h1>Exercício 2 : </h1>
            <h2>Escreva aqui:</h2>
            <textarea id="content" cols="30" rows="10" onChange={() => setTextArea(document.getElementById('content').value)}></textarea>
            <br />
            <h2>Mirror Text: </h2>
            <textarea cols="30" rows="10" id="contentMirror" value={textArea} disabled></textarea>

        </div>
    )
}

export default MirrorText