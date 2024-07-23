import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

// const (Nome do componente) = styled.(tag html)`
// (CSS)
// `

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
`

const Title = styled.h2`
    color: #333;
    text-align: center;
`

const Label = styled.label`
    color: #555;
`

const TranslatedText = styled.p`
    color: #333;
    border-radius:18px;
    text-align: center;
`
const LanguageTranslator = () => {

    const [text, setText] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    const [sourceLang, setSourceLang] = useState('en')
    const [targetLang, setTargetLang] = useState('pt')

    const translateText = async () => {
        try {
            const response = await axios.get('https://api.mymemory.translated.net/get', {
                params: {
                    q: text,
                    langpair: `${sourceLang}|${targetLang}`,
                },
            })

            setTranslatedText(response.data.responseData.translatedText)
        } catch(error) {
            console.error("Erro ao traduzir o texto: ", error)
        }
    }

    return(
        <Container>
            <Title>Gugle Tradutor</Title>
            <div>
                <Label>Indioma de Origem</Label>
                <select value={sourceLang} onChange={(event) => setSourceLang(event.target.value)}>
                    <option value="en">Inglês</option>
                    <option value="es">Espanhol</option>
                    <option value="fr">Francês</option>
                    <option value="de">Alemão</option>
                    <option value="it">Italiano</option>
                    <option value="pt">Português</option>
                </select>
            </div>

            <div>
                <Label>Indioma Alvo</Label>
                <select value={targetLang} onChange={(event) => setTargetLang(event.target.value)}>
                    <option value="en">Inglês</option>
                    <option value="es">Espanhol</option>
                    <option value="fr">Francês</option>
                    <option value="de">Alemão</option>
                    <option value="it">Italiano</option>
                    <option value="pt">Português</option>
                </select>
            </div>
            <input 
                type="text" 
                value={text} 
                onChange={(event) => setText(event.target.value)} 
                placeholder='Informe o texto que queira traduzir'
            />

            <button onClick={translateText}>Traduzir</button>

            {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
        </Container>
    )
}

export default LanguageTranslator