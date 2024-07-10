import { useState } from 'react'
import "./Navegacao-aba.module.css"

const conteudos = [
    [
    "Conteúdo 0",
    "Conteúdo 1",
    "Conteúdo 2",
    ],
    [
    "Conteúdo 3",
    "Conteúdo 4",
    "Conteúdo 5",
    ],
    [
    "Conteúdo 6",
    "Conteúdo 7",
    "Conteúdo 8",
    ]

];

function NavegacaoAbas() {
    const [ estadoAtual, setEstado ] = useState(0);

    return (
        <>
            <div>
                <header>
                    <img src="" alt="" />
                    <h1>Aula +PraTI - React.Js</h1>
                    <p>Exercício para treinar o useState</p>
                </header>
            </div>
            
            <div id="abas">
                <nav>
                    <button onClick={ () => setEstado(0) }>Why React?</button>
                    <button onClick={ () => setEstado(1) }>Core Features</button>
                    <button onClick={ () => setEstado(2) }>Related Resources</button>
                </nav>
            </div>
            
            <div id='conteudo'>
                <ul>
                    {conteudos[estadoAtual].map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

            </div>
        </>
    )
}

export default NavegacaoAbas