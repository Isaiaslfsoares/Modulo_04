import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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
    margin: 10px;
`
const Button = styled.button`
    border-radius: 5px;
`
const MoviesContainer = styled.p`
    color: #333;
    border-radius:18px;
    text-align: center;
`
const MovieCard = styled.div`
    background: #f9f9f9;
    border-radius: 10px;    
`
const MovieSearchEngine = () => {

    const [ query, setQuery ] = useState('')
    const [ movies, setMovies ] = useState([])

    const searchMovies = async () => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=9582468f`)
            setMovies(response.data.Search)
        } catch (error) {
            console.error("Erro: ", error)
        }
    }

    return (

<Container>
    <Title>Mecanismo de Busca de Filme:</Title>
        <Input type="text" value={query} placeholder="Procure um filme" onChange={(event) => setQuery(event.target.value)}></Input>
        <Button onClick={searchMovies}>Procurar</Button>
        <MoviesContainer>
            {movies && movies.map((movie) => (
                <MovieCard key={movie.imdbID}>
                    <img src={movie.Poster} alt={`${movie.Title} Poster`}/>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                </MovieCard>
            ))} 
        
        </MoviesContainer>
</Container>

    )
}

export default MovieSearchEngine