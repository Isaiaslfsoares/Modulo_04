import { useState, useEffect } from "react";

function TimerComponent() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const timerId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000) 
        return () => {
            clearInterval(timerId)
            console.log("Timer zerado")
        }
    }, [])
    
    return(
        <h1>{count}</h1>
    )
}

export default TimerComponent

/* useEffect(()=>{ aqui vai o codigo que vai ser executada sempre que o componente é montado      
return: aqui vai o codigo quando o componente é desmontado },[ dentro desse array se tiver vazio ele so vai montar o componente e pronto, se tiver algo aqui ele vai observar esse algo e sempre que tiver mudança ele vai desamontar(executando o return) e montar de novo com o valor atualizado]} */

/*
useEffect 
função: Acontece na montagem
return: Acontece na desmontagem
 */