import { useState } from 'react'
import styled from 'styled-components'
import QRCode from 'qrcode.react'

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
const Input = styled.input`
    color: #555;    
` 
const QRCodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin: 20px;
`
const QRCodeGenerator = () => {

    const [text, setText] = useState('');

    return (
        <Container>
            <Title>Gerador de QR-Code</Title>
            <Input placeholder="Digite o conteúdo" type="text" value={text} onChange={(event) => setText(event.target.value)}></Input>
            {text && (<QRCodeContainer><QRCode value={text} size={200}></QRCode></QRCodeContainer>)}
        </Container>
    )
}

export default QRCodeGenerator