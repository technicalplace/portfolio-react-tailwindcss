import React from 'react'

export const Card = ({ pokemon }) => {
  return (
    <div className='text-center w-4/5 h-full shadow-card rounded-2xl bg-slate-200 p-5 box-border'>
      <div>
        <img src={pokemon.sprites.front_default} className='inline' alt='' />
      </div>
      <h3>名前：{pokemon.name}</h3>
      <div>
        {pokemon.types.map((type) => {
          return (
            <div key={type.type.name}>
              <span>属性：{type.type.name}</span>
            </div>
          )
        })}
      </div>
      <div>
        <div>
          <p>重さ：{pokemon.weight}</p>
        </div>
        <div>
          <p>高さ：{pokemon.height}</p>
        </div>
        <div>
          <p>アビリティ：{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  )
}
