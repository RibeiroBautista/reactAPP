/* import {useState, useEffect} from 'react';

function TestContainer() {

    const BASE_API = 'https://pokeapi.co/api/v2/'
    const [pokemon, setPokemon] = useState([]);

    useEffect (() => {
        async function getPokemon(id) {
            const response = await fetch(`${BASE_API}pokemon/${id}/`)
            return response.json()
        }

    getPokemon(500).then(data => {
        setPokemon(data)
    })
    }, []);

    return (
        <div className="App">
            <h1>{pokemon.name}</h1>
            <h2>{pokemon.weight}</h2>
            <h2>{pokemon.height}</h2>
            {pokemon.abilities.map(ability => {
                return <h3>{ability.ability.name}</h3>
            })}
        </div>
    );
}

export default TestContainer; */
