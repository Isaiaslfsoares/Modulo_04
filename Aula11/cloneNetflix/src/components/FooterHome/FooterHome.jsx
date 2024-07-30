import React from 'react'
import './FooterHome.css'

const FooterHome = () => {

    return (
            <footer>
                <h2>Dúvidas? Ligue para 0800 591 2876</h2>
                <ul>
                    <li><a href="#">Perguntas Frequentes</a></li>
                    <li><a href="#">Termos de uso</a></li>
                    <li><a href="#">Preferências de cookies</a></li>
                    <li><a href="#">Central de Ajuda</a></li>
                    <li><a href="#">Privacidade</a></li>
                    <li><a href="#">Informações corporativas</a></li>
                </ul>
                <select name="translate" id="translate" >                    
                    <option value="pt" disabled selected >Português</option>
                    <option value="pt">Português</option>
                    <option value="pt">Inglês</option>
                </select>
            </footer>
    )
}


export default FooterHome