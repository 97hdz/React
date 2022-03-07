import { useQuery } from "react-apollo"
import  Pokemon  from '../components/Pokemon'
import { GET_POKEMONS } from "../graphql/get-pokemons"

export default function PokemonsContainer(){
    const {data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 11 },
    })

    return (
        <div className="container">
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
    )
}