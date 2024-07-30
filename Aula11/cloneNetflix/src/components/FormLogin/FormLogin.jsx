import React from 'react'
import './FormLogin.css'

const FormLogin = () => {

    return (
        <>
            
            <main>
                <h1>Entrar</h1>
                <form action=''>
                    <input type='text' placeholder='Email ou número de celular'/>
                    <input type='password' placeholder='Senha' />
                    <button id='login'>Entrar</button>
                    <p id='or'>OU</p>
                    <button id='acessCode'>Usar um código de acesso</button>
                    <a href="#">Esqueceu a senha?</a>
                    <div id='left'>
                        <label htmlFor="rememberMe">
                            <input type='checkbox' id='rememberMe' />
                            Lembre-se de mim
                            </label>
                        <p>Novo por aqui? <strong><a href="#">Assine agora.</a></strong></p>
                        <p id='captcha'>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba mais.</a></p>
                    </div>
                </form>
            </main>
            
        </>
    )
}

export default FormLogin