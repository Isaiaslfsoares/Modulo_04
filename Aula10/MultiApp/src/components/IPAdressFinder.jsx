import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin: 20px;
`
const Title = styled.h2`
    color: #333;
    text-align: center;
`
const Input = styled.input`
    color: #555;  
    margin-bottom: 10px;
`
const ResultsContainer = styled.p`
    
`
const Button = styled.button`
    border-radius: 5px;
`

const IPAdressFinder = () => {

    const [ ip, setIP ] = useState('');
    const [ ipData, setIpData ] = useState(null);

    const findIP = async () => {
        try {
            const response = await axios.get(`https://ipinfo.io/${ip}/json`)
            setIpData(response.data)
        } catch(error) {
            console.error("Erro encontrar o IP: ", error)
        }
    }

    return (
        
        <Container>
                <Title>Digite o IP:</Title>
                <Input type="text" placeholder="Insira aqui o IP" value={ip} onChange={(event) => setIP(event.target.value)}></Input>
                <Button type='button' onClick={findIP}>Procurar</Button>
                {ipData && (
                    <ResultsContainer>
                    <p><strong>IP:</strong> {ipData.ip}</p>
                    <p><strong>Location:</strong> {ipData.city}, {ipData.region}, {ipData.country}</p>
                    <p><strong>ISP:</strong> {ipData.org}</p>
                  </ResultsContainer>
                )}
                
            </Container>
        
    ) 
        
    
}

export default IPAdressFinder