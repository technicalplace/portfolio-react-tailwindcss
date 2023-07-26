import React, { useEffect, useState } from 'react'
import { getAllPokemon, getPokemonDetail } from './utils/index.js' 
import { Card } from './Card.jsx';
import { Navbar } from './Navbar.jsx';
import { Link } from 'react-router-dom';

export const Pokemon = () => {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [ loading, setLoading ] = useState(true);
  const [ pokemonData, setPokemonData ] = useState([]);
  const [ nextURL, setNextURL ] = useState("");
  const [ prevURL, setPrevURL ] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      // 次のポケモンのURLをセットする
      setNextURL(res.next);
      // 前のページのポケモンのURLをセットする
      setPrevURL(res.previous);
      // データが取得できたらfalseにする
      setLoading(false);
    }
    fetchPokemonData();
  }, []);
  
  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemonDetail(pokemon.url);
        return pokemonRecord;
      })
    )
    setPokemonData(_pokemonData);
  }

  const handlePrevPage = async () => {
    if (!prevURL) return;
    setLoading(true);
    let data = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    // setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  }
  const handleNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextURL);
    console.log(data);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  }

  return (
    <>
      <Navbar />
      <div>
        {loading ? (
          <h1>ロード中・・・</h1>
        ) : (
          <>
            <div className='grid grid-cols-4 place-items-center gap-7 pt-16'>
              {pokemonData.map((pokemon) => {
                return (
                  <Card pokemon={pokemon} key={pokemon.name} />
                )
              })}
            </div>
          </>
        )}
      </div>
      <div className='mx-auto flex justify-center items-center gap-8 mt-12 pb-9'>
        <button onClick={handlePrevPage} className='px-8 py-4 bg-teal-500 rounded-lg text-white cursor-pointer hover:'>前へ</button>
        <button onClick={handleNextPage} className='px-8 py-4 bg-teal-500 rounded-lg text-white cursor-pointer hover:'>次へ</button>
      </div>
      <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <Link to="/Application">Application Page&nbsp;→</Link>
      </button>
    </>
  )
}