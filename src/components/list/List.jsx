import React from 'react';
import { useState, useEffect } from 'react';
import View from '../view/View';

const List = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async() => {
      const res = await fetch(loadMore)
      const data = await res.json()

      setLoadMore(data.next)
      
      function createPokemonObject (result) {
        result.forEach(async (pokemon) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data = await res.json()

          setAllPokemons(currentList => [...currentList, data])
          

        })

      }
      createPokemonObject(data.results)
      console.log(allPokemons)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])
  

  return (
    <div className=' '>
        <h1 className='text-primary bg-black flex justify-center font-bold text-5xl'>Pokemon List</h1>
        <div>
        <div className=''>
           {allPokemons.map((pokemon, index) => 
           <View 
           name={pokemon.name}
           image={pokemon.sprites.other.dream_world.front_default}
           key={index}
           />
           )}
           </div>
          </div>
        <button className='text-primary bg-red-500'>Load more pokemons</button>
    </div>
  )
}

export default List