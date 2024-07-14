
import { useEffect, useState } from "react";

function RandomNews() {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true)
            
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
                const data = await response.json()
                setNews(data)
            } catch(error) {
                console.error('Ligue para o suporte', error)
            }

            setIsLoading(false)
        } 
        
        fetchNews()
        
        const interval = setInterval(fetchNews, 10000)
        
        return () => clearInterval(interval)
        
    }, [])

return (
        <div>
            <h1>Últimas Notícias Simuladas</h1>
            {isLoading ? (
                <p>Carregando notícias...</p>
            ) : (
                <ul>
                    {
                        news.map((article) => (
                            <li key={article.id}>
                                <p>{article.title}</p>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}

export default RandomNews

// Desafio 1: Atualizador Automático de Notícias
// Implemente um componente que busca automaticamente novas notícias a
// cada 30 segundos usando useEffect.
// Importação dos hooks useState e useEffect do React.
// https://jsonplaceholder.typicode.com/users/1

//implementar de 5 em 5, corrigir erro