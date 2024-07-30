import styled from "styled-components";

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
const InputMail = styled.input`
    color: #555; 
`
const InputPassword = styled.input`
    color: #555; 
`
const Label = styled.label`

`
const Button = styled.button`
    margin-top: 10px;
    border-radius: 5px;    
`
const Login = () => {

    return (
        <Container> 
            <Title>Login:</Title>
            <Label>
                Email:
                <InputMail type="email" ></InputMail>
            </Label>
            <br />
            <Label>
                Senha:
                <InputPassword type="password"></InputPassword>
            </Label>
            <Button type="submit">Acessar</Button>
        </Container>
    )
}

export default Login